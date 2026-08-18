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
 * EXTENSION POINT — live node metrics
 *
 *   useEffect(() => {
 *     const fetchNodeStats = async () => {
 *       const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/midnight/metrics`);
 *       const data = await res.json();
 *       setNodeStats({
 *         blockHeight: data.block,
 *         peers: data.peers,
 *         status: data.status,
 *         uptime: data.uptime,
 *       });
 *     };
 *     fetchNodeStats();
 *     const t = setInterval(fetchNodeStats, 30_000);
 *     return () => clearInterval(t);
 *   }, []);
 *
 * The stats values that need wiring live in `/app/frontend/src/lib/relay.js`
 * (LIVE_STATS) and are consumed by RelayHero.jsx.
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
