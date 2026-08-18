// Static node configuration for the MiCells Midnight Relay page.
// EXTENSION POINT: replace this static object with a hook that fetches
// live values from a metrics endpoint (see MidnightRelay.jsx comment block).

export const NODE = {
  name: "MiCells-Midnight-Relay",
  role: "Full Node / Public Relay",
  network: "Midnight Mainnet",
  status: "Online · Fully Synced",
  peerId: "12D3KooWK2exseKW1K8YFvAxEeB9Ln1Hd3T7Z76Hzv7St9eXavkx",
  multiaddrIpv4:
    "/ip4/194.233.76.164/tcp/30333/ws/p2p/12D3KooWK2exseKW1K8YFvAxEeB9Ln1Hd3T7Z76Hzv7St9eXavkx",
  multiaddrIpv6:
    "/ip6/2407:3640:2350:6427::1/tcp/30333/ws/p2p/12D3KooWK2exseKW1K8YFvAxEeB9Ln1Hd3T7Z76Hzv7St9eXavkx",
  publicIp: "194.233.76.164",
  location: "Singapore",
  p2pPort: 30333,
  rpcPort: 9944,
};

export const LIVE_STATS = {
  // EXTENSION POINT: fetch these from /api/midnight/metrics later.
  peerCount: 24,
  uptime: "99.98%",
  network: "Midnight Mainnet",
};

export const HARDWARE = [
  { label: "Location", value: "Singapore Datacenter · APAC low-latency hub" },
  { label: "Processor", value: "18-Core AMD EPYC" },
  { label: "Memory", value: "96 GB High-Speed ECC RAM" },
  { label: "Storage", value: "1.8 TB NVMe · Enterprise Datacenter Grade" },
  { label: "Operating System", value: "Ubuntu 24.04 LTS" },
];

export const SOFTWARE = [
  { label: "midnight-node", value: "v0.22.5" },
  { label: "cardano-node", value: "v11.0.1" },
  { label: "cardano-db-sync", value: "v13.7.1.0" },
  { label: "Database Layer", value: "PostgreSQL 17" },
  { label: "P2P Port", value: "30333 · TCP / WS · Open" },
  { label: "RPC Port", value: "9944 · Localhost secured" },
];

export const VISION_CARDS = [
  {
    tag: "01",
    title: "Confidential Execution Layer",
    body:
      "MiCells® leverages Midnight as a zero-knowledge execution environment: cryptographically-verifiable computation without compromising data privacy or decentralisation.",
  },
  {
    tag: "02",
    title: "ZK-SNARK Compliance & Protection",
    body:
      "Zero-knowledge proofs allow private computation with selective disclosure — the primitive that makes privacy-preserving infrastructure defensible to institutions, auditors and regulators.",
  },
  {
    tag: "03",
    title: "Public Infrastructure Commitment",
    body:
      "MiCells® commits to maintaining free, low-latency public relay capacity in the APAC region, strengthening peer propagation and long-term network resiliency for the Midnight ecosystem.",
  },
];

export const FAQ = [
  {
    q: "What is a Midnight relay node?",
    a: "A public full node that routes transactions, blocks and zero-knowledge proof state transitions across the peer-to-peer network without authoring blocks itself.",
  },
  {
    q: "Why do public relays matter?",
    a: "They shield block producers from denial-of-service attacks, ensure rapid global gossip propagation, and allow lightweight clients or new nodes to synchronise quickly.",
  },
  {
    q: "What hardware is recommended for running a relay?",
    a: "Minimum: 8-core CPU, 32 GB RAM, NVMe storage and 1 Gbps unmetered bandwidth. MiCells® over-provisions (18 cores, 96 GB RAM) for maximum uptime and headroom.",
  },
  {
    q: "How can I verify this node is reachable?",
    a: "Test the TCP/WS socket with `nc -zv 194.233.76.164 30333`, or inspect active peer routing in your node's info metrics after adding the multiaddr as a bootnode.",
  },
  {
    q: "What is the difference between a relay node and a block producer?",
    a: "Block producers hold private signing keys and forge blocks. Relay nodes hold no signing keys and act as defensive shields plus network propagators — routing data between producers and the wider network.",
  },
  {
    q: "How does Midnight relate to Cardano?",
    a: "Midnight is a privacy-focused partner chain built within the Cardano ecosystem. It leverages Cardano's security model while adding programmable privacy through ZK-SNARKs and Compact smart contracts.",
  },
];

// Peer visualisation targets for the network map.
// Lat/lng are approximate for equirectangular projection.
export const PEER_HUBS = [
  { code: "TYO", city: "Tokyo", lat: 35.68, lng: 139.69, ping: "38 ms" },
  { code: "SYD", city: "Sydney", lat: -33.87, lng: 151.21, ping: "94 ms" },
  { code: "FRA", city: "Frankfurt", lat: 50.11, lng: 8.68, ping: "156 ms" },
  { code: "LHR", city: "London", lat: 51.51, lng: -0.13, ping: "168 ms" },
  { code: "IAD", city: "N. Virginia", lat: 39.02, lng: -77.54, ping: "212 ms" },
];

export const HOME_HUB = {
  code: "SIN",
  city: "Singapore",
  lat: 1.35,
  lng: 103.82,
};
