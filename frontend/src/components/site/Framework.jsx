import { Reveal } from "./Reveal";
import { Microscope, ScrollText, Scale, BadgeCheck } from "lucide-react";

const FRAMEWORK = [
  {
    icon: Microscope,
    title: "Medical Advisory Board",
    body:
      "Senior medical professionals advising on clinical safety, suitability protocols and the evolving science of preservation.",
  },
  {
    icon: ScrollText,
    title: "Compliance Philosophy",
    body:
      "A pro-active regulatory posture that anticipates institutional, cross-border and emerging compliance frameworks.",
  },
  {
    icon: Scale,
    title: "Clinical Governance",
    body:
      "Independent governance over decisions impacting biological integrity, client safety and chain-of-custody.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    body:
      "Documented quality protocols across collection, transport, storage and mobilisation. Auditable end to end.",
  },
];

export const Framework = () => {
  return (
    <section
      id="framework"
      data-testid="framework-section"
      className="mc-section bg-white relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">04 · Framework</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                Built upon{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  clinical oversight.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                The MiCells<sup className="mc-reg">®</sup> framework is designed to be defensible to
                clinicians, auditors and regulators alike.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[color:var(--mc-line)]">
          {FRAMEWORK.map((f, idx) => (
            <Reveal key={f.title} delay={idx * 80}>
              <div
                data-testid={`framework-card-${idx}`}
                className="p-8 lg:p-10 border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 min-h-[260px] flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <f.icon
                    size={26}
                    strokeWidth={1.2}
                    className="text-[color:var(--mc-primary)]"
                  />
                  <span className="font-mono-tab text-[11px] text-[color:var(--mc-muted)]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-[22px] tracking-tight text-[color:var(--mc-secondary)]">
                  {f.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--mc-muted)]">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
