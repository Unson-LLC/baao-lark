const matrix = [
  { field: "製造", mission: "品質改善", practice: "画像検査AI", case: "不良率を38%削減" },
  { field: "医療", mission: "業務効率化", practice: "問診生成AI", case: "リードタイム短縮" },
  { field: "公共", mission: "コスト削減", practice: "窓口自動化", case: "職員工数40%削減" },
  { field: "金融", mission: "売上向上", practice: "提案資料生成", case: "受注率+14pt" },
];

import Image from "next/image";

export default function CasesMethodology() {
  return (
    <section id="cases-methods" className="relative overflow-hidden bg-[#F9F6F0] py-16 md:py-20">
      {/* 背景に梁・柱の構造美（淡く） */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Image
          src="/images/fieldworks/framework.png"
          alt="構造的なフレームワークのイメージ"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F6F0]/80 via-[#F9F6F0]/70 to-[#F9F6F0]/80" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
            Cases & Methodology
          </span>
          <h2 className="mt-4 font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            業界ごとの成功パターンを、<br />
            再現できる形で学ぶ。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            製造現場での品質改善、医療での業務効率化、公共サービスのコスト削減。
            AI道場では業界ごとに異なる課題を分類し、実装事例として公開します。
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                AI道場の実装アプローチ
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#4B4135]">
                <li>
                  <strong className="text-[#1D1A15]">業界別に分類</strong>
                  <p>製造・医療・公共・金融など、業界ごとに異なる課題と解決策を整理。</p>
                </li>
                <li>
                  <strong className="text-[#1D1A15]">成果を明確に</strong>
                  <p>Before/Afterを可視化し、どれくらいの効果があったかを数値で示します。</p>
                </li>
                <li>
                  <strong className="text-[#1D1A15]">再現できる知見</strong>
                  <p>守秘義務に配慮しながら、実装手順や失敗例も含めて共有。</p>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#D8CFC3] bg-white/80 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                実装事例の公開基準
              </h3>
              <p className="mt-3 text-sm text-[#4B4135]">
                各事例は守秘レベルごとに公開・要素分解・匿名化を判断。
                可能な限り詳細な情報を公開し、他社でも再現できる形で共有します。
              </p>
              <a
                href="/success-stories"
                className="mt-4 inline-flex items-center text-sm font-semibold text-bamboo hover:text-bamboo-light"
              >
                事例一覧を見る →
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#D8CFC3] bg-white shadow-[0_12px_24px_rgba(29,26,21,0.08)]">
            <div className="grid gap-px bg-[#D8CFC3] p-px">
              <div className="grid grid-cols-4 bg-white text-xs font-semibold uppercase tracking-wide text-[#4B4135]">
                <div className="p-4">業界</div>
                <div className="p-4">課題</div>
                <div className="p-4">手法</div>
                <div className="p-4">成果</div>
              </div>
              {matrix.map((row) => (
                <div key={row.field} className="grid grid-cols-4 bg-white text-sm text-[#4B4135]">
                  <div className="border-t border-[#D8CFC3] p-4 font-semibold text-[#1D1A15]">{row.field}</div>
                  <div className="border-t border-[#D8CFC3] p-4">{row.mission}</div>
                  <div className="border-t border-[#D8CFC3] p-4">{row.practice}</div>
                  <div className="border-t border-[#D8CFC3] p-4">{row.case}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#D8CFC3] p-6 text-sm text-[#4B4135]">
              実装事例は順次公開予定。自社での導入支援や横展開のご相談は{" "}
              <a href="/join#enterprise" className="font-semibold text-bamboo hover:text-bamboo-light">
                Join
              </a>{" "}
              から。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
