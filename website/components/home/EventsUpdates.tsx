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
    isPlaceholder: true,
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
    link: "#",
    isPlaceholder: true,
  },
  {
    title: "自治体・公共分野での実装事例",
    link: "#",
    isPlaceholder: true,
  },
  {
    title: "AI道場の学習体系と成長の仕組み",
    link: "#",
    isPlaceholder: true,
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
            無料ライブのほか、業界別の現場見学、評議会議（ひょうぎかいぎ）など、リアルな場で学べる機会を用意しています。
          </p>
          <div className="mt-8 grid gap-4">
            {events.map((event) => (
              <div
                key={event.title}
                className={`rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-5 shadow-sm ${event.isPlaceholder ? 'opacity-75' : ''}`}
              >
                <div className="flex items-center justify-between text-xs text-[#4B4135]">
                  <span className={`rounded-full px-3 py-1 font-semibold ${event.isPlaceholder ? 'bg-[#D8CFC3]/20 text-[#4B4135]' : 'bg-bamboo/10 text-bamboo'}`}>
                    {event.tag}
                  </span>
                  <span>{event.date}</span>
                </div>
                <h3 className="mt-3 font-semibold text-[#1D1A15]">{event.title}</h3>
                <p className="mt-2 text-sm text-[#4B4135]">{event.location}</p>
                {!event.isPlaceholder && (
                  <a
                    href={event.link || "/resources#events"}
                    target={event.link ? "_blank" : undefined}
                    rel={event.link ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-bamboo hover:text-bamboo-light"
                  >
                    申し込む →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

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
                <p className="mt-2 text-xs text-[#4B4135]">準備中</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[#4B4135]">
            ケーススタディやコラムを順次公開予定です。
          </p>
        </div>
      </div>
    </section>
  );
}
