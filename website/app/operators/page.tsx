export default function OperatorsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
            For Operators
          </span>
          <h1 className="font-serif text-4xl">残業30時間削減を叶えるAI稽古</h1>
          <p className="text-lg leading-relaxed text-[#4B4135]">
            現場でAIを使いこなしたい実務担当者・個人参加希望者向けに、無料稽古や月謝プランで得られる体験、参加者の声、学習スケジュールなどをまとめるページです。今後、具体的なワークフロー改善例やQ&Aを追加します。
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">準備中のコンテンツ</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm text-[#4B4135]">
            <li>無料稽古の参加フローとオープンチャットの雰囲気紹介</li>
            <li>BASIC / ACTIVE の違い、学習スケジュール、成果物サンプル</li>
            <li>現場業務で成果を出したBefore / After事例</li>
            <li>支払い・解約・時間確保に関するFAQ</li>
            <li>「まずは無料で試す」CTAへのマイクロコピーと導線最適化</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
