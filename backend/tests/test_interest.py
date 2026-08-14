"""
Backend API tests for MiCells Expression of Interest (EOI) endpoint.

Coverage:
- POST /api/interest (success 201, persistence, email_delivered flag)
- POST /api/interest with consent=false -> 422
- POST /api/interest missing required fields -> 422
- POST /api/interest with language='zh' persisted
- GET /api/interest (retrieval + language default + no _id leak)
- GET /api/health email_provider_ready flag
"""
import os
import uuid
import pathlib
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    env_path = pathlib.Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().strip('"')
                break
assert BASE_URL, "REACT_APP_BACKEND_URL is not set"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def _valid_payload(lang="en", suffix=None):
    suffix = suffix or uuid.uuid4().hex[:8]
    return {
        "name": f"TEST_EOI_{suffix}",
        "email": f"TEST_eoi_{suffix}@example.com",
        "phone": "+852 5555 0000",
        "country": "Hong Kong",
        "age_band": "31-45",
        "blood_type": "O+",
        "household": "family",
        "household_count": 3,
        "motivation": "preparedness",
        "timeline": "3-6",
        "service_tier": "priority",
        "referral": "Introduction",
        "notes": "Automated EOI probe.",
        "consent": True,
        "language": lang,
    }


class TestHealth:
    def test_health_email_provider_ready(self, client):
        r = client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "healthy"
        # Per spec, email_provider_ready must be true
        assert data.get("email_provider_ready") is True, data


class TestInterestCreate:
    created_id = None
    created_email = None

    def test_create_valid_returns_201_and_persists(self, client):
        payload = _valid_payload()
        r = client.post(f"{API}/interest", json=payload, timeout=25)
        assert r.status_code == 201, r.text
        data = r.json()
        # Field validations
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["age_band"] == "31-45"
        assert data["household"] == "family"
        assert data["household_count"] == 3
        assert data["service_tier"] == "priority"
        assert data["language"] == "en"
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        assert "created_at" in data
        assert "email_delivered" in data
        TestInterestCreate.created_id = data["id"]
        TestInterestCreate.created_email = payload["email"]

    def test_get_returns_created_record(self, client):
        assert TestInterestCreate.created_email is not None
        r = client.get(f"{API}/interest?limit=200", timeout=15)
        assert r.status_code == 200, r.text
        items = r.json()
        assert isinstance(items, list) and len(items) >= 1
        # No _id leak
        for it in items:
            assert "_id" not in it
        emails = [it.get("email") for it in items]
        assert TestInterestCreate.created_email in emails

    def test_consent_false_returns_422(self, client):
        payload = _valid_payload()
        payload["consent"] = False
        r = client.post(f"{API}/interest", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_missing_email_returns_422(self, client):
        payload = _valid_payload()
        payload.pop("email")
        r = client.post(f"{API}/interest", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_missing_name_returns_422(self, client):
        payload = _valid_payload()
        payload.pop("name")
        r = client.post(f"{API}/interest", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_invalid_email_returns_422(self, client):
        payload = _valid_payload()
        payload["email"] = "not-an-email"
        r = client.post(f"{API}/interest", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_language_zh_roundtrips(self, client):
        payload = _valid_payload(lang="zh")
        r = client.post(f"{API}/interest", json=payload, timeout=25)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["language"] == "zh"
        # Verify via GET
        r2 = client.get(f"{API}/interest?limit=200", timeout=15)
        assert r2.status_code == 200
        match = next((it for it in r2.json() if it.get("email") == payload["email"]), None)
        assert match is not None
        assert match.get("language") == "zh"


class TestEnquiriesNoRegression:
    def test_enquiries_still_works(self, client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Enq_{unique}",
            "email": f"TEST_enq_{unique}@example.com",
            "message": "Regression probe from interest test suite",
            "enquiry_type": "general",
        }
        r = client.post(f"{API}/enquiries", json=payload, timeout=20)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["email"] == payload["email"]
