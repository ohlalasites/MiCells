import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { Cpu, Terminal } from "lucide-react";
import { HARDWARE, SOFTWARE } from "@/lib/relay";

export const RelaySpecs = () => {
  const { t } = useLanguage();
  const r = t.relay;

  const hwRows = HARDWARE.map((h) => ({
    label: r[`${h.key}_label`],
    value: r[`${h.key}_val`],
    mono: false,
  }));

  const swRows = SOFTWARE.map((s) => {
    if (s.key) {
      return { label: r[`${s.key}_label`], value: r[`${s.key}_val`], mono: s.mono };
    }
    return s;
  });

  return (
    <section
      id="relay-specs"
      data-testid="relay-specs"
      className="mc-section bg-[color:var(--mc-secondary)] relative overflow-hidden"
    >
      <div className="mc-container relative">
        <div className="grid grid-cols-12 gap-x-8 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
              {r.sec2_tag}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-tight text-white font-light">
                {r.sec2_title_a}{" "}
                <span className="italic text-[color:var(--mc-primary-soft)]">
                  {r.sec2_title_b}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-white/60">
                {r.sec2_desc}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/15">
          <SpecCard
            icon={Cpu}
            eyebrow={r.hw_title}
            rows={hwRows}
            testId="relay-hardware"
          />
          <SpecCard
            icon={Terminal}
            eyebrow={r.sw_title}
            rows={swRows}
            testId="relay-software"
          />
        </div>
      </div>
    </section>
  );
};

const SpecCard = ({ icon: Icon, eyebrow, rows, testId }) => (
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
      {rows.map((row, i) => (
        <div key={`${row.label}-${i}`} className="grid grid-cols-12 gap-4 py-4">
          <dt className="col-span-12 md:col-span-5 text-[12.5px] uppercase tracking-[0.14em] text-white/45 font-mono-tab">
            {row.label}
          </dt>
          <dd
            className={`col-span-12 md:col-span-7 text-[14.5px] text-white/90 ${
              row.mono ? "font-mono-tab" : ""
            }`}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);
