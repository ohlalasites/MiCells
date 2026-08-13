import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { ShieldCheck, Stethoscope, Network, Globe2 } from "lucide-react";

const ICONS = [ShieldCheck, Stethoscope, Network, Globe2];

export const Pillars = () => {
  const { t } = useLanguage();
  return (
    <section id="pillars" data-testid="pillars-section" className="mc-section bg-white relative">
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-end mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">{t.pillars.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.06] tracking-tight text-[color:var(--mc-secondary)]">
                {t.pillars.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  {t.pillars.headingB}
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[color:var(--mc-line)]">
          {t.pillars.items.map((p, idx) => {
            const Icon = ICONS[idx];
            return (
              <Reveal key={idx} delay={idx * 80}>
                <div
                  data-testid={`pillar-card-${idx}`}
                  className="group p-8 lg:p-10 border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-[color:var(--mc-canvas)]"
                >
                  <div>
                    <div className="font-mono-tab text-[11px] text-[color:var(--mc-muted)] mb-8">0{idx + 1}</div>
                    <Icon size={28} strokeWidth={1.2} className="text-[color:var(--mc-primary)]" />
                    <h3 className="mt-10 font-display text-[22px] md:text-[24px] tracking-tight text-[color:var(--mc-secondary)]">{p.title}</h3>
                  </div>
                  <p className="mt-6 text-[14.5px] leading-relaxed text-[color:var(--mc-muted)]">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
