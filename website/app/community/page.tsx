import Image from "next/image";

const benefits = [
  {
    title: "実案件での経験が積める",
    description: "BOOST・PRIMEプロジェクトに参加し、実際の企業案件で実装支援ができます。",
    icon: "💼",
  },
  {
    title: "報酬と実績が得られる",
    description: "案件への参画、登壇、記事執筆などの貢献に応じて報酬が支払われます。実績は公開ケースとして残ります。",
    icon: "💰",
  },
  {
    title: "専門家ネットワーク",
    description: "各業界の実務家と交流し、最新の実装ノウハウを共有できます。",
    icon: "🤝",
  },
  {
    title: "優先的な情報アクセス",
    description: "未公開のケーススタディや実装手順書を先行して閲覧できます。",
    icon: "📚",
  },
];

const howToJoin = [
  {
    step: "1",
    title: "まずは無料稽古に参加",
    description: "毎週木曜日の無料ライブで道場の雰囲気を体験してください。",
  },
  {
    step: "2",
    title: "月謝プランで実力をつける",
    description: "BASIC/ACTIVEプランでアーカイブを見て、質問しながら学びます。",
  },
  {
    step: "3",
    title: "師範として応募",
    description: "一定の実績を積んだ後、師範として案件に参画できます。",
  },
];

const currentFellows = [
  {
    name: "山本 力弥",
    role: "BAAO代表理事 / AI戦略コンサルタント",
    expertise: "製造・通信業のサプライチェーン改革、サービスロボット事業開発。経産省AI原則実践ガバナンス・ガイドライン策定参画。",
    background: "慶應義塾大学理工学部管理工学科卒。外資コンサル、大手通信会社を経て、「AI技術の民主化」を掲げBAAOを設立。",
    image: "/images/yamamoto.webp",
  },
  {
    name: "佐藤 圭吾",
    role: "BAAO理事 / 生成AIエキスパート",
    expertise: "生成AIプロダクト開発、企業のAIトランスフォーメーション支援。NTTコミュニケーションズ生成AIエキスパート。",
    background: "2024年9月に雲孫LLC設立。AI利活用指針の策定や倫理ガイドラインの普及に注力。",
    image: "/images/29F5TBtd_400x400.jpg",
  },
  {
    name: "Hiromi Maeo",
    role: "ブランドデザイナー / Lovable Ambassador",
    expertise: "AI×ブランド設計×デザイン。企業の思想から「意味→構造→形」を導き響くブランドを設計。",
    background: "DFA Silver、A' Design Silver受賞。Behance Featured。企業のAI活用におけるブランド戦略とデザインを支援。",
    image: "/images/KkvKPBYp_400x400.jpg",
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
            師範として参画する
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            AI道場では、各業界で実績を持つ専門家を「師範」として迎え、
            <br />
            実装支援やケース公開、登壇などを通じて、コミュニティを支えていただいています。
          </p>
        </div>

        {/* 師範になるメリット */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl text-[#1D1A15] text-center">
            師範になるメリット
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-8 shadow-sm"
              >
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="mt-4 font-semibold text-[#1D1A15]">{benefit.title}</h3>
                <p className="mt-2 text-sm text-[#4B4135]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 師範になるまでの流れ */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl text-[#1D1A15] text-center">
            師範になるまでの流れ
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {howToJoin.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bamboo/10 text-lg font-bold text-bamboo">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-[#1D1A15]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#4B4135]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 活動内容 */}
        <div className="mt-16 rounded-3xl border border-[#D8CFC3] bg-white p-8 shadow-sm">
          <h2 className="font-serif text-3xl text-[#1D1A15]">
            師範の主な活動
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-6">
              <h3 className="font-semibold text-[#1D1A15]">実装支援</h3>
              <p className="mt-2 text-sm text-[#4B4135]">
                企業のBOOST・PRIMEプロジェクトに参加し、AI導入の実装をサポートします。自分の専門領域を活かせます。
              </p>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-6">
              <h3 className="font-semibold text-[#1D1A15]">ケース公開への寄稿</h3>
              <p className="mt-2 text-sm text-[#4B4135]">
                プロジェクトの成果を実装事例として執筆・公開します。著者として名前が残り、実績になります。
              </p>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-6">
              <h3 className="font-semibold text-[#1D1A15]">週次稽古への登壇</h3>
              <p className="mt-2 text-sm text-[#4B4135]">
                無料稽古での登壇や、専門領域の解説を行います。自分の知見を広く共有できます。
              </p>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-6">
              <h3 className="font-semibold text-[#1D1A15]">コミュニティでの質問対応</h3>
              <p className="mt-2 text-sm text-[#4B4135]">
                Larkコミュニティでの質問に答えたり、参加者の実装をレビューします。
              </p>
            </div>
          </div>
        </div>

        {/* 現在活躍中の師範 */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl text-[#1D1A15] text-center">
            現在活躍中の師範（一部）
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {currentFellows.map((fellow) => (
              <div
                key={fellow.name}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  {fellow.image && (
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={fellow.image}
                        alt={fellow.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-[#1D1A15] text-lg">{fellow.name}</p>
                    <p className="mt-1 text-sm text-bamboo">{fellow.role}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3 text-sm text-[#4B4135]">
                  <div>
                    <p className="font-semibold text-[#1D1A15]">専門領域</p>
                    <p className="mt-1">{fellow.expertise}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D1A15]">経歴</p>
                    <p className="mt-1">{fellow.background}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#4B4135]">
            その他、製造・医療・公共・金融など各業界の専門家が師範として参画しています。
          </p>
        </div>

        {/* 応募CTA */}
        <div className="mt-16 rounded-3xl border-2 border-bamboo bg-white p-8 text-center shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-[#1D1A15]">
            師範として参画してみませんか？
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            まずは無料稽古に参加して、道場の雰囲気を確かめてください。
            <br />
            その後、月謝プランで実力をつけて、師範としての道を歩んでいただけます。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/join#fellow"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
            >
              師範として応募する
            </a>
            <a
              href="/join#free-live"
              className="inline-flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
            >
              まずは無料稽古に参加
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
