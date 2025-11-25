export type FellowProfile = {
  id: string;
  name: string;
  title: string;
  grade: "Field Director" | "Senior Fellow" | "Fellow III" | "Fellow II" | "Fellow I";
  field: string;
  mission: string;
  practice: string;
  appointment: string;
  bio: string;
  impactFocus: string;
  achievements: string[];
  impactPoints: number;
  avatar: string;
  interviewLink?: string;
  materials?: { label: string; href: string }[];
  socials?: { label: string; href: string }[];
};

export const fellows: FellowProfile[] = [
  {
    id: "yamamoto-rikiya",
    name: "山本 力弥",
    title: "Field Director｜製造 × Quality-Up",
    grade: "Field Director",
    field: "製造",
    mission: "Quality-Up",
    practice: "Ops Automation / Vision",
    appointment: "Appointment# FW-2025-010",
    bio: "大手製造業のデジタル改革を歴任し、Vision AI の量産ライン実装を多数リード。Impact Points の仕組み化と横展開を統括。",
    impactFocus: "量産ラインにおける品質改善とカルチャー変革を両立",
    achievements: [
      "検査AIプロジェクトで P95 不良率を 38%→19% に改善",
      "全国 5 工場への横展開ロードマップを策定",
      "Yearbook 2024 に寄稿『品質改善を加速する現場コミュニケーション』",
    ],
    impactPoints: 18,
    avatar: "/images/yamamoto.webp",
    interviewLink: "/resources#blog",
    materials: [
      { label: "現場見学スライド", href: "https://example.com/materials/yamamoto-slides.pdf" },
      { label: "登壇動画", href: "https://example.com/videos/yamamoto-talk" },
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "X", href: "https://x.com" },
    ],
  },
  {
    id: "yoshimi-takamitsu",
    name: "吉見 貴光",
    title: "Senior Fellow｜金融 × Growth-Up",
    grade: "Senior Fellow",
    field: "金融",
    mission: "Growth-Up",
    practice: "Data & Integration",
    appointment: "Appointment# FW-2025-021",
    bio: "金融機関の法人営業領域で CRM × 生成AI の実装を支援。提案資料半自動生成フレームを共著し、PRIME コミュニティの監修を担当。",
    impactFocus: "提案スピードと成約率を両立するデータ活用導線の設計",
    achievements: [
      "提案資料作成時間を 65% 削減、受注率 +14pt を実現",
      "評議会議（ひょうぎかいぎ）での常任モデレーター",
      "RECIPES #FIN-08 共著『生成AIで提案スライドを半自動化する』",
    ],
    impactPoints: 16,
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
    interviewLink: "/resources#blog",
    materials: [{ label: "生成AI提案テンプレート", href: "https://example.com/materials/yoshimi-template.xlsx" }],
    socials: [{ label: "note", href: "https://note.com" }],
  },
  {
    id: "ogawa-miku",
    name: "小川 未来",
    title: "Fellow III｜公共 × Change & Enablement",
    grade: "Fellow III",
    field: "公共",
    mission: "Cost-Down",
    practice: "Change & Enablement",
    appointment: "Appointment# FW-2025-035",
    bio: "自治体の窓口DXや住民サービスの自動化を推進。現場研修とワークショップ設計が強みで、Impact Points ダッシュボードの整備にも貢献。",
    impactFocus: "公共領域での合意形成と人材育成をセットにしたPoC運用",
    achievements: [
      "問い合わせ応答時間を 3 日→数秒に短縮した GenAI プロジェクト",
      "自治体向け研修キットを作成し 7 団体で導入",
      "Impact Points 運用レポート 2024 Q3 執筆",
    ],
    impactPoints: 12,
    avatar: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=400&q=80",
    materials: [{ label: "自治体DX研修キット", href: "https://example.com/materials/ogawa-kit.zip" }],
  },
  {
    id: "murakami-sana",
    name: "村上 早奈",
    title: "Fellow II｜ヘルスケア × Speed-Up",
    grade: "Fellow II",
    field: "医療",
    mission: "Speed-Up",
    practice: "GenAI Apps",
    appointment: "Appointment# FW-2025-042",
    bio: "医療機関の問診・カルテ入力を自動化するプロダクトマネージャー。患者体験とスタッフ体験の両面から改善策を提供。",
    impactFocus: "医療スタッフの業務削減と患者応対の質向上を両立",
    achievements: [
      "初診リードタイム 45% 短縮プロジェクトで実装責任者",
      "Green Room にて医療DX セッションをリード",
      "医療従事者向けハンズオン教材を共同制作",
    ],
    impactPoints: 9,
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    materials: [{ label: "医療DXハンズオン教材", href: "https://example.com/materials/murakami-handson.pdf" }],
  },
  {
    id: "honda-yu",
    name: "本田 優",
    title: "Fellow II｜製造 × Cost-Down",
    grade: "Fellow II",
    field: "製造",
    mission: "Cost-Down",
    practice: "Ops Automation",
    appointment: "Appointment# FW-2025-044",
    bio: "中堅製造業のバックオフィス自動化を支援。Lark × Lark を活用した業務統合で、従業員の業務負荷を軽減している。",
    impactFocus: "Lark × 自動化ワークフローで現場の手戻りを削減",
    achievements: [
      "RPA と Lark を連携させた経費精算の自動化を実現",
      "週次ライブでオートメーション講座を担当",
      "社内展開向けチェックリストを公開、BASIC 会員で話題に",
    ],
    impactPoints: 8,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "fujiyama-kazuto",
    name: "藤山 和人",
    title: "Fellow I｜小売・CX × Growth-Up",
    grade: "Fellow I",
    field: "小売・CX",
    mission: "Growth-Up",
    practice: "Design & DX Writing",
    appointment: "Appointment# FW-2025-052",
    bio: "小売・EC 企業の顧客体験設計を中心に活動。生成AI を活用したカスタマーサポート台本やプロモーション設計が得意。",
    impactFocus: "顧客コミュニケーションの質と速度を両立するコンテンツ設計",
    achievements: [
      "カスタマーサポート応対スクリプトを 2 週間で刷新",
      "RECIPES draft #CX-04 を共著",
      "オープンチャットでの QA 返信数 50+（Impact Points +4）",
    ],
    impactPoints: 6,
    avatar: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    materials: [{ label: "CX応対スクリプト", href: "https://example.com/materials/fujiyama-script.docx" }],
  },
];
