const steps = [
  {
    title: "無料の稽古ライブ",
    description: "週次でケースと実装実況を体験。オープンチャットで質疑応答。",
    cta: { label: "稽古に参加", href: "/join#free-live" },
  },
  {
    title: "月謝プラン（BASIC/ACTIVE）",
    description: "アーカイブ・ノート・Slack相談・フィード別ダイジェストで理解を深める。",
    cta: { label: "月謝プランを見る", href: "/programs#basic" },
  },
  {
    title: "伴走支援（PRIME/BOOST）",
    description: "四半期で成果を出す計画を共に設計し、実装と測定まで伴走。",
    cta: { label: "成果伴走を相談", href: "/join#enterprise" },
  },
  {
    title: "成果公開・横展開",
    description: "ケース/Yearbookとして公開し、他部署・他社への横展開を支援。",
    cta: { label: "公開ケースを見る", href: "/cases" },
  },
];

export default function PathToMastery() {
  return (
    <section id="journey" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            稽古 → 月謝 → 伴走 → 公開の道筋。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            どのペルソナも「無料で覗く」ことから始まり、徐々に伴走・公開へステップアップできる構造です。
          </p>
        </div>
        <div className="relative mt-12 lg:flex lg:items-center lg:justify-between lg:gap-6">
          <div className="absolute left-8 top-12 hidden h-[2px] w-[calc(100%-4rem)] bg-[#D8CFC3] lg:block" />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="mb-4 flex items-center gap-3 lg:mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F4C6E] font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-[#1D1A15]">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#4B4135]">{step.description}</p>
                <a
                  href={step.cta.href}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#2F4C6E] hover:text-[#4E6E92]"
                >
                  {step.cta.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
