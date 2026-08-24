import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { BRAND } from "@/lib/brand";
import { NODE } from "@/lib/relay";

const MIDNIGHT_DOCS_URL = "https://docs.midnight.network/";

export const RelayCta = () => {
  const { t } = useLanguage();
  const r = t.relay;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(NODE.multiaddrIpv4);
      setCopied(true);
      toast.success(r.copied_toast);
      setTimeout(() => setCopied(false), 1600);
    } catch (_) {
      toast.error(r.copy_fail_toast);
    }
  };

  return (
    <section
      id="relay-cta"
      data-testid="relay-cta"
      className="mc-section bg-[color:var(--mc-secondary)] relative overflow-hidden"
    >
      <div className="mc-container relative">
        <div className="grid grid-cols-12 gap-x-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
              {r.sec6_tag}
            </div>
            <Reveal>
              <h2 className="mt-8 font-display text-[36px] md:text-[64px] leading-[1.02] tracking-tight text-white font-light">
                {r.sec6_title_a}{" "}
                <span className="italic text-[color:var(--mc-primary-soft)]">
                  {r.sec6_title_b}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-[620px] text-[15.5px] leading-relaxed text-white/65">
                {r.sec6_desc}
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-4 mt-12 md:mt-0" />
        </div>

        <div className="mt-14 md:mt-16 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={copy}
            data-testid="cta-copy-multiaddr"
            className="mc-btn mc-btn-onvideo"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? r.copied : r.copy_multiaddr_short}
          </button>

          <a
            href={MIDNIGHT_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-docs"
            className="mc-btn mc-btn-onvideo-outline"
          >
            {r.cta_docs}
            <ArrowUpRight size={16} />
          </a>

          <a
            href={`mailto:${BRAND.email}?subject=Midnight%20Relay%20Peering%20Enquiry`}
            data-testid="cta-contact"
            className="mc-btn mc-btn-onvideo-outline"
          >
            {r.cta_contact}
          </a>
        </div>
      </div>
    </section>
  );
};
