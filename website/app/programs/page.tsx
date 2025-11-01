const programs = [
  {
    id: "free",
    name: "FREE｜Weekly Dojo Live",
    description:
      "毎週木曜夜の無料稽古ライブ。最新ケースの分解・実装実況・質疑応答で道場の空気を掴む第一歩です。登録するとオープンチャットへ招待され、資料やリマインドが届きます。",
    bulletPoints: [
      "最新トレンドとケースを60分で凝縮",
      "参加後アンケートはKPI採取とコンテンツ改善に活用",
      "Slack／月謝プランへのステップを明示",
    ],
    meta: [
      { label: "対象", value: "生成AI活用に関心のある方／企業の実務担当者" },
      { label: "頻度", value: "毎週木曜 19:00-19:45（アフター質疑15分）" },
      { label: "参加費", value: "無料（アンケート回答でアーカイブ要約を送付）" },
    ],
    cta: { label: "無料稽古に申し込む", href: "/join#free-live" },
  },
  {
    id: "basic",
    name: "BASIC｜月謝プラン",
    description:
      "ライブアーカイブ、週次ノート、Slackでの質問を通じて“次の一手”を自分で描けるようになる基礎コース。四半期の成果レビューや上層プログラムへのステップを支援します。",
    bulletPoints: [
      "週次アーカイブ＋30分ノート",
      "流派・勝ち筋別フィードで自分の業界を追える",
      "Slackで師範に質問、社内展開の壁打ちも可能",
    ],
    meta: [
      { label: "対象", value: "個人参加・実務担当者（初年度の伴走が必要な方）" },
      { label: "月謝", value: "2,980円（税別）｜3ヶ月単位で更新" },
      { label: "提供", value: "ライブアーカイブ／週次ノート／Slack Q&A／月次レビュー" },
    ],
    cta: { label: "月謝プランについて問い合わせ", href: "/join#basic" },
  },
  {
    id: "active",
    name: "ACTIVE｜月謝プラン＋アーカイブ検索",
    description:
      "BASICのすべてに加え、全文検索やドラフトRECIPESの先行閲覧、Flow別ダイジェストを提供。社内の調査・提案資料作成の速度を高めたい方向け。",
    bulletPoints: [
      "過去ライブ・ノートを全文検索",
      "ドラフトRECIPESを正式公開前にレビュー",
      "Flow別に“今週の示唆”を受け取れる",
    ],
    meta: [
      { label: "対象", value: "DX推進担当・BASIC卒業層" },
      { label: "特典", value: "全文検索／Flow別フィード／RECIPES先行閲覧" },
      { label: "月謝", value: "BASICにACTIVEオプションを追加（個別見積）" },
    ],
    cta: { label: "ACTIVEプランを相談", href: "/join#active" },
  },
  {
    id: "prime",
    name: "PRIME｜Executive Community",
    description:
      "経営層・事業責任者向けクローズドコミュニティ。未公開ケースの深掘り、現場見学、月次クイック相談で四半期内の意思決定を後押しします。",
    bulletPoints: [
      "月1回のクローズドセッション＋Green Room",
      "現場見学・ケースレビューで意思決定材料を確保",
      "BOOST／RECIPESなど全サービスの優待価格",
      "役員会用にROI試算と決裁資料のドラフトを提供",
    ],
    meta: [
      { label: "対象", value: "経営層・事業責任者" },
      { label: "提供", value: "月次クローズドセッション／Green Room／現場見学" },
      { label: "費用", value: "年次契約（目安：80万円〜／組織規模により個別見積）" },
    ],
    cta: { label: "PRIMEの相談を予約", href: "/join#enterprise" },
  },
  {
    id: "boost",
    name: "BOOST｜Quarter Projects",
    description:
      "4〜8週の短期伴走でBefore/Afterを計測し、横展開プランまで提示する成果伴走。Field Directorが一次責任者となり、Senior Fellowが品質監修します。",
    bulletPoints: [
      "Before/AfterのKPI設計から実装まで伴走",
      "週次レビューとImpact Pointsで進捗を可視化",
      "成果はケース化し、他部署／他社へ横展開",
      "四半期後に役員会で使える成果レポートと次期投資提案書",
    ],
    meta: [
      { label: "対象", value: "四半期で成果を証明したいDXチーム" },
      { label: "期間", value: "4〜8週（キックオフ→実装→成果レビュー）" },
      { label: "成果物", value: "Before/Afterレポート／RECIPES化プラン／Yearbook掲載案" },
      { label: "費用", value: "案件規模により個別見積（目安：300〜800万円）" },
    ],
    cta: { label: "BOOSTについて相談", href: "/join#enterprise" },
  },
  {
    id: "recipes",
    name: "RECIPES｜Playbooks",
    description:
      "業務別に“何を・どの順番で・どのように”実装するかをまとめたプレイブック。失敗例とコスト、推奨ベンダー／ツールまで記載し、誰が実装しても品質を担保します。",
    bulletPoints: [
      "Field × Mission × Practiceごとの成功パターン",
      "失敗例・リスクとその回避策を併記",
      "ドキュメント＋スクリプト＋チェックリストのセット",
    ],
    meta: [
      { label: "対象", value: "社内展開を高速化したいDX推進チーム" },
      { label: "形式", value: "PDFマニュアル＋実装スクリプト＋チェックリスト" },
      { label: "提供", value: "単品購入またはBOOST後のセット価格" },
    ],
    cta: { label: "RECIPESを問い合わせ", href: "/join#enterprise" },
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
            Programs
          </span>
          <h1 className="font-serif text-4xl">プログラム一覧</h1>
          <p className="text-[#4B4135]">
            BAAO 実戦AI道場は「無料で空気を掴む → 月謝で定着させる → 伴走で成果を出す → 公開で再現性を高める」というステップで構成されています。各プログラムの概要と次のアクションをまとめました。
          </p>
        </header>

        <div className="space-y-10">
          {programs.map((program) => (
            <section
              key={program.id}
              id={program.id}
              className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-2xl text-[#1D1A15]">{program.name}</h2>
              <p className="mt-3 text-sm text-[#4B4135]">{program.description}</p>
              {program.meta && (
                <dl className="mt-4 grid gap-4 text-sm text-[#4B4135] md:grid-cols-3">
                  {program.meta.map((item) => (
                    <div key={item.label}>
                      <dt className="font-semibold text-[#1D1A15]">{item.label}</dt>
                      <dd className="mt-1 leading-relaxed">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
                {program.bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#2F4C6E]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={program.cta.href}
                className="mt-6 inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
              >
                {program.cta.label}
              </a>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm text-sm text-[#4B4135]">
          <h2 className="font-serif text-2xl text-[#1D1A15]">PRIME / BOOST 導入タイムライン（目安）</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">Week 0</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">Discovery</p>
              <p className="mt-1 leading-relaxed">Field Director が現状ヒアリング。KPI・守秘レベル・ステークホルダーを整理し、ROI仮説を共有。</p>
            </div>
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">Week 2</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">Design</p>
              <p className="mt-1 leading-relaxed">Senior Fellow がフロー設計とガイドラインをレビュー。必要なデータや運用体制を確定。</p>
            </div>
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">Week 4</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">Implement</p>
              <p className="mt-1 leading-relaxed">伴走チームが実装・トレーニングを実施。Impact Points で進捗と貢献を可視化。</p>
            </div>
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">Week 8</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">Scale</p>
              <p className="mt-1 leading-relaxed">Before/Afterレポートと次期投資提案書を提出。Yearbook掲載案・他部署への横展開プランを提示。</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">ROIシミュレーション（例）</p>
              <p className="mt-2 text-sm leading-relaxed">
                製造業の検査AI案件では、8週の伴走で工数削減 1,200時間／年・不良率 38%→19% を達成。初年度コスト 480万円に対し削減効果は 1,350万円、投資回収期間は 4.3ヶ月でした。
              </p>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">稟議・決裁サポート</p>
              <ul className="mt-2 space-y-1">
                <li>・役員向けサマリー（1ページ）と詳細レポート（10ページ程度）を納品</li>
                <li>・決裁会議用スライドとFAQを提供（PRIME参加者はテンプレ利用可）</li>
                <li>・次期案件のROI試算と月謝プランへの導線も同梱</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-[#FDFBF7] p-6 text-sm text-[#4B4135]">
          <h2 className="font-serif text-2xl text-[#1D1A15]">次のステップ</h2>
          <p className="mt-3">
            無料稽古に参加したあとは、3ヶ月間で成果を作る月謝プランへ。成果が定着したら BOOST で四半期プロジェクトに挑戦し、RECIPES や Yearbook で知見を公開する流れが推奨ルートです。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/join#free-live"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#4E6E92]"
            >
              今週の稽古に参加する
            </a>
            <a
              href="/join#basic"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E] transition hover:bg-[#2F4C6E] hover:text-white"
            >
              月謝プランを相談
            </a>
            <a
              href="/join#enterprise"
              className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#C47E3B] transition hover:bg-[#C47E3B] hover:text-white"
            >
              BOOST / PRIME を問い合わせ
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
