import { Reveal } from "./Reveal";

const CLIENTS = [
  { num: "01", label: "Individuals Seeking Long-Term Preparedness" },
  { num: "02", label: "High-Net-Worth Individuals" },
  { num: "03", label: "Individuals With Rare Blood Types" },
  { num: "04", label: "Family Offices & Legacy Planning" },
  { num: "05", label: "International Healthcare Clients" },
];

export const WhoWeServe = () => {
  return (
    <section
      id="clients"
      data-testid="clients-section"
      className="mc-section bg-[color:var(--mc-canvas)] relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow eyebrow-dark">02 · Clients</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-[color:var(--mc-secondary)]">
                Designed for individuals planning{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  beyond conventional healthcare.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                MiCells supports individuals and families seeking long-term
                biological preparedness through clinically governed personal
                blood banking.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[color:var(--mc-line)]">
          {CLIENTS.map((c, idx) => (
            <Reveal key={c.num} delay={idx * 60}>
              <div
                data-testid={`client-row-${idx}`}
                className="flex items-baseline gap-6 px-2 py-7 border-b border-[color:var(--mc-line)] md:px-4 lg:px-6"
              >
                <span className="font-mono-tab text-[11px] text-[color:var(--mc-primary)]">
                  /{c.num}
                </span>
                <span className="font-display text-[19px] md:text-[22px] tracking-tight text-[color:var(--mc-secondary)]">
                  {c.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
