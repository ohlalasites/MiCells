import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { HOME_HUB } from "@/lib/relay";
import { useRelayLive } from "@/lib/useRelayLive";

// Equirectangular projection sized to 1200 x 600.
const W = 1200;
const H = 600;
const project = (lat, lng) => ({
  x: ((lng + 180) / 360) * W,
  y: ((90 - lat) / 180) * H,
});

const home = project(HOME_HUB.lat, HOME_HUB.lng);

// Quadratic Bezier arc between two projected points, curved above the line
// by an amount proportional to distance for a soft, satellite-like feel.
const arcPath = (from, to) => {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / dist;
  const ny = dx / dist;
  const offset = dist * 0.28;
  const cx = mx + nx * offset;
  const cy = my + ny * offset;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
};

export const RelayMap = () => {
  const { t } = useLanguage();
  const r = t.relay;
  const live = useRelayLive();
  const peers = live.peers;

  const sourceLabel =
    live.source === "live"
      ? r.map_source_live
      : r.map_source_snapshot.replace("{ts}", live.lastVerified);

  return (
    <section
      id="relay-map"
      data-testid="relay-map"
      className="mc-section bg-[color:var(--mc-canvas)]"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">{r.sec4_tag}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                {r.sec4_title_a}{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  {r.sec4_title_b}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                {r.sec4_desc}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Map card */}
        <div className="relative border border-[color:var(--mc-line)] bg-white">
          <MapLegend
            homeLabel={r.map_legend_home}
            peerLabel={r.map_legend_peer}
          />
          <MapSourceBadge label={sourceLabel} isLive={live.source === "live"} />
          <div className="relative w-full overflow-hidden">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="block w-full h-auto"
              role="img"
              aria-label={r.sec4_title_b}
              data-testid="relay-map-svg"
            >
              <defs>
                <radialGradient id="relay-pulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7BAE96" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="#7BAE96" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#7BAE96" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="relay-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5C7D82" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#5C7D82" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#5C7D82" stopOpacity="0.1" />
                </linearGradient>
                <pattern
                  id="relay-dots"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1.5" cy="1.5" r="1" fill="#c9c4bc" />
                </pattern>
              </defs>

              <rect width={W} height={H} fill="url(#relay-dots)" />

              <line
                x1="0"
                y1={H / 2}
                x2={W}
                y2={H / 2}
                stroke="#c9c4bc"
                strokeDasharray="4 8"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1={W / 2}
                y1="0"
                x2={W / 2}
                y2={H}
                stroke="#c9c4bc"
                strokeDasharray="4 8"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Arcs + travelling packets */}
              {peers.map((h, idx) => {
                const to = project(h.lat, h.lng);
                const d = arcPath(home, to);
                return (
                  <g key={h.code || `${h.lat}-${h.lng}`}>
                    <path
                      d={d}
                      stroke="url(#relay-arc)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: 900,
                        strokeDashoffset: 900,
                        animation: `relayDraw 2.6s ease-out ${0.25 + idx * 0.18}s forwards`,
                      }}
                    />
                    <circle r="3" fill="#5C7D82">
                      <animateMotion
                        dur={`${4.5 + idx * 0.6}s`}
                        repeatCount="indefinite"
                        path={d}
                        rotate="auto"
                        begin={`${0.6 + idx * 0.3}s`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.9;1"
                        dur={`${4.5 + idx * 0.6}s`}
                        repeatCount="indefinite"
                        begin={`${0.6 + idx * 0.3}s`}
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Peer city markers.
                  Right-edge hubs (Tokyo, Sydney) auto-flip labels to the left
                  so they stay inside the 1200-wide viewBox. `labelDy` handles
                  vertical stagger for close-together hubs, `align` overrides
                  the auto-flip when the arc would clip the label. */}
              {peers.map((h) => {
                const p = project(h.lat, h.lng);
                const align = h.align ?? (p.x > 900 ? "end" : "start");
                const dx = align === "end" ? -10 : 10;
                const dy = h.labelDy ?? 0;
                return (
                  <g key={`m-${h.code || `${h.lat}-${h.lng}`}`}>
                    <circle cx={p.x} cy={p.y} r="5" fill="#ffffff" stroke="#5C7D82" strokeWidth="1.5" />
                    <text
                      x={p.x + dx}
                      y={p.y - 8 + dy}
                      textAnchor={align}
                      className="font-mono-tab"
                      fontSize="12"
                      fill="#424240"
                      fontFamily="ui-monospace, monospace"
                    >
                      {h.code}
                    </text>
                    <text
                      x={p.x + dx}
                      y={p.y + 8 + dy}
                      textAnchor={align}
                      fontSize="11"
                      fill="#6e6e6c"
                      fontFamily="ui-monospace, monospace"
                    >
                      {h.city} · {h.ping}
                    </text>
                  </g>
                );
              })}

              {/* Singapore home hub with pulse */}
              <g>
                <circle cx={home.x} cy={home.y} r="80" fill="url(#relay-pulse)" />
                <circle
                  cx={home.x}
                  cy={home.y}
                  r="14"
                  fill="none"
                  stroke="#7BAE96"
                  strokeWidth="1.5"
                  opacity="0.4"
                >
                  <animate attributeName="r" values="10;28;10" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0;0.55" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx={home.x} cy={home.y} r="7" fill="#5B9679" />
                <circle cx={home.x} cy={home.y} r="2.5" fill="#ffffff" />
                <text
                  x={home.x + 14}
                  y={home.y - 12}
                  fontSize="13"
                  fill="#424240"
                  fontFamily="ui-monospace, monospace"
                  fontWeight="600"
                >
                  {HOME_HUB.code} · {r.home_hub_label}
                </text>
                <text
                  x={home.x + 14}
                  y={home.y + 8}
                  fontSize="11"
                  fill="#5C7D82"
                  fontFamily="ui-monospace, monospace"
                >
                  {HOME_HUB.city} · {r.home_hub_sub}
                </text>
              </g>

              <style>{`
                @keyframes relayDraw { to { stroke-dashoffset: 0; } }
              `}</style>
            </svg>
          </div>
        </div>

        <p className="mt-8 max-w-[720px] text-[12.5px] leading-relaxed text-[color:var(--mc-muted)]">
          {r.map_disclaimer}
        </p>
      </div>
    </section>
  );
};

const MapLegend = ({ homeLabel, peerLabel }) => (
  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-10 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-[color:var(--mc-line)] px-2.5 py-1 rounded-full">
    <span className="flex items-center gap-1.5">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping bg-[#7BAE96]" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5B9679]" />
      </span>
      <span className="font-mono-tab text-[9px] uppercase tracking-[0.16em] text-[color:var(--mc-secondary)]">
        {homeLabel}
      </span>
    </span>
    <span className="w-px h-2.5 bg-[color:var(--mc-line)]" />
    <span className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-white border border-[color:var(--mc-primary)]" />
      <span className="font-mono-tab text-[9px] uppercase tracking-[0.16em] text-[color:var(--mc-secondary)]">
        {peerLabel}
      </span>
    </span>
  </div>
);

const MapSourceBadge = ({ label, isLive }) => (
  <div
    data-testid="relay-map-source"
    data-source={isLive ? "live" : "snapshot"}
    className="absolute top-3 right-3 md:top-4 md:right-4 z-10 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-[color:var(--mc-line)] px-2.5 py-1 rounded-full max-w-[70%] md:max-w-none"
  >
    <span
      className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-[#5B9679]" : "bg-[#D6B34F]"}`}
    />
    <span className="font-mono-tab text-[9px] uppercase tracking-[0.16em] text-[color:var(--mc-secondary)] truncate">
      {label}
    </span>
  </div>
);
