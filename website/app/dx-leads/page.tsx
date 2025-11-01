export default function DxLeadsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
            For DX Leads
          </span>
          <h1 className="font-serif text-4xl">PoC止まりを終わらせる推進ロードマップ</h1>
          <p className="text-lg leading-relaxed text-[#4B4135]">
            DX推進担当・人材開発責任者向けに、チームで成果を出す学習/伴走の設計と社内展開のヒントを掲載するページです。無料稽古・月謝プラン・伴走サービスの組み合わせや、社内向けの説得材料を順次公開していきます。
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">準備中のコンテンツ</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm text-[#4B4135]">
            <li>推進担当者の課題整理（巻き込み / リスキリング / KPI計測）</li>
            <li>月謝プラン×伴走プログラムの活用シナリオと成功事例</li>
            <li>社内提案用リソース（稟議テンプレート、FAQ、チェックリスト）</li>
            <li>チーム向け無料稽古 / ワークショップの案内</li>
            <li>相談フォーム（/join#enterprise）へのブリッジコピー設計</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
