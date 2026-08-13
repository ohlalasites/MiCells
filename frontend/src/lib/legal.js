// Legal documents (Privacy Policy, Terms of Use) — bilingual EN + zh-Hant.
// Rendered inside ArticleModal via the localise() adapter below.

const TODAY = { en: "Updated February 2026", zh: "更新於 2026 年 2 月" };

const RAW = {
  privacy: {
    id: "privacy-policy",
    tag: { en: "Privacy Policy", zh: "私隱政策" },
    title: { en: "Privacy Policy", zh: "私隱政策" },
    minutes: TODAY,
    body: {
      en: [
        "MiCells® (\"MiCells®\", \"we\", \"us\" or \"our\") is committed to protecting the privacy of every individual, family office and institution that interacts with us through this website. This Privacy Policy explains what information we collect, how we use it and the choices you have in relation to it.",
        "Information you provide directly. When you submit an enquiry through our contact form, you choose to share your name, organisation (where applicable), email address, country of residence and the content of your message. We treat this information as confidential and use it solely for the purpose of responding to your enquiry and any subsequent correspondence you initiate with us.",
        "Information collected automatically. When you visit our website, our hosting infrastructure may automatically log standard technical information such as your IP address, browser type, device characteristics, the pages you view and the time of your visit. This information is used to maintain site availability, protect against abuse and improve the experience offered to legitimate visitors.",
        "Cookies and similar technologies. We aim to minimise the use of cookies. Where cookies are used, they are limited to functions strictly necessary for the operation of the website. We do not currently use advertising cookies or sell data to advertising networks.",
        "How we use your information. We use the information described above to respond to enquiries, to fulfil any obligations agreed with you, to maintain the integrity and security of our infrastructure, to comply with applicable legal and regulatory requirements, and to communicate with you in relation to topics you have expressly raised with us.",
        "Lawful basis. Where required, we rely on your consent (provided by your voluntary submission of the contact form), the necessity of taking steps at your request prior to entering into any service relationship, and our legitimate interest in operating, securing and improving the website.",
        "Sharing of information. We do not sell, rent or trade personal information. We share information only with carefully selected service providers acting on our behalf (for example, transactional email delivery and infrastructure providers), and only to the extent strictly necessary to provide the services you have requested or that we lawfully use. All such providers are required to handle data confidentially and in compliance with applicable law.",
        "International transfers. As we operate internationally, your information may be processed in jurisdictions outside the country in which you reside. Where this is the case, we take appropriate steps to ensure that your information continues to receive a level of protection consistent with this Policy.",
        "Data retention. We retain enquiry information for as long as is reasonably necessary to respond to your enquiry, to maintain a coherent record of correspondence and to comply with applicable legal, regulatory and audit obligations. Where information is no longer required, it is securely deleted or anonymised.",
        "Your rights. Subject to applicable law, you may request access to the personal information we hold about you, request correction of inaccurate information, request deletion of information that is no longer required, restrict or object to certain processing activities and request that your information be transferred to you in a portable format. To exercise any of these rights please contact us using the details below.",
        "Security. We apply organisational, technical and procedural safeguards designed to protect the information you share with us against unauthorised access, alteration, disclosure or destruction. While no system can be guaranteed entirely secure, we treat the protection of the information you provide as a core operational priority.",
        "Children. This website is not directed at children and we do not knowingly collect information from individuals under the age of eighteen. If you believe a minor has submitted information to us, please contact us and we will take appropriate steps to delete it.",
        "Changes to this Policy. We may update this Privacy Policy from time to time to reflect changes in our practices, services or the legal and regulatory environment. The date at the top of this document indicates when it was last revised. Material changes will be communicated through the website in a prominent manner.",
        "Contact. Privacy enquiries, including the exercise of any of the rights described above, should be directed in writing to info@micells.io. We aim to respond to all reasonable requests within the timeframes required by applicable law.",
      ],
      zh: [
        "MiCells®(下稱「MiCells®」、「我們」)致力保障每一位透過本網站與我們接觸的個人、家族辦公室及機構的私隱。本私隱政策說明我們收集何種資料、如何使用該等資料,以及閣下就此享有的選擇。",
        "閣下直接提供的資料。當閣下透過聯絡表格提交查詢時,閣下選擇分享的資料包括姓名、機構(如適用)、電郵地址、居住國家及訊息內容。我們視此等資料為機密,並僅用於回覆閣下查詢及其後由閣下發起之相關通訊。",
        "自動收集的資料。當閣下瀏覽本網站時,我們的主機基礎設施可能自動記錄標準技術資料,如 IP 位址、瀏覽器類型、裝置特徵、閣下瀏覽的頁面及訪問時間。此等資料用於維持網站運作、防範濫用,並改善合法訪客的使用體驗。",
        "Cookies 及類似技術。我們致力減少 Cookies 的使用。凡有使用者,均僅限於網站運作嚴格必需之功能。我們目前並無使用廣告 Cookies,亦不會將資料售予廣告網絡。",
        "資料用途。我們將上述資料用於回覆查詢、履行與閣下協議之義務、維護基礎設施的完整性與安全、遵守適用法律及監管要求,以及就閣下明確提出之事項與閣下溝通。",
        "合法依據。如適用,我們的合法依據包括:閣下同意(透過自願提交聯絡表格作出)、應閣下要求於建立任何服務關係前採取步驟之必要,以及我們營運、保護及改善本網站的正當利益。",
        "資料分享。我們不會出售、租用或交易個人資料。我們僅與代表我們行事並經審慎挑選的服務供應商(例如交易性電郵傳送及基礎設施供應商)分享資料,且僅限於提供閣下所要求之服務或我們合法使用所嚴格必需的範圍。所有此類供應商均須以機密方式處理資料,並遵守適用法律。",
        "跨境傳輸。由於我們於國際範圍運作,閣下的資料可能於閣下居住國家以外的司法管轄區處理。凡屬此等情況,我們將採取適當措施確保閣下資料繼續獲得符合本政策的保護水平。",
        "資料保留。我們保留查詢資料的期間,以合理必要之時間為限,以便回覆查詢、維持通訊之完整紀錄,並遵守適用法律、監管及審計要求。當有關資料不再需要時,將以安全方式刪除或匿名化處理。",
        "閣下的權利。在適用法律的規限下,閣下可要求查閱我們持有之閣下個人資料、更正不準確資料、刪除不再需要的資料、限制或反對特定處理活動,以及以可攜格式獲取閣下資料之副本。如欲行使上述任何權利,請以下列聯絡方式與我們聯繫。",
        "資料安全。我們採取組織性、技術性及程序性的保障措施,以保護閣下與我們分享的資料免受未經授權的取用、更改、披露或銷毀。雖然任何系統均無法保證絕對安全,惟保護閣下所提供之資料乃我們營運上的核心優先事項。",
        "兒童。本網站並非以兒童為對象,我們亦不會蓄意收集十八歲以下人士之資料。如閣下相信有未成年人向我們提交資料,請與我們聯繫,我們將採取適當措施予以刪除。",
        "政策變更。我們可能不時更新本私隱政策,以反映我們的實務、服務或法律及監管環境的變化。文件頂部日期為最近一次修訂日期。重大變更將於網站上顯著方式告知。",
        "聯絡我們。私隱查詢(包括行使上述任何權利)應以書面形式發送至 info@micells.io。我們致力於適用法律所要求之時限內回覆所有合理要求。",
      ],
    },
  },
  terms: {
    id: "terms-of-use",
    tag: { en: "Terms of Use", zh: "使用條款" },
    title: { en: "Terms of Use", zh: "使用條款" },
    minutes: TODAY,
    body: {
      en: [
        "These Terms of Use govern your access to and use of this website operated by MiCells® (the \"Site\"). By accessing or using the Site you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
        "Purpose of the Site. The Site is published for informational purposes only. It describes MiCells®, its intended areas of activity in the field of long-term personal blood banking and biological assurance, and provides a channel through which qualified parties may contact us. The Site does not constitute an offer of services, an offer of securities, an invitation to invest or the rendering of professional medical, clinical, legal, regulatory or financial advice.",
        "No medical advice. Nothing on this Site is intended to constitute medical advice, diagnosis or treatment. Any decision concerning your health, treatment, preservation of biological material or related matters must be taken in consultation with appropriately qualified medical professionals and, where relevant, your own legal and financial advisers. MiCells® expressly disclaims any responsibility for any action taken in reliance on information presented on the Site.",
        "No offer of securities. References to investor enquiries, partnerships or strategic discussions on the Site are intended solely to facilitate confidential dialogue with qualified parties. They do not constitute an offer to sell, or a solicitation of an offer to buy, any security or interest in any entity, and they should not be construed as such in any jurisdiction.",
        "Forward-looking statements. The Site may contain statements regarding intended services, future activities, infrastructure plans and the development of governance frameworks. Such statements reflect current expectations and are subject to risks, uncertainties and changes in circumstance. Actual outcomes may differ materially.",
        "Confidentiality of communications. Communications submitted through the Site are treated as confidential by MiCells®. However, transmissions over the internet cannot be guaranteed to be entirely secure, and you should not include in any submission information you consider highly sensitive without first agreeing a more secure communication channel with us.",
        "Intellectual property. All content on the Site, including text, graphics, logos, images, video and the underlying design, is owned by or licensed to MiCells® and is protected by applicable intellectual property laws. You may view and download content from the Site for your own personal and non-commercial reference only. Any other use, including reproduction, modification, distribution, transmission or publication, requires our prior written consent.",
        "Trade marks. The MiCells® name, the MiCells® hexagonal mark and related design elements are registered trade marks of MiCells®. They may not be used in connection with any product, service or activity without our prior written consent.",
        "Third-party links and content. The Site may from time to time link to third-party websites or reference third-party content. Such links and references are provided for convenience only. MiCells® does not endorse, control or accept responsibility for the content, accuracy or practices of third parties.",
        "Acceptable use. You agree not to use the Site in any manner that is unlawful, that interferes with its operation, that attempts to gain unauthorised access to any system or data, that involves the transmission of malicious code, or that infringes the rights of MiCells® or any third party. We reserve the right to restrict or terminate access in response to any such conduct.",
        "Disclaimer of warranties. The Site is provided on an \"as is\" and \"as available\" basis. To the maximum extent permitted by applicable law, MiCells® disclaims all warranties of any kind, whether express or implied, including without limitation warranties of merchantability, fitness for a particular purpose, non-infringement and accuracy.",
        "Limitation of liability. To the maximum extent permitted by applicable law, MiCells® shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits, revenues, data or opportunities, arising out of or in connection with your use of, or inability to use, the Site, even if MiCells® has been advised of the possibility of such damages.",
        "Indemnity. You agree to indemnify and hold harmless MiCells®, its officers, employees, advisers and affiliates from and against any claims, liabilities, costs and expenses arising out of any breach by you of these Terms or any misuse of the Site.",
        "Governing law. These Terms are governed by the laws of the Hong Kong Special Administrative Region. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the Hong Kong courts, save where mandatory law of your country of residence provides otherwise.",
        "Changes to these Terms. We may revise these Terms from time to time. Revisions take effect upon publication on the Site. Your continued use of the Site after publication constitutes acceptance of the revised Terms.",
        "Contact. Questions concerning these Terms or any aspect of the Site may be directed in writing to info@micells.io.",
      ],
      zh: [
        "本使用條款管限閣下取用及使用由 MiCells® 營運之本網站(下稱「本網站」)。閣下取用或使用本網站,即同意受本條款約束。如閣下不同意,請勿使用本網站。",
        "本網站之目的。本網站僅供資訊用途。它介紹 MiCells® 及其於長期個人血液儲存與生物保障領域的預期業務範圍,並提供合資格方與我們聯絡的渠道。本網站不構成服務要約、證券要約、投資邀請,亦不構成專業醫療、臨床、法律、監管或財務意見之提供。",
        "非醫療意見。本網站任何內容均不構成醫療意見、診斷或治療。任何關乎閣下健康、治療、生物物料保存或相關事項之決定,必須諮詢適當合資格之醫療專業人員,並於相關情況下諮詢閣下自身之法律及財務顧問。MiCells® 明確拒絕就任何倚賴本網站所示資料而採取之行動承擔任何責任。",
        "非證券要約。本網站上關於投資者查詢、合作或策略性討論之提述,僅為便利與合資格方進行機密對話而設。它們不構成出售任何證券或任何實體權益的要約,亦不構成邀請購買該等證券或權益之要約,並不應於任何司法管轄區被解釋為此等要約。",
        "前瞻性陳述。本網站可能包含關於預期服務、未來活動、基礎設施規劃及管治框架發展之陳述。此等陳述反映當前預期,並受風險、不確定因素及環境變化所影響。實際結果可能與陳述有重大差異。",
        "通訊機密。透過本網站提交之通訊,MiCells® 視為機密。惟互聯網傳送並不能保證完全安全,閣下不應於任何提交中包含閣下認為高度敏感的資料,除非事先與我們協議採用更安全的通訊渠道。",
        "知識產權。本網站所有內容,包括文字、圖形、標誌、圖像、影片及底層設計,均為 MiCells® 所擁有或獲授權使用,並受適用知識產權法律保護。閣下可為個人及非商業性參考目的下載及查閱本網站內容,任何其他用途,包括複製、修改、分發、傳送或發佈,均須事先取得我們的書面同意。",
        "商標。MiCells® 名稱、MiCells® 六邊形標誌及相關設計元素為 MiCells® 之註冊商標。未經我們事先書面同意,不得就任何產品、服務或活動使用。",
        "第三方連結及內容。本網站可能不時連結至第三方網站或提述第三方內容。此等連結及提述僅為方便閣下而設。MiCells® 並不認可、控制或為第三方之內容、準確性或實務承擔責任。",
        "可接受之使用。閣下同意不會以任何違法、干擾網站運作、企圖未經授權取用任何系統或資料、傳送惡意程式碼,或侵犯 MiCells® 或任何第三方權利之方式使用本網站。就任何此等行為,我們保留限制或終止取用權之權利。",
        "免責聲明。本網站按「現狀」及「可用」基礎提供。於適用法律容許之最大範圍內,MiCells® 拒絕作出任何明示或默示之保證,包括但不限於適銷性、特定用途適合性、不侵權及準確性之保證。",
        "責任限制。於適用法律容許之最大範圍內,MiCells® 對於因閣下使用或無法使用本網站而產生或相關之任何間接、附帶、特殊、後果性或懲罰性損害,或任何利潤、收入、資料或機會之損失,概不負責,即使 MiCells® 已被告知可能發生此等損害。",
        "彌償。閣下同意就閣下違反本條款或濫用本網站所產生之任何申索、責任、費用及開支,向 MiCells®、其高級管理人員、僱員、顧問及聯屬公司作出彌償,並使其免受損害。",
        "適用法律。本條款受香港特別行政區法律管限。任何因本條款產生或與之相關之爭議,均須交由香港法院專屬管轄,惟閣下居住國家的強制性法律另有規定者,不在此限。",
        "條款變更。我們可能不時修訂本條款。修訂於本網站發佈後即時生效。閣下於發佈後繼續使用本網站,即構成對修訂條款之接受。",
        "聯絡我們。關於本條款或本網站任何方面之查詢,可以書面形式發送至 info@micells.io。",
      ],
    },
  },
};

export const localiseDoc = (doc, lang) => {
  const pick = (v) => (v && typeof v === "object" && v[lang] ? v[lang] : v?.en);
  return {
    id: doc.id,
    tag: pick(doc.tag),
    title: pick(doc.title),
    minutes: pick(doc.minutes),
    body: pick(doc.body),
  };
};

export const PRIVACY_POLICY = RAW.privacy;
export const TERMS_OF_USE = RAW.terms;
