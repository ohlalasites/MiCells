import { Reveal } from "./Reveal";
import { Droplet, Truck, ClipboardCheck, Compass } from "lucide-react";

const SERVICES = [
  {
    icon: Droplet,
    title: "Autologous Blood Preservation",
    body:
      "Secure long-term preservation of a client's own biological material under controlled, auditable conditions — for personal future use only.",
    meta: "Service · 01",
  },
  {
    icon: Truck,
    title: "Biological Logistics",
    body:
      "End-to-end chain-of-custody and transport coordination between collection, storage and mobilisation points across borders.",
    meta: "Service · 02",
  },
  {
    icon: ClipboardCheck,
    title: "Clinical Guardianship",
    body:
      "Independent oversight, asset verification and integrity management of preserved biological holdings throughout their lifecycle.",
    meta: "Service · 03",
  },
  {
    icon: Compass,
    title: "Global Coordination",
    body:
      "International mobility support and healthcare preparedness coordination for clients operating across multiple jurisdictions.",
    meta: "Service · 04",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="mc-section bg-[color:var(--mc-canvas)] relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow eyebrow-dark">MC / 05 — Services</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                A measured portfolio of{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  institutional services.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[color:var(--mc-line)]">
          {SERVICES.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 80}>
              <article
                data-testid={`service-card-${idx}`}
                className="group bg-white border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(2n)]:border-r-0 p-8 lg:p-12 min-h-[300px] flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <s.icon
                    size={28}
                    strokeWidth={1.2}
                    className="text-[color:var(--mc-primary)]"
                  />
                  <span className="font-mono-tab text-[11px] text-[color:var(--mc-muted)] uppercase">
                    {s.meta}
                  </span>
                </div>
                <h3 className="mt-12 font-display text-[24px] md:text-[28px] tracking-tight text-[color:var(--mc-secondary)] leading-[1.15]">
                  {s.title}
                </h3>
                <p className="mt-5 text-[14.5px] leading-relaxed text-[color:var(--mc-muted)] max-w-[460px]">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
