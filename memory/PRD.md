# MiCells — Investor-Grade Institutional Website

## Original Problem Statement
Build a world-class institutional website for MiCells, a medical biotechnology company focused on autologous biological asset preservation. Audience: investors, family offices, UHNWIs, medical professionals, partners, regulators. Visual references: Moderna, Illumina, Roche, Thermo Fisher, BlackRock Private Wealth, UBS Global Family Office.

**Hard constraints (per brief):**
- Remove ALL Emergent branding (badge, scripts, links).
- Do NOT reference specific storage temperatures (e.g. "-150°C", "-196°C").
- Brand colours: #5C7D82 (primary), #424240 (secondary), #FFFFFF.
- Tone: confident, institutional, precise, measured. Never promotional.
- Lots of white space, subtle motion only, no stock-photo clichés.

## User Personas
1. **Institutional investors / family offices** evaluating credibility before introductions.
2. **UHNW individuals / executive families** considering biological preparedness.
3. **Senior medical / scientific advisors** evaluating advisory seats.
4. **Strategic partners and future regulators** assessing framework legitimacy.

## Core Requirements (static)
- Single long-form institutional homepage with anchored sections.
- Full-width muted/looped video hero using the supplied investor intro video.
- 12 sections: Hero · Pillars · Who We Serve · About · Services · Process · Infrastructure · Framework · Leadership & Advisory · Insights · Investors · Contact.
- Email-only enquiry channel to **info@micells.io** (no Resend wired yet).
- Backend MongoDB persistence of enquiries (so submissions aren't lost while email forwarding is wired up later).
- Full Emergent branding removal and CSS overrides.
- SEO meta and target keywords baked into `<head>`.

## Implemented (2026-02-11)
- **Backend** (`/app/backend/server.py`)
  - `POST /api/enquiries` — validated enquiry intake, stored in `enquiries` collection.
  - `GET /api/enquiries` — admin/dev listing.
  - `GET /api/health` — health probe.
- **Frontend** (React 19 + Tailwind + shadcn primitives + sonner toast)
  - Brand system via CSS variables, Fraunces (display serif) + Manrope (body sans).
  - Sticky navigation that adapts on scroll (transparent on hero → solid on scroll).
  - Hero with auto-playing muted looped video + layered overlays for legibility, dual CTAs.
  - Editorial section system: indexed eyebrows (MC / 01, 02…), serif headlines with italic primary accents, monospaced tab-aligned metadata.
  - Pillars (4), Services (4), Framework (4), Process (5-step timeline), Infrastructure (dark section with grain overlay and rows), Advisory Board (4 confidential seats marked "To Be Announced"), Insights (4 article cards), Investors (dark, 3 engagement tracks), Contact (institutional form with type selector + success state).
  - Footer with contact, LinkedIn, X, privacy, terms — no Emergent residue.
- **Emergent branding removal**
  - Removed inline `#emergent-badge`, posthog block, and `emergent-main.js` from `public/index.html`.
  - Hard CSS kill-switch in `index.css` and inline `<style>` blocks targeting `[id*="emergent"]`, `[class*="emergent"]`, `a[href*="emergent.sh"]`, `.made-with`.
  - Verified at runtime: no "emergent" text in DOM.
- **Assets**
  - Logo mark + wordmark from user upload.
  - Hero video from user upload (compressed investor intro).

## Verified
- Backend `POST /api/enquiries` → 201 + stored doc (curl + Playwright).
- Frontend submits → success state → MongoDB record confirmed.
- Page has zero references to "emergent" in DOM.
- Hero, all 12 sections rendering correctly at 1440×900 + 1920×800.

## Deferred Backlog
- **P0** — Wire Resend (or SendGrid) integration so submissions actually email `info@micells.io` in real time. Currently stored in DB only.
- **P1** — Replace "To Be Announced" advisory seats with named advisors as they are appointed (with bios and headshots).
- **P1** — Wire real investor deck PDF behind the "Request Investor Information" gate when ready.
- **P2** — Add Google Analytics 4 / Plausible once measurement ID is provided.
- **P2** — Insights detail pages (currently summary cards only).
- **P2** — `/privacy` and `/terms` legal pages (currently `#` placeholders).
- **P3** — Multi-language (EN/AR/CN) for international investors.

## Next Tasks
1. Capture Resend API key from user → wire transactional email to `info@micells.io`.
2. Collect real advisor names/photos/bios to populate Leadership & Advisory section.
3. Upload investor deck PDF and gate behind the existing form (enquiry_type=investor).
