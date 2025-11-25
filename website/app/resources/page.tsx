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

const upcomingReports = [
  {
    title: "Yearbook 2025",
    summary: "2025年に伴随した案件48本から、ROI算出と横展開の実績を記録。",
    eta: "2025年4月公開予定",
    format: "冊子 / PDF",
    image: "/images/bamboo2.png",
  },
  {
    title: "RECIPES #VIS-09",
    summary: "製造業でVision AIを段階導入するための手順と費用感を詳細に記載。",
    eta: "2025年2月ドラフト",
    format: "PDF + 実装スクリプト",
    image: "/images/cases/washi.png",
  },
  {
    title: "秘伝書｜自治体DXハンドブック",
    summary: "自治体での生成AI活用をPoC→横展開まで導くチェックリスト付き手順書。",
    eta: "2025年3月公開予定",
    format: "PDF + Larkテンプレート",
    image: "/images/programs/washi.png",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-8 rounded-3xl border border-[#D8CFC3] bg-white/90 p-8 shadow-sm lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-wide text-bamboo">
              稽古と記録のアーカイブ
            </span>
            <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
              イベント・資料のご案内
            </h1>
            <p className="text-lg leading-relaxed text-[#4B4135]">
              無料の週次稽古、現場見学、評議会議、秘伝書やYearbookなど。AI道場の学びと記録をこのページに集約しました。
            </p>
            <div className="grid gap-3 text-sm text-[#4B4135] sm:grid-cols-3">
              {[
                { title: "稽古", body: "週次ライブ・見学・評議会での実地学習" },
                { title: "資料", body: "未公開ケース・Yearbook・秘伝書を順次公開" },
                { title: "アーカイブ", body: "月謝で稽古アーカイブとノートをいつでも閲覧" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-bamboo">{item.title}</p>
                  <p className="mt-2 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/study.png"
              alt="資料と稽古の雰囲気"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1D1A15]/80 via-[#1D1A15]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-sm text-white space-y-2">
              <p className="font-serif text-lg">記録があるから実装が広がる</p>
              <ul className="space-y-1 text-white/90">
                <li>・稽古ノートと動画は月謝で全文検索</li>
                <li>・Yearbookと秘伝書で横展開の証跡を確保</li>
                <li>・評議会で未公開ケースを現場見学</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* イベント情報 */}
          <div>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-serif text-3xl text-[#1D1A15]">
                  今月の稽古・現場見学・イベント
                </h2>
                <p className="mt-2 text-lg leading-relaxed text-[#4B4135]">
                  無料ライブに加え、現場見学や評議会の予定もここでご案内します。
                </p>
              </div>
              <div className="text-xs text-[#4B4135] rounded-full border border-[#D8CFC3] px-3 py-1">
                稽古アーカイブは月謝プランで検索可能
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className={`rounded-3xl border border-[#D8CFC3] bg-white/90 p-5 shadow-sm ${event.isPlaceholder ? 'opacity-60' : ''}`}
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

        {/* 記事・ノート */}
        <section className="mt-16 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-3xl text-[#1D1A15]">
                記事・稽古ノート
              </h2>
              <p className="mt-2 text-lg leading-relaxed text-[#4B4135]">
                稽古ノートや現場見学レポート、評議会議の記録などを順次公開予定です。
              </p>
            </div>
            <div className="text-xs text-[#4B4135] rounded-full border border-[#D8CFC3] px-3 py-1">
              公開前はコミュニティ内で先行共有
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredNotes.map((note) => (
              <article key={note.title} className="relative overflow-hidden rounded-3xl border border-[#D8CFC3] bg-[#1D1A15] text-white shadow-sm">
                <div className="relative h-48 w-full">
                  <Image src={note.image} alt={note.title} fill className="object-cover" sizes="(min-width: 768px) 30vw, 90vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1A15]/80 via-[#1D1A15]/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#1D1A15]">
                    {note.tag}
                  </span>
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-xs text-white/80">{note.author}</p>
                  <h3 className="font-serif text-xl leading-snug">{note.title}</h3>
                  <p className="text-sm text-white/80">{note.description}</p>
                  <p className="text-xs font-semibold text-bamboo">{note.status}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* レポート・ダウンロード */}
        <section className="mt-16 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-3xl text-[#1D1A15]">レポート / ダウンロード</h2>
              <p className="mt-2 text-sm text-[#4B4135]">
                Yearbookや秘伝書などの資料は完成次第こちらに並びます。現在準備中のラインナップをご紹介します。
              </p>
            </div>
            <span className="rounded-full bg-bamboo/10 px-3 py-1 text-xs font-semibold text-bamboo">
              順次公開
            </span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {upcomingReports.map((report) => (
              <div key={report.title} className="overflow-hidden rounded-3xl border border-[#D8CFC3] bg-[#FDFBF6] shadow-sm">
                <div className="relative h-36">
                  <Image src={report.image} alt={report.title} fill className="object-cover" sizes="(min-width: 768px) 25vw, 90vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1A15]/60 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs text-white/90">{report.eta}</p>
                </div>
                <div className="space-y-2 p-5 text-sm text-[#4B4135]">
                  <h3 className="font-semibold text-[#1D1A15]">{report.title}</h3>
                  <p>{report.summary}</p>
                  <p className="text-xs font-semibold text-bamboo">{report.format}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {materials.map((material) => (
              <div key={material.title} className="rounded-3xl border border-dashed border-[#D8CFC3] bg-white p-5 text-sm text-[#4B4135]">
                <p className="text-3xl">{material.icon}</p>
                <h4 className="mt-3 font-semibold text-[#1D1A15]">{material.title}</h4>
                <p className="mt-2">{material.description}</p>
                <p className="mt-3 text-xs font-semibold text-bamboo">{material.status}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
