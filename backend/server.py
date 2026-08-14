from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import html as _html
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


# Resend (optional — only sends email if API key is configured)
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
RESEND_SENDER = os.environ.get('RESEND_SENDER', 'MiCells <onboarding@resend.dev>').strip()
RESEND_RECIPIENT = os.environ.get('RESEND_RECIPIENT', 'info@micells.io').strip()

_resend_ready = False
try:
    if RESEND_API_KEY:
        import resend  # noqa: F401
        resend.api_key = RESEND_API_KEY
        _resend_ready = True
        logger.info("Resend configured. Enquiry notifications will be sent to %s", RESEND_RECIPIENT)
    else:
        logger.info("RESEND_API_KEY not set. Enquiries will be stored in MongoDB only.")
except Exception as e:  # pragma: no cover
    logger.warning("Resend import/init failed: %s", e)


app = FastAPI(title="MiCells API")
api_router = APIRouter(prefix="/api")


# -------- Models --------
ENQUIRY_LABELS = {
    "general": "General Enquiry",
    "investor": "Investor Information",
    "information": "Service Information",
    "advisory": "Advisory / Partnership",
}


class EnquiryCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")

    name: str = Field(min_length=1, max_length=160)
    organisation: Optional[str] = Field(default=None, max_length=240)
    email: EmailStr
    country: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(min_length=1, max_length=4000)
    enquiry_type: str = Field(default="general")


class Enquiry(EnquiryCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_delivered: bool = False


# -------- Interest Registration (non-binding EOI) --------
INTEREST_LABELS = {
    "age": {
        "18-30": "18 – 30",
        "31-45": "31 – 45",
        "46-60": "46 – 60",
        "61-75": "61 – 75",
        "76+": "76+",
        "prefer_not": "Prefer not to say",
    },
    "household": {
        "self": "Self only",
        "self_partner": "Self and partner",
        "family": "Whole family",
        "extended": "Extended family / office",
    },
    "motivation": {
        "preparedness": "Personal medical preparedness",
        "rare_blood": "Rare blood type",
        "family_history": "Family medical history",
        "longevity": "Longevity planning",
        "executive": "Executive / high-mobility lifestyle",
        "other": "Other",
    },
    "timeline": {
        "immediate": "Immediate (0 – 3 months)",
        "3-6": "3 – 6 months",
        "6-12": "6 – 12 months",
        "exploratory": "Exploratory only",
    },
    "tier": {
        "standard": "Standard",
        "priority": "Priority",
        "family": "Family",
        "undecided": "Undecided",
    },
}


def _lookup(group: str, value: Optional[str]) -> str:
    if not value:
        return "—"
    return INTEREST_LABELS.get(group, {}).get(value, value)


class InterestCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")

    name: str = Field(min_length=1, max_length=160)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=60)
    country: Optional[str] = Field(default=None, max_length=120)
    age_band: str = Field(min_length=1, max_length=40)
    blood_type: str = Field(min_length=1, max_length=20)
    household: str = Field(min_length=1, max_length=40)
    household_count: int = Field(default=1, ge=1, le=99)
    motivation: str = Field(min_length=1, max_length=40)
    timeline: str = Field(min_length=1, max_length=40)
    service_tier: str = Field(min_length=1, max_length=40)
    referral: Optional[str] = Field(default=None, max_length=240)
    notes: Optional[str] = Field(default=None, max_length=4000)
    consent: bool
    language: Optional[str] = Field(default="en", max_length=8)

    @field_validator("consent")
    @classmethod
    def _consent_required(cls, v: bool) -> bool:
        if v is not True:
            raise ValueError("Consent to non-binding terms is required.")
        return v


