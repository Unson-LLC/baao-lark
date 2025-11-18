const quotes = [
  {
    quote:
      "四半期で役員会へ成果を示せる道筋が見えた。伴走レポートがそのまま経営会議資料になり、投資判断が進んだ。",
    source: "製造業 事業本部長（BOOST導入企業）",
  },
  {
    quote:
      "こんなに簡単にアプリが作れるのかと驚きました。元々興味はあったが、より触ってみようと思えたいい機会となった。",
    source: "参加者（未経験・知人紹介）",
  },
  {
    quote:
      "ノーコードによるアプリ開発の最前線を理解できた。人生が変わるほどのインパクトを受けました。",
    source: "参加者（未経験・知人紹介）",
  },
  {
    quote:
      "実際に触って、動かして、チームメンバの成果物を確認できた。会話を通してコミュニケーションが生まれるのが道場らしくて良い。",
    source: "参加者（5年以上・知人紹介）",
  },
];

import Image from "next/image";

export default function SampleVideosVoices() {
  return (
    <section id="voices" className="relative overflow-hidden bg-[#F9F6F0] py-16 md:py-20">
      {/* 背景に淡いアクセント画像（禅庭） */}
      <div className="pointer-events-none absolute -right-24 top-10 hidden h-[340px] w-[340px] rotate-6 opacity-20 sm:block">
        <Image
          src="/images/voices/zen.png"
          alt="禅的な気づきのイメージ"
          fill
          sizes="340px"
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div className="pointer-events-none absolute -left-20 bottom-0 hidden h-[260px] w-[260px] -rotate-6 opacity-15 sm:block">
        <Image
          src="/images/voices/zen.png"
          alt="禅的な気づきのイメージ"
          fill
          sizes="260px"
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-3xl border border-[#D8CFC3] bg-white p-8 shadow-[0_12px_24px_rgba(29,26,21,0.08)]">
          <div className="relative overflow-hidden rounded-2xl bg-[#1D1A15]">
            <div className="aspect-video relative">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/0a2fe0sa08o?start=1"
                title="週次稽古｜AIニュース解説の一部"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-[#4B4135]">
                週次稽古｜AIニュース解説の一部
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between rounded-xl bg-bamboo/10 px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-bamboo">キックオフイベント（2025/10/26）</p>
              <p className="font-serif text-3xl text-[#1D1A15]">4.44 / 5</p>
            </div>
            <div className="text-right text-sm text-[#4B4135]">
              <p>アプリ開発に挑戦したい 68%</p>
              <p>自動化を学びたい 52%</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            無料稽古での「気づき」と「手応え」。
          </h2>
          <div className="relative grid gap-5">
            {quotes.map((quote) => (
              <div
                key={quote.quote}
                className="rounded-2xl border border-[#D8CFC3] bg-white/70 p-5 shadow-sm backdrop-blur"
              >
                <p className="font-serif text-lg text-[#1D1A15]">&ldquo;{quote.quote}&rdquo;</p>
                <p className="mt-3 text-sm text-[#4B4135]">{quote.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
