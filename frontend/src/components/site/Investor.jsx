import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight } from "lucide-react";

export const Investor = () => {
  const { t } = useLanguage();
  return (
    <section id="investors" data-testid="investors-section" className="mc-section bg-[color:var(--mc-secondary)] relative overflow-hidden">
      <div className="mc-container relative">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
              {t.investors.eyebrow}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-white font-light">
                {t.investors.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary-soft)]">{t.investors.headingB}</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-white/65">
                {t.investors.body}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/15">
          {t.investors.tracks.map((tr, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div
                data-testid={`investor-track-${idx}`}
                className="p-8 lg:p-10 border-b border-r border-white/15 md:[&:nth-child(3n)]:border-r-0 min-h-[240px] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-primary-soft)]">
                    {t.investors.trackPrefix} 0{idx + 1}
                  </span>
                  <h3 className="mt-10 font-display text-[22px] md:text-[24px] tracking-tight text-white font-light">
                    {tr.label}
                  </h3>
                </div>
                <p className="mt-6 text-[14px] leading-relaxed text-white/65">{tr.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-primary-soft)]">
              {t.investors.materialsLabel}
            </div>
            <p className="mt-3 font-display text-[22px] md:text-[26px] text-white font-light leading-snug max-w-[520px]">
              {t.investors.materialsBody}
            </p>
          </div>
          <a href="#contact" data-testid="investor-cta" className="mc-btn mc-btn-onvideo">
            {t.investors.cta}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
