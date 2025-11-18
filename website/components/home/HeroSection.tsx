import Link from "next/link";
import Image from "next/image";

const nextLive = {
  date:
    process.env.NEXT_PUBLIC_NEXT_LIVE_DATE ??
    "毎週木曜 19:30-20:30",
  topic:
    process.env.NEXT_PUBLIC_NEXT_LIVE_TOPIC ??
    "Weekly Dojo Live｜AIニュースと最新ケースの分解",
  mentor:
    process.env.NEXT_PUBLIC_NEXT_LIVE_MENTOR ??
    "佐藤 圭吾（BAAO理事 / 生成AIエキスパート）",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-washi via-washi-dark to-dojo-green/10 ink-bleed"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/main2.png"
          alt="流派 × 勝ち筋 × 型で、四半期で成果を出す。"
          fill
          priority
          className="object-cover object-center opacity-30 image-sepia"
        />
        <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-dojo-gold/20 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-dojo-green/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-dojo-indigo/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 py-24 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-36">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-lg bg-dojo-green/10 px-5 py-2 border border-dojo-gold/30">
            <span className="h-2 w-2 rounded-full bg-dojo-gold animate-pulse" />
            <span className="text-sm font-bold text-dojo-green tracking-wide">
              実戦AI道場｜BAAO Dojo for Practical AI
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#1D1A15] sm:text-4xl lg:text-5xl drop-shadow-sm">
            流派 × 勝ち筋 × 型で、
            <br />
            <span className="text-dojo-gold">四半期で成果を出す。</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink font-serif opacity-100">
            道場の稽古は、毎週の無料ライブから始まります。月謝でアーカイブと伴走を受け、四半期で成果を可視化し、ケースとして公開。和の現場知と実装知で、組織のAI活用を定着させます。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/join#free-live"
              className="btn-primary flex items-center justify-center group"
            >
              今週の稽古に参加する
              <span className="arrow-japanese" />
            </Link>
            <Link
              href="/join#enterprise"
              className="btn-secondary flex items-center justify-center"
            >
              四半期で成果を相談する
            </Link>
            <Link
              href="/fellows"
              className="flex items-center justify-center rounded-lg border-2 border-dojo-indigo px-6 py-3 text-dojo-indigo font-bold transition-all hover:bg-dojo-indigo hover:text-white"
            >
              師範として参画する
            </Link>
          </div>
        </div>

        <aside className="shoji-card corner-decoration rounded-2xl border-2 border-dojo-gold/30 bg-white/90 p-8 backdrop-blur">
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-wider text-dojo-gold border-b-2 border-dojo-gold pb-2 inline-block">
              次回 無料稽古
            </p>
            <h3 className="mt-4 font-serif text-2xl font-bold text-dojo-green leading-snug">{nextLive.topic}</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-washi/50">
                <span className="mt-1 h-3 w-3 rounded-full bg-dojo-gold flex-shrink-0" />
                <div>
                  <dt className="font-bold text-dojo-green mb-1">日時</dt>
                  <dd className="text-ink">{nextLive.date}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-washi/50">
                <span className="mt-1 h-3 w-3 rounded-full bg-dojo-gold flex-shrink-0" />
                <div>
                  <dt className="font-bold text-dojo-green mb-1">師範</dt>
                  <dd className="text-ink">{nextLive.mentor}</dd>
                </div>
              </div>
            </dl>
            <div className="mt-6 rounded-xl border-2 border-dojo-indigo/30 bg-gradient-to-br from-dojo-indigo/5 to-dojo-green/5 px-5 py-4 text-sm">
              <p className="font-bold text-dojo-green flex items-center gap-2">
                <span className="h-1 w-8 bg-dojo-gold" />
                月謝会員になると
              </p>
              <ul className="mt-3 space-y-2 text-ink">
                <li className="flex items-start gap-2">
                  <span className="text-dojo-gold mt-1">◆</span>
                  アーカイブとノートをいつでも閲覧
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-dojo-gold mt-1">◆</span>
                  Lark上で伴走レビュー
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-dojo-gold mt-1">◆</span>
                  伴走案件の優先紹介
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-dojo-gold mt-1">◆</span>
                  AIニュースの要点とROIヒントを配信
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
