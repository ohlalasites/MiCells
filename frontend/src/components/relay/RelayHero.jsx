import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, ArrowRight, Radio } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { NODE, LIVE_STATS } from "@/lib/relay";

export const RelayHero = () => {
  const [copied, setCopied] = useState(null);

  const copy = async (value, key, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopied(null), 1600);
    } catch (_) {
      toast.error("Copy failed — please copy manually.");
    }
  };

  return (
    <section
      id="relay-top"
      data-testid="relay-hero"
      className="relative bg-[color:var(--mc-canvas)] pt-32 pb-24 md:pt-40 md:pb-32 border-b border-[color:var(--mc-line)] overflow-hidden"
    >
      <div className="mc-container relative">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow flex items-center gap-3">
              <Radio size={13} strokeWidth={1.6} className="text-[color:var(--mc-primary)]" />
              Infrastructure · Public Node
            </div>
            <Reveal>
              <h1 className="mt-8 font-display text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.03] tracking-tight text-[color:var(--mc-secondary)] font-light">
                Powering privacy-preserving{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  infrastructure
                </span>{" "}
                for Midnight.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[620px] text-[16px] md:text-[17px] leading-relaxed text-[color:var(--mc-muted)]">
                MiCells® operates a high-availability, high-throughput public
                relay node in Singapore supporting the Midnight Network
                ecosystem. Peer with us to strengthen APAC propagation and
                network resilience.
              </p>
            </Reveal>

            {/* Status pill */}
            <Reveal delay={200}>
              <div
                data-testid="relay-status-pill"
                className="mt-10 inline-flex items-center gap-3 pl-3 pr-5 py-2 rounded-full border border-[color:var(--mc-line)] bg-white/70 backdrop-blur-sm"
              >
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping bg-[#7BAE96]" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5B9679]" />
                </span>
                <span className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-secondary)]">
                  Node online · Fully synced
                </span>
              </div>
            </Reveal>

            {/* Live stats */}
            <div className="mt-10 grid grid-cols-3 gap-0 border-t border-[color:var(--mc-line)]">
              <Stat label="Peer Count" value={`${LIVE_STATS.peerCount}`} suffix="active peers" testId="stat-peers" />
              <Stat label="Uptime" value={LIVE_STATS.uptime} testId="stat-uptime" />
              <Stat label="Network" value={LIVE_STATS.network} testId="stat-network" />
            </div>
          </div>

          {/* Multiaddr copy card (dark insert) */}
          <div className="col-span-12 lg:col-span-5 lg:pl-4">
            <Reveal delay={240}>
              <div className="rounded-none bg-[color:var(--mc-secondary)] text-white border border-white/10">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#7BAE96] shadow-[0_0_10px_#7BAE96]" />
                    <span className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-white/60">
                      Primary Multiaddr · IPv4
                    </span>
                  </div>
                  <span className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
                    WS · TCP
                  </span>
                </div>

                <div className="px-6 py-6">
                  <code
                    data-testid="relay-multiaddr"
                    className="block font-mono-tab text-[12.5px] leading-[1.75] break-all text-white/90"
                  >
                    {NODE.multiaddrIpv4}
                  </code>
                  <button
                    type="button"
                    data-testid="copy-multiaddr"
                    onClick={() => copy(NODE.multiaddrIpv4, "ma", "Multiaddr")}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[color:var(--mc-secondary)] text-[12.5px] font-medium tracking-[0.04em] hover:bg-white/90 transition-colors"
                  >
                    {copied === "ma" ? <Check size={14} /> : <Copy size={14} />}
                    {copied === "ma" ? "Copied" : "Click to Copy Multiaddr"}
                  </button>
                </div>

                <div className="px-6 py-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-white/50">
                      Peer ID
                    </div>
                    <div
                      data-testid="relay-peer-id"
                      className="mt-2 font-mono-tab text-[11.5px] text-white/85 truncate"
                      title={NODE.peerId}
                    >
                      {NODE.peerId}
                    </div>
                  </div>
                  <button
                    type="button"
                    data-testid="copy-peer-id"
                    onClick={() => copy(NODE.peerId, "pid", "Peer ID")}
                    className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/25 text-white/80 hover:text-white hover:border-white/60 transition-colors text-[11px] tracking-[0.06em]"
                  >
                    {copied === "pid" ? <Check size={12} /> : <Copy size={12} />}
                    {copied === "pid" ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <a
                href="#relay-connect"
                className="mt-6 inline-flex items-center gap-2 text-[13px] tracking-[0.04em] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
              >
                Peer with MiCells <ArrowRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value, suffix, testId }) => (
  <div
    data-testid={testId}
    className="py-6 border-r border-[color:var(--mc-line)] last:border-r-0 pr-6"
  >
    <div className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--mc-muted)]">
      {label}
    </div>
    <div className="mt-3 font-display text-[24px] md:text-[28px] leading-none text-[color:var(--mc-secondary)]">
      {value}
    </div>
    {suffix && (
      <div className="mt-2 text-[12px] text-[color:var(--mc-muted)]">
        {suffix}
      </div>
    )}
  </div>
);
