import { BRAND } from "@/lib/brand";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="bg-[color:var(--mc-canvas)] border-t border-[color:var(--mc-line)]"
    >
      <div className="mc-container py-20 md:py-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={BRAND.logoMark}
                alt="MiCells"
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-[22px] text-[color:var(--mc-secondary)]">
                MiCells
              </span>
            </div>
            <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-[color:var(--mc-muted)]">
              Institutional-grade preservation and stewardship of autologous
              biological assets.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
              Contact
            </div>
            <a
              href={`mailto:${BRAND.email}`}
              data-testid="footer-email"
              className="mt-5 block text-[15px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
            >
              {BRAND.email}
            </a>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
              Connect
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={BRAND.links.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-linkedin"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] inline-flex items-center gap-2"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={BRAND.links.x}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-x"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
              >
                X / Twitter
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
              Legal
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                data-testid="footer-privacy"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                data-testid="footer-terms"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[color:var(--mc-line)] flex items-center">
          <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
            © {year} MiCells. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
