import Link from "next/link";

const beforeAfter = [
  {
    title: "週次レポート自動生成",
    before: "営業報告に3時間かかり、更新が追いつかない",
    after: "稽古で共有したテンプレとLark BOTで30分に短縮",
  },
  {
    title: "問い合わせ対応の一次回答",
    before: "夜間の問い合わせが翌営業日まで滞留",
    after: "月謝のワークフローを適用して即レス。顧客評価が+0.6pt",
  },
  {
    title: "資料作成のプロンプト設計",
    before: "生成AIで資料を書こうとしても品質が不安",
    after: "BASICの稽古ノートを流用し、社内レビュー時間を40%削減",
  },
];

const programHighlights = [
  {
    plan: "BASIC",
    features: [
      "週次ライブアーカイブと30分ノート",
      "Larkで師範に質問、月次レビュー付き",
      "流派×勝ち筋のフィードで自分の業界だけ追える",
    ],
    cta: { label: "BASICを相談する", href: "/join#basic" },
  },
  {
    plan: "ACTIVE",
    features: [
      "全文検索で過去の稽古を横断検索",
      "ドラフトRECIPESの先行閲覧",
      "Flow別のショートカット動画とLarkまとめ",
    ],
    cta: { label: "ACTIVEを相談", href: "/join#basic" },
  },
];

const community = [
  {
    title: "無料オープンチャット",
    description: "匿名で参加可。週次ライブの補足、最新リンク、メンバーの雑談をキャッチアップ。",
  },
  {
    title: "Larkコミュニティ",
    description: "月謝メンバー限定で師範・Fellowが常駐。質問スレと成果報告スレを分けて運用。",
  },
  {
    title: "Impact Points",
    description: "質問回答・成功体験の共有でポイントが貯まり、Fellow応募や案件参加のチャンスに繋がる。",
  },
];

const faqs = [
  {
    question: "会社の経費で支払えますか？",
    answer: "法人請求書に対応しています。フォームで決済方法を選び、Larkで担当者を共有してください。",
  },
  {
    question: "見逃したライブはどう視聴しますか？",
    answer: "BASIC以上のメンバーは翌日までにアーカイブと30分ノートを受け取れます。",
  },
  {
    question: "コミュニティが不安です。荒れませんか？",
    answer: "モデレーターとFellowが常駐し、規約違反は即時対応。匿名参加も可能です。",
  },
];

export default function OperatorsPage() {
  return (
    <main className="bg-[#F9F6F0] text-[#1D1A15]">
      <section className="bg-gradient-to-br from-[#F7EADD] to-[#F9F6F0] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">For Operators</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            無料稽古で30分、月謝で残業30時間削減。実務に使える型をそのまま持ち帰れる。
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B4135]">
            「忙しくて学習に時間を割けない」「生成AIを業務で使うイメージが湧かない」。そんな現場の方が、無料稽古で空気を掴み、月謝プランでアーカイブとLarkにアクセスし、今日の業務に活かすまでをサポートします。
          </p>
          <p className="mt-4 text-sm text-[#4B4135]">もちろん相談だけでも歓迎です。</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4B4135]">
            <Link
              href="/join#free-live"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              無料稽古に参加する
            </Link>
            <Link
              href="/resources#events"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
            >
              イベントを確認する
            </Link>
            <Link
              href="/join#basic"
              className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B]/10"
            >
              月謝を相談する
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">Before / After</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {beforeAfter.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#D8CFC3] bg-white p-6 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{item.title}</p>
                <p className="mt-3 font-semibold text-[#1D1A15]">Before</p>
                <p>{item.before}</p>
                <p className="mt-3 font-semibold text-[#1D1A15]">After</p>
                <p>{item.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">月謝プランで出来ること</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {programHighlights.map((program) => (
              <div key={program.plan} className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-6 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">{program.plan}</p>
                <ul className="mt-3 space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2F4C6E]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={program.cta.href}
                  className="mt-5 inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
                >
                  {program.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">コミュニティの雰囲気</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {community.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#D8CFC3] bg-white p-6 text-sm text-[#4B4135]">
                <p className="font-serif text-xl text-[#1D1A15]">{item.title}</p>
                <p className="mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">よくある質問</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-6 text-sm text-[#4B4135]">
                <p className="font-semibold text-[#1D1A15]">Q. {faq.question}</p>
                <p className="mt-2 leading-relaxed">A. {faq.answer}</p>
              </div>
            ))}
          </div>
          <Link
            href="/resources#faq"
            className="mt-6 inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 text-sm font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
          >
            FAQをもっと見る
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="rounded-3xl border border-[#D8CFC3] bg-white p-8 text-sm text-[#4B4135]">
            <h2 className="font-serif text-2xl text-[#1D1A15]">次のアクション</h2>
            <p className="mt-3">
              まずは木曜夜の無料稽古に参加し、終わったらLark招待とハイライトノートが届きます。時間がなくても30分ノートでキャッチアップ可能です。実務にすぐ使える資料を持ち帰りたい場合は月謝プランをご検討ください。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/join#free-live"
                className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
              >
                無料稽古に申し込む
              </Link>
              <Link
                href="/join#basic"
                className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
              >
                月謝プランを相談する
              </Link>
              <Link
                href="/resources#events"
                className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B]/10"
              >
                説明会の予定を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
