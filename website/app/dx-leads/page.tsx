import Link from "next/link";

const pains = [
  "無料稽古で盛り上がっても、その先の月謝・伴走導線が描けずPoCで止まる",
  "教材が散逸し、社内共有や稟議に使える資料が作れない",
  "守秘と公開のバランスが分からず、現場が不安で動けない",
];

const roadmap = [
  {
    title: "Step 1｜無料稽古で空気を掴む",
    description: "参加後アンケートで課題を申告すると、Lark招待と次の一手を提案。オープンチャットで横のつながりを形成。",
  },
  {
    title: "Step 2｜月謝（BASIC / ACTIVE）で型を習得",
    description: "アーカイブと週次ノートで情報を整理。Flow別ダイジェストで部門ごとの気づきを共有し、Larkで壁打ち。",
  },
  {
    title: "Step 3｜FieldWorksで導入フローをRACI化",
    description: "流派 × 勝ち筋 × 型のマトリクスで役割を明確化。Fellowと社内メンバーの責任範囲をタスク化。",
  },
  {
    title: "Step 4｜BOOST/PRIMEで成果を公開",
    description: "Before/Afterを計測し、守秘レベルに応じてYearbook・社内向け資料を整備。Green Roomで意思決定を支援。",
  },
];

const resources = [
  {
    title: "稟議用テンプレート",
    description: "目的・KPI・守秘レベル・予算・役割分担を一枚でまとめるテンプレート。",
    href: "/resources#downloads",
  },
  {
    title: "Lark運用ガイド",
    description: "無料会員から月謝・伴走へステップアップさせるためのメッセージテンプレ。",
    href: "/resources#downloads",
  },
  {
    title: "FieldWorksチェックリスト",
    description: "流派×勝ち筋×型ごとに、現場ヒアリングで確認すべき項目を整理したチェックリスト。",
    href: "/resources#downloads",
  },
];

const wins = [
  {
    title: "PoCで止まった生成AI提案を全社展開",
    detail: "BASICで学んだテンプレを活用し、PRIMEで役員会プレゼンを実施。受注率+12pt。",
  },
  {
    title: "自治体DXで住民対応を自動化",
    detail: "Change & Enablementの型を適用し、問い合わせ一次回答率82%へ。Yearbookで匿名公開。",
  },
  {
    title: "社内Lark × Impact Pointsで導入スピード向上",
    detail: "オープンチャット→Lark→伴走の導線を整備し、月謝からBOOSTまでの昇格率を19%に。",
  },
];

export default function DxLeadsPage() {
  return (
    <main className="bg-[#F9F6F0] text-[#1D1A15]">
      <section className="bg-gradient-to-br from-[#E3EAF5] to-[#F9F6F0] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">For DX Leads</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            PoCで止まらないロードマップを、無料稽古から伴走まで一気通貫で設計する。
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B4135]">
            DX推進担当・人材開発の方の悩みは「社内展開の再現性」と「稟議通過」。AI道場では無料稽古→月謝→伴走→公開の流れをモジュール化し、FieldWorksマトリクスと稟議テンプレで社内合意形成まで支援します。
          </p>
          <p className="mt-4 text-sm text-[#4B4135]">
            稟議テンプレートと返金保証で安心してご相談いただけます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4B4135]">
            <Link
              href="/join#free-live"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              無料稽古に参加する
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
            >
              月謝と伴走の内容を見る
            </Link>
            <Link
              href="/resources#downloads"
              className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B]/10"
            >
              稟議資料テンプレを受け取る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">DX推進担当が抱える課題</h2>
          <ul className="mt-6 space-y-4 text-sm text-[#4B4135]">
            {pains.map((pain) => (
              <li key={pain} className="rounded-3xl border border-[#D8CFC3] bg-white p-6 leading-relaxed">
                {pain}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">ロードマップ（無料稽古 → 月謝 → 伴走 → 公開）</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {roadmap.map((step) => (
              <div key={step.title} className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-6 text-sm text-[#4B4135]">
                <h3 className="font-serif text-xl text-[#1D1A15]">{step.title}</h3>
                <p className="mt-3 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">稟議・社内共有のためのリソース</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 text-sm text-[#4B4135] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="font-serif text-xl text-[#1D1A15]">{resource.title}</p>
                <p className="mt-3 leading-relaxed">{resource.description}</p>
                <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">
                  ダウンロードへ →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">成果事例</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {wins.map((win) => (
              <div key={win.title} className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-6 text-sm text-[#4B4135]">
                <p className="font-serif text-xl text-[#1D1A15]">{win.title}</p>
                <p className="mt-3 leading-relaxed">{win.detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/success-stories"
            className="mt-6 inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 text-sm font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
          >
            成功ストーリーをもっと見る
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="rounded-3xl border border-[#D8CFC3] bg-white p-8 text-sm text-[#4B4135]">
            <h2 className="font-serif text-2xl text-[#1D1A15]">次のアクション</h2>
            <p className="mt-3">
              無料稽古に参加いただくと、Larkでの質問と稟議テンプレートをご案内します。そのまま月謝相談・伴走相談へ進む場合はフォームで希望内容を共有してください。24時間以内にCommunity Catalystが導線を整備します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/join#free-live"
                className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
              >
                無料稽古を予約する
              </Link>
              <Link
                href="/join#basic"
                className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
              >
                月謝プランを相談する
              </Link>
              <Link
                href="/join#enterprise"
                className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B]/10"
              >
                伴走相談を申し込む
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
