const events: Array<{
  title: string;
  date: string;
  location: string;
  tag: string;
  link?: string;
  isPlaceholder?: boolean;
}> = [
  {
    title: "Weekly Dojo Live",
    date: "毎週木曜日 20:00-21:00",
    location: "Zoom / YouTube Live",
    tag: "無料稽古",
    link: "/join#free-live",
  },
  {
    title: "現場見学・ワークショップ",
    date: "順次公開予定",
    location: "詳細は後日発表",
    tag: "今後公開",
    isPlaceholder: true,
  },
  {
    title: "PRIME Roundtable",
    date: "順次公開予定",
    location: "詳細は後日発表",
    tag: "今後公開",
    isPlaceholder: true,
  },
];

const articles = [
  {
    title: "製造現場でのAI導入ケース",
    description: "画像検査AIによる品質改善の実装事例",
    link: "#",
    isPlaceholder: true,
  },
  {
    title: "自治体・公共分野での実装事例",
    description: "窓口業務の自動化とコスト削減",
    link: "#",
    isPlaceholder: true,
  },
  {
    title: "AI道場の学習体系と成長の仕組み",
    description: "無料稽古から伴走支援まで、段階的に学ぶ",
    link: "#",
    isPlaceholder: true,
  },
];

const materials = [
  {
    title: "RECIPES｜実装手順書",
    description: "業務別に失敗例・コストまで明記した実装手順書",
    status: "準備中",
    icon: "📖",
  },
  {
    title: "Yearbook 2025",
    description: "2025年の伴走案件の成果をまとめた年次レポート",
    status: "準備中",
    icon: "📊",
  },
  {
    title: "Weekly Dojo Live アーカイブ",
    description: "過去のライブ配信をアーカイブで閲覧",
    status: "月謝プラン会員向け",
    icon: "🎥",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
            イベント・資料
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            無料ライブのほか、業界別の現場見学、PRIME Roundtableなど、
            <br />
            リアルな場で学べる機会と、学習に役立つ資料を提供しています。
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* イベント情報 */}
          <div>
            <h2 className="font-serif text-3xl text-[#1D1A15]">
              今月の稽古・現場見学・イベント
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
              無料ライブのほか、業界別の現場見学、PRIME Roundtable など、リアルな場で学べる機会を用意しています。
            </p>
            <div className="mt-8 grid gap-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className={`rounded-3xl border border-[#D8CFC3] bg-white p-5 shadow-sm ${event.isPlaceholder ? 'opacity-75' : ''}`}
                >
                  <div className="flex items-center justify-between text-xs text-[#4B4135]">
                    <span className={`rounded-full px-3 py-1 font-semibold ${event.isPlaceholder ? 'bg-[#D8CFC3]/20 text-[#4B4135]' : 'bg-bamboo/10 text-bamboo'}`}>
                      {event.tag}
                    </span>
                    <span>{event.date}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-[#1D1A15]">{event.title}</h3>
                  <p className="mt-2 text-sm text-[#4B4135]">{event.location}</p>
                  {!event.isPlaceholder && event.link && (
                    <a
                      href={event.link}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-bamboo hover:text-bamboo-light"
                    >
                      申し込む →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* コラム・ブログ */}
          <div className="rounded-3xl border border-[#D8CFC3] bg-[#FDFBF6] p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
              コラム & 更新情報
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-[#4B4135]">
              {articles.map((article) => (
                <li key={article.title} className="rounded-2xl border border-[#D8CFC3] bg-white/80 p-4 opacity-75">
                  <div className="font-semibold text-[#1D1A15]">
                    {article.title}
                  </div>
                  <p className="mt-1 text-xs text-[#4B4135]">{article.description}</p>
                  <p className="mt-2 text-xs text-[#4B4135]">準備中</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#4B4135]">
              ケーススタディやコラムを順次公開予定です。
            </p>
          </div>
        </div>

        {/* 学習資料 */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl text-[#1D1A15]">
            学習資料
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {materials.map((material) => (
              <div
                key={material.title}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
              >
                <div className="text-4xl">{material.icon}</div>
                <h3 className="mt-4 font-semibold text-[#1D1A15]">{material.title}</h3>
                <p className="mt-2 text-sm text-[#4B4135]">{material.description}</p>
                <p className="mt-3 text-xs font-semibold text-bamboo">{material.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ セクション */}
        <div className="mt-16 rounded-3xl border border-bamboo/30 bg-white p-8 text-center shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-[#1D1A15]">
            よくある質問
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            AI道場に関するよくある質問をまとめました。
          </p>
          <div className="mt-6">
            <a
              href="/resources/faq"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-white transition hover:bg-vermillion-dark shadow-lg"
            >
              FAQを見る
            </a>
          </div>
        </div>

        {/* CTAセクション */}
        <div className="mt-16 rounded-3xl border-2 border-bamboo bg-white p-8 text-center shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-[#1D1A15]">
            まずは無料稽古から
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            毎週木曜日 20:00-21:00 に開催している無料のライブ配信に参加してみませんか？
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/join#free-live"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-white transition hover:bg-vermillion-dark shadow-lg"
            >
              無料稽古に登録する
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
            >
              プログラム一覧を見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
