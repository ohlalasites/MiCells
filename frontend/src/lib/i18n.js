// Traditional Chinese (Hong Kong) translations. Register: formal 書面語
// in 繁體字, appropriate for institutional biotech / investor communication.

export const LANGS = ["en", "zh"];
export const LANG_LABEL = { en: "EN", zh: "繁" };
export const LANG_HTML = { en: "en", zh: "zh-Hant-HK" };

const en = {
  nav: {
    framework: "Framework",
    process: "Process",
    advisory: "Advisory",
    insights: "Insights",
    register: "Register",
    infrastructure: "Infrastructure",
    partners: "Partners",
    requestInfo: "Request Information",
    toggleAria: "Switch language",
  },
  hero: {
    line1: "Biological Assurance",
    line2Italic: "Through",
    line3: "Autologous Blood Banking.",
    subheadline:
      "Headquartered in Hong Kong, MiCells® is developing infrastructure for long-term personal blood banking, enabling individuals to preserve, monitor and maintain access to their own blood for future medical use.",
    primaryCta: "Register",
    secondaryCta: "Our Framework",
  },
  pillars: {
    eyebrow: "01 · Pillars",
    headingA: "Four principles behind",
    headingB: "long-term personal blood banking.",
    items: [
      {
        title: "Medical Autonomy",
        body:
          "Your blood. Your biology. Preserved under autologous protocols.",
      },
      {
        title: "Clinical Integrity",
        body:
          "Developed alongside senior medical professionals and governed by rigorous, independently reviewed standards.",
      },
      {
        title: "Security & Traceability",
        body:
          "Comprehensive chain-of-custody and asset verification throughout the entire preservation lifecycle.",
      },
      {
        title: "Global Readiness",
        body:
          "Designed to support international mobility and emergency responsiveness across jurisdictions.",
      },
    ],
  },
  clients: {
    eyebrow: "02 · Clients",
    headingA: "Designed for individuals planning",
    headingB: "beyond conventional healthcare.",
    body:
      "MiCells® supports individuals and families seeking long-term biological preparedness through clinically governed personal blood banking.",
    list: [
      "Individuals Seeking Long-Term Preparedness",
      "High-Net-Worth Individuals",
      "Individuals With Rare Blood Types",
      "Family Offices & Legacy Planning",
      "International Healthcare Clients",
    ],
  },
  process: {
    eyebrow: "03 · Process",
    headingA: "Five stages of",
    headingB: "custody.",
    steps: [
      {
        title: "Medical Consultation",
        body:
          "Initial clinical assessment to determine suitability, individual considerations and a tailored preservation plan.",
      },
      {
        title: "Collection & Verification",
        body:
          "Controlled biological collection by accredited clinical partners, followed by identity, integrity and provenance verification.",
      },
      {
        title: "Secure Preservation",
        body:
          "Transfer into institutional preservation infrastructure under advanced cryogenic protocols and continuous monitoring.",
      },
      {
        title: "Ongoing Stewardship",
        body:
          "Lifecycle integrity management, periodic review, redundant storage architecture and confidential client reporting.",
      },
      {
        title: "Mobilisation Upon Need",
        body:
          "Coordinated release to the treating clinical institution with complete documented chain-of-custody.",
      },
    ],
  },
  framework: {
    eyebrow: "04 · Framework",
    headingA: "Built upon",
    headingB: "clinical oversight.",
    body:
      "The MiCells® framework is designed to be defensible to clinicians, auditors and regulators alike.",
    items: [
      {
        title: "Medical Advisory Board",
        body:
          "Senior medical professionals advising on clinical safety, suitability protocols and the evolving science of preservation.",
      },
      {
        title: "Compliance Philosophy",
        body:
          "A pro-active regulatory posture that anticipates institutional, cross-border and emerging compliance frameworks.",
      },
      {
        title: "Clinical Governance",
        body:
          "Independent governance over decisions impacting biological integrity, client safety and chain-of-custody.",
      },
      {
        title: "Quality Assurance",
        body:
          "Documented quality protocols across collection, transport, storage and mobilisation. Auditable end to end.",
      },
    ],
  },
  advisory: {
    eyebrow: "05 · Advisory",
    headingA: "Advisory",
    headingB: "Board.",
    ctaLabel: "Senior medical or scientific advisor?",
    ctaHeading: "We welcome confidential advisory discussions.",
    ctaButton: "Discuss an Advisory Seat",
  },
  insights: {
    eyebrow: "06 · Insights",
    headingA: "Research &",
    headingB: "perspectives.",
    read: "Read Perspective",
  },
  register: {
    eyebrow: "07 · Register Interest",
    headingA: "Register your",
    headingB: "expression of interest.",
    intro:
      "A confidential, non-binding channel for prospective clients of the MiCells® autologous blood banking programme. Your submission helps us plan capacity, refine our service design and prioritise engagement across Hong Kong and international markets.",
    assurances: [
      {
        title: "Non-binding",
        body: "No contract is created and no obligation arises on either side.",
      },
      {
        title: "Held in confidence",
        body: "Never sold, never shared with third parties. Withdrawable on request.",
      },
      {
        title: "Forecasting purpose",
        body: "Used only to model prospective client numbers and refine the offering.",
      },
    ],
    groups: {
      about: "01 · About You",
      profile: "02 · Personal Profile",
      interest: "03 · Interest & Timing",
      optional: "04 · Optional",
    },
    fields: {
      name: "Full Name",
      email: "Email",
      phone: "Phone (with country code)",
      phoneHint: "Optional",
      country: "Country of Residence",
      age: "Age Band",
      bloodType: "Blood Type",
      household: "Household Coverage",
      householdCount: "Individuals",
      motivation: "Primary Motivation",
      timeline: "Preferred Engagement Timeline",
      tier: "Preferred Service Tier",
      referral: "How you heard about us",
      referralHint: "Optional",
      notes: "Additional context",
      notesPlaceholder: "Anything else you would like us to know.",
    },
    options: {
      age: [
        { v: "18-30", l: "18 – 30" },
        { v: "31-45", l: "31 – 45" },
        { v: "46-60", l: "46 – 60" },
        { v: "61-75", l: "61 – 75" },
        { v: "76+", l: "76 +" },
        { v: "prefer_not", l: "Prefer not to say" },
      ],
      bloodType: [
        { v: "unknown", l: "Unknown" },
        { v: "A+", l: "A+" },
        { v: "A-", l: "A−" },
        { v: "B+", l: "B+" },
        { v: "B-", l: "B−" },
        { v: "AB+", l: "AB+" },
        { v: "AB-", l: "AB−" },
        { v: "O+", l: "O+" },
        { v: "O-", l: "O−" },
        { v: "rare", l: "Rare / other" },
      ],
      household: [
        { v: "self", l: "Self only" },
        { v: "self_partner", l: "Self and partner" },
        { v: "family", l: "Whole family" },
        { v: "extended", l: "Extended family / office" },
      ],
      motivation: [
        { v: "preparedness", l: "Personal medical preparedness" },
        { v: "rare_blood", l: "Rare blood type" },
        { v: "family_history", l: "Family medical history" },
        { v: "longevity", l: "Longevity planning" },
        { v: "executive", l: "Executive or high-mobility lifestyle" },
        { v: "other", l: "Other" },
      ],
      timeline: [
        { v: "immediate", l: "Immediate (0 – 3 months)" },
        { v: "3-6", l: "3 – 6 months" },
        { v: "6-12", l: "6 – 12 months" },
        { v: "exploratory", l: "Exploratory only" },
      ],
      tier: [
        { v: "standard", l: "Standard" },
        { v: "priority", l: "Priority" },
        { v: "family", l: "Family" },
        { v: "undecided", l: "Undecided" },
      ],
    },
    terms: {
      eyebrow: "Non-Binding Terms",
      body:
        "By submitting, you acknowledge that this expression of interest is not a contract and creates no legal or financial obligation between you and MiCells®. Information provided will be used solely to forecast prospective client numbers, refine service design and inform capacity planning. Submissions are treated in confidence, never sold or shared with third parties, and may be withdrawn at any time by writing to info@micells.io.",
      consent:
        "I understand this is a non-binding expression of interest and consent to MiCells® holding this information for demand-forecasting and service-design purposes.",
    },
    submit: "Submit Expression of Interest",
    submitting: "Submitting…",
    validationRequired: "Please complete name and email to continue.",
    validationConsent: "Please tick the consent box to submit.",
    successTitle: "Thank you.",
    successBody:
      "Your expression of interest has been received. It will be treated in confidence and used only for demand-forecasting and service-design purposes. A member of the MiCells® team will be in touch from",
    successBodyTail: " should further information become relevant.",
    reset: "Submit another expression of interest",
    toastSuccess: "Expression of interest received.",
    toastFail:
      "Unable to submit. Please try again or email info@micells.io directly.",
  },
  investors: {
    eyebrow: "08 · Partners",
    headingA: "Partners &",
    headingB: "Investors.",
    body:
      "MiCells® is a Hong Kong-based healthcare infrastructure company operating at the intersection of preservation and long-term medical continuity. Engagement is by introduction and qualified enquiry.",
    tracks: [
      {
        label: "Strategic Partnerships",
        body:
          "Clinical, preservation, logistics and healthcare partners supporting the build-out of long-term personal blood banking infrastructure.",
      },
      {
        label: "Medical & Strategic Advisory",
        body:
          "Supporting clinical governance, regulatory development and long-term healthcare deployment.",
      },
      {
        label: "Investor Enquiries",
        body:
          "Qualified investor enquiries from family offices, institutional funds and aligned long-horizon capital.",
      },
    ],
    materialsLabel: "Investor Materials",
    materialsBody:
      "Investor information is available on request to qualified parties.",
    cta: "Request Investor Information",
    trackPrefix: "Track",
  },
  contact: {
    eyebrow: "09 · Contact",
    headingA: "Speak with",
    headingB: "MiCells®.",
    intro:
      "Enquiries are handled in confidence. A member of the MiCells® team will respond from",
    directLabel: "Direct",
    locationLabel: "Location",
    locationValue: "Hong Kong SAR",
    fields: {
      name: "Name",
      organisation: "Organisation",
      email: "Email",
      country: "Country",
      enquiryType: "Enquiry Type",
      message: "Message",
      messagePlaceholder: "Briefly describe the nature of your enquiry.",
    },
    types: {
      general: "General Enquiry",
      investor: "Investor Information",
      information: "Service Information",
      advisory: "Advisory / Partnership",
    },
    disclaimer:
      "By submitting, you consent to MiCells® contacting you in relation to this enquiry. We do not share enquirer details with third parties.",
    submit: "Send Enquiry",
    submitting: "Submitting…",
    successTitle: "Enquiry received.",
    successBody:
      "Thank you for contacting MiCells®. A member of our team will respond from",
    successBodyTail:
      ". If your enquiry is time-sensitive, please email us directly.",
    reset: "Submit another enquiry",
    validationRequired: "Please complete name, email and message.",
    toastSuccess:
      "Enquiry received. Our team will respond from info@micells.io.",
    toastFail:
      "Unable to submit enquiry. Please try again or email info@micells.io directly.",
  },
  footer: {
    description:
      "Medical infrastructure enabling individuals to preserve and access their own blood when required.",
    address: [
      "12F / Room 14A, Fonda Building",
      "37–39 Au Pui Wan Street",
      "Fo Tan, Sha Tin, New Territories",
    ],
    location: "Hong Kong SAR · Asia",
    contact: "Contact",
    connect: "Connect",
    legal: "Legal",
    linkedin: "LinkedIn",
    x: "X / Twitter",
    infrastructure: "Infrastructure",
    midnightRelay: "Midnight Relay",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    copyright: "© {year} MiCells®. All rights reserved.",
  },
  article: {
    close: "Close",
    published:
      "Published by MiCells®. For enquiries on any of the themes discussed, please contact us.",
    cta: "Speak with MiCells®",
    minutesSuffix: "min",
  },
  relay: {
    badge_syncing: "Node Online · Syncing",
    badge_synced: "Node Online · Fully Synced",
    badge_last_verified: "Verified Operator Snapshot",
    eyebrow: "Infrastructure · Public Node",
    hero_title_a: "Powering privacy-preserving",
    hero_title_b: "infrastructure",
    hero_title_c: "for Midnight.",
    hero_desc:
      "MiCells® operates a high-availability, high-throughput public relay node in Singapore supporting the Midnight Network ecosystem. Peer with us to strengthen APAC propagation and network resilience.",
    peer_count_label: "Active Peers",
    peer_count_suffix: "connected",
    sync_progress_label: "Sync Progress",
    uptime_label: "Node Status",
    uptime_value: "Monitored",
    primary_multiaddr_label: "Primary Multiaddr · IPv4",
    ws_tcp: "WS · TCP",
    peer_id_label: "Peer ID",
    copy_multiaddr: "Click to Copy Multiaddr",
    copy_multiaddr_short: "Copy Multiaddr",
    copy_peer_id: "Copy Peer ID",
    copy_short: "Copy",
    copied: "Copied",
    copied_toast: "Copied to clipboard",
    copy_fail_toast: "Copy failed — please copy manually.",
    peer_with_us: "Peer with MiCells®",
    sec1_tag: "01 · Strategic Vision",
    sec1_title_a: "Why MiCells® operates",
    sec1_title_b: "this node.",
    sec1_desc:
      "A privacy-preserving compute layer is a prerequisite for institutional-grade healthcare, financial and identity workloads. MiCells® contributes public relay capacity as a long-term act of network stewardship.",
    card1_title: "Confidential Execution Layer",
    card1_desc:
      "MiCells® leverages Midnight as a zero-knowledge execution environment: cryptographically-verifiable computation without compromising data privacy or decentralisation.",
    card2_title: "ZK-SNARK Compliance & Protection",
    card2_desc:
      "Zero-knowledge proofs allow private computation with selective disclosure — the primitive that makes privacy-preserving infrastructure defensible to institutions, auditors and regulators.",
    card3_title: "Public Infrastructure Commitment",
    card3_desc:
      "MiCells® commits to maintaining free, low-latency public relay capacity in the APAC region, strengthening peer propagation and long-term network resiliency for the Midnight ecosystem.",
    sec2_tag: "02 · Hardware & Software",
    sec2_title_a: "Enterprise readiness",
    sec2_title_b: "by design.",
    sec2_desc:
      "Over-provisioned datacenter hardware and a hardened, audited software stack — the minimum baseline for infrastructure MiCells® is willing to run under its own name.",
    hw_title: "Server Specifications",
    hw_loc_label: "Location",
    hw_loc_val: "Singapore Datacenter · APAC low-latency hub",
    hw_cpu_label: "Processor",
    hw_cpu_val: "18-Core AMD EPYC",
    hw_ram_label: "Memory",
    hw_ram_val: "96 GB High-Speed ECC RAM",
    hw_disk_label: "Storage",
    hw_disk_val: "1.8 TB NVMe · Enterprise Datacenter Grade",
    hw_os_label: "Operating System",
    hw_os_val: "Ubuntu 24.04 LTS",
    sw_title: "Core Software Stack",
    sw_p2p_label: "P2P Port",
    sw_p2p_val: "30333 · TCP / WS · Open",
    sw_rpc_label: "RPC Endpoint",
    sw_rpc_val:
      "Secured Localhost — public WSS / HTTPS via rpc.micells.io pending",
    sec3_tag: "03 · Connection Guide",
    sec3_title_a: "Add the relay as",
    sec3_title_b: "a bootnode.",
    sec3_desc:
      "Choose the integration path that matches your setup. All snippets use the verified IPv4 multiaddr.",
    firewall_title: "Port & Firewall Reminder",
    firewall_desc:
      "Ensure outgoing TCP on port 30333 is unblocked so your node can establish the WebSocket connection with MiCells-Midnight-Relay. RPC port 9944 is intentionally bound to localhost on our server for security; public HTTPS / WSS access will be routed through rpc.micells.io.",
    sec4_tag: "04 · Network Reach",
    sec4_title_a: "Live peering topology",
    sec4_title_b: "from Singapore.",
    sec4_desc:
      "Dynamic P2P gossip mesh visualisation mapping active connections into and out of the Singapore hub node.",
    map_disclaimer:
      "Live node metrics and peer locations are refreshed via JSON-RPC endpoint (rpc.micells.io).",
    map_source_snapshot: "Operator snapshot · updated {ts}",
    map_source_live: "Live · fetched via rpc.micells.io",
    map_legend_home: "Home",
    map_legend_peer: "Peer",
    sec5_tag: "05 · Knowledge Base",
    sec5_title_a: "Frequently asked",
    sec5_title_b: "questions.",
    faq1_q: "What is a Midnight relay node?",
    faq1_a:
      "A public full node that routes transactions, blocks and zero-knowledge proof state transitions across the peer-to-peer network without authoring blocks itself.",
    faq2_q: "Why do public relays matter?",
    faq2_a:
      "They shield block producers from denial-of-service attacks, ensure rapid global gossip propagation, and allow lightweight clients or new nodes to synchronise quickly.",
    faq3_q: "What hardware do we recommend?",
    faq3_a:
      "Minimum: 8-core CPU, 32 GB RAM, NVMe storage and 1 Gbps unmetered bandwidth. MiCells® over-provisions (18 cores, 96 GB RAM) for maximum uptime and headroom.",
    faq4_q: "How can someone verify the node is online?",
    faq4_a:
      "Test the TCP/WS socket with `nc -zv 194.233.76.164 30333`, or inspect active peer routing in your node's info metrics after adding the multiaddr as a bootnode.",
    faq5_q: "What is the difference between a relay node and a block producer?",
    faq5_a:
      "Block producers hold private signing keys and forge blocks. Relay nodes hold no signing keys and act as defensive shields plus network propagators — routing data between producers and the wider network.",
    faq6_q: "How does Midnight relate to Cardano?",
    faq6_a:
      "Midnight is a privacy-focused partner chain built within the Cardano ecosystem. It leverages Cardano's security model while adding programmable privacy through ZK-SNARKs and Compact smart contracts.",
    sec6_tag: "06 · Peer With Us",
    sec6_title_a: "Building on Midnight?",
    sec6_title_b: "Peer with MiCells®.",
    sec6_desc:
      "Add the multiaddr as a bootnode, or reach out to our infrastructure team for a private peering conversation. We respond within one business day.",
    cta_docs: "Midnight Documentation",
    cta_contact: "Contact Infrastructure Team",
    home_hub_label: "MiCells Relay",
    home_hub_sub: "Home node",
  },
};

