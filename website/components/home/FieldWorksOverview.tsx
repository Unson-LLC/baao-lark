const matrix = [
  { field: "製造", mission: "Quality-Up", practice: "Ops Automation / Vision", case: "検査AIで不良率 P95 改善" },
  { field: "医療", mission: "Speed-Up", practice: "GenAI Apps", case: "問診生成でリードタイム短縮" },
  { field: "公共", mission: "Cost-Down", practice: "Change & Enablement", case: "窓口フロー自動化 PoC" },
  { field: "金融", mission: "Growth-Up", practice: "Data & Integration", case: "与信評価の自動化" },
];

import Image from "next/image";

export default function FieldWorksOverview() {
  return (
    <section id="methods" className="relative overflow-hidden bg-[#F9F6F0] py-16 md:py-20">
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
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
              FieldWorks Framework
            </span>
            <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
              流派 × 勝ち筋 × 型で案件を解剖。
            </h2>
            <p className="text-lg leading-relaxed text-[#4B4135]">
              すべての案件は「流派（Field）」「勝ち筋（Mission）」「型（Practice）」の軸で組み立て、責任者（Field Director）と師範（Fellow）がRACIで動きます。だからこそ、誰が実装しても品質が揃い、公開しても再現できるのです。
            </p>
            <div className="rounded-2xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                役割（RACI）簡易マップ
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
                <li>
                  <strong className="text-[#1D1A15]">Field Director｜現場責任者</strong> : A責任 / KPI・契約・品質最終判断
                </li>
                <li>
                  <strong className="text-[#1D1A15]">Senior Fellow｜専門師範</strong> : 監修 / RECIPES執筆 / 週次レビュー
                </li>
                <li>
                  <strong className="text-[#1D1A15]">Fellow｜師範</strong> : 実装 / ケース公開への寄稿 / 登壇
                </li>
                <li>
                  <strong className="text-[#1D1A15]">Catalyst</strong> : リード獲得 / 24h担当宣言 / 横展開支援
                </li>
              </ul>
              <a
                href="/methods"
                className="mt-4 inline-flex items-center text-sm font-semibold text-bamboo hover:text-bamboo-light"
              >
                FieldWorksの詳細を見る →
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#D8CFC3] bg-white shadow-[0_12px_24px_rgba(29,26,21,0.08)]">
            <div className="grid gap-px bg-[#D8CFC3] p-px">
              <div className="grid grid-cols-4 bg-white text-xs font-semibold uppercase tracking-wide text-[#4B4135]">
                <div className="p-4">流派 (Field)</div>
                <div className="p-4">勝ち筋 (Mission)</div>
                <div className="p-4">型 (Practice)</div>
                <div className="p-4">代表ケース</div>
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
              各ケースは、守秘レベルごとに公開・要素分解・匿名化を判断。伴随支援や横展開のご相談は{" "}
              <a href="/join#enterprise" className="font-semibold text-bamboo hover:text-bamboo-light">
                Join#enterprise
              </a>{" "}
              から。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
