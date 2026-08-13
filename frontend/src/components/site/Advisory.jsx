import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export const Advisory = () => {
  const { t } = useLanguage();
  return (
    <section id="advisory" data-testid="advisory-section" className="mc-section bg-[color:var(--mc-canvas)] relative">
      <div className="mc-container">
        <Reveal>
          <div className="eyebrow eyebrow-dark">{t.advisory.eyebrow}</div>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)] max-w-[820px]">
            {t.advisory.headingA}{" "}
            <span className="italic text-[color:var(--mc-primary)]">{t.advisory.headingB}</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 lg:p-12 bg-white border border-[color:var(--mc-line)]">
            <div>
              <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
                {t.advisory.ctaLabel}
              </div>
              <h4 className="mt-2 font-display text-[24px] md:text-[28px] tracking-tight text-[color:var(--mc-secondary)] max-w-[560px] leading-snug">
                {t.advisory.ctaHeading}
              </h4>
            </div>
            <a href="#contact" data-testid="advisory-cta" className="mc-btn mc-btn-ghost">
              {t.advisory.ctaButton}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
