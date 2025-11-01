const programs = [
  {
    name: "FREE｜Weekly Dojo Live",
    description: "週1回の無料ライブ。ケース解説・実装実況・質疑応答で空気を体感。",
    price: "¥0 / 参加登録のみ",
    features: ["ライブ視聴", "オープンチャット招待", "開催後ダイジェストメール"],
    href: "/programs#free",
  },
  {
    name: "BASIC｜月謝プラン",
    description: "ライブアーカイブとノート、Slack質問で実務の一歩を掴む。",
    price: "月謝プラン（詳細公開予定）",
    features: ["ライブアーカイブ", "週次ノート", "Slackで質問"],
    href: "/programs#basic",
  },
  {
    name: "ACTIVE｜月謝プラン+α",
    description: "アーカイブ全文検索、Flow別フィード、ドラフトへの先行アクセス。",
    price: "月謝プラン（アーカイブ＋α）",
    features: ["全文検索", "Flow別ダイジェスト", "RECIPESドラフト先行閲覧"],
    href: "/programs#active",
  },
  {
    name: "PRIME｜Executive Community",
    description: "未公開ケース・現場見学・月次コンサルで意思決定を加速。",
    price: "個別見積 / 会員制コミュニティ",
    features: ["現場見学", "月次クイック相談", "全サービス優待"],
    href: "/programs#prime",
  },
  {
    name: "BOOST｜Quarter Projects",
    description: "4〜8週でKPIを可視化し、横展開のロードマップまで提示。",
    price: "個別見積 / 4〜8週プロジェクト",
    features: ["Before/After測定", "伴走チーム組成", "横展開プランニング"],
    href: "/programs#boost",
  },
  {
    name: "RECIPES｜Playbooks",
    description: "業務別に失敗例・コストまで明記した実装手順書。",
    price: "1本あたり個別見積",
    features: ["実装手順", "失敗例と回避策", "推奨ツールとコスト"],
    href: "/programs#recipes",
  },
];

export default function ProgramSnapshot() {
  return (
    <section id="programs" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            無料稽古から伴走まで。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            まずは無料で道場に触れ、その後は月謝プランで学び、伴走プログラムで成果を出す。各フェーズで提供する価値と価格を明確にしました。
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex h-full flex-col rounded-3xl border border-[#D8CFC3] bg-[#FDFBF6] p-6 shadow-[0_12px_24px_rgba(29,26,21,0.06)]"
            >
              <div>
                <h3 className="font-serif text-xl text-[#1D1A15]">{program.name}</h3>
                <p className="mt-2 text-sm text-[#4B4135]">{program.description}</p>
                <p className="mt-4 text-sm font-semibold text-[#C47E3B]">{program.price}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-[#4B4135]">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#2F4C6E]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={program.href}
                className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-[#2F4C6E] hover:text-[#4E6E92]"
              >
                詳細を見る →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
