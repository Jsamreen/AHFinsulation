# api/contact.py
import json
import os
import re
import requests

EMAIL_TO = os.getenv("EMAIL_TO")  # e.g. samreenjaveria19@gmail.com
EMAIL_FROM = os.getenv("EMAIL_FROM", "AHF Insulation <onboarding@resend.dev>")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
ALLOWED_ORIGIN = os.getenv("ALLOWED_ORIGIN", "*")

CORS_HEADERS = {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

def _json(body: dict, status: int = 200, extra_headers: dict | None = None):
    headers = {"Content-Type": "application/json", **CORS_HEADERS}
    if extra_headers:
        headers.update(extra_headers)
    return (status, headers, json.dumps(body))

def handler(request):
    # CORS preflight
    if request.method == "OPTIONS":
        # include a minimal content-type for some browsers
        headers = {**CORS_HEADERS, "Content-Type": "text/plain"}
        return (204, headers, "")

    if request.method != "POST":
        return _json({"error": "Method not allowed"}, 405)

    # Parse JSON safely across runtimes
    try:
        data = request.json()
    except Exception:
        try:
            data = json.loads(request.body.decode("utf-8"))
        except Exception:
            return _json({"error": "Invalid JSON body"}, 400)

    # Honeypot
    if (data.get("company") or "").strip():
        return _json({"ok": True})

    # Sanitize + validate
    name = (data.get("name") or "").strip()[:100]
    email = (data.get("email") or "").strip()[:150]
    phone = (data.get("phone") or "").strip()[:50]
    service = (data.get("service") or "").strip()[:120]
    budget = (data.get("budget") or "").strip()[:50]
    message = (data.get("message") or "").strip()[:2000]
    consent = bool(data.get("consent"))

    if not name:
        return _json({"error": "Name is required."}, 400)
    if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email):
        return _json({"error": "Valid email required."}, 400)
    if not message or len(message) < 10:
        return _json({"error": "Message too short."}, 400)
    if not consent:
        return _json({"error": "Consent is required."}, 400)
    if not EMAIL_TO or not RESEND_API_KEY:
        return _json({"error": "Server not configured."}, 500)

    subject = f"New enquiry: {service or 'General enquiry'} — {name}"
    html = f"""
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#111">
      <h2>New enquiry from AHF Insulation website</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Service:</strong> {service}</p>
      <p><strong>Budget:</strong> {budget}</p>
      <hr />
      <p><strong>Message</strong></p>
      <p>{message.replace(chr(10), "<br/>")}</p>
    </div>
    """

    payload = {
        "from": EMAIL_FROM,     # must be from a verified domain in Resend
        "to": [EMAIL_TO],
        "subject": subject,
        "html": html,
        "reply_to": email,
    }

    try:
        resp = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            data=json.dumps(payload),
            timeout=12,
        )
        if resp.status_code >= 400:
            return _json({"error": "Email provider error", "details": resp.text}, 502)
    except Exception:
        return _json({"error": "Failed to send email"}, 502)

    return _json({"ok": True, "message": "Message sent"})
