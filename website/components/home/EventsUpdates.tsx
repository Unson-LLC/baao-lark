const events = [
  {
    title: "Open Dojo Visit｜製造ライン見学",
    date: "2025/11/22",
    location: "愛知県 豊田市",
    tag: "現場見学",
  },
  {
    title: "PRIME Roundtable｜自治体AI導入のリアル",
    date: "2025/12/02",
    location: "オンライン / BAAO Slack Green Room",
    tag: "PRIME",
  },
  {
    title: "Workshop｜Vibe Codingハンズオン拡張版",
    date: "2025/12/14",
    location: "東京・日本橋",
    tag: "ワークショップ",
  },
];

const articles = [
  {
    title: "製造現場でのQuality-Up実装チェックリスト",
    link: "/resources/blog/quality-up-checklist",
  },
  {
    title: "自治体PoCで失敗しないための守秘レベル設計",
    link: "/resources/blog/public-poc-secrecy",
  },
  {
    title: "Impact Pointsでフェローが成長する仕組み",
    link: "/resources/blog/impact-points-overview",
  },
];

export default function EventsUpdates() {
  return (
    <section id="resources" className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            今月の稽古・現場見学・イベント。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            無料ライブのほか、流派別の現場見学、PRIME Roundtable など、リアルな場で学べる機会を用意しています。
          </p>
          <div className="mt-8 grid gap-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-5 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-[#4B4135]">
                  <span className="rounded-full bg-[#2F4C6E]/10 px-3 py-1 font-semibold text-[#2F4C6E]">
                    {event.tag}
                  </span>
                  <span>{event.date}</span>
                </div>
                <h3 className="mt-3 font-semibold text-[#1D1A15]">{event.title}</h3>
                <p className="mt-2 text-sm text-[#4B4135]">{event.location}</p>
                <a
                  href="/resources#events"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#2F4C6E] hover:text-[#4E6E92]"
                >
                  申し込む →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#D8CFC3] bg-[#FDFBF6] p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
            コラム & 更新情報
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-[#4B4135]">
            {articles.map((article) => (
              <li key={article.title} className="rounded-2xl border border-[#D8CFC3] bg-white/80 p-4">
                <a
                  href="/resources#blog"
                  className="font-semibold text-[#1D1A15] hover:text-[#2F4C6E]"
                >
                  {article.title}
                </a>
                <p className="mt-2 text-xs text-[#4B4135]">Resources / Blog</p>
              </li>
            ))}
          </ul>
          <a
            href="/resources#blog"
            className="mt-4 inline-flex items-center text-sm font-semibold text-[#2F4C6E] hover:text-[#4E6E92]"
          >
            最新記事をすべて見る →
          </a>
        </div>
      </div>
    </section>
  );
}
