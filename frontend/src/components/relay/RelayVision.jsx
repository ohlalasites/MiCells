import { Reveal } from "@/components/site/Reveal";
import { VISION_CARDS } from "@/lib/relay";

export const RelayVision = () => (
  <section
    id="relay-vision"
    data-testid="relay-vision"
    className="mc-section bg-white"
  >
    <div className="mc-container">
      <div className="grid grid-cols-12 gap-x-8 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="eyebrow">01 · Strategic Vision</div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal>
            <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
              Why MiCells® operates{" "}
              <span className="italic text-[color:var(--mc-primary)]">
                this node.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
              A privacy-preserving compute layer is a prerequisite for
              institutional-grade healthcare, financial and identity workloads.
              MiCells® contributes public relay capacity as a long-term act of
              network stewardship.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[color:var(--mc-line)]">
        {VISION_CARDS.map((c, idx) => (
          <Reveal key={c.tag} delay={idx * 80}>
            <div
              data-testid={`relay-vision-${idx}`}
              className="p-8 lg:p-10 border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(3n)]:border-r-0 min-h-[260px] flex flex-col"
            >
              <span className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary)]">
                {c.tag}
              </span>
              <h3 className="mt-12 font-display text-[22px] md:text-[26px] leading-[1.15] tracking-tight text-[color:var(--mc-secondary)]">
                {c.title}
              </h3>
              <p className="mt-6 text-[14.5px] leading-relaxed text-[color:var(--mc-muted)]">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
