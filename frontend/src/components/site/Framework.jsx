import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { Microscope, ScrollText, Scale, BadgeCheck } from "lucide-react";

const ICONS = [Microscope, ScrollText, Scale, BadgeCheck];

export const Framework = () => {
  const { t } = useLanguage();
  return (
    <section id="framework" data-testid="framework-section" className="mc-section bg-white relative">
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">{t.framework.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                {t.framework.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary)]">{t.framework.headingB}</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                {t.framework.body}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[color:var(--mc-line)]">
          {t.framework.items.map((f, idx) => {
            const Icon = ICONS[idx];
            return (
              <Reveal key={idx} delay={idx * 80}>
                <div
                  data-testid={`framework-card-${idx}`}
                  className="p-8 lg:p-10 border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 min-h-[260px] flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={26} strokeWidth={1.2} className="text-[color:var(--mc-primary)]" />
                    <span className="font-mono-tab text-[11px] text-[color:var(--mc-muted)]">0{idx + 1}</span>
                  </div>
                  <h3 className="mt-10 font-display text-[22px] tracking-tight text-[color:var(--mc-secondary)]">{f.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--mc-muted)]">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
