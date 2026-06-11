import { Reveal } from "./Reveal";
import { ShieldCheck, Stethoscope, Network, Globe2 } from "lucide-react";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Medical Autonomy",
    body:
      "Your blood. Your biology. Preserved exclusively for your future use, under strictly autologous protocols.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Integrity",
    body:
      "Developed alongside senior medical professionals and governed by rigorous, independently reviewed standards.",
  },
  {
    icon: Network,
    title: "Security & Traceability",
    body:
      "Comprehensive chain-of-custody and asset verification throughout the entire preservation lifecycle.",
  },
  {
    icon: Globe2,
    title: "Global Readiness",
    body:
      "Designed to support international mobility, expatriate continuity and emergency responsiveness across jurisdictions.",
  },
];

export const Pillars = () => {
  return (
    <section
      id="pillars"
      data-testid="pillars-section"
      className="mc-section bg-white relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-end mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">MC · 02 · Pillars</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.06] tracking-tight text-[color:var(--mc-secondary)]">
                Four principles that define{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  every preserved asset.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[color:var(--mc-line)]">
          {PILLARS.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 80}>
              <div
                data-testid={`pillar-card-${idx}`}
                className="group p-8 lg:p-10 border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-[color:var(--mc-canvas)]"
              >
                <div>
                  <div className="font-mono-tab text-[11px] text-[color:var(--mc-muted)] mb-8">
                    0{idx + 1}
                  </div>
                  <p.icon
                    size={28}
                    strokeWidth={1.2}
                    className="text-[color:var(--mc-primary)]"
                  />
                  <h3 className="mt-10 font-display text-[22px] md:text-[24px] tracking-tight text-[color:var(--mc-secondary)]">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-6 text-[14.5px] leading-relaxed text-[color:var(--mc-muted)]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
