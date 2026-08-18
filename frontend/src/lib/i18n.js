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
};

const zh = {
  nav: {
    framework: "框架",
    process: "流程",
    advisory: "顧問委員會",
    insights: "觀點",
    register: "登記",
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
};

export const STRINGS = { en, zh };
