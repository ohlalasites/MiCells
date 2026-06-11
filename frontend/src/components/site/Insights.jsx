import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const ARTICLES = [
  {
    tag: "Logistics",
    title: "Precision Logistics in Global Medicine",
    summary:
      "How cross-border biological movement is becoming a defining capability of modern healthcare institutions.",
    minutes: "8 min",
  },
  {
    tag: "Clinical",
    title: "Rare Blood Types and Supply Constraints",
    summary:
      "Structural fragility in the global supply of rare phenotypes — and the role of autologous preservation.",
    minutes: "11 min",
  },
  {
    tag: "Perspective",
    title: "The Future of Biological Stewardship",
    summary:
      "Why long-duration biological assurance is emerging as a distinct discipline within medical infrastructure.",
    minutes: "9 min",
  },
  {
    tag: "Preparedness",
    title: "Modern Approaches to Medical Preparedness",
    summary:
      "A reframing of medical preparedness for mobile, multi-jurisdictional individuals and family offices.",
    minutes: "7 min",
  },
];

export const Insights = () => {
  return (
    <section
      id="insights"
      data-testid="insights-section"
      className="mc-section bg-white relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">MC / 10 — Insights</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                Research &{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  perspectives.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[color:var(--mc-line)]">
          {ARTICLES.map((a, idx) => (
            <Reveal key={a.title} delay={idx * 80}>
              <article
                data-testid={`insight-card-${idx}`}
                className="group border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 p-8 lg:p-10 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-[color:var(--mc-canvas)] cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-primary)]">
                    {a.tag}
                  </span>
                  <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
                    {a.minutes}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[24px] md:text-[28px] leading-[1.15] tracking-tight text-[color:var(--mc-secondary)] mt-12">
                    {a.title}
                  </h3>
                  <p className="mt-5 text-[14.5px] leading-relaxed text-[color:var(--mc-muted)] max-w-[460px]">
                    {a.summary}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-[color:var(--mc-line)] pt-5">
                  <span className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
                    Read Perspective
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[color:var(--mc-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
