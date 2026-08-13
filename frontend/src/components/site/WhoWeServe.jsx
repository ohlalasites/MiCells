import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export const WhoWeServe = () => {
  const { t } = useLanguage();
  return (
    <section id="clients" data-testid="clients-section" className="mc-section bg-[color:var(--mc-canvas)] relative">
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow eyebrow-dark">{t.clients.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-[color:var(--mc-secondary)]">
                {t.clients.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary)]">{t.clients.headingB}</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                {t.clients.body}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[color:var(--mc-line)]">
          {t.clients.list.map((label, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <div
                data-testid={`client-row-${idx}`}
                className="flex items-baseline gap-6 px-2 py-7 border-b border-[color:var(--mc-line)] md:px-4 lg:px-6"
              >
                <span className="font-mono-tab text-[11px] text-[color:var(--mc-primary)]">/0{idx + 1}</span>
                <span className="font-display text-[19px] md:text-[22px] tracking-tight text-[color:var(--mc-secondary)]">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
