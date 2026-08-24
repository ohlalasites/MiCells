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

## Implemented (2026-02 → 2026-06, later sessions)
- **Resend email integration** — `POST /api/enquiries` now emails `info@micells.io` in real time (API key in backend/.env, verified sender domain).
- **Hero video optimisation** — compressed 26MB → 8.1MB, `faststart` + `preload` for instant load.
- **Service Worker killer** in `index.html` — purges legacy website cache (DO NOT REMOVE).
- **Hong Kong local SEO** — OpenGraph og-image (WhatsApp preview), JSON-LD MedicalBusiness schema, HK keywords.
- **Registered trademark** — every "MiCells" mention site-wide carries "®" (JSX `<sup>®</sup>`, legal strings, i18n dictionary). Verified no bare mentions remain.
- **Full-screen modals** — Insights articles, Privacy Policy, Terms of Use (`lib/articles.js`, `lib/legal.js`).
- **Bilingual i18n (EN / 繁體中文)** — `lib/i18n.js` + `lib/LanguageContext.jsx`, `EN | 繁` pill toggle in Nav, all site components consume context. **Visually verified 2026-06-13**: hero, framework, contact all render correctly in both languages with ® intact.

## Implemented (2026-08-14) — Expression of Interest (EOI)
- **New section 07 · Register Interest** (`/app/frontend/src/components/site/Register.jsx`) between Insights and Partners. Renumbered Partners → 08, Contact → 09.
- **Assurance triad** — Non-binding · Held in confidence · Forecasting purpose. Lucide icons (ShieldCheck / Lock / LineChart).
- **Grouped form** — 01 About You · 02 Personal Profile · 03 Interest & Timing · 04 Optional. Fields: name, email, phone (optional), country, age band, blood type, household coverage + dynamic count input, motivation, timeline, service tier, referral, notes.
- **Non-binding T&C block** with required consent checkbox. Submission without consent shows a validation toast and does NOT hit the API.
- **Backend** — `POST /api/interest` (201, consent=false → 422), `GET /api/interest`. Stored in new MongoDB collection `interest_registrations`. Emails info@micells.io via existing Resend integration with a dedicated EOI-branded HTML template. Language recorded (`en` / `zh`).
- **Full EN / 繁 translations** in `lib/i18n.js` including all field labels, all select option labels, T&C copy, success card, toasts.
- **Nav** — new `Register` / `登記` link (desktop + mobile) between Insights and Partners.
- **Verified 2026-08-14** — 16/16 pytest cases pass, Playwright E2E 100% on EN + ZH, ® mark intact, existing `/api/enquiries` unaffected.
- **Hero CTA** — Home page white pill button changed from "Request Information" → **Register** / **登記** and links to `#register`.

## Implemented (2026-08-15) — Footer address
- Added multi-line HK office address as semantic `<address>` element above `HONG KONG SAR · ASIA` in the footer.
- EN: `12F / Room 14A, Fonda Building · 37–39 Au Pui Wan Street · Fo Tan, Sha Tin, New Territories`.
- ZH: `新界沙田火炭 · 坳背灣街 37–39 號 · 豐達中心 12 樓 14A 室`.

## Implemented (2026-08-18) — MiCells Midnight Relay page
- **New route** `/midnight-relay` — full public-node infrastructure page for the Midnight Network relay MiCells® operates in Singapore.
- **Aesthetic** — kept clinical MiCells light theme with dark inserts for code / terminal / specs (institutional, not neon-crypto). English-only page.
- **7 sections** — Hero (status pill + live stats + multiaddr copy card + peer id copy) · Strategic Vision (3 cards) · Hardware & Software (dark 2-col spec grid) · Connection Guide (Bash / Config File / Docker tabs with dark code area, per-tab copy button, firewall notice) · Network Reach (stylised SVG world map: dot-grid background, animated arcs from Singapore to Tokyo/Sydney/Frankfurt/London/N.Virginia with pulsing home node) · FAQ (6-item accordion, single-open, first-open-by-default) · CTA (dark: Copy Multiaddr, Midnight docs external link, mailto:info@micells.io Contact Infrastructure Team).
- **Router + navigation** — added Nav link `Midnight Relay` (desktop + mobile), footer Infrastructure column. Nav uses `useLocation` to force scrolled visual state on non-home routes and prefixes hash anchors with `/` so hash links from `/midnight-relay` cleanly navigate back to `/` and scroll to the anchor.
- **Static-first, extension-ready** — `/app/frontend/src/lib/relay.js` holds NODE, LIVE_STATS, HARDWARE, SOFTWARE, VISION_CARDS, FAQ, PEER_HUBS. MidnightRelay.jsx has an inline `EXTENSION POINT` comment block showing how to wire live metrics from a future `/api/midnight/metrics` endpoint.
- **Verified 2026-08-18** — testing agent full E2E 100% pass. Copy-to-clipboard, tab switching, FAQ accordion, cross-page SPA nav, mobile viewport (390x844) all green. No backend changes.

