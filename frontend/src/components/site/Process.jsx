import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export const Process = () => {
  const { t } = useLanguage();
  return (
    <section id="process" data-testid="process-section" className="mc-section bg-white relative">
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">{t.process.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                {t.process.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary)]">{t.process.headingB}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[10%] right-[10%] top-[42px] h-px bg-[color:var(--mc-line)]" />
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
            {t.process.steps.map((s, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <li data-testid={`process-step-${idx}`} className="relative">
                  <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-0">
                    <div className="relative z-10 bg-white">
                      <div className="h-[28px] w-[28px] rounded-full border border-[color:var(--mc-primary)] flex items-center justify-center font-mono-tab text-[11px] text-[color:var(--mc-primary)]">
                        0{idx + 1}
                      </div>
                    </div>
                    <h3 className="md:mt-10 font-display text-[20px] tracking-tight text-[color:var(--mc-secondary)]">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--mc-muted)]">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
