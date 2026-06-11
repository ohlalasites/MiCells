import { Reveal } from "./Reveal";

const SYSTEMS = [
  {
    title: "Advanced Cryogenic Preservation",
    body:
      "Layered preservation systems engineered for long-duration biological integrity, calibrated against institutional benchmarks.",
  },
  {
    title: "Controlled Biological Environments",
    body:
      "Continuously monitored environmental envelopes with redundant power, redundant cooling and independent audit telemetry.",
  },
  {
    title: "Asset Integrity Protocols",
    body:
      "Quantitative integrity protocols governing handling, sampling, verification and periodic review of each preserved asset.",
  },
  {
    title: "Redundant Security Systems",
    body:
      "Physical, digital and procedural security layered across access, identity, transport and storage environments.",
  },
  {
    title: "Traceability Architecture",
    body:
      "An end-to-end traceability ledger linking each asset to its clinical, operational and custodial events through time.",
  },
];

export const Technology = () => {
  return (
    <section
      id="technology"
      data-testid="technology-section"
      className="mc-section bg-[color:var(--mc-secondary)] relative overflow-hidden grain"
    >
      <div className="mc-container relative">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
              MC · 07 · Infrastructure
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-white font-light">
                Institutional{" "}
                <span className="italic text-[color:var(--mc-primary-soft)]">
                  infrastructure.
                </span>{" "}
                Engineered to outlast the present.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-white/65">
                MiCells operates a controlled-environment preservation
                architecture, designed against institutional risk standards
                rather than consumer expectations. Each layer of the system is
                redundant, monitored and independently auditable.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-white/15">
          {SYSTEMS.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 60}>
              <div
                data-testid={`tech-row-${idx}`}
                className="grid grid-cols-12 gap-x-8 py-8 border-b border-white/15"
              >
                <div className="col-span-12 md:col-span-1 font-mono-tab text-[11px] text-[color:var(--mc-primary-soft)] uppercase">
                  0{idx + 1}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-[22px] md:text-[26px] tracking-tight text-white font-light">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-7 text-[14.5px] leading-relaxed text-white/65">
                  {s.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
