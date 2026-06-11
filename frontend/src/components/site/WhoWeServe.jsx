import { Reveal } from "./Reveal";

const CLIENTS = [
  { num: "01", label: "High-Net-Worth Individuals" },
  { num: "02", label: "Family Offices" },
  { num: "03", label: "Individuals with Rare Blood Types" },
  { num: "04", label: "International Healthcare Clients" },
  { num: "05", label: "Executive Families" },
  { num: "06", label: "Medical Preparedness Clients" },
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
            <div className="eyebrow eyebrow-dark">MC / 03 — Clients</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-[color:var(--mc-secondary)]">
                Designed for those who{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  cannot afford uncertainty.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                MiCells serves a specific class of client — those whose health,
                mobility and continuity demand a higher standard of biological
                preparedness than conventional systems can offer.
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
