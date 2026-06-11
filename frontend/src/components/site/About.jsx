import { Reveal } from "./Reveal";
import { BRAND } from "@/lib/brand";

const PRINCIPLES = [
  { k: "Security", v: "Multi-layered physical and digital protection of biological assets across the lifecycle." },
  { k: "Preparedness", v: "Provision against future clinical scenarios where time and compatibility are critical." },
  { k: "Privacy", v: "Discrete handling, restricted access protocols and confidential client relationships." },
  { k: "Traceability", v: "Auditable chain-of-custody from collection to mobilisation, governed by independent oversight." },
  { k: "Stewardship", v: "Long-term institutional accountability for the integrity of every preserved asset." },
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="mc-section bg-white relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow">MC / 04 — About</div>
            <Reveal>
              <h2 className="mt-6 font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                A new standard in{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  biological stewardship.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 flex items-center gap-4">
                <img
                  src={BRAND.logoMark}
                  alt=""
                  className="h-12 w-12 object-contain opacity-90"
                />
                <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
                  Biotechnology Infrastructure
                  <br />
                  Established for Long-Term Stewardship
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <p className="text-[18px] md:text-[20px] leading-[1.55] text-[color:var(--mc-secondary)] font-light">
                MiCells is a biotechnology infrastructure platform focused on
                preserving biological certainty for future medical needs. We
                operate at the intersection of clinical governance, secure
                logistics and long-term preservation — building the institutional
                architecture required to make autologous biological assets a
                practical asset class.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 text-[15.5px] leading-relaxed text-[color:var(--mc-muted)] max-w-[640px]">
                Our role is not to replace medicine, but to make it possible:
                ensuring that when a clinical decision is taken, the
                corresponding biological material is verified, available and
                mobilisable — anywhere in the world.
              </p>
            </Reveal>

            <div className="mt-14 border-t border-[color:var(--mc-line)]">
              {PRINCIPLES.map((p, idx) => (
                <Reveal key={p.k} delay={idx * 60}>
                  <div
                    data-testid={`principle-${idx}`}
                    className="grid grid-cols-12 gap-4 py-6 border-b border-[color:var(--mc-line)]"
                  >
                    <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                      <span className="font-mono-tab text-[11px] text-[color:var(--mc-primary)]">
                        0{idx + 1}
                      </span>
                      <span className="font-display text-[20px] tracking-tight text-[color:var(--mc-secondary)]">
                        {p.k}
                      </span>
                    </div>
                    <div className="col-span-12 md:col-span-8 text-[14.5px] leading-relaxed text-[color:var(--mc-muted)]">
                      {p.v}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
