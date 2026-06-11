"""
Backend API tests for MiCells institutional site.

Coverage:
- GET /api/health (liveness)
- POST /api/enquiries (success + validation)
- GET /api/enquiries (persistence + ordering)
"""
import os
import uuid
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback to frontend/.env value parsed manually so pytest can run
    import pathlib
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


# ---------- Health ----------
class TestHealth:
    def test_health_returns_200_and_healthy(self, client):
        r = client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "healthy"
        assert "timestamp" in data


# ---------- Enquiries create ----------
class TestEnquiriesCreate:
    def test_create_valid_enquiry_returns_201(self, client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"TEST_User_{unique}",
            "organisation": "TEST Family Office",
            "email": f"{unique}@example.com",
            "country": "Switzerland",
            "message": f"Investor enquiry probe {unique}",
            "enquiry_type": "investor",
        }
        r = client.post(f"{API}/enquiries", json=payload, timeout=20)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["enquiry_type"] == "investor"
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        assert "created_at" in data
        # stash id on the class for ordering test
        TestEnquiriesCreate.last_id = data["id"]
        TestEnquiriesCreate.last_email = payload["email"]

    def test_create_invalid_email_returns_422(self, client):
        r = client.post(
            f"{API}/enquiries",
            json={
                "name": "TEST_BadEmail",
                "email": "not-an-email",
                "message": "should fail",
            },
            timeout=15,
        )
        assert r.status_code == 422, r.text

    def test_create_missing_required_fields_returns_422(self, client):
        # Missing email and message
        r = client.post(
            f"{API}/enquiries",
            json={"name": "TEST_OnlyName"},
            timeout=15,
        )
        assert r.status_code == 422, r.text

    def test_create_empty_message_returns_422(self, client):
        r = client.post(
            f"{API}/enquiries",
            json={
                "name": "TEST_EmptyMsg",
                "email": "x@example.com",
                "message": "",
            },
            timeout=15,
        )
        assert r.status_code == 422, r.text


# ---------- Enquiries list ----------
class TestEnquiriesList:
    def test_list_returns_200_and_contains_recent(self, client):
        # Create a fresh enquiry then verify it appears at the top of the list
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        email = f"{unique}@example.com"
        payload = {
            "name": f"TEST_ListUser_{unique}",
            "email": email,
            "message": f"List probe {unique}",
            "enquiry_type": "general",
        }
        c = client.post(f"{API}/enquiries", json=payload, timeout=20)
        assert c.status_code == 201, c.text

        # tiny delay then list
        time.sleep(0.2)
        r = client.get(f"{API}/enquiries?limit=50", timeout=15)
        assert r.status_code == 200, r.text
        items = r.json()
        assert isinstance(items, list) and len(items) >= 1
        emails = [it.get("email") for it in items]
        assert email in emails, f"Newly created enquiry not found in list. Got emails: {emails[:5]}"

        # Verify ordering: created_at descending — first item should be >= last item
        if len(items) >= 2:
            first = items[0]["created_at"]
            last = items[-1]["created_at"]
            assert first >= last, "Enquiries are not sorted by created_at desc"

    def test_list_excludes_mongo_objectid(self, client):
        r = client.get(f"{API}/enquiries?limit=5", timeout=15)
        assert r.status_code == 200
        for it in r.json():
            assert "_id" not in it, "MongoDB _id leaked into response"
