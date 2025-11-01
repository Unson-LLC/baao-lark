import Link from "next/link";

const pains = [
  {
    title: "PoC止まりでROIを提示できない",
    description:
      "プロジェクトは成立したが四半期での成果が曖昧。役員会や株主向けに説得力のある資料が用意できない。",
  },
  {
    title: "監修者と現場の一次責任が不透明",
    description:
      "コンサルやベンダーでは誰が品質を担保するのか分からず、自社のリスクを取って意思決定しづらい。",
  },
  {
    title: "成功しても公開できず再現性が生まれない",
    description:
      "成果の共有先が限定され、社内横展開も停滞。公開ポリシーと守秘のバランスが必要。",
  },
];

const process = [
  {
    step: "Quarter 0",
    title: "Executive Briefing",
    body: "Field Directorが現状と勝ち筋をヒアリング。守秘レベルと成果指標を合意し、責任者をアサインします。",
  },
  {
    step: "Quarter 1",
    title: "BOOST｜四半期でBefore/Afterを証明",
    body: "週次レビューとImpact Pointsで進捗を見える化。必要に応じ返金保証条項を発動し、改善プランを再提示。",
  },
  {
    step: "Quarter 2",
    title: "PRIME｜役員会報告とGreen Room",
    body: "成果レポートと次期投資計画を整備。Green Roomで未公開ケースを先行共有し、意思決定を支援。",
  },
  {
    step: "Quarter 3",
    title: "Yearbook & 拡張",
    body: "公開可能な範囲でYearbookに掲載し、自社内の横展開へ。必要に応じてDelegated案件を設計。",
  },
];

const directors = [
  {
    name: "山本 力弥",
    role: "Field Director｜製造 × Quality-Up",
    appointment: "Appointment# FW-2025-010",
    comment: "量産ラインとカルチャー変革を両立させるために、四半期で実装から公開まで伴走します。",
  },
  {
    name: "吉見 貴光",
    role: "Senior Fellow｜金融 × Growth-Up",
    appointment: "Appointment# FW-2025-021",
    comment: "役員会レベルの検証資料とGreen Roomでの意思決定支援を担当します。",
  },
];

const proofs = [
  {
    metric: "36%",
    label: "平均で削減した四半期コスト",
    note: "BOOST案件 12件（2024 Q4実績）",
  },
  {
    metric: "+14pt",
    label: "伴走後の受注率向上",
    note: "PRIMEコミュニティ参加企業の中位値",
  },
  {
    metric: "48件",
    label: "公開済みケース",
    note: "守秘レベル1-3を含む Yearbook 2024",
  },
];

export default function ExecutivesPage() {
  return (
    <main className="bg-[#F9F6F0] text-[#1D1A15]">
      <section className="bg-gradient-to-br from-[#E9E4DC] to-[#F9F6F0] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">For Executives</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            四半期で証明できるAI投資を、Field Directorが一次責任で伴走します。
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B4135]">
            BAAO 実戦AI道場のPRIME/BOOSTは、四半期でBefore/Afterを計測し、役員会に提出できるレポートまで仕上げる伴走プログラムです。返金保証と公開ポリシーでリスクを抑え、守秘レベルに応じた成功事例を構築します。
          </p>
          <p className="mt-4 text-sm text-[#4B4135]">
            返金保証付きの伴走でリスクはゼロ。ご相談だけでも歓迎です。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4B4135]">
            <Link
              href="/join#enterprise"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              企業相談を予約する
            </Link>
            <Link
              href="/success-stories"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
            >
              成果事例を見る
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
          <h2 className="font-serif text-3xl">よくある失敗パターン</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pains.map((pain) => (
              <div key={pain.title} className="rounded-3xl border border-[#D8CFC3] bg-white p-6 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{pain.title}</p>
                <p className="mt-3 leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">四半期ごとの伴走プロセス</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {process.map((item) => (
              <div key={item.step} className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-6 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">{item.step}</p>
                <h3 className="mt-2 font-serif text-xl text-[#1D1A15]">{item.title}</h3>
                <p className="mt-3 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">Field Director & Senior Fellow</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Appointment# が付与されたField Director / Senior Fellowが一次責任を持ち、守秘と品質を担保します。面談時には本人がGreen Roomでの役割と実績を共有します。
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {directors.map((director) => (
              <div key={director.name} className="rounded-3xl border border-[#D8CFC3] bg-white p-6 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{director.appointment}</p>
                <h3 className="mt-2 font-serif text-2xl text-[#1D1A15]">{director.name}</h3>
                <p className="text-sm text-[#4B4135]">{director.role}</p>
                <p className="mt-3 leading-relaxed">{director.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl">成果と保証</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {proofs.map((proof) => (
              <div key={proof.label} className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-6 text-sm text-[#4B4135]">
                <p className="font-serif text-3xl text-[#1D1A15]">{proof.metric}</p>
                <p className="mt-2 font-semibold text-[#1D1A15]">{proof.label}</p>
                <p className="mt-2 text-xs text-[#4B4135]">{proof.note}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-2 text-sm text-[#4B4135]">
            <li>・PRIME/BOOSTは返金保証付き。KPI設計が実行されなかった場合は全額返金。</li>
            <li>・守秘レベルはプロジェクト開始時に合意し、公開前に再確認します。</li>
            <li>・Yearbook掲載はCOIを明記し、公開箇所を事前に承認いただきます。</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="rounded-3xl border border-[#D8CFC3] bg-white p-8 text-sm text-[#4B4135]">
            <h2 className="font-serif text-2xl text-[#1D1A15]">次のアクション</h2>
            <p className="mt-3">
              24時間以内にField Directorが担当宣言し、四半期の成果と公開方針を整理します。まずは無料稽古で空気を掴んでいただき、そのまま企業相談にお申し込みください。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/join#enterprise"
                className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
              >
                企業相談を予約する
              </Link>
              <Link
                href="/join#free-live"
                className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
              >
                無料稽古を体験する
              </Link>
              <Link
                href="/resources#downloads"
                className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B]/10"
              >
                稟議資料テンプレを受け取る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
