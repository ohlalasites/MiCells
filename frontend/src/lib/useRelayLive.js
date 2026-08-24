import { useEffect, useState } from "react";
import { NODE, OPERATOR_SNAPSHOT, PEER_HUBS } from "@/lib/relay";

const RPC_URL = NODE.publicRpc;

function computeSyncProgress(current, highest) {
  if (!highest || highest === 0) return 0;
  return Math.min(100, (current / highest) * 100);
}

async function jsonRpc(method, params = [], timeoutMs = 3500) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(RPC_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
      signal: ac.signal,
    });
    if (!res.ok) throw new Error(`RPC ${method} → ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(`RPC ${method} error: ${data.error.message}`);
    return data.result;
  } finally {
    clearTimeout(t);
  }
}

function snapshotState() {
  return {
    peerCount: OPERATOR_SNAPSHOT.peers,
    isSyncing: OPERATOR_SNAPSHOT.isSyncing,
    syncProgress: computeSyncProgress(OPERATOR_SNAPSHOT.currentBlock, OPERATOR_SNAPSHOT.highestBlock),
    currentBlock: OPERATOR_SNAPSHOT.currentBlock,
    highestBlock: OPERATOR_SNAPSHOT.highestBlock,
    lastVerified: OPERATOR_SNAPSHOT.lastVerified,
    peerId: OPERATOR_SNAPSHOT.peerId,
    multiaddr: OPERATOR_SNAPSHOT.multiaddr,
    peers: PEER_HUBS,
    source: "snapshot",
    error: null,
  };
}

/**
 * Fetches live node metrics from https://rpc.micells.io using the standard
 * Substrate/Polkadot-SDK JSON-RPC surface. Gracefully falls back to the
 * operator snapshot when the endpoint is not yet reachable (DNS pending,
 * CORS, offline, etc.). Peer geolocation is currently sourced from the
 * bundled hub cache; when the RPC schema for Midnight peers stabilises,
 * this hook can extend to derive fresh coordinates from the returned
 * multiaddr list.
 */
export function useRelayLive() {
  const [state, setState] = useState(snapshotState);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [health, syncState] = await Promise.all([
          jsonRpc("system_health").catch(() => null),
          jsonRpc("system_syncState").catch(() => null),
        ]);
        if (cancelled) return;
        if (!health) return; // snapshot state already applied

        const current = syncState?.currentBlock ?? OPERATOR_SNAPSHOT.currentBlock;
        const highest = syncState?.highestBlock ?? OPERATOR_SNAPSHOT.highestBlock;
        setState({
          ...snapshotState(),
          peerCount: typeof health.peers === "number" ? health.peers : OPERATOR_SNAPSHOT.peers,
          isSyncing: !!health.isSyncing,
          currentBlock: current,
          highestBlock: highest,
          syncProgress: computeSyncProgress(current, highest),
          source: "live",
        });
      } catch (e) {
        if (!cancelled) {
          setState((s) => ({ ...s, error: String(e?.message || e) }));
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