## Implemented (2026-08-24) — Live node identity + dynamic map + zh-HK translations
- **Node identity refreshed** — old Peer ID (`12D3KooWK2exseKW1K...avkx`) removed everywhere; new Peer ID `12D3KooWCp9ybXjcq4gTRRhvfNwJTqjd6WQaJF2hfvHSsvvFaWQp` applied to hero copy card, peer id row, Bash / Config JSON / Docker snippets, and CTA copy button. `midnight-node` version bumped to **1.0.1** in the software card and Docker snippet. IPv6 multiaddr removed from the Config JSON snippet.
- **Live-metrics hook** (`/app/frontend/src/lib/useRelayLive.js`) — JSON-RPC POST to `https://rpc.micells.io` (`system_health` + `system_syncState`) with 3.5s AbortController timeout, gracefully falls back to `OPERATOR_SNAPSHOT` when the endpoint is unresolved / CORS-blocked / offline. `state.source` exposes `"live" | "snapshot"` and the map card shows a top-right badge reflecting this.
- **Syncing state UX** — status pill switches between 🟡 SYNCING and 🟢 FULLY SYNCED via `isSyncing`. Hero stats now show Active Peers (`9`) · Sync Progress (`97.29%` + progress bar + `2,216,902 / 2,278,664`) · Node Status (`Monitored`). All stat cards stack cleanly on mobile.
- **Bilingual EN + 繁 for the whole /midnight-relay page** — new ~100-key `relay` bundle in `lib/i18n.js` for both `en` and `zh` (Traditional, HK-style vocab: 網絡 / 軟件 / 聯絡 etc.). Every eyebrow, headline, card, spec label, tab-panel snippet frame, firewall notice, map legend + source badge, FAQ Q&A and CTA button is translated. Code snippets stay code-only in both languages.
- **Nav testid uniqueness** — `lang-toggle-{en,zh}` (desktop) and `lang-toggle-{en,zh}-mobile` (mobile) no longer collide in Playwright strict mode.
- **Verified 2026-08-24** — backend pytest 16/16 pass, frontend E2E 100% after two follow-up polish fixes (mobile stat stacking + unique language testids). rpc.micells.io not yet DNS-resolved → snapshot fallback rendered cleanly, no thrown errors.

## Verified (2026-06-13, fork session)
- Screenshot verification of EN and 繁 language states: toggle works, Traditional Chinese typography renders cleanly, no layout overflow, ® present in both languages.
- No bare "MiCells" (without ®) in i18n.js, articles.js, legal.js, or components.
- Services all RUNNING; production live at micells.io (user must Re-deploy to push latest i18n + ® changes live).

## Verified (2026-08-14, EOI session)
- Backend: `pytest /app/backend/tests/` → 16/16 green. Curl verified 201, 422 (consent=false), 422 (missing email), GET listing, zh language round-trip. Resend delivered production emails.
- Frontend: full Playwright E2E verified nav link, section rendering, assurance cards, all form controls, household_count reveal on non-self coverage, consent validation, success state + reset, EN ↔ 繁 toggle across every string in the section.

## Deferred Backlog
- **P1** — Replace "To Be Announced" advisory seats with named advisors as they are appointed (with bios and headshots).
- **P1** — Wire real investor deck PDF behind the "Request Investor Information" gate when ready.
- **P2** — Add Google Analytics 4 / Plausible once measurement ID is provided.
- **P2** — `hreflang` / `lang` meta tags per language for HK bilingual SEO.
- **P3** — Multi-language (EN/AR/CN) for international investors.

## Next Tasks
1. Capture Resend API key from user → wire transactional email to `info@micells.io`.
2. Collect real advisor names/photos/bios to populate Leadership & Advisory section.
3. Upload investor deck PDF and gate behind the existing form (enquiry_type=investor).
