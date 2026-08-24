// Static node identity + operator snapshot used as fallback when the public
// RPC endpoint (rpc.micells.io) is not yet reachable. Numeric fields are also
// consumed by the live-data hook (`useRelayLive`) when RPC is up.

export const NODE = {
  name: "MiCells-Midnight-Relay",
  role: "Full Node / Public Relay",
  network: "Midnight Mainnet",
  peerId: "12D3KooWCp9ybXjcq4gTRRhvfNwJTqjd6WQaJF2hfvHSsvvFaWQp",
  multiaddrIpv4:
    "/ip4/194.233.76.164/tcp/30333/ws/p2p/12D3KooWCp9ybXjcq4gTRRhvfNwJTqjd6WQaJF2hfvHSsvvFaWQp",
  multiaddrIpv6:
    "/ip6/2407:3640:2350:6427::1/tcp/30333/ws/p2p/12D3KooWCp9ybXjcq4gTRRhvfNwJTqjd6WQaJF2hfvHSsvvFaWQp",
  publicIp: "194.233.76.164",
  location: "Singapore",
  p2pPort: 30333,
  rpcPort: 9944,
  // Public RPC endpoint (DNS + Nginx + Let's Encrypt setup required to go live).
  publicRpc: "https://rpc.micells.io",
};

// Operator snapshot captured 2026-08-24 23:48 SGT.
// Falls back to these values when https://rpc.micells.io is not reachable.
export const OPERATOR_SNAPSHOT = {
  peers: 9,
  isSyncing: true,
  startingBlock: 2205227,
  currentBlock: 2216902,
  highestBlock: 2278664,
  lastVerified: "2026-08-24 23:48 SGT",
  peerId: NODE.peerId,
  multiaddr: NODE.multiaddrIpv4,
};

export const HARDWARE = [
  { key: "hw_loc" },
  { key: "hw_cpu" },
  { key: "hw_ram" },
  { key: "hw_disk" },
  { key: "hw_os" },
];

export const SOFTWARE = [
  { label: "midnight-node", value: "v1.0.1", mono: true },
  { label: "cardano-node", value: "v11.0.1", mono: true },
  { label: "cardano-db-sync", value: "v13.7.1.0", mono: true },
  { label: "Database Layer", value: "PostgreSQL 17", mono: true },
  { key: "sw_p2p", mono: true },
  { key: "sw_rpc" },
];

export const VISION_CARDS = [
  { tag: "01", titleKey: "card1_title", bodyKey: "card1_desc" },
  { tag: "02", titleKey: "card2_title", bodyKey: "card2_desc" },
  { tag: "03", titleKey: "card3_title", bodyKey: "card3_desc" },
];

export const FAQ_KEYS = [1, 2, 3, 4, 5, 6];

// Peer visualisation targets — used as the snapshot fallback when live RPC
// peer geolocation is not available yet.
// `labelDy` shifts labels vertically to avoid text collisions between
// geographically-close hubs (London / Frankfurt).
export const PEER_HUBS = [
  { code: "TYO", city: "Tokyo", lat: 35.6762, lng: 139.6503, ping: "38 ms" },
  { code: "SYD", city: "Sydney", lat: -33.8688, lng: 151.2093, ping: "94 ms" },
  { code: "FRA", city: "Frankfurt", lat: 50.1109, lng: 8.6821, ping: "156 ms", labelDy: 24 },
  { code: "LHR", city: "London", lat: 51.5074, lng: -0.1278, ping: "168 ms", labelDy: -22 },
  { code: "IAD", city: "N. Virginia", lat: 38.9072, lng: -77.0369, ping: "212 ms" },
];

export const HOME_HUB = {
  code: "SIN",
  city: "Singapore",
  lat: 1.3521,
  lng: 103.8198,
};
