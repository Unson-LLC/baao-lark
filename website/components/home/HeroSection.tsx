import Link from "next/link";

const nextLive = {
  date:
    process.env.NEXT_PUBLIC_NEXT_LIVE_DATE ??
    "毎週木曜 19:00-19:45（18:50開場・アフター質疑15分）",
  topic:
    process.env.NEXT_PUBLIC_NEXT_LIVE_TOPIC ??
    "Weekly Dojo Live｜AIニュースと最新ケースの分解",
  mentor:
    process.env.NEXT_PUBLIC_NEXT_LIVE_MENTOR ??
    "佐藤 圭吾（Field Director｜製造 × Quality-Up）",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#F9F6F0] via-[#E9E4DC] to-[#dce5f2]"
    >
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#dcd2c3]/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#2F4C6E]/20 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
            実戦AI道場｜BAAO Dojo for Practical AI
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#1D1A15] sm:text-5xl lg:text-6xl">
            流派 × 勝ち筋 × 型で、四半期で成果を出す。
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#4B4135]">
            道場の稽古は、毎週の無料ライブから始まります。月謝でアーカイブと伴走を受け、四半期で成果を可視化し、ケースとして公開。和の現場知と実装知で、組織のAI活用を定着させます。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join#free-live"
              className="flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-white transition hover:bg-[#4E6E92]"
            >
              今週の稽古に参加する
            </Link>
            <Link
              href="/join#enterprise"
              className="flex items-center justify-center rounded-full border border-[#2F4C6E] px-6 py-3 text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
            >
              四半期で成果を相談する
            </Link>
            <Link
              href="/fellows"
              className="flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-[#1D1A15] transition hover:bg-[#2F4C6E]/10"
            >
              師範として参画する
            </Link>
          </div>
        </div>

        <aside className="rounded-3xl border border-[#D8CFC3] bg-white/80 p-6 shadow-[0_12px_24px_rgba(29,26,21,0.08)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
            次回 無料稽古
          </p>
          <h3 className="mt-2 font-serif text-2xl text-[#1D1A15]">{nextLive.topic}</h3>
          <dl className="mt-6 space-y-3 text-sm text-[#4B4135]">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 rounded-full bg-[#C47E3B]" />
              <div>
                <dt className="font-semibold text-[#1D1A15]">日時</dt>
                <dd>{nextLive.date}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 h-2 w-2 rounded-full bg-[#C47E3B]" />
              <div>
                <dt className="font-semibold text-[#1D1A15]">師範</dt>
                <dd>{nextLive.mentor}</dd>
              </div>
            </div>
          </dl>
          <div className="mt-6 rounded-xl border border-[#D8CFC3] bg-[#F9F6F0] px-4 py-3 text-sm">
            <p className="font-semibold text-[#1D1A15]">
              月謝会員になると
            </p>
            <ul className="mt-2 space-y-1 text-[#4B4135]">
              <li>・アーカイブとノートをいつでも閲覧</li>
              <li>・Slack/PFで伴走レビュー</li>
              <li>・伴走案件の優先紹介</li>
              <li>・AIニュースの要点とROIヒントを配信</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
