from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import html as _html
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
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
