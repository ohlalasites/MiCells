import { Reveal } from "@/components/site/Reveal";
import { Cpu, Terminal } from "lucide-react";
import { HARDWARE, SOFTWARE } from "@/lib/relay";

export const RelaySpecs = () => (
  <section
    id="relay-specs"
    data-testid="relay-specs"
    className="mc-section bg-[color:var(--mc-secondary)] relative overflow-hidden"
  >
    <div className="mc-container relative">
      <div className="grid grid-cols-12 gap-x-8 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
            02 · Hardware & Software
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal>
            <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-tight text-white font-light">
              Enterprise readiness{" "}
              <span className="italic text-[color:var(--mc-primary-soft)]">
                by design.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-white/60">
              Over-provisioned datacenter hardware and a hardened, audited
              software stack — the minimum baseline for infrastructure MiCells®
              is willing to run under its own name.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/15">
        <SpecCard
          icon={Cpu}
          eyebrow="Server Specifications"
          rows={HARDWARE}
          testId="relay-hardware"
        />
        <SpecCard
          icon={Terminal}
          eyebrow="Core Software Stack"
          rows={SOFTWARE}
          testId="relay-software"
          mono
        />
      </div>
    </div>
  </section>
);

const SpecCard = ({ icon: Icon, eyebrow, rows, testId, mono }) => (
  <div
    data-testid={testId}
    className="border-b border-r border-white/15 md:[&:nth-child(2n)]:border-r-0 p-8 lg:p-10"
  >
    <div className="flex items-center gap-3">
      <span className="h-9 w-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[color:var(--mc-primary-soft)]">
        <Icon size={15} strokeWidth={1.6} />
      </span>
      <span className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
        {eyebrow}
      </span>
    </div>

    <dl className="mt-8 divide-y divide-white/10">
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-12 gap-4 py-4">
          <dt className="col-span-12 md:col-span-5 text-[12.5px] uppercase tracking-[0.14em] text-white/45 font-mono-tab">
            {r.label}
          </dt>
          <dd
            className={`col-span-12 md:col-span-7 text-[14.5px] text-white/90 ${
              mono ? "font-mono-tab" : ""
            }`}
          >
            {r.value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);
