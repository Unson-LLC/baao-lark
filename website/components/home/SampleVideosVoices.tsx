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

export default function SampleVideosVoices() {
  return (
    <section id="voices" className="bg-[#F9F6F0] py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-3xl border border-[#D8CFC3] bg-white p-8 shadow-[0_12px_24px_rgba(29,26,21,0.08)]">
          <div className="relative overflow-hidden rounded-2xl bg-[#1D1A15]">
            <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-[#2F4C6E] via-[#4E6E92] to-[#1D1A15]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520367745676-234fdd6e9ff1?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-50" />
              <div className="relative text-center">
                <button className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#2F4C6E] shadow-lg transition hover:scale-105">
                  ▶
                </button>
                <p className="mt-4 text-sm font-medium uppercase tracking-wide text-white/80">
                  ダイジェスト（3分）/ 近日公開
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  稽古ライブの一部を公開予定。
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between rounded-xl bg-[#2F4C6E]/10 px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-[#2F4C6E]">平均満足度（2025/10/26）</p>
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
          <p className="text-lg leading-relaxed text-[#4B4135]">
            参加者の多くは未経験〜1年未満。それでも、稽古を通じて“四半期で成果を出す”イメージが描けるようになったと回答しています。
          </p>
          <div className="grid gap-5">
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
