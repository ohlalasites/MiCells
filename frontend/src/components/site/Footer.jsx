import { useState } from "react";
import { BRAND } from "@/lib/brand";
import { Linkedin } from "lucide-react";
import { ArticleModal } from "./ArticleModal";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@/lib/legal";

export const Footer = () => {
  const year = new Date().getFullYear();
  const [doc, setDoc] = useState(null);

  return (
    <footer
      data-testid="site-footer"
      className="bg-[color:var(--mc-canvas)] border-t border-[color:var(--mc-line)]"
    >
      <div className="mc-container py-20 md:py-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-start">
              <img
                src={BRAND.wordmarkDark}
                alt="MiCells®"
                className="h-[36px] w-auto object-contain"
              />
              <sup
                aria-hidden="true"
                className="ml-[3px] mt-[8px] text-[11px] leading-none text-[color:var(--mc-secondary)]"
              >
                ®
              </sup>
            </div>
            <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-[color:var(--mc-muted)]">
              Medical infrastructure enabling individuals to preserve and
              access their own blood when required.
            </p>
            <div className="mt-6 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)]">
              Hong Kong SAR · Asia
            </div>
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
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] inline-flex items-center gap-2"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={BRAND.links.x}
                target="_blank"
                rel="noopener noreferrer"
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
              <button
                type="button"
                onClick={() => setDoc(PRIVACY_POLICY)}
                data-testid="footer-privacy"
                className="text-left text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] bg-transparent border-0 p-0 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setDoc(TERMS_OF_USE)}
                data-testid="footer-terms"
                className="text-left text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] bg-transparent border-0 p-0 cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[color:var(--mc-line)] flex items-center">
          <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
            © {year} MiCells<sup className="mc-reg">®</sup>. All rights reserved.
          </span>
        </div>
      </div>

      {doc && <ArticleModal article={doc} onClose={() => setDoc(null)} />}
    </footer>
  );
};