class Interest(InterestCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_delivered: bool = False


# -------- Helpers --------
def _build_html(enq: Enquiry) -> str:
    e = _html.escape
    label = ENQUIRY_LABELS.get(enq.enquiry_type, enq.enquiry_type)
    rows = [
        ("Name", enq.name),
        ("Organisation", enq.organisation or "—"),
        ("Email", enq.email),
        ("Country", enq.country or "—"),
        ("Enquiry Type", label),
    ]
    table_rows = "".join(
        f'<tr><td style="padding:8px 14px;color:#6e6e6c;font-size:12px;letter-spacing:.08em;text-transform:uppercase;width:160px;vertical-align:top;">{e(k)}</td>'
        f'<td style="padding:8px 14px;color:#1a1a1a;font-size:15px;">{e(v)}</td></tr>'
        for k, v in rows
    )
    msg = e(enq.message).replace("\n", "<br>")
    return f"""
<!doctype html>
<html><body style="margin:0;padding:0;background:#f7f5f2;font-family:Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f5f2;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e2dc;">
        <tr><td style="padding:28px 32px;border-bottom:1px solid #e5e2dc;">
          <div style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#5C7D82;font-weight:600;">MiCells · New Enquiry</div>
          <div style="font-size:22px;color:#424240;margin-top:8px;font-weight:500;">{e(label)}</div>
        </td></tr>
        <tr><td style="padding:24px 18px;">
          <table cellpadding="0" cellspacing="0" width="100%">{table_rows}</table>
        </td></tr>
        <tr><td style="padding:24px 32px;border-top:1px solid #e5e2dc;background:#fafaf8;">
          <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6e6e6c;margin-bottom:10px;">Message</div>
          <div style="font-size:15px;line-height:1.65;color:#1a1a1a;">{msg}</div>
        </td></tr>
        <tr><td style="padding:18px 32px;border-top:1px solid #e5e2dc;color:#6e6e6c;font-size:11px;letter-spacing:.08em;">
          Submitted {enq.created_at.strftime('%Y-%m-%d %H:%M UTC')} · ID {enq.id}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>
"""


async def _send_enquiry_email(enq: Enquiry) -> bool:
    if not _resend_ready:
        return False
    try:
        import resend
        label = ENQUIRY_LABELS.get(enq.enquiry_type, enq.enquiry_type)
        params = {
            "from": RESEND_SENDER,
            "to": [RESEND_RECIPIENT],
            "reply_to": enq.email,
            "subject": f"MiCells · {label} — {enq.name}",
            "html": _build_html(enq),
        }
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info("Resend delivered enquiry %s id=%s", enq.id, (result or {}).get("id"))
        return True
    except Exception as e:
        logger.error("Resend send failed for enquiry %s: %s", enq.id, e)
        return False


def _build_interest_html(itr: "Interest") -> str:
    e = _html.escape
    rows = [
        ("Name", itr.name),
        ("Email", itr.email),
        ("Phone", itr.phone or "—"),
        ("Country", itr.country or "—"),
        ("Age Band", _lookup("age", itr.age_band)),
        ("Blood Type", itr.blood_type or "—"),
        ("Household", _lookup("household", itr.household)),
        ("Individuals", str(itr.household_count)),
        ("Motivation", _lookup("motivation", itr.motivation)),
        ("Timeline", _lookup("timeline", itr.timeline)),
        ("Service Tier", _lookup("tier", itr.service_tier)),
        ("Referral Source", itr.referral or "—"),
        ("Language", (itr.language or "en").upper()),
    ]
    table_rows = "".join(
        f'<tr><td style="padding:8px 14px;color:#6e6e6c;font-size:12px;letter-spacing:.08em;text-transform:uppercase;width:170px;vertical-align:top;">{e(k)}</td>'
        f'<td style="padding:8px 14px;color:#1a1a1a;font-size:15px;">{e(v)}</td></tr>'
        for k, v in rows
    )
    notes = _html.escape(itr.notes).replace("\n", "<br>") if itr.notes else "<span style='color:#9a9a98;'>— no additional notes —</span>"
    return f"""
<!doctype html>
<html><body style="margin:0;padding:0;background:#f7f5f2;font-family:Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f5f2;padding:32px 0;">
    <tr><td align="center">
      <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e2dc;">
        <tr><td style="padding:28px 32px;border-bottom:1px solid #e5e2dc;">
          <div style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#5C7D82;font-weight:600;">MiCells · Expression of Interest</div>
          <div style="font-size:22px;color:#424240;margin-top:8px;font-weight:500;">Autologous Blood Banking · Client Registration</div>
        </td></tr>
        <tr><td style="padding:24px 18px;">
          <table cellpadding="0" cellspacing="0" width="100%">{table_rows}</table>
        </td></tr>
        <tr><td style="padding:24px 32px;border-top:1px solid #e5e2dc;background:#fafaf8;">
          <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6e6e6c;margin-bottom:10px;">Additional Notes</div>
          <div style="font-size:15px;line-height:1.65;color:#1a1a1a;">{notes}</div>
        </td></tr>
        <tr><td style="padding:14px 32px;border-top:1px solid #e5e2dc;background:#f2efe9;color:#424240;font-size:12px;line-height:1.55;">
          <strong>Consent captured:</strong> Registrant confirmed this is a non-binding expression of interest and consented to MiCells® holding the information for demand-forecasting and service-design purposes.
        </td></tr>
        <tr><td style="padding:18px 32px;border-top:1px solid #e5e2dc;color:#6e6e6c;font-size:11px;letter-spacing:.08em;">
          Submitted {itr.created_at.strftime('%Y-%m-%d %H:%M UTC')} · ID {itr.id}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>
"""


async def _send_interest_email(itr: "Interest") -> bool:
    if not _resend_ready:
        return False
    try:
        import resend
        params = {
            "from": RESEND_SENDER,
            "to": [RESEND_RECIPIENT],
            "reply_to": itr.email,
            "subject": f"MiCells · Expression of Interest — {itr.name}",
            "html": _build_interest_html(itr),
        }
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info("Resend delivered interest %s id=%s", itr.id, (result or {}).get("id"))
        return True
    except Exception as e:
        logger.error("Resend send failed for interest %s: %s", itr.id, e)
        return False


# -------- Routes --------
@api_router.get("/")
async def root():
    return {"service": "micells-api", "status": "ok"}


@api_router.get("/health")
async def health():
    return {
        "status": "healthy",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "email_provider_ready": _resend_ready,
    }


@api_router.post("/enquiries", response_model=Enquiry, status_code=201)
async def create_enquiry(payload: EnquiryCreate):
    enquiry = Enquiry(**payload.model_dump())

    # Send email (best effort, non-blocking on failure)
    delivered = await _send_enquiry_email(enquiry)
    enquiry.email_delivered = delivered

    doc = enquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.enquiries.insert_one(doc)

    logger.info(
        "Enquiry stored id=%s type=%s email=%s delivered=%s",
        enquiry.id, enquiry.enquiry_type, enquiry.email, delivered,
    )
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries(limit: int = 100):
    docs = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            try:
                d['created_at'] = datetime.fromisoformat(d['created_at'])
            except ValueError:
                pass
        d.setdefault('email_delivered', False)
    return docs


@api_router.post("/interest", response_model=Interest, status_code=201)
async def create_interest(payload: InterestCreate):
    interest = Interest(**payload.model_dump())

    delivered = await _send_interest_email(interest)
    interest.email_delivered = delivered

    doc = interest.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.interest_registrations.insert_one(doc)

    logger.info(
        "Interest stored id=%s email=%s tier=%s timeline=%s delivered=%s",
        interest.id, interest.email, interest.service_tier, interest.timeline, delivered,
    )
    return interest


@api_router.get("/interest", response_model=List[Interest])
async def list_interest(limit: int = 200):
    docs = await db.interest_registrations.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            try:
                d['created_at'] = datetime.fromisoformat(d['created_at'])
            except ValueError:
                pass
        d.setdefault('email_delivered', False)
        d.setdefault('language', 'en')
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
