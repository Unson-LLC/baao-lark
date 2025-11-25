import Link from "next/link";

const caseHighlights = [
  {
    title: "製造 × Quality-Up｜検査AIで不良率を半減",
    challenge: "現場でのAI導入がPoC止まりで、量産ラインに適用できなかった。",
    approach:
      "Field Directorが現場常駐し、週次レビューとImpact Pointsで進捗を可視化。Green Roomで意思決定を加速。",
    result: "P95不良率を38%→19%に改善。月次スクラップコストを1.2億円削減。",
    fellows: ["山本 力弥 (Field Director)", "本田 優 (Fellow II)"] as const,
    confidentiality: "守秘レベル2（匿名公開）",
  },
  {
    title: "金融 × Growth-Up｜提案資料生成で受注率 +14pt",
    challenge: "提案資料の作成に最大3日。勝ち筋が再現できず受注率が頭打ち。",
    approach:
      "Senior Fellowが生成AIテンプレを共著し、PRIMEセッションで役員とレビュー。RECIPESとして公開して横展開。",
    result: "提案資料作成時間を65%短縮し、受注率+14pt。年間売上 4.8 億円増。",
    fellows: ["吉見 貴光 (Senior Fellow)", "村上 早奈 (Fellow II)"] as const,
    confidentiality: "守秘レベル1（実名公開）",
  },
  {
    title: "公共 × Cost-Down｜窓口DXで待ち時間45%削減",
    challenge: "問い合わせ対応が属人化し、窓口の待ち時間が長い。NDA制約で外部共有も困難。",
    approach:
      "FellowがImpact Pointsを稼ぐワークショップを主導し、Change & Enablementの型を導入。",
    result: "待ち時間45%削減、問い合わせ一次回答率82%。Yearbookで匿名公開。",
    fellows: ["小川 未来 (Fellow III)", "藤山 和人 (Fellow I)"] as const,
    confidentiality: "守秘レベル3（申請制）",
  },
];

const kpis = [
  { label: "四半期売上インパクト累計", value: "+¥3.6 億", note: "BOOST/PRIME報告ベース" },
  { label: "P95 リードタイム改善", value: "-43%", note: "案件平均 (2024 Q4)" },
  { label: "公開ケース数", value: "48件", note: "Yearbook 2024ランクイン" },
  { label: "BASIC→PRIME 昇格率", value: "18%", note: "直近四半期" },
];

const policies = [
  {
    title: "守秘レベル設計",
    description:
      "レベル1=実名公開、レベル2=匿名公開、レベル3=申請制。プロジェクト開始時に希望レベルを合意し、公開前に再確認します。",
  },
  {
    title: "返金保証",
    description:
      "PRIME / BOOST では、合意したKPI設定が実行されない場合に全額返金。成果が未達の場合でも、改善プランの再提示を必須とします。",
  },
  {
    title: "COI・コンプライアンス",
    description:
      "利害関係者はYearbookとケース本文に明記。Field Director / Senior Fellow の Appointment# から検証可能です。",
  },
];

export default function SuccessStoriesPage() {
  return (
    <main className="bg-[#F9F6F0] text-[#1D1A15]">
      <section className="bg-gradient-to-br from-[#E9E4DC] to-[#F9F6F0] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">Success Stories</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            公開できる成果が、再現性の証明です。
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B4135]">
            Field Director が一次責任を持ち、Senior Fellow / Fellow が Impact Points で貢献を可視化。四半期で Before / After を計測し、公開主義に基づいてケース化します。
            守秘レベルに合わせた公開ポリシーと返金保証で、投資のリスクを最小化します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4B4135]">
            <p className="basis-full text-left text-sm text-[#4B4135]">
              この成功事例と同じ伴随をまずは無料稽古で体験しませんか？返金保証付きの相談なので、
              情報収集だけのご参加でも歓迎です。
            </p>
            <Link
              href="/join#enterprise"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              四半期で成果を相談する
            </Link>
            <Link
              href="/join#free-live"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
            >
              無料稽古を体験する
            </Link>
            <Link
              href="/join#fellow"
              className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B]/10"
            >
              Fellowsに応募する
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {caseHighlights.map((item) => (
              <article key={item.title} className="flex h-full flex-col gap-3 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1D1A15]">{item.title}</h2>
                <div className="text-sm text-[#4B4135]">
                  <p className="font-semibold text-[#1D1A15]">課題</p>
                  <p className="leading-relaxed">{item.challenge}</p>
                </div>
                <div className="text-sm text-[#4B4135]">
                  <p className="font-semibold text-[#1D1A15]">アプローチ</p>
                  <p className="leading-relaxed">{item.approach}</p>
                </div>
                <div className="text-sm text-[#4B4135]">
                  <p className="font-semibold text-[#1D1A15]">成果</p>
                  <p className="leading-relaxed">{item.result}</p>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">関与メンバー</div>
                <ul className="text-sm text-[#4B4135]">
                  {item.fellows.map((fellow) => (
                    <li key={fellow}>・{fellow}</li>
                  ))}
                </ul>
                <p className="text-xs text-[#4B4135]">{item.confidentiality}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl text-[#1D1A15]">四半期ごとの公開指標</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            KPIは四半期で更新し、無料稽古やGreen Roomで一次情報を共有します。メトリクスはImpact Pointsに紐づくため、Fellowの評価にも直結します。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">{kpi.label}</p>
                <p className="mt-2 font-serif text-3xl text-[#1D1A15]">{kpi.value}</p>
                <p className="mt-3 text-xs text-[#4B4135]">{kpi.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-serif text-3xl text-[#1D1A15]">公開ポリシーと保証</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {policies.map((policy) => (
              <div key={policy.title} className="rounded-2xl border border-[#D8CFC3] bg-white p-6 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{policy.title}</p>
                <p className="mt-3 leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>
          <a
            href="/resources#downloads"
            className="mt-6 inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 text-sm font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
          >
            公開ガイドラインを確認する
          </a>
        </div>
      </section>

      <section id="yearbook" className="bg-[#2F4C6E] py-16 md:py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/70">Yearbook</span>
          <div className="mt-4 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-serif text-3xl">Yearbook 2024 Preview</h2>
              <p className="mt-4 text-sm text-white/80">
                Yearbook は公開可能なケースを、流派・勝ち筋・型ごとに整理した年次レポートです。Appointment#とImpact Pointsのサマリも掲載し、メディアからの問い合わせにも対応します。
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/join#media" className="inline-flex items-center rounded-full bg-white px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-white/90">
                  メディア窓口へ連絡
                </Link>
                <Link href="/join#enterprise" className="inline-flex items-center rounded-full border border-white px-5 py-2 font-semibold transition hover:bg-white/10">
                  Yearbookの個別解説を受ける
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-white/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-white">収録コンテンツ（一部）</p>
              <ul className="mt-4 space-y-2">
                <li>・製造 × Quality-Up：量産ライン改善ロードマップ</li>
                <li>・金融 × Growth-Up：生成AI提案テンプレート</li>
                <li>・公共 × Change & Enablement：自治体DXの合意形成ステップ</li>
                <li>・Impact Points ランキングとGreen Room議事録抜粋</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
