// Articles rendered inside ArticleModal. Each entry has en + zh variants,
// selected by the ArticleModal via the language context.

const RAW = [
  {
    id: "precision-logistics",
    tag: { en: "Logistics", zh: "物流" },
    title: {
      en: "Precision Logistics in Global Medicine",
      zh: "全球醫療中的精準物流",
    },
    summary: {
      en:
        "How cross-border biological movement is becoming a defining capability of modern healthcare institutions.",
      zh: "跨境生物流動如何成為現代醫療機構的關鍵能力。",
    },
    minutes: { en: "6 min", zh: "6 分鐘" },
    body: {
      en: [
        "In today's healthcare landscape, where treatments are more personalised than ever, precision logistics has become essential. This field involves the careful planning, transport and storage of highly sensitive medical products such as biologics, cell therapies and gene-based medicines. As precision medicine grows, matching therapies to a patient's unique genetic profile, the supply chain must be flawless from start to finish.",
        "The global market for precision medicine logistics was valued at around $7.4 billion in 2024 and is expected to grow at more than 11 percent annually through the end of the decade. Much of this expansion comes from the surge in clinical trials and the strict temperature requirements for advanced therapies.",
        "Cold chain management remains the foundation. Vaccines typically need 2 to 8 degrees Celsius, while many cell and gene therapies require minus 70 degrees or lower. Any break in the chain can destroy the product. Companies like those in the UPS Healthcare network use real-time tracking, IoT sensors and predictive analytics to prevent problems before they occur.",
        "Agility is just as important. Clinical trials for precision therapies are often small, fast-moving and spread across multiple countries. Patient-specific materials must be collected, processed and returned on tight schedules, sometimes crossing borders with different regulations. Specialised providers have built flexible networks that can handle sudden changes, from weather delays to geopolitical issues.",
        "Digital tools are changing the game. Cloud-based platforms and advanced analytics allow end-to-end visibility, better inventory planning and quicker decision-making. This is especially critical for time-sensitive items like radiopharmaceuticals or trial samples. Some logistics firms now coordinate air and ground transport so precisely that even the most urgent biological shipments arrive within hours.",
        "Challenges remain. Regulations vary widely by country, costs are high and global events can disrupt even the best-laid plans. The COVID-19 vaccine rollout exposed many of these vulnerabilities and pushed the industry to invest in more resilient systems. New technologies, including blockchain for traceability and more efficient cryogenic cooling, are helping address them. Sustainability is also gaining attention, with optimised routes and greener packaging becoming standard priorities.",
        "Looking forward, artificial intelligence and automation will make operations even smoother. Global biorepositories already combine secure storage with data management to support large-scale studies. As the market heads toward an estimated $42 billion by 2030, precision logistics will remain the critical link that turns scientific breakthroughs into treatments patients can actually receive.",
      ],
      zh: [
        "在治療日益個人化的當代醫療格局中,精準物流已成為不可或缺的環節。此領域涵蓋對生物製劑、細胞療法與基因藥物等高度敏感醫療產品的謹慎規劃、運輸及儲存。隨着精準醫療配合病人獨特基因特徵而不斷發展,整條供應鏈由起至終必須零失誤。",
        "全球精準醫療物流市場於 2024 年估值約 74 億美元,預期至本世紀末將以每年逾 11% 的速度增長。此擴張主要源自臨床試驗的激增及先進療法對嚴格溫度控制的要求。",
        "冷鏈管理仍是根本。疫苗一般需要攝氏 2 至 8 度儲存,而許多細胞及基因療法則需低於零下 70 度。冷鏈一旦中斷,產品即告失效。UPS Healthcare 網絡等物流企業已引入實時追蹤、物聯網感測及預測分析,力求防患於未然。",
        "應變能力同樣重要。精準療法的臨床試驗規模小、節奏快,且往往橫跨多國。針對個別病人的物料須在緊迫時間內完成採集、處理及回送,有時甚至橫跨監管制度迥異的邊界。專業物流商已建立靈活網絡,能夠應對從天氣延誤到地緣政治的各種突發變化。",
        "數碼工具正重塑此行業。雲端平台與先進分析技術帶來端對端可視性、更佳的庫存規劃及更快的決策。這對放射性藥物或試驗樣本等時間敏感物品尤為關鍵。部分物流公司已能精準協調空運及陸運,即使最緊急的生物運輸亦可在數小時內送達。",
        "挑戰依然存在。各國監管差異巨大,成本高昂,即使規劃周全亦可能因全球事件而受阻。新冠疫苗的推展揭示了眾多脆弱環節,推動業界投資於更具韌性的系統。區塊鏈可追溯技術及更節能的深冷冷卻等新技術正逐步發揮作用。可持續性亦漸受重視,優化路線及環保包裝已成為業界標準。",
        "展望未來,人工智能與自動化將令運作更加順暢。全球生物樣本庫已將安全儲存與資料管理結合,支援大規模研究。隨着市場於 2030 年估值有望達至 420 億美元,精準物流將繼續扮演關鍵角色,將科學突破轉化為病人真正能夠獲得的治療。",
      ],
    },
  },
  {
    id: "rare-blood-types",
    tag: { en: "Clinical", zh: "臨床" },
    title: {
      en: "Rare Blood Types and the Supply Constraint",
      zh: "罕見血型與供應限制",
    },
    summary: {
      en:
        "Structural fragility in the global supply of rare phenotypes, and the role of autologous preservation.",
      zh: "全球罕見血型供應的結構性脆弱,以及自體保存所扮演的角色。",
    },
    minutes: { en: "7 min", zh: "7 分鐘" },
    body: {
      en: [
        "Blood transfusion saves lives every day, but for people with rare blood types the search for a compatible donor can turn into a serious challenge. Rare types lack common antigens on red blood cells, so standard donations often do not match. These types affect only a tiny percentage of the population, yet the shortage of compatible units creates real risks during emergencies or planned procedures.",
        "The eight main ABO and Rh types cover most people, but more than 600 additional antigens exist, leading to hundreds of rare subtypes. The rarest, Rhnull or \"golden blood\", lacks every Rh antigen and has been identified in roughly 50 individuals worldwide. Others, such as the Bombay phenotype or certain Vel-negative and U-negative variants, appear more frequently in specific ethnic groups.",
        "Even among the main types, AB-negative is uncommon at about one percent of donors. Subtypes like Ro, important for many sickle cell patients, are found in only a small fraction of the donor pool. Genetic factors determine these variations and in diverse populations the right match may be thousands of miles away.",
        "Donor availability drives the biggest constraint. Specialised programs, including the American Rare Donor Program, maintain registries of tens of thousands of rare donors and coordinate shipments when local supplies run short. In some regions, certain phenotypes are requested far more often than they can be supplied, especially those more common in African, Caribbean or South Asian communities.",
        "Events like pandemics make the situation worse. Blood donations already represent a small portion of the eligible population and disruptions can cause national shortages almost overnight. For Rh-negative mothers, mismatches during pregnancy can lead to complications, although preventive treatments exist. Access to those treatments is not equal everywhere.",
        "Targeted recruitment helps close the gap. Blood services focus outreach on underrepresented communities to increase supplies of types like B-negative and O-negative, which often serve as universal backups. Molecular testing now allows more accurate matching than traditional methods. Long-term solutions may include lab-grown red cells produced from stem cells, which could eventually provide a steady supply of rare types.",
        "In the end, people with rare blood types rely on the generosity of a very small group of donors. Organisations emphasise that anyone with a rare type is exceptionally valuable to the system. Expanding registries, improving technology and raising awareness remain the best ways to reduce these ongoing supply pressures.",
      ],
      zh: [
        "輸血每天挽救無數生命,惟對罕見血型人士而言,尋找相容捐贈者往往極具挑戰。罕見血型的紅血球缺乏常見抗原,因此標準捐血通常無法配對。此類血型僅佔人口極少比例,但相容血液的短缺於緊急或計劃性手術中構成真實風險。",
        "ABO 及 Rh 八種主要血型覆蓋絕大多數人,惟現存超過 600 種其他抗原,衍生出數以百計的罕見亞型。當中最為罕見的 Rhnull(俗稱「黃金血」)缺乏所有 Rh 抗原,全球已知者僅約 50 人。孟買血型、部分 Vel 陰性及 U 陰性變異則於特定族群中較為常見。",
        "即使在主要血型當中,AB 陰性血亦僅佔捐贈者約 1%。對眾多鐮狀細胞病人至關重要的 Ro 亞型,亦僅佔捐贈者池的極小比例。這些變異由基因決定,於多元人口中,合適配對可能遠在千里之外。",
        "捐贈者供應為最大限制。美國罕見捐贈者計劃等專門項目維護數以萬計的罕見捐贈者名冊,並於本地供應短缺時協調運送。於部分地區,某些血型的需求遠超供應,尤以非洲、加勒比及南亞族群較為常見者為甚。",
        "疫情等事件令情況雪上加霜。捐血本已只佔合資格人口的一小部分,任何干擾均可幾乎一夜之間造成全國短缺。對 Rh 陰性孕婦而言,妊娠期間血型不合可導致併發症,雖有預防性治療,惟並非全球皆能同等取得。",
        "針對性招募有助縮小差距。血液服務機構針對代表性不足的社群加強推廣,以增加 B 陰性及 O 陰性等常用作通用備用血型的供應。分子檢測現能提供較傳統方法更精準的配對。長遠而言,由幹細胞培植的實驗室紅血球,或能為罕見血型帶來穩定供應。",
        "歸根究底,罕見血型人士全賴極少數捐贈者的慷慨。相關機構強調,擁有罕見血型的每一位捐贈者對系統而言均極具價值。擴大登記、改進技術與提升公眾意識,仍是紓緩此持續供應壓力的最佳途徑。",
      ],
    },
  },
  {
    id: "biological-stewardship",
    tag: { en: "Perspective", zh: "觀點" },
    title: {
      en: "The Future of Biological Stewardship",
      zh: "生物託管的未來",
    },
    summary: {
      en:
        "Why long-duration biological assurance is emerging as a distinct discipline within medical infrastructure.",
      zh: "為何長期生物保障正逐步成為醫療基礎設施中的獨立學科。",
    },
    minutes: { en: "8 min", zh: "8 分鐘" },
    body: {
      en: [
        "For most of medicine's history, biological material has been treated as something to be collected, used and discarded. A vial of blood drawn for testing was disposed of within days. Tissue removed during surgery was incinerated. Even when storage was technically possible, the systems and standards needed to preserve human biological material over decades simply did not exist. That is now changing.",
        "Biological stewardship is emerging as a distinct discipline within healthcare infrastructure. It treats human biological assets — blood, plasma, cells and other materials — as long-duration holdings that must be preserved, monitored and governed with the same rigour applied to financial assets or institutional records. The shift is being driven by three converging forces: the rise of personalised medicine, the maturation of cryopreservation technology and a growing recognition that biological compatibility cannot always be sourced on demand.",
        "The personalised medicine wave has changed what biological material is worth. Autologous cell therapies, regenerative treatments and genetic interventions increasingly rely on a patient's own biology rather than donor sources. When a future treatment may require material that was healthy ten or twenty years earlier, the value of preserving that material today becomes significant. The same logic applies to rare blood phenotypes, immune cells captured before exposure to chronic illness and reproductive tissue preserved for fertility planning.",
        "Cryopreservation has also matured into a more institutional discipline. Advanced cryogenic systems now support long-duration biological integrity under controlled environmental envelopes. Monitoring is continuous. Power systems are redundant. Telemetry is independently auditable. The science is no longer the constraint. The constraint is the operational architecture surrounding it. That architecture is what stewardship provides.",
        "Governance is perhaps the most important shift. Stewardship is not the same as storage. A storage provider holds a container. A steward holds responsibility for the asset within it. That includes its identity, integrity, provenance, chain-of-custody and ultimate mobilisation. Stewards must answer to clinicians, auditors, regulators and families. They must operate transparent quality systems, maintain documented protocols and demonstrate defensible decision-making across the entire lifecycle of every asset under their care.",
        "The implications extend beyond individual patients. Family offices and institutional clients are beginning to think about biological continuity in the same way they think about wealth continuity. Multinational families with members across several jurisdictions need infrastructure that can move biological material across borders without compromising integrity. Executives who travel constantly need preparedness systems that do not depend on the medical infrastructure of any single country. Communities with rare phenotypes need durable supply solutions that are not subject to the volatility of voluntary donation pools.",
        "What is emerging is not simply better blood banking. It is a new category of healthcare infrastructure, one in which biological material is treated as a strategic asset, preserved with institutional discipline and stewarded across decades rather than days. The companies and frameworks that define this category will not look like clinics. They will look like custodians. Quiet, rigorous, accountable and built to outlast the present.",
      ],
      zh: [
        "縱觀醫學歷史,生物物料長期被視為採集、使用後即棄之物。用於化驗的血液樣本於數日內銷毀;手術中切除的組織付之一炬。即使技術上可以保存,能夠將人體生物物料保存數十年的系統與標準,亦從未存在。此情此景正在轉變。",
        "生物託管正逐步成為醫療基礎設施中的獨立學科。它視血液、血漿、細胞等人體生物資產為長期持有物,須以應用於金融資產或機構記錄的同等嚴謹態度加以保存、監察及管治。此轉變由三股力量匯聚推動:個人化醫療的興起、冷凍保存技術的成熟,以及對生物相容性不能隨時獲取的日益認識。",
        "個人化醫療浪潮改變了生物物料的價值。自體細胞療法、再生治療及基因干預愈加倚賴病人自身的生物,而非捐贈來源。當未來治療可能需要十年、二十年前健康時採集的物料,今日保存的價值便顯得舉足輕重。此邏輯同樣適用於罕見血型、慢性疾病發生前採集的免疫細胞,以及為生育規劃保存的生殖組織。",
        "冷凍保存亦已發展為更具機構性的學科。先進的低溫系統於受控環境下支援長期生物完整性。監察持續進行。電力系統設有備援。遙測資料獨立可審計。科學已非制約,制約在於圍繞它的營運架構。而此架構,正是託管所提供的。",
        "管治或許是最重要的轉變。託管與儲存有別。儲存供應商保管的是容器,託管者則承擔容器內資產的責任,包括其身份、完整性、來源、監管鏈及最終調動。託管者須向臨床醫生、審計員、監管機構及家庭負責。他們須運作透明的品質系統、維持書面協議,並就其所託管之每一資產的整個生命週期,展現經得起考驗的決策。",
        "其影響遠不止於個別病人。家族辦公室與機構客戶已開始以思考財富延續的方式思考生物延續。橫跨多個司法管轄區的跨國家庭需要能將生物物料跨境轉移而不損完整性的基礎設施。經常出差的高管需要不倚賴任何單一國家醫療系統的準備方案。罕見血型社群則需要不受自願捐血池波動影響的持久供應方案。",
        "正在成形的並非僅是更好的血庫,而是全新一類醫療基礎設施 —— 於此,生物物料被視為策略性資產,以機構級嚴謹加以保存,並以數十年而非數日的時間跨度加以託管。定義此類別的公司與框架不會像診所,而會像託管人:低調、嚴謹、負責,並為超越當下而建。",
      ],
    },
  },
  {
    id: "medical-preparedness",
    tag: { en: "Preparedness", zh: "準備" },
    title: {
      en: "Modern Approaches to Medical Preparedness",
      zh: "現代醫療準備的新思維",
    },
    summary: {
      en:
        "A reframing of medical preparedness for mobile, multi-jurisdictional individuals and family offices.",
      zh: "為國際流動及跨司法管轄區的個人與家族辦公室重塑醫療準備的意義。",
    },
    minutes: { en: "7 min", zh: "7 分鐘" },
    body: {
      en: [
        "Medical preparedness has traditionally meant emergency kits, travel insurance and access to a trusted doctor. For most of the last century, that was enough. Healthcare was largely local. People stayed close to the systems they were born into. The medicine they needed could usually be sourced within the country in which they lived.",
        "That assumption no longer holds. Today, individuals and families operate across multiple jurisdictions. Treatments are increasingly specialised and often only available in specific institutions. Supply chains for biologics, blood components and advanced therapies have proven fragile, as the disruptions of recent years have made clear. Modern preparedness, therefore, has to be redefined. It is no longer about being ready for a single emergency. It is about maintaining continuity of access across geography, time and clinical complexity.",
        "The first shift is from reactive to anticipatory thinking. Reactive preparedness waits for an event and responds to it. Anticipatory preparedness assumes that future medical needs will arise and builds the infrastructure to meet them in advance. Storing a patient's own blood before they need a transfusion, mapping their biological profile before they develop a chronic illness and securing access to specialist clinical institutions before a crisis are all examples of anticipatory thinking applied to health.",
        "The second shift is from local to international. International mobility is no longer the exception for many high-net-worth families and executives. Their preparedness systems must mirror that reality. This means understanding which jurisdictions can deliver which treatments, maintaining documented medical histories that translate across borders and ensuring that biological materials, if preserved, can be mobilised internationally without delay. Cross-border coordination has become a discipline in its own right, requiring legal frameworks, logistics partners and clinical relationships that operate as a coherent system rather than a collection of one-off arrangements.",
        "The third shift is from generic to autologous. Donor-dependent systems have served populations well for decades, but they carry inherent limitations. Compatibility is not guaranteed. Supplies are variable. Rare phenotypes face structural shortages that no amount of public donation can fully resolve. Autologous strategies, using a person's own biological material, sidestep many of these constraints. They require advance planning, but they offer a level of compatibility, predictability and personal autonomy that donor systems cannot match.",
        "The fourth shift is from informal to governed. Preparedness arrangements that depend on personal relationships or undocumented agreements do not survive contact with reality. Modern preparedness is built on documented protocols, auditable chain-of-custody and independent oversight. It is, in other words, institutional. Whether the underlying need is biological preservation, clinical coordination or international mobilisation, the system supporting it must be defensible to clinicians, regulators and families alike.",
        "What this all points to is a quiet but significant evolution in how serious individuals approach their health. Medical preparedness is becoming less about kits and more about infrastructure. It is becoming less about reacting and more about anticipating. And it is becoming less about hoping the system will work and more about building, in advance, the framework that ensures it will.",
      ],
      zh: [
        "醫療準備傳統上意味着應急包、旅遊保險及可信賴的醫生。過去一個世紀大部分時間,這已足夠。醫療服務基本上屬本地性質。人們依附於出生所在的醫療系統,所需藥物一般在本國即可取得。",
        "此假設已不再成立。今日,個人與家庭於多個司法管轄區之間活動。治療愈趨專門,往往僅於特定機構可以提供。生物製劑、血液成分及先進療法的供應鏈已顯露其脆弱性,近年的種種干擾已清晰揭示此點。因此,現代準備必須重新定義。它不再只是應對單一緊急事件,而是於地理、時間及臨床複雜性各方面維持持續的取用能力。",
        "第一個轉變是由被動應變轉為前瞻思維。被動準備等待事件發生然後回應;前瞻準備則假設未來的醫療需求必將出現,並預先建立所需的基礎設施。於需要輸血前保存病人自身的血液、於慢性病出現前記錄其生物特徵、於危機來臨前確保專科機構的可及性,均為將前瞻思維應用於健康的例子。",
        "第二個轉變是由本地轉為國際。國際流動於眾多高淨值家庭及高管而言,已非例外情況。他們的準備系統必須反映此現實。這意味着須了解不同司法管轄區能提供何種治療、維持可跨境使用的書面病歷,以及確保已保存的生物物料可即時跨境調動。跨境協調本身已成為一門獨立學科,需要法律框架、物流合作夥伴及臨床關係共同運作,而非各自為政的一次性安排。",
        "第三個轉變是由通用轉為自體。倚賴捐贈者的系統數十年來服務大眾,惟固有限制無法避免:相容性無法保證、供應不穩、罕見血型面對非公眾捐血所能解決的結構性短缺。自體策略 —— 使用個人自身的生物物料 —— 迴避了大部分此類制約。它需要事前規劃,卻能提供捐贈者系統難以企及的相容性、可預測性及個人自主。",
        "第四個轉變是由非正式轉為受管治。倚賴個人關係或無書面協議的準備安排,無法經受現實考驗。現代準備建基於書面協議、可審計的監管鏈及獨立監督之上。換言之,它須具機構性。無論底層需求為生物保存、臨床協調抑或國際調動,支撐它的系統均須於臨床醫生、監管機構及家庭面前皆可經得起考驗。",
        "以上種種指向的,是嚴謹人士對待自身健康時一場悄然而重要的演變。醫療準備已由「工具」轉向「基礎設施」,由「應變」轉向「前瞻」,由「寄望系統能運作」轉向「事先建立確保其能運作的框架」。",
      ],
    },
  },
];

// Adapter used by ArticleModal. Given the active language, return the article
// in the shape the modal expects (flat strings).
export const localise = (article, lang) => {
  const pick = (v) => (v && typeof v === "object" && v[lang] ? v[lang] : v?.en);
  return {
    id: article.id,
    tag: pick(article.tag),
    title: pick(article.title),
    summary: pick(article.summary),
    minutes: pick(article.minutes),
    body: pick(article.body),
  };
};

export const ARTICLES = RAW;
