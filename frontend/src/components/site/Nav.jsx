import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { LANGS, LANG_LABEL } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Anchor hrefs: on home use plain hash, off home use full path so the
  // browser navigates back to home and scrolls to the anchor natively.
  const anchor = (hash) => (isHome ? hash : `/${hash}`);

  const NAV_ITEMS = [
    { key: "framework", href: anchor("#framework") },
    { key: "process", href: anchor("#process") },
    { key: "advisory", href: anchor("#advisory") },
    { key: "insights", href: anchor("#insights") },
    { key: "register", href: anchor("#register") },
    { key: "partners", href: anchor("#investors") },
  ];

  const relayLabel = t.nav.infrastructure;

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-md border-b border-[color:var(--mc-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mc-container flex items-center justify-between h-[72px]">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-start"
          aria-label="MiCells home"
        >
          <img
            src={scrolled ? BRAND.wordmarkDark : BRAND.wordmarkWhite}
            alt="MiCells®"
            className="h-[26px] sm:h-[30px] w-auto object-contain transition-opacity duration-300"
          />
          <sup
            aria-hidden="true"
            className={`ml-[3px] mt-[6px] text-[9px] sm:text-[10px] leading-none transition-colors duration-300 ${
              scrolled ? "text-[color:var(--mc-secondary)]" : "text-white"
            }`}
          >
            ®
          </sup>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.key}
              href={n.href}
              data-testid={`nav-link-${n.key}`}
              className={`text-[13px] tracking-wide transition-colors ${
                scrolled
                  ? "text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {t.nav[n.key]}
            </a>
          ))}
          <Link
            to="/midnight-relay"
            data-testid="nav-link-relay"
            className={`text-[13px] tracking-wide transition-colors ${
              pathname === "/midnight-relay"
                ? "text-[color:var(--mc-primary)]"
                : scrolled
                ? "text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
                : "text-white/85 hover:text-white"
            }`}
          >
            {relayLabel}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <HkstpBadge scrolled={scrolled} />
          <LangToggle scrolled={scrolled} lang={lang} setLang={setLang} aria={t.nav.toggleAria} variant="desktop" />
          <a
            href={anchor("#contact")}
            data-testid="nav-cta-contact"
            className={`mc-btn ${scrolled ? "mc-btn-primary" : "mc-btn-onvideo"}`}
          >
            {t.nav.requestInfo}
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <LangToggle scrolled={scrolled} lang={lang} setLang={setLang} aria={t.nav.toggleAria} variant="mobile" />
          <button
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className={`p-2 ${scrolled ? "text-[color:var(--mc-secondary)]" : "text-white"}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="nav-mobile-panel" className="lg:hidden bg-white border-t border-[color:var(--mc-line)]">
          <div className="mc-container py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.key}
                href={n.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${n.key}`}
                className="text-[15px] text-[color:var(--mc-secondary)] py-2 border-b border-[color:var(--mc-line)]"
              >
                {t.nav[n.key]}
              </a>
            ))}
            <Link
              to="/midnight-relay"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-link-relay"
              className="text-[15px] text-[color:var(--mc-secondary)] py-2 border-b border-[color:var(--mc-line)]"
            >
              {relayLabel}
            </Link>
            <a
              href={anchor("#contact")}
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta-contact"
              className="mc-btn mc-btn-primary mt-2 self-start"
            >
              {t.nav.requestInfo}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const HkstpBadge = ({ scrolled }) => (
  <span
    data-testid="nav-hkstp-badge"
    aria-label="HKSTP Partner"
    title="HKSTP Partner"
    className="inline-flex items-center"
  >
    <img
      src={scrolled ? "/brand/hkstp-partner-dark.png" : "/brand/hkstp-partner-white.png"}
      alt="HKSTP Partner"
      className={`h-6 w-auto object-contain transition-opacity duration-300 ${
        scrolled ? "opacity-80" : "opacity-90"
      }`}
    />
  </span>
);

const LangToggle = ({ scrolled, lang, setLang, aria, variant = "desktop" }) => {
  const onColor = scrolled ? "text-[color:var(--mc-secondary)] border-[color:var(--mc-line)]" : "text-white border-white/30";
  return (
    <div
      role="group"
      aria-label={aria}
      className={`inline-flex items-center rounded-full border ${onColor} overflow-hidden`}
    >
      {LANGS.map((l) => {
        const active = l === lang;
        const activeCls = scrolled
          ? "bg-[color:var(--mc-secondary)] text-white"
          : "bg-white text-[color:var(--mc-secondary)]";
        const inactiveCls = scrolled ? "text-[color:var(--mc-secondary)]" : "text-white/80";
        return (
          <button
            key={l}
            type="button"
            data-testid={`lang-toggle-${l}${variant === "mobile" ? "-mobile" : ""}`}
            aria-pressed={active}
            onClick={() => setLang(l)}
            className={`px-3 py-[6px] text-[11px] font-medium tracking-[0.06em] transition-colors ${
              active ? activeCls : `${inactiveCls} hover:opacity-100 opacity-80`
            }`}
          >
            {LANG_LABEL[l]}
          </button>
        );
      })}
    </div>
  );
};
