import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { FAQ_KEYS } from "@/lib/relay";

export const RelayFaq = () => {
  const { t } = useLanguage();
  const r = t.relay;
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));

  return (
    <section
      id="relay-faq"
      data-testid="relay-faq"
      className="mc-section bg-white"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">{r.sec5_tag}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                {r.sec5_title_a}{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  {r.sec5_title_b}
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-[color:var(--mc-line)]">
          {FAQ_KEYS.map((n, idx) => {
            const isOpen = open === idx;
            const q = r[`faq${n}_q`];
            const a = r[`faq${n}_a`];
            return (
              <div
                key={n}
                data-testid={`faq-item-${idx}`}
                className="border-b border-[color:var(--mc-line)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${idx}`}
                  className="w-full grid grid-cols-12 gap-x-6 items-start py-7 md:py-8 text-left group"
                >
                  <span className="col-span-1 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] mt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 font-display text-[19px] md:text-[22px] leading-[1.3] tracking-tight text-[color:var(--mc-secondary)] group-hover:text-[color:var(--mc-primary)] transition-colors">
                    {q}
                  </span>
                  <span className="col-span-1 flex justify-end mt-1 text-[color:var(--mc-secondary)]">
                    {isOpen ? <Minus size={18} strokeWidth={1.6} /> : <Plus size={18} strokeWidth={1.6} />}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-12 gap-x-6 pb-8">
                      <div className="col-span-1" />
                      <p
                        data-testid={`faq-answer-${idx}`}
                        className="col-span-10 max-w-[760px] text-[15px] leading-[1.75] text-[color:var(--mc-muted)]"
                      >
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
