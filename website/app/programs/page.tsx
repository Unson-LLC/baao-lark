import Image from "next/image";

const programs = [
  {
    id: "free",
    name: "門下生（もんかせい）",
    subtitle: "無料で始める",
    description:
      "毎週木曜の無料稽古で道場の空気を体感。前半35分は基礎編で今週押さえたいAIニュースを解説し、後半25分は応用編でAI導入に役立つ実践的な知見を深掘りします。",
    bulletPoints: [
      "毎週のライブ視聴",
      "LINEオープンチャットで開催通知とスライド配信",
      "開催後のダイジェスト配信",
    ],
    meta: [
      { label: "対象", value: "AIに関心のある方・企業の実務担当者" },
      { label: "頻度", value: "毎週木曜 19:30-20:30" },
      { label: "参加費", value: "¥0 / 月" },
    ],
    cta: {
      label: "LINEオープンチャットに参加",
      href: "https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    },
  },
  {
    id: "basic",
    name: "修行者（しゅぎょうしゃ）",
    subtitle: "月謝プラン",
    description:
      "無料稽古の内容をアーカイブで復習し、週次ノートとLarkでの質疑で着実に身につける月謝プランです。",
    bulletPoints: [
      "過去の稽古をいつでも視聴",
      "週次の知見まとめ配信",
      "Larkで師範に質問",
    ],
    meta: [
      { label: "対象", value: "個人で学びたい方・実務担当者" },
      { label: "月謝", value: "¥2,980 / 月" },
      { label: "年額", value: "¥29,800（2ヶ月分お得）" },
      { label: "特典", value: "7日間無料お試し" },
    ],
    cta: { label: "月謝プランの申込フォームへ", href: "/join#basic" },
  },
  {
    id: "active",
    name: "書院生（しょいんせい）",
    subtitle: "月謝プラン+α",
    description:
      "修行者プランの内容に加えて、全文検索や業界別ダイジェストで必要な知見を即座に取り出せる上位プランです。",
    bulletPoints: [
      "過去の稽古から必要な知見を検索",
      "業界別の最新事例まとめ",
      "未公開の実装手順書を先行閲覧",
    ],
    meta: [
      { label: "対象", value: "DX推進担当・修行者卒業層" },
      { label: "月謝", value: "¥9,800 / 月" },
      { label: "特典", value: "7日間無料お試し" },
    ],
    cta: { label: "書院生プランの申込フォームへ", href: "/join#active" },
  },
  {
    id: "prime",
    name: "評議会（ひょうぎかい）",
    subtitle: "経営層コミュニティ",
    description:
      "未公開ケースの共有、現場見学、月次のクイック相談で四半期内の意思決定を後押しする経営層限定コミュニティです。",
    bulletPoints: [
      "他社の成功・失敗事例を現場で見学",
      "月次のクイック相談枠（30-45分）",
      "全プログラム優待価格で利用可能",
      "役員会用にROI試算と決裁資料のドラフトを提供",
    ],
    meta: [
      { label: "対象", value: "経営層・事業責任者" },
      { label: "頻度", value: "現場見学・月次相談 各1枠〜" },
      { label: "成果物", value: "ROI試算・決裁資料ドラフト" },
      { label: "形式", value: "会員制コミュニティ / 個別見積" },
    ],
    cta: { label: "評議会ヒアリングを予約", href: "/join#enterprise" },
  },
  {
    id: "boost",
    name: "伴走（ばんそう）",
    subtitle: "成果創出プロジェクト",
    description:
      "4〜8週でKPIを可視化し、横展開のロードマップまで提示。専任チームが伴走し、Before/Afterを計測します。四半期後に役員会で使える成果レポートを提供します。",
    bulletPoints: [
      "導入前後のKPI測定と可視化",
      "専任チームによる伴走支援",
      "他部署への横展開計画を策定",
      "週次レビューと功績点で進捗を可視化",
    ],
    meta: [
      { label: "対象", value: "四半期で成果を証明したいDXチーム" },
      { label: "期間", value: "プロジェクト型（4〜8週）" },
      { label: "成果物", value: "Before/Afterレポート・横展開計画" },
      { label: "費用", value: "個別見積（要ヒアリング）" },
    ],
    cta: { label: "伴走ヒアリングを予約", href: "/join#enterprise" },
  },
  {
    id: "recipes",
    name: "秘伝書（ひでんしょ）",
    subtitle: "実装手順書",
    description:
      "業務別に失敗例・コストまで明記した実践ガイド。製造、医療、公共、金融などの業界ごとに、実装手順、失敗例と回避策、推奨ツールとコストを記載しています。",
    bulletPoints: [
      "ステップバイステップの実装手順",
      "よくある失敗と回避策を明記",
      "推奨ツールと導入コストを記載",
    ],
    meta: [
      { label: "対象", value: "社内展開を高速化したいDX推進チーム" },
      { label: "形式", value: "PDFマニュアル＋実装スクリプト＋チェックリスト" },
      { label: "提供", value: "買い切り型" },
      { label: "費用", value: "1本あたり個別見積" },
    ],
    cta: { label: "秘伝書を問い合わせ", href: "/join#enterprise" },
  },
];

const programStages: Record<
  string,
  { label: string; className: string }
> = {
  free: { label: "STEP 0｜まずは体験", className: "text-[#C47E3B] border-[#C47E3B]/40 bg-[#C47E3B]/10" },
  basic: { label: "STEP 1｜修行を深める", className: "text-dojo-green border-dojo-green/30 bg-dojo-green/10" },
  active: { label: "STEP 2｜知見を引き出す", className: "text-dojo-indigo border-dojo-indigo/30 bg-dojo-indigo/10" },
  prime: { label: "STEP 3｜経営コミュニティ", className: "text-[#B35A3F] border-[#B35A3F]/30 bg-[#B35A3F]/10" },
  boost: { label: "STEP 4｜四半期伴走", className: "text-[#6B4A3B] border-[#6B4A3B]/30 bg-[#6B4A3B]/10" },
  recipes: { label: "STEP 5｜秘伝書で横展開", className: "text-[#9B7A4F] border-[#9B7A4F]/30 bg-[#9B7A4F]/10" },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <header className="mb-12 grid gap-8 rounded-3xl border border-[#D8CFC3] bg-white/90 p-8 shadow-sm md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-wide text-bamboo">
              稽古と伴随の道順
            </span>
            <h1 className="font-serif text-4xl">稽古と伴随の道順</h1>
            <p className="text-[#4B4135]">
              無料の週次稽古で空気を感じ、月謝プランで実装手順を身につけ、必要に応じて伴走・評議会で四半期の成果へつなげます。道場のプログラムは、段階ごとに必要な知見とサポートを受け取れる設計です。
            </p>
            <div className="grid gap-3 text-sm text-[#4B4135] sm:grid-cols-3">
              {[
                { title: "STEP 0", body: "無料稽古とオープンチャットで空気を掴む" },
                { title: "STEP 1-2", body: "月謝でアーカイブと検索権を得て実装力を磨く" },
                { title: "STEP 3+", body: "評議会・伴走・秘伝書で四半期の成果と横展開" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-bamboo">{item.title}</p>
                  <p className="mt-2 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-[#1D1A15]/5">
            <Image
              src="/images/study.png"
              alt="道場の稽古風景と学びの様子"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1D1A15]/80 via-[#1D1A15]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-sm text-white">
              <p className="font-serif text-lg">流派 × 勝ち筋 × 型を揃える三段構え</p>
              <ul className="mt-3 space-y-2 text-white/90">
                <li>・週次稽古：60分で最新ケースを分解</li>
                <li>・月謝プラン：アーカイブ＆検索で常設の学び場</li>
                <li>・伴走/評議会：四半期でBefore/Afterを証明</li>
              </ul>
            </div>
          </div>
        </header>

        <div className="space-y-10">
          {programs.map((program) => {
            const stage = programStages[program.id];
            return (
              <section
                key={program.id}
                id={program.id}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <h2 className="font-serif text-2xl text-[#1D1A15]">{program.name}</h2>
                    {program.subtitle && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-bamboo">
                        {program.subtitle}
                      </span>
                    )}
                  </div>
                  {stage && (
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${stage.className}`}>
                      {stage.label}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-[#4B4135]">{program.description}</p>
                {program.meta && (
                  <dl className="mt-4 grid gap-4 text-sm text-[#4B4135] md:grid-cols-2 lg:grid-cols-4">
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
                      <span className="mt-1 h-2 w-2 rounded-full bg-bamboo" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={program.cta.href}
                  target={program.id === "free" ? "_blank" : undefined}
                  rel={program.id === "free" ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center rounded-full bg-vermillion px-5 py-2 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark"
                >
                  {program.cta.label}
                </a>
              </section>
            );
          })}
        </div>

        <section className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm text-sm text-[#4B4135]">
          <h2 className="font-serif text-2xl text-[#1D1A15]">伴走プロジェクトの目安（8週）</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold tracking-wide text-bamboo">第0週（導入）</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">現状把握</p>
              <p className="mt-1 leading-relaxed">現状ヒアリング。KPI・守秘レベル・ステークホルダーを整理し、ROI仮説を共有。</p>
            </div>
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold tracking-wide text-bamboo">第2週（設計）</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">設計</p>
              <p className="mt-1 leading-relaxed">フロー設計とガイドラインをレビュー。必要なデータや運用体制を確定。</p>
            </div>
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold tracking-wide text-bamboo">第4週（実装）</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">実装</p>
              <p className="mt-1 leading-relaxed">伴走チームが実装・トレーニングを実施。功績点で進捗と貢献を可視化。</p>
            </div>
            <div className="rounded-2xl bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold tracking-wide text-bamboo">第8週（横展開）</p>
              <p className="mt-1 font-semibold text-[#1D1A15]">横展開</p>
              <p className="mt-1 leading-relaxed">Before/Afterレポートと次期投資提案書を提出。他部署への横展開プランを提示。</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-bamboo">成果事例</p>
              <p className="mt-2 text-sm leading-relaxed">
                製造業の検査AI案件では、8週の伴走で工数削減 1,200時間／年・不良率 38%→19% を達成。初年度コスト 480万円に対し削減効果は 1,350万円、投資回収期間は 4.3ヶ月でした。
              </p>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-bamboo">稟議・決裁サポート</p>
              <ul className="mt-2 space-y-1">
                <li>・役員向けサマリーと詳細レポートを納品</li>
                <li>・決裁会議用スライドとFAQを提供</li>
                <li>・次期案件のROI試算も同梱</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-dashed border-bamboo/60 bg-white p-6 text-sm text-[#4B4135]">
          <h2 className="font-serif text-2xl text-[#1D1A15]">おすすめの進め方</h2>
          <p className="mt-3">
            まずは週次稽古で空気を感じ、月謝プランで実装スキルを磨き、必要に応じて評議会・伴走で四半期の成果づくりへ。各段階の申し込み先は以下をご利用ください。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-vermillion px-5 py-2 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark"
            >
              週次稽古（無料）に参加する
            </a>
            <a
              href="/join#enterprise"
              className="inline-flex items-center rounded-full border border-bamboo px-5 py-2 text-sm font-semibold text-bamboo transition hover:bg-bamboo hover:text-white"
            >
              企業向けプランの相談をする
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
