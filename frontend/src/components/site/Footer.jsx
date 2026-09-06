import { useState } from "react";
import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { Linkedin } from "lucide-react";
import { ArticleModal } from "./ArticleModal";
import { PRIVACY_POLICY, TERMS_OF_USE, localiseDoc } from "@/lib/legal";

export const Footer = () => {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();
  const [doc, setDoc] = useState(null);

  const openDoc = (raw) => setDoc(localiseDoc(raw, lang));

  return (
    <footer data-testid="site-footer" className="bg-[color:var(--mc-canvas)] border-t border-[color:var(--mc-line)]">
      <div className="mc-container py-20 md:py-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-start">
              <img src={BRAND.wordmarkDark} alt="MiCells®" className="h-[36px] w-auto object-contain" />
              <sup aria-hidden="true" className="ml-[3px] mt-[8px] text-[11px] leading-none text-[color:var(--mc-secondary)]">®</sup>
            </div>
            <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-[color:var(--mc-muted)]">
              {t.footer.description}
            </p>
            <address
              data-testid="footer-address"
              className="mt-8 not-italic text-[13.5px] leading-[1.7] text-[color:var(--mc-secondary)]"
            >
              {t.footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)]">
              {t.footer.location}
            </div>
            <div
              data-testid="footer-hkstp-badge"
              className="mt-8 inline-flex items-center gap-3"
              aria-label="HKSTP Partner"
              title="HKSTP Partner"
            >
              <img
                src="/brand/hkstp-partner-dark.png"
                alt="HKSTP Partner"
                className="h-8 w-auto object-contain opacity-85"
              />
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{t.footer.contact}</div>
            <a
              href={`mailto:${BRAND.email}`}
              data-testid="footer-email"
              className="mt-5 block text-[15px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
            >
              {BRAND.email}
            </a>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{t.footer.infrastructure}</div>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/midnight-relay"
                data-testid="footer-midnight-relay"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
              >
                {t.footer.midnightRelay}
              </Link>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{t.footer.connect}</div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={BRAND.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] inline-flex items-center gap-2"
              >
                <Linkedin size={14} /> {t.footer.linkedin}
              </a>
              <a
                href={BRAND.links.x}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-x"
                className="text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
              >
                {t.footer.x}
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{t.footer.legal}</div>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openDoc(PRIVACY_POLICY)}
                data-testid="footer-privacy"
                className="text-left text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] bg-transparent border-0 p-0 cursor-pointer"
              >
                {t.footer.privacy}
              </button>
              <button
                type="button"
                onClick={() => openDoc(TERMS_OF_USE)}
                data-testid="footer-terms"
                className="text-left text-[14px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] bg-transparent border-0 p-0 cursor-pointer"
              >
                {t.footer.terms}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[color:var(--mc-line)] flex items-center">
          <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
            {t.footer.copyright.replace("{year}", year)}
          </span>
        </div>
      </div>

      {doc && <ArticleModal article={doc} onClose={() => setDoc(null)} />}
    </footer>
  );
};
