const steps = [
  {
    number: "1",
    title: "無料で試す",
    description: "週次の稽古ライブで雰囲気を体験",
    cta: { label: "稽古に参加", href: "/join#free-live" },
  },
  {
    number: "2",
    title: "月謝で学ぶ",
    description: "過去の知見を検索し、師範に質問しながら習得",
    cta: { label: "月謝プランを見る", href: "/programs#basic" },
  },
  {
    number: "3",
    title: "伴走で成果を出す",
    description: "専任チームと共に四半期で成果を可視化",
    cta: { label: "成果伴走を相談", href: "/join#enterprise" },
  },
];

export default function PathToMastery() {
  return (
    <section id="journey" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            無料体験から成果まで、3ステップ
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            まずは無料で試して、自分のペースで学び、必要に応じて成果を出す。
          </p>
        </div>
        <div className="relative mt-16">
          {/* 接続線（デスクトップのみ） */}
          <div className="absolute left-1/2 top-8 hidden h-[2px] w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-bamboo/30 via-bamboo/50 to-bamboo/30 lg:block" />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* ステップ番号 */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-bamboo to-bamboo-dark font-serif text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* タイトル */}
                  <h3 className="mb-3 font-serif text-xl font-bold text-[#1D1A15]">
                    {step.title}
                  </h3>

                  {/* 説明 */}
                  <p className="mb-6 text-sm leading-relaxed text-[#4B4135]">
                    {step.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={step.cta.href}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-bamboo px-6 py-2.5 text-sm font-semibold text-bamboo transition hover:bg-bamboo hover:text-white"
                  >
                    {step.cta.label}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
