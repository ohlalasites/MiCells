import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { RelayHero } from "@/components/relay/RelayHero";
import { RelayVision } from "@/components/relay/RelayVision";
import { RelaySpecs } from "@/components/relay/RelaySpecs";
import { RelayConnect } from "@/components/relay/RelayConnect";
import { RelayMap } from "@/components/relay/RelayMap";
import { RelayFaq } from "@/components/relay/RelayFaq";
import { RelayCta } from "@/components/relay/RelayCta";

/*
 * Live node metrics are wired through `useRelayLive` (see
 * /app/frontend/src/lib/useRelayLive.js). On mount it hits
 * https://rpc.micells.io with JSON-RPC `system_health` + `system_syncState`
 * and swaps the snapshot for live values as soon as the endpoint is
 * reachable (DNS record for rpc.micells.io + Nginx + Let's Encrypt on the
 * VPS required — see finish notes).
 *
 * Snapshot fallback lives in OPERATOR_SNAPSHOT inside /app/frontend/src/lib/relay.js
 * and is used automatically whenever RPC is offline / CORS-blocked / DNS pending.
 */

export default function MidnightRelay() {
  useEffect(() => {
    document.title = "Infrastructure · MiCells®";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      data-testid="midnight-relay-page"
      className="bg-white text-[color:var(--mc-ink)]"
    >
      <Nav />
      <main>
        <RelayHero />
        <RelayVision />
        <RelaySpecs />
        <RelayConnect />
        <RelayMap />
        <RelayFaq />
        <RelayCta />
      </main>
      <Footer />
    </div>
  );
}
