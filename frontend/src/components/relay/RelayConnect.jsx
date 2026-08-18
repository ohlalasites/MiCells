import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Copy, Check, AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { NODE } from "@/lib/relay";

const TABS = [
  { id: "bash", label: "Bash" },
  { id: "config", label: "Config File" },
  { id: "docker", label: "Docker" },
];

export const RelayConnect = () => {
  const [tab, setTab] = useState("bash");
  const [copied, setCopied] = useState(false);

  const snippets = useMemo(
    () => ({
      bash: `# Add MiCells-Midnight-Relay as a bootnode
midnight-node \\
  --chain mainnet \\
  --bootnodes ${NODE.multiaddrIpv4}`,
      config: `{
  "bootnodes": [
    "${NODE.multiaddrIpv4}",
    "${NODE.multiaddrIpv6}"
  ]
}`,
      docker: `services:
  midnight-node:
    image: midnightnetwork/midnight-node:0.22.5
    restart: unless-stopped
    command:
      - --chain=mainnet
      - --bootnodes=${NODE.multiaddrIpv4}
    ports:
      - "30333:30333"`,
    }),
    []
  );

  const active = snippets[tab];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(active);
      setCopied(true);
      toast.success("Snippet copied to clipboard");
      setTimeout(() => setCopied(false), 1600);
    } catch (_) {
      toast.error("Copy failed — please copy manually.");
    }
  };

  return (
    <section
      id="relay-connect"
      data-testid="relay-connect"
      className="mc-section bg-white"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">03 · Connection Guide</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-tight text-[color:var(--mc-secondary)]">
                Add the relay as{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  a bootnode.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                Choose the integration path that matches your setup. All
                snippets use the same IPv4 multiaddr and can be extended with
                the IPv6 fallback where available.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Tabs + code card */}
        <div className="border border-[color:var(--mc-line)] bg-white">
          <div className="flex flex-col md:flex-row md:items-stretch md:justify-between border-b border-[color:var(--mc-line)]">
            <div
              className="flex border-b md:border-b-0 border-[color:var(--mc-line)] overflow-x-auto"
              role="tablist"
              aria-label="Integration path"
            >
              {TABS.map((tb) => {
                const activeTab = tb.id === tab;
                return (
                  <button
                    key={tb.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab}
                    data-testid={`relay-tab-${tb.id}`}
                    onClick={() => setTab(tb.id)}
                    className={`px-6 py-4 text-[12px] font-mono-tab uppercase tracking-[0.18em] transition-colors relative whitespace-nowrap ${
                      activeTab
                        ? "text-[color:var(--mc-secondary)]"
                        : "text-[color:var(--mc-muted)] hover:text-[color:var(--mc-secondary)]"
                    }`}
                  >
                    {tb.label}
                    <span
                      className={`absolute inset-x-6 -bottom-px h-[2px] transition-all ${
                        activeTab
                          ? "bg-[color:var(--mc-primary)]"
                          : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={copy}
              data-testid="relay-copy-snippet"
              className="px-6 py-3 md:py-0 md:border-l border-[color:var(--mc-line)] text-[11.5px] font-mono-tab uppercase tracking-[0.18em] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)] flex items-center gap-2 justify-start md:justify-center"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="bg-[color:var(--mc-secondary)] text-white">
            <pre
              data-testid={`relay-snippet-${tab}`}
              className="px-6 md:px-8 py-6 md:py-8 font-mono-tab text-[13px] leading-[1.75] overflow-x-auto text-white/95 whitespace-pre"
            >
              {active}
            </pre>
          </div>
        </div>

        {/* Firewall callout */}
        <div
          data-testid="relay-firewall-notice"
          className="mt-10 flex items-start gap-4 border-l-2 border-[color:var(--mc-primary)] bg-[color:var(--mc-canvas)] p-6 md:p-7"
        >
          <AlertTriangle
            size={18}
            strokeWidth={1.6}
            className="mt-[2px] shrink-0 text-[color:var(--mc-primary)]"
          />
          <div>
            <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary)]">
              Port & Firewall Reminder
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--mc-secondary)] max-w-[680px]">
              Ensure outgoing TCP on port{" "}
              <span className="font-mono-tab text-[color:var(--mc-secondary)]">
                30333
              </span>{" "}
              is unblocked so your node can establish the WebSocket connection
              with{" "}
              <span className="font-mono-tab">MiCells-Midnight-Relay</span>. The
              RPC port <span className="font-mono-tab">9944</span> is
              intentionally bound to localhost on our side and is not exposed
              publicly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
