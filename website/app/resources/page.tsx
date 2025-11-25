import Image from "next/image";

const events: Array<{
  title: string;
  date: string;
  location: string;
  tag: string;
  link?: string;
  isPlaceholder?: boolean;
}> = [
  {
    title: "週次稽古",
    date: "毎週木曜日 19:30-20:30",
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
    title: "評議会議（ひょうぎかいぎ）",
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
    description: "無料稽古から伴随支援まで、段階的に学ぶ",
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
    description: "2025年の伴随案件の成果をまとめた年次レポート",
    status: "準備中",
    icon: "📊",
  },
  {
    title: "週次稽古アーカイブ",
    description: "過去のライブ配信をアーカイブで閲覧",
    status: "月謝プラン会員向け",
    icon: "🎥",
  },
];

const featuredNotes = [
  {
    title: "週次稽古ノート｜生成AIと品質改善",
    description: "P95不良率を20pt改善した現場コミュニケーション術を、稽古の実況ノートから抜粋。",
    author: "記録：Field Director 山本",
    status: "近日公開",
    image: "/images/hero/main3.png",
    tag: "稽古ノート",
  },
  {
    title: "現場見学レポート｜公共×ChatOps",
    description: "自治体の窓口業務をChatOpsで再設計したワークショップ記録とチェックリスト。",
    author: "記録：Senior Fellow 小川",
    status: "執筆中",
    image: "/images/fieldworks/framework.png",
    tag: "現場見学",
  },
  {
    title: "評議会議アジェンダ｜金融業の合議制",
    description: "Green Roomで議論したROI算出プロセスと未公開ケースの概要メモ。",
    author: "記録：Field Director 吉見",
    status: "アーカイブ整備中",
    image: "/images/hero/main2.png",
    tag: "評議会",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        {/* ヘッダーセクション */}
        <header className="mb-12 rounded-3xl border border-[#D8CFC3] bg-white/90 p-8 shadow-sm">
          <span className="text-sm font-semibold tracking-wide text-bamboo">
            イベント・資料
          </span>
          <h1 className="mt-2 font-serif text-4xl">イベント・資料</h1>
          <p className="mt-4 text-[#4B4135]">
            週次稽古の予定、公開ケース、実装手順書（RECIPES）、年次レポート（Yearbook）まで、道場で生まれた知見を一箇所に集約しています。
          </p>
          <div className="mt-6 grid gap-3 text-sm text-[#4B4135] sm:grid-cols-3">
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-bamboo">稽古</p>
              <p className="mt-2 leading-relaxed">毎週の無料稽古と月謝プラン向けアーカイブ</p>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-bamboo">資料</p>
              <p className="mt-2 leading-relaxed">RECIPES・Yearbook・ケーススタディ</p>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-bamboo">イベント</p>
              <p className="mt-2 leading-relaxed">現場見学・評議会・ワークショップ</p>
            </div>
          </div>
        </header>

        {/* イベント一覧 */}
        <section className="mb-10">
          <h2 className="mb-6 font-serif text-2xl text-[#1D1A15]">
            イベント一覧
          </h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-[#1D1A15]">{event.title}</h3>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        event.isPlaceholder
                          ? "bg-[#4B4135]/10 text-[#4B4135]"
                          : "bg-bamboo/10 text-bamboo"
                      }`}>
                        {event.tag}
                      </span>
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-[#4B4135]">
                      <p>📅 {event.date}</p>
                      <p>📍 {event.location}</p>
                    </div>
                  </div>
                  {event.link && (
                    <a
                      href={event.link}
                      className="inline-flex items-center rounded-full bg-vermillion px-5 py-2 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark"
                    >
                      参加する
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注目の稽古ノート */}
        <section className="mb-10">
          <h2 className="mb-6 font-serif text-2xl text-[#1D1A15]">
            注目の稽古ノート
          </h2>
          <div className="space-y-4">
            {featuredNotes.map((note) => (
              <div
                key={note.title}
                className="overflow-hidden rounded-3xl border border-[#D8CFC3] bg-white shadow-sm"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div className="relative h-48 md:h-auto bg-[#1D1A15]/5">
                    <Image
                      src={note.image}
                      alt={note.title}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:py-6 md:pr-6 md:pl-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="rounded-full bg-bamboo/10 px-3 py-1 text-xs font-semibold text-bamboo">
                        {note.tag}
                      </span>
                      <span className="text-xs text-[#4B4135]">{note.status}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#1D1A15]">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4B4135] leading-relaxed">
                      {note.description}
                    </p>
                    <p className="mt-3 text-xs text-[#4B4135]">{note.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 資料・ダウンロード */}
        <section className="mb-10">
          <h2 className="mb-6 font-serif text-2xl text-[#1D1A15]">
            資料・ダウンロード
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {materials.map((material) => (
              <div
                key={material.title}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
              >
                <div className="text-4xl mb-4">{material.icon}</div>
                <h3 className="font-semibold text-[#1D1A15]">{material.title}</h3>
                <p className="mt-2 text-sm text-[#4B4135] leading-relaxed">
                  {material.description}
                </p>
                <div className="mt-4">
                  <span className="rounded-full bg-[#F9F6F0] px-3 py-1 text-xs font-semibold text-[#4B4135]">
                    {material.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 公開記事（ブログ） */}
        <section className="mb-10">
          <h2 className="mb-6 font-serif text-2xl text-[#1D1A15]">
            公開記事
          </h2>
          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.title}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-[#1D1A15]">{article.title}</h3>
                <p className="mt-2 text-sm text-[#4B4135]">{article.description}</p>
                {article.isPlaceholder && (
                  <span className="mt-3 inline-block text-xs text-[#4B4135]">
                    近日公開
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ニュースレター登録 */}
        <section id="newsletter" className="rounded-3xl border-2 border-bamboo bg-white p-8 text-center shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-[#1D1A15]">
            道場便り（ニュースレター）
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            月に二度、公開ケース・稽古予定・評議会の記録をお届けします。
            <br />
            無料稽古の参加者には自動で配信されます。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/join#free-live"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
            >
              無料稽古に登録する
            </a>
            <a
              href="/join#basic"
              className="inline-flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
            >
              月謝プランを見る
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
