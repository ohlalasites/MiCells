"""Regression tests for /api/interest after CAPTCHA UI gate was added.
The CAPTCHA is UX-only; backend must be unchanged.
"""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/") or \
           "https://clinical-stewardship.preview.emergentagent.com"
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def _payload(**overrides):
    base = {
        "name": f"TEST_Captcha_{uuid.uuid4().hex[:6]}",
        "email": f"test_captcha_{uuid.uuid4().hex[:6]}@example.com",
        "phone": "",
        "country": "HK",
        "age_band": "31-45",
        "blood_type": "unknown",
        "household": "self",
        "household_count": 1,
        "motivation": "preparedness",
        "timeline": "3-6",
        "service_tier": "undecided",
        "referral": "",
        "notes": "captcha regression",
        "consent": True,
        "language": "en",
    }
    base.update(overrides)
    return base


def test_health(session):
    r = session.get(f"{API}/")
    assert r.status_code in (200, 404)  # endpoint may not exist; just ensure api is reachable


def test_create_interest_success(session):
    p = _payload()
    r = session.post(f"{API}/interest", json=p)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["email"] == p["email"]
    assert data["name"] == p["name"]
    assert "id" in data and isinstance(data["id"], str)
    assert data["consent"] is True

    # verify persistence via list
    lst = session.get(f"{API}/interest?limit=200")
    assert lst.status_code == 200
    emails = [x["email"] for x in lst.json()]
    assert p["email"] in emails


def test_create_interest_rejects_consent_false(session):
    p = _payload(consent=False)
    r = session.post(f"{API}/interest", json=p)
    assert r.status_code in (400, 422), r.text


def test_create_interest_bilingual_zh(session):
    p = _payload(language="zh", name="TEST_中文_" + uuid.uuid4().hex[:4])
    r = session.post(f"{API}/interest", json=p)
    assert r.status_code == 201
    assert r.json()["language"] == "zh"


def test_list_interest(session):
    r = session.get(f"{API}/interest")
    assert r.status_code == 200
    assert isinstance(r.json(), list)
    # ensure no mongo _id leaked
    for doc in r.json()[:5]:
        assert "_id" not in doc
