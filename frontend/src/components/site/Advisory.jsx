import { Reveal } from "./Reveal";

const SEATS = [
  {
    role: "Chair, Medical Advisory Board",
    discipline: "Transfusion Medicine & Haematology",
  },
  {
    role: "Director, Clinical Governance",
    discipline: "Hospital Medicine & Patient Safety",
  },
  {
    role: "Senior Advisor, Cryobiology",
    discipline: "Cryogenic Preservation Science",
  },
  {
    role: "Senior Advisor, Biological Logistics",
    discipline: "Cold-Chain & Cross-Border Operations",
  },
];

export const Advisory = () => {
  return (
    <section
      id="governance"
      data-testid="advisory-section"
      className="mc-section bg-[color:var(--mc-canvas)] relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow eyebrow-dark">MC / 09 — Leadership</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                Leadership &{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  Advisory Board.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                MiCells is being assembled around a deliberately small,
                senior leadership group spanning transfusion medicine, clinical
                governance, cryobiology and institutional logistics. Board
                appointments are confidential until formally announced.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[color:var(--mc-line)]">
          {SEATS.map((s, idx) => (
            <Reveal key={s.role} delay={idx * 80}>
              <div
                data-testid={`advisory-seat-${idx}`}
                className="bg-white p-8 lg:p-10 border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 min-h-[260px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tab text-[11px] text-[color:var(--mc-primary)] uppercase">
                      Seat 0{idx + 1}
                    </span>
                    <span className="font-mono-tab text-[11px] text-[color:var(--mc-muted)] uppercase">
                      To Be Announced
                    </span>
                  </div>
                  <h3 className="mt-12 font-display text-[22px] md:text-[24px] tracking-tight text-[color:var(--mc-secondary)]">
                    {s.role}
                  </h3>
                  <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-[color:var(--mc-muted)] font-mono-tab">
                    {s.discipline}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-[44px] w-[44px] rounded-full bg-[color:var(--mc-canvas)] border border-[color:var(--mc-line)]" />
                  <div className="h-px flex-1 bg-[color:var(--mc-line)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 lg:p-10 bg-white border border-[color:var(--mc-line)]">
            <div>
              <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
                Senior medical or scientific advisor?
              </div>
              <h4 className="mt-2 font-display text-[24px] tracking-tight text-[color:var(--mc-secondary)]">
                We welcome confidential advisory discussions.
              </h4>
            </div>
            <a
              href="#contact"
              data-testid="advisory-cta"
              className="mc-btn mc-btn-ghost"
            >
              Discuss an Advisory Seat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
