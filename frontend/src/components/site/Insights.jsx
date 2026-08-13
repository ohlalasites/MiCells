import { useState } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES, localise } from "@/lib/articles";
import { ArticleModal } from "./ArticleModal";

export const Insights = () => {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(null);

  return (
    <section id="insights" data-testid="insights-section" className="mc-section bg-white relative">
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">{t.insights.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                {t.insights.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary)]">{t.insights.headingB}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[color:var(--mc-line)]">
          {ARTICLES.map((raw, idx) => {
            const a = localise(raw, lang);
            return (
              <Reveal key={a.id} delay={idx * 80}>
                <button
                  type="button"
                  data-testid={`insight-card-${idx}`}
                  onClick={() => setActive(localise(raw, lang))}
                  className="group w-full text-left border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 p-8 lg:p-10 min-h-[300px] flex flex-col justify-between transition-colors hover:bg-[color:var(--mc-canvas)] cursor-pointer focus:outline-none focus-visible:bg-[color:var(--mc-canvas)]"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-primary)]">{a.tag}</span>
                    <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{a.minutes}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[24px] md:text-[28px] leading-[1.15] tracking-tight text-[color:var(--mc-secondary)] mt-12">{a.title}</h3>
                    <p className="mt-5 text-[14.5px] leading-relaxed text-[color:var(--mc-muted)] max-w-[460px]">{a.summary}</p>
                  </div>
                  <div className="mt-10 flex items-center justify-between border-t border-[color:var(--mc-line)] pt-5 w-full">
                    <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{t.insights.read}</span>
                    <ArrowUpRight size={18} className="text-[color:var(--mc-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active && <ArticleModal article={active} onClose={() => setActive(null)} />}
    </section>
  );
};
