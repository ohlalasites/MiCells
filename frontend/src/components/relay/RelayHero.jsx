import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, ArrowRight, Radio } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { NODE } from "@/lib/relay";
import { useRelayLive } from "@/lib/useRelayLive";

export const RelayHero = () => {
  const { t } = useLanguage();
  const r = t.relay;
  const live = useRelayLive();
  const [copied, setCopied] = useState(null);

  const copy = async (value, key, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      toast.success(`${label} · ${r.copied_toast}`);
      setTimeout(() => setCopied(null), 1600);
    } catch (_) {
      toast.error(r.copy_fail_toast);
    }
  };

  const badgeText = live.isSyncing ? r.badge_syncing : r.badge_synced;
  const badgeDot = live.isSyncing ? "#D6B34F" : "#5B9679";
  const badgePulse = live.isSyncing ? "#E7CD79" : "#7BAE96";
  const progressText = `${live.syncProgress.toFixed(2)}%`;

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
              {r.eyebrow}
            </div>
            <Reveal>
              <h1 className="mt-8 font-display text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.03] tracking-tight text-[color:var(--mc-secondary)] font-light">
                {r.hero_title_a}{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  {r.hero_title_b}
                </span>{" "}
                {r.hero_title_c}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[620px] text-[16px] md:text-[17px] leading-relaxed text-[color:var(--mc-muted)]">
                {r.hero_desc}
              </p>
            </Reveal>

            {/* Status pill */}
            <Reveal delay={200}>
              <div
                data-testid="relay-status-pill"
                data-syncing={live.isSyncing ? "true" : "false"}
                className="mt-10 inline-flex items-center gap-3 pl-3 pr-5 py-2 rounded-full border border-[color:var(--mc-line)] bg-white/70 backdrop-blur-sm"
              >
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping"
                    style={{ backgroundColor: badgePulse }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                    style={{ backgroundColor: badgeDot }}
                  />
                </span>
                <span className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-secondary)]">
                  {badgeText}
                </span>
              </div>
            </Reveal>

            {/* Live stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-[color:var(--mc-line)]">
              <Stat
                label={r.peer_count_label}
                value={String(live.peerCount)}
                suffix={r.peer_count_suffix}
                testId="stat-peers"
              />
              <StatProgress
                label={r.sync_progress_label}
                value={progressText}
                subValue={`${live.currentBlock.toLocaleString()} / ${live.highestBlock.toLocaleString()}`}
                percent={live.syncProgress}
                testId="stat-sync"
              />
              <Stat
                label={r.uptime_label}
                value={r.uptime_value}
                testId="stat-uptime"
              />
            </div>
          </div>

          {/* Multiaddr copy card (dark insert) */}
          <div className="col-span-12 lg:col-span-5 lg:pl-4">
            <Reveal delay={240}>
              <div className="rounded-none bg-[color:var(--mc-secondary)] text-white border border-white/10">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: badgeDot, boxShadow: `0 0 10px ${badgeDot}` }}
                    />
                    <span className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-white/60">
                      {r.primary_multiaddr_label}
                    </span>
                  </div>
                  <span className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--mc-primary-soft)]">
                    {r.ws_tcp}
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
                    {copied === "ma" ? r.copied : r.copy_multiaddr}
                  </button>
                </div>

                <div className="px-6 py-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-white/50">
                      {r.peer_id_label}
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
                    {copied === "pid" ? r.copied : r.copy_short}
                  </button>
                </div>
              </div>

              <a
                href="#relay-connect"
                className="mt-6 inline-flex items-center gap-2 text-[13px] tracking-[0.04em] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
              >
                {r.peer_with_us} <ArrowRight size={14} />
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
    className="py-6 border-b sm:border-b-0 sm:border-r border-[color:var(--mc-line)] last:border-b-0 sm:last:border-r-0 pr-6"
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

const StatProgress = ({ label, value, subValue, percent, testId }) => (
  <div
    data-testid={testId}
    className="py-6 border-b sm:border-b-0 sm:border-r border-[color:var(--mc-line)] last:border-b-0 sm:last:border-r-0 pr-6"
  >
    <div className="font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--mc-muted)]">
      {label}
    </div>
    <div className="mt-3 font-display text-[24px] md:text-[28px] leading-none text-[color:var(--mc-secondary)]">
      {value}
    </div>
    <div className="mt-3 h-[3px] bg-[color:var(--mc-line)] w-full max-w-[220px] overflow-hidden">
      <div
        className="h-full bg-[color:var(--mc-primary)] transition-[width] duration-700 ease-out"
        style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
      />
    </div>
    <div className="mt-2 font-mono-tab text-[10.5px] text-[color:var(--mc-muted)]">
      {subValue}
    </div>
  </div>
);
