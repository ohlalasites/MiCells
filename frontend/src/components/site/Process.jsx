import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Medical Consultation",
    body:
      "Initial clinical assessment to determine suitability, individual considerations and a tailored preservation plan.",
  },
  {
    n: "02",
    title: "Collection & Verification",
    body:
      "Controlled biological collection by accredited clinical partners, followed by identity, integrity and provenance verification.",
  },
  {
    n: "03",
    title: "Secure Preservation",
    body:
      "Transfer into institutional preservation infrastructure under advanced cryogenic protocols and continuous monitoring.",
  },
  {
    n: "04",
    title: "Ongoing Stewardship",
    body:
      "Lifecycle integrity management, periodic review, redundant storage architecture and confidential client reporting.",
  },
  {
    n: "05",
    title: "Mobilisation Upon Need",
    body:
      "Coordinated international release to the treating clinical institution with complete documented chain-of-custody.",
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="mc-section bg-white relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">MC · 06 · Process</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                Five stages of{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  uninterrupted custody.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[10%] right-[10%] top-[42px] h-px bg-[color:var(--mc-line)]" />
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
            {STEPS.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 80}>
                <li
                  data-testid={`process-step-${idx}`}
                  className="relative"
                >
                  <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-0">
                    <div className="relative z-10 bg-white">
                      <div className="h-[28px] w-[28px] rounded-full border border-[color:var(--mc-primary)] flex items-center justify-center font-mono-tab text-[11px] text-[color:var(--mc-primary)]">
                        {s.n}
                      </div>
                    </div>
                    <h3 className="md:mt-10 font-display text-[20px] tracking-tight text-[color:var(--mc-secondary)]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--mc-muted)]">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
