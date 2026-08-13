import { useEffect, useState } from "react";
import { BRAND, NAV } from "@/lib/brand";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-link-${n.label.toLowerCase()}`}
              className={`text-[13px] tracking-wide transition-colors ${
                scrolled
                  ? "text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-cta-contact"
            className={`mc-btn ${
              scrolled ? "mc-btn-primary" : "mc-btn-onvideo"
            }`}
          >
            Request Information
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 ${
            scrolled ? "text-[color:var(--mc-secondary)]" : "text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-panel"
          className="lg:hidden bg-white border-t border-[color:var(--mc-line)]"
        >
          <div className="mc-container py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${n.label.toLowerCase()}`}
                className="text-[15px] text-[color:var(--mc-secondary)] py-2 border-b border-[color:var(--mc-line)]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta-contact"
              className="mc-btn mc-btn-primary mt-2 self-start"
            >
              Request Information
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
