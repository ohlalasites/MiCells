import { useEffect, useState } from "react";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { LANGS, LANG_LABEL } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV_ITEMS = [
    { key: "framework", href: "#framework" },
    { key: "process", href: "#process" },
    { key: "advisory", href: "#advisory" },
    { key: "insights", href: "#insights" },
    { key: "register", href: "#register" },
    { key: "partners", href: "#investors" },
  ];

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
        <a href="#top" data-testid="nav-logo" className="flex items-start">
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
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.href}
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
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LangToggle scrolled={scrolled} lang={lang} setLang={setLang} aria={t.nav.toggleAria} />
          <a
            href="#contact"
            data-testid="nav-cta-contact"
            className={`mc-btn ${scrolled ? "mc-btn-primary" : "mc-btn-onvideo"}`}
          >
            {t.nav.requestInfo}
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <LangToggle scrolled={scrolled} lang={lang} setLang={setLang} aria={t.nav.toggleAria} />
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
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${n.key}`}
                className="text-[15px] text-[color:var(--mc-secondary)] py-2 border-b border-[color:var(--mc-line)]"
              >
                {t.nav[n.key]}
              </a>
            ))}
            <a
              href="#contact"
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

const LangToggle = ({ scrolled, lang, setLang, aria }) => {
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
            data-testid={`lang-toggle-${l}`}
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
