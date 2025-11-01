export default function ExecutivesPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
            For Executives
          </span>
          <h1 className="font-serif text-4xl">四半期でROIを証明するAI伴走</h1>
          <p className="text-lg leading-relaxed text-[#4B4135]">
            DX投資の不確実性やPoC止まりのリスクを抱える経営層・事業責任者向けに、PRIME/BOOSTによる成果創出の全体像と導入プロセスをまとめたページです。今後、具体的な導入シナリオや保証内容、経営会議向け資料テンプレートを掲載します。
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">準備中のコンテンツ</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm text-[#4B4135]">
            <li>DX投資が失敗する代表的なパターンと回避策（保証・伴走体制）</li>
            <li>PRIME / BOOST の導入タイムライン、ROIシミュレーション、返金ポリシー</li>
            <li>経営層向けケーススタディ（財務指標にフォーカスしたビフォー/アフター）</li>
            <li>ガバナンス・守秘・公開ポリシーの要点と体制図</li>
            <li>無料経営ブリーフィング / 企業相談フォームへの導線最適化</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