const zh = {
  nav: {
    framework: "框架",
    process: "流程",
    advisory: "顧問委員會",
    insights: "觀點",
    register: "登記",
    infrastructure: "基礎設施",
    partners: "合作夥伴",
    requestInfo: "索取資料",
    toggleAria: "切換語言",
  },
  hero: {
    line1: "生物保障",
    line2Italic: "源於",
    line3: "自體血液儲存。",
    subheadline:
      "MiCells® 總部設於香港,致力打造長期個人血液儲存的基礎設施,讓個人得以保存、監察並持續掌握自身血液,以備未來醫療所需。",
    primaryCta: "登記",
    secondaryCta: "了解框架",
  },
  pillars: {
    eyebrow: "01 · 核心理念",
    headingA: "支撐長期個人血液儲存的",
    headingB: "四項核心理念。",
    items: [
      {
        title: "醫療自主",
        body: "您的血液。您的生命。以自體專屬協議妥善儲存。",
      },
      {
        title: "臨床誠信",
        body: "與資深醫療專業人員共同發展,並受獨立審查的嚴謹標準所監督。",
      },
      {
        title: "安全與可追溯",
        body: "完整的監管鏈及資產核實貫穿整個保存週期。",
      },
      {
        title: "全球應變準備",
        body: "支援國際流動及跨司法管轄區的緊急應變需求。",
      },
    ],
  },
  clients: {
    eyebrow: "02 · 服務對象",
    headingA: "為超越傳統醫療規劃",
    headingB: "而作準備的人士而設。",
    body:
      "MiCells® 透過受臨床監管的個人血液儲存服務,支持追求長遠生物準備的個人及家庭。",
    list: [
      "追求長遠準備的個人",
      "高淨值人士",
      "罕見血型人士",
      "家族辦公室與傳承規劃",
      "國際醫療客戶",
    ],
  },
  process: {
    eyebrow: "03 · 流程",
    headingA: "五個階段的",
    headingB: "託管流程。",
    steps: [
      {
        title: "醫療諮詢",
        body: "初步臨床評估,以判定適合度、個別考量及量身訂造的儲存方案。",
      },
      {
        title: "採集與核實",
        body:
          "由獲認證的臨床合作夥伴進行受控生物採集,繼而進行身份、完整性及來源核實。",
      },
      {
        title: "安全保存",
        body: "於先進冷凍協議及持續監察下,轉移至機構級保存基礎設施。",
      },
      {
        title: "持續管理",
        body: "週期完整性管理、定期審查、備援儲存架構及機密客戶報告。",
      },
      {
        title: "有需要時的調動",
        body: "於完整書面監管鏈紀錄下,協調釋出至治療機構。",
      },
    ],
  },
  framework: {
    eyebrow: "04 · 框架",
    headingA: "建基於",
    headingB: "臨床監督之上。",
    body:
      "MiCells® 的框架設計旨在於臨床醫生、審計人員及監管機構面前皆可經得起考驗。",
    items: [
      {
        title: "醫學顧問委員會",
        body: "資深醫療專業人員就臨床安全、適合度協議及不斷演進的保存科學提供指導。",
      },
      {
        title: "合規理念",
        body: "主動的監管姿態,前瞻機構、跨境及新興的合規框架。",
      },
      {
        title: "臨床管治",
        body: "對影響生物完整性、客戶安全及監管鏈的決策實施獨立管治。",
      },
      {
        title: "品質保證",
        body: "覆蓋採集、運輸、儲存及調動的完整品質協議,全流程可審計。",
      },
    ],
  },
  advisory: {
    eyebrow: "05 · 顧問委員會",
    headingA: "顧問",
    headingB: "委員會。",
    ctaLabel: "資深醫學或科學顧問?",
    ctaHeading: "我們歡迎機密的顧問討論。",
    ctaButton: "洽談顧問席位",
  },
  insights: {
    eyebrow: "06 · 觀點",
    headingA: "研究與",
    headingB: "觀點。",
    read: "閱讀觀點",
  },
  register: {
    eyebrow: "07 · 意向登記",
    headingA: "登記您的",
    headingB: "意向表達。",
    intro:
      "為 MiCells® 自體血液儲存計劃之潛在客戶而設的保密、不具約束力之登記渠道。您的提交將協助我們規劃容量、優化服務設計,並就香港及國際市場之洽談安排排序。",
    assurances: [
      {
        title: "不具約束力",
        body: "不構成任何合約,雙方均無義務。",
      },
      {
        title: "嚴格保密",
        body: "絕不出售或與第三方分享,可隨時要求撤回。",
      },
      {
        title: "僅供需求預測",
        body: "僅用於推算潛在客戶數目及優化服務設計。",
      },
    ],
    groups: {
      about: "01 · 個人資料",
      profile: "02 · 個人背景",
      interest: "03 · 意向與時程",
      optional: "04 · 選填項目",
    },
    fields: {
      name: "姓名",
      email: "電郵",
      phone: "電話(含國碼)",
      phoneHint: "選填",
      country: "居住國家 / 地區",
      age: "年齡層",
      bloodType: "血型",
      household: "家庭覆蓋範圍",
      householdCount: "人數",
      motivation: "主要考量",
      timeline: "偏好洽談時程",
      tier: "偏好服務級別",
      referral: "得知本公司途徑",
      referralHint: "選填",
      notes: "其他補充事項",
      notesPlaceholder: "如有任何背景、疑問或偏好,請於此說明。",
    },
    options: {
      age: [
        { v: "18-30", l: "18 – 30 歲" },
        { v: "31-45", l: "31 – 45 歲" },
        { v: "46-60", l: "46 – 60 歲" },
        { v: "61-75", l: "61 – 75 歲" },
        { v: "76+", l: "76 歲以上" },
        { v: "prefer_not", l: "不願透露" },
      ],
      bloodType: [
        { v: "unknown", l: "未知" },
        { v: "A+", l: "A+" },
        { v: "A-", l: "A−" },
        { v: "B+", l: "B+" },
        { v: "B-", l: "B−" },
        { v: "AB+", l: "AB+" },
        { v: "AB-", l: "AB−" },
        { v: "O+", l: "O+" },
        { v: "O-", l: "O−" },
        { v: "rare", l: "罕見 / 其他" },
      ],
      household: [
        { v: "self", l: "本人" },
        { v: "self_partner", l: "本人及伴侶" },
        { v: "family", l: "整個家庭" },
        { v: "extended", l: "家族 / 家族辦公室" },
      ],
      motivation: [
        { v: "preparedness", l: "個人醫療準備" },
        { v: "rare_blood", l: "罕見血型" },
        { v: "family_history", l: "家族病史" },
        { v: "longevity", l: "長壽規劃" },
        { v: "executive", l: "高階或高流動性生活方式" },
        { v: "other", l: "其他" },
      ],
      timeline: [
        { v: "immediate", l: "即時(0 – 3 個月)" },
        { v: "3-6", l: "3 – 6 個月" },
        { v: "6-12", l: "6 – 12 個月" },
        { v: "exploratory", l: "純粹探索" },
      ],
      tier: [
        { v: "standard", l: "標準" },
        { v: "priority", l: "優先" },
        { v: "family", l: "家庭" },
        { v: "undecided", l: "尚未決定" },
      ],
    },
    terms: {
      eyebrow: "不具約束力之條款",
      body:
        "提交即表示閣下明白此意向表達並不構成合約,亦不對閣下與 MiCells® 產生任何法律或財務義務。所提供資料將僅用於預測潛在客戶數目、優化服務設計及規劃容量。所有提交均以機密方式處理,絕不出售或與第三方分享,並可隨時透過電郵至 info@micells.io 撤回。",
      consent:
        "本人明白此為不具法律約束力之意向表達,並同意 MiCells® 為需求預測及服務設計目的保存本表所載資料。",
    },
    submit: "提交意向登記",
    submitting: "傳送中…",
    validationRequired: "請填寫姓名及電郵以繼續。",
    validationConsent: "請勾選同意項以提交。",
    successTitle: "感謝您。",
    successBody:
      "您的意向登記已收悉。我們將以機密方式處理,並僅用於需求預測及服務設計。如日後有相關資訊,MiCells® 團隊將以下列電郵與閣下聯絡:",
    successBodyTail: "。",
    reset: "提交另一項意向登記",
    toastSuccess: "意向登記已收悉。",
    toastFail: "無法提交。請重試或直接電郵至 info@micells.io。",
  },
  investors: {
    eyebrow: "08 · 合作夥伴",
    headingA: "合作夥伴與",
    headingB: "投資者。",
    body:
      "MiCells® 是一間總部設於香港的醫療基礎設施公司,於保存與長期醫療連續性之交匯處運作。合作透過引薦及合資格查詢進行。",
    tracks: [
      {
        label: "策略性合作",
        body:
          "支持長期個人血液儲存基礎設施建設的臨床、保存、物流及醫療合作夥伴。",
      },
      {
        label: "醫學與策略顧問",
        body: "支援臨床管治、監管發展及長遠醫療部署。",
      },
      {
        label: "投資者查詢",
        body:
          "來自家族辦公室、機構基金及具長期視野資本的合資格投資者查詢。",
      },
    ],
    materialsLabel: "投資者資料",
    materialsBody: "投資者資料按合資格方要求提供。",
    cta: "索取投資者資料",
    trackPrefix: "軌道",
  },
  contact: {
    eyebrow: "09 · 聯絡",
    headingA: "聯絡",
    headingB: "MiCells®。",
    intro:
      "查詢均以機密方式處理。MiCells® 團隊將以下列電郵回覆閣下:",
    directLabel: "直接聯絡",
    locationLabel: "地點",
    locationValue: "香港特別行政區",
    fields: {
      name: "姓名",
      organisation: "機構",
      email: "電郵",
      country: "國家",
      enquiryType: "查詢類型",
      message: "訊息",
      messagePlaceholder: "請簡要描述查詢性質。",
    },
    types: {
      general: "一般查詢",
      investor: "投資者資料",
      information: "服務資料",
      advisory: "顧問 / 合作",
    },
    disclaimer:
      "提交即表示閣下同意 MiCells® 就此查詢與您聯絡。我們不會與第三方分享查詢者資料。",
    submit: "發送查詢",
    submitting: "傳送中…",
    successTitle: "查詢已收悉。",
    successBody:
      "感謝您聯絡 MiCells®。我們的團隊將以下列電郵回覆:",
    successBodyTail: "。如查詢具時效性,請直接透過電郵聯絡我們。",
    reset: "提交另一項查詢",
    validationRequired: "請填寫姓名、電郵及訊息。",
    toastSuccess:
      "查詢已收悉。我們的團隊將以 info@micells.io 回覆閣下。",
    toastFail:
      "無法提交查詢。請重試或直接電郵至 info@micells.io。",
  },
  footer: {
    description: "醫療基礎設施,讓個人於有需要時保存並取用自身血液。",
    address: [
      "新界沙田火炭",
      "坳背灣街 37–39 號",
      "豐達中心 12 樓 14A 室",
    ],
    location: "香港特別行政區 · 亞洲",
    contact: "聯絡",
    connect: "社交媒體",
    legal: "法律",
    linkedin: "領英",
    x: "X / Twitter",
    infrastructure: "基礎設施",
    midnightRelay: "Midnight Relay",
    privacy: "私隱政策",
    terms: "使用條款",
    copyright: "© {year} MiCells®。版權所有。",
  },
  article: {
    close: "關閉",
    published:
      "由 MiCells® 發表。如就所述任何主題有查詢,歡迎與我們聯絡。",
    cta: "聯絡 MiCells®",
    minutesSuffix: "分鐘",
  },
  relay: {
    badge_syncing: "節點在線 · 同步中",
    badge_synced: "節點在線 · 完全同步",
    badge_last_verified: "已驗證運維快照",
    eyebrow: "基礎設施 · 公共節點",
    hero_title_a: "為 Midnight 提供",
    hero_title_b: "隱私保護",
    hero_title_c: "基礎設施。",
    hero_desc:
      "MiCells® 於新加坡運營高可用、高吞吐量的 Midnight 公共中繼節點,支援 Midnight 網絡生態發展。歡迎與我們建立對等連接,共同增強亞太地區的節點傳播效率與網絡韌性。",
    peer_count_label: "活躍對等節點",
    peer_count_suffix: "已連接",
    sync_progress_label: "同步進度",
    uptime_label: "節點狀態",
    uptime_value: "已監控",
    primary_multiaddr_label: "主要 Multiaddr · IPv4",
    ws_tcp: "WS · TCP",
    peer_id_label: "Peer ID",
    copy_multiaddr: "點擊複製 Multiaddr",
    copy_multiaddr_short: "複製 Multiaddr",
    copy_peer_id: "複製 Peer ID",
    copy_short: "複製",
    copied: "已複製",
    copied_toast: "已複製至剪貼板",
    copy_fail_toast: "複製失敗 — 請手動複製。",
    peer_with_us: "與 MiCells® 對等",
    sec1_tag: "01 · 戰略願景",
    sec1_title_a: "為何 MiCells®",
    sec1_title_b: "運營此節點。",
    sec1_desc:
      "隱私保護運算層是機構級醫療、金融及身分工作負載的先決條件。MiCells® 貢獻公共中繼容量,以此作為對網絡長期治理與維護的承諾。",
    card1_title: "機密執行層",
    card1_desc:
      "MiCells® 將 Midnight 用作零知識執行環境:提供密碼學可驗證的運算能力,同時不犧牲數據隱私或去中心化特性。",
    card2_title: "ZK-SNARK 合規與保護",
    card2_desc:
      "零知識證明允許具備選擇性披露的私密運算 — 這一關鍵原語使隱私保護基礎設施得以在機構、審計人員及監管機構面前站得住腳。",
    card3_title: "公共基礎設施承諾",
    card3_desc:
      "MiCells® 承諾於亞太地區維持免費、低延遲的公共中繼容量,強化對等節點傳播,保障 Midnight 生態的長期網絡韌性。",
    sec2_tag: "02 · 硬件與軟件",
    sec2_title_a: "企業級就緒",
    sec2_title_b: "架構。",
    sec2_desc:
      "超規格數據中心硬件,配以經過強化及審計的軟件堆疊 — 這是 MiCells® 願意以自身品牌運行的基礎設施最低標準。",
    hw_title: "伺服器規格",
    hw_loc_label: "位置",
    hw_loc_val: "新加坡數據中心 · 亞太低延遲樞紐",
    hw_cpu_label: "處理器",
    hw_cpu_val: "18 核 AMD EPYC",
    hw_ram_label: "記憶體",
    hw_ram_val: "96 GB 高速 ECC RAM",
    hw_disk_label: "儲存",
    hw_disk_val: "1.8 TB NVMe · 企業級數據中心規格",
    hw_os_label: "作業系統",
    hw_os_val: "Ubuntu 24.04 LTS",
    sw_title: "核心軟件堆疊",
    sw_p2p_label: "P2P 端口",
    sw_p2p_val: "30333 · TCP / WS · 公開",
    sw_rpc_label: "RPC 端點",
    sw_rpc_val:
      "本地隔離安全 — 公共 WSS / HTTPS 將透過 rpc.micells.io 提供",
    sec3_tag: "03 · 連接指南",
    sec3_title_a: "將中繼加入為",
    sec3_title_b: "Bootnode。",
    sec3_desc:
      "選擇適合您配置的整合方式。所有代碼片段均使用經驗證的 IPv4 multiaddr。",
    firewall_title: "端口與防火牆提示",
    firewall_desc:
      "請確保出站 TCP 端口 30333 未被封鎖,以便您的節點與 MiCells-Midnight-Relay 建立 WebSocket 連接。基於安全考量,RPC 端口 9944 目前綁定於伺服器本地;公共 HTTPS / WSS 存取將透過 rpc.micells.io 統一提供。",
    sec4_tag: "04 · 網絡覆蓋",
    sec4_title_a: "來自新加坡的",
    sec4_title_b: "實時對等拓撲。",
    sec4_desc:
      "動態 P2P Gossip 網絡可視化 — 展示新加坡樞紐節點的進出連接。",
    map_disclaimer:
      "實時節點指標及對等節點位置透過 JSON-RPC 端點(rpc.micells.io)動態更新。",
    map_source_snapshot: "運維快照 · 更新於 {ts}",
    map_source_live: "實時 · 由 rpc.micells.io 取得",
    map_legend_home: "本節點",
    map_legend_peer: "對等",
    sec5_tag: "05 · 知識庫",
    sec5_title_a: "常見",
    sec5_title_b: "問題。",
    faq1_q: "什麼是 Midnight 中繼節點?",
    faq1_a:
      "公共全節點,在對等網絡中路由交易、區塊及零知識證明狀態轉換,本身並不參與出塊。",
    faq2_q: "為何公共中繼節點至關重要?",
    faq2_a:
      "它們保護出塊節點免受拒絕服務攻擊、確保全球 gossip 快速傳播,並讓輕量客戶端或新節點快速同步。",
    faq3_q: "推薦的硬件配置為何?",
    faq3_a:
      "最低配置:8 核 CPU、32 GB 記憶體、NVMe 儲存及 1 Gbps 無限流量頻寬。MiCells® 採用超規格架構(18 核、96 GB 記憶體)以確保最高可用性與效能冗餘。",
    faq4_q: "如何驗證節點是否在線?",
    faq4_a:
      "使用 `nc -zv 194.233.76.164 30333` 測試 TCP/WS 通訊端;或將 multiaddr 加入為 bootnode 後,檢視您節點 info 指標中的對等節點路由。",
    faq5_q: "中繼節點與出塊節點有何分別?",
    faq5_a:
      "出塊節點持有私密簽章密鑰,負責產生區塊。中繼節點不持出塊密鑰,擔當防禦屏障及網絡傳播者 — 在出塊節點與更廣網絡之間路由數據。",
    faq6_q: "Midnight 與 Cardano 的關係?",
    faq6_a:
      "Midnight 為 Cardano 生態內著重隱私的合作鏈。它繼承了 Cardano 的安全模型,並透過 ZK-SNARKs 及 Compact 智能合約新增可編程隱私功能。",
    sec6_tag: "06 · 與我們對等",
    sec6_title_a: "正在構建 Midnight?",
    sec6_title_b: "與 MiCells® 對等。",
    sec6_desc:
      "將 multiaddr 加入為 bootnode,或聯絡我們的基礎設施團隊討論私密對等連接。我們會於一個工作日內回覆。",
    cta_docs: "Midnight 官方文檔",
    cta_contact: "聯絡基礎設施團隊",
    home_hub_label: "MiCells 中繼",
    home_hub_sub: "本節點",
  },
};

export const STRINGS = { en, zh };
