const personas = [
  {
    id: "executive",
    title: "経営層・意思決定者の方",
    icon: "👔",
    challenges: [
      "AI投資のROIが見えない",
      "四半期で成果を示す必要がある",
      "社内にAI人材がいない",
    ],
    solutions: [
      {
        title: "BOOST｜四半期プロジェクト",
        description: "4〜8週でKPIを可視化し、Before/Afterを測定。投資判断に必要な成果を数値で示します。",
        cta: "成果伴随を相談",
        href: "/join#enterprise",
      },
      {
        title: "PRIME｜Executive Community",
        description: "未公開ケースや現場見学を通じて、他社の成功・失敗事例を学べます。月次コンサルも含まれます。",
        cta: "PRIME詳細を見る",
        href: "/programs#prime",
      },
    ],
    testimonial: {
      quote: "四半期で役員会へ成果を示せる道筋が見えた。伴随レポートがそのまま経営会議資料になり、投資判断が進んだ。",
      source: "製造業 事業本部長（BOOST導入企業）",
    },
  },
  {
    id: "dx-lead",
    title: "DX推進・プロジェクトリーダーの方",
    icon: "🚀",
    challenges: [
      "現場の巻き込みが難しい",
      "PoC止まりで横展開できない",
      "実装の具体的な手順がわからない",
    ],
    solutions: [
      {
        title: "月謝プラン（ACTIVE）",
        description: "業界別の実装事例を全文検索でき、Flow別ダイジェストで最新の手法を学べます。Larkで師範に質問も可能。",
        cta: "月謝プランを見る",
        href: "/programs#active",
      },
      {
        title: "週次稽古",
        description: "毎週木曜日に最新ケースの分解と実装実況を配信。現場を巻き込む方法や、失敗事例から学べます。",
        cta: "無料稽古に登録",
        href: "/join#free-live",
      },
    ],
    testimonial: {
      quote: "ノーコードによるアプリ開発の最前線を理解できた。人生が変わるほどのインパクトを受けました。",
      source: "参加者（未経験・知人紹介）",
    },
  },
  {
    id: "operator",
    title: "現場担当者・実装する方",
    icon: "⚙️",
    challenges: [
      "AIツールを試したいが、何から始めればいいかわからない",
      "実際の業務でどう使うかイメージできない",
      "失敗例を知りたい",
    ],
    solutions: [
      {
        title: "月謝プラン（BASIC）",
        description: "ライブアーカイブと週次ノートで、実装の手順を学べます。Larkで質問しながら進められます。",
        cta: "月謝プランを見る",
        href: "/programs#basic",
      },
      {
        title: "週次稽古",
        description: "実装ハンズオン実況で、実際の画面を見ながら学べます。質疑応答の時間もあります。",
        cta: "無料稽古に登録",
        href: "/join#free-live",
      },
    ],
    testimonial: {
      quote: "実際に触って、動かして、チームメンバの成果物を確認できた。会話を通してコミュニケーションが生まれるのが道場らしくて良い。",
      source: "参加者（5年以上・知人紹介）",
    },
  },
];

export default function ForYouPage() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
            参加を検討している方へ
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            あなたの役割や課題に応じた、最適な学び方をご提案します。
            <br />
            まずは無料稽古から始めて、道場の雰囲気を確かめてください。
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {personas.map((persona) => (
            <div
              key={persona.id}
              id={persona.id}
              className="rounded-3xl border-2 border-[#D8CFC3] bg-white p-8 shadow-lg md:p-12"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">{persona.icon}</div>
                <h2 className="font-serif text-3xl font-bold text-[#1D1A15]">
                  {persona.title}
                </h2>
              </div>

              {/* よくある課題 */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                  よくある課題
                </h3>
                <ul className="mt-4 space-y-2">
                  {persona.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-[#4B4135]">
                      <span className="mt-1 h-2 w-2 rounded-full bg-bamboo flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* おすすめの始め方 */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                  おすすめの始め方
                </h3>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  {persona.solutions.map((solution) => (
                    <div
                      key={solution.title}
                      className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-6"
                    >
                      <h4 className="font-semibold text-[#1D1A15]">{solution.title}</h4>
                      <p className="mt-2 text-sm text-[#4B4135]">{solution.description}</p>
                      <a
                        href={solution.href}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-bamboo hover:text-bamboo-light"
                      >
                        {solution.cta} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* 参加者の声 */}
              <div className="mt-8 rounded-2xl border border-[#D8CFC3] bg-white/70 p-6 backdrop-blur">
                <p className="font-serif text-lg text-[#1D1A15]">
                  &ldquo;{persona.testimonial.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm text-[#4B4135]">{persona.testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 共通CTA */}
        <div className="mt-16 rounded-3xl border-2 border-bamboo bg-white p-8 text-center shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-[#1D1A15]">
            まずは無料稽古から始めましょう
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            毎週木曜日 19:30-20:30 に開催している無料のライブ配信で、
            <br />
            道場の雰囲気や実装の進め方を体験できます。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/join#free-live"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
            >
              無料稽古に登録する
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
            >
              プログラム一覧を見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
