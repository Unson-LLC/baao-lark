const spark = [
  { key: "S", title: "Scarcity", description: "師範会（Council）やField Directorは席数が限られていることを明示し、参加の希少価値を担保。" },
  { key: "P", title: "Proof", description: "Appointment#、Yearbook、公開ケースで検証可能性を担保し、実装知の質を証明。" },
  { key: "A", title: "Access", description: "Green Room や先行閲覧 72h など、貢献者が享受できる特権を設計。" },
  { key: "R", title: "Ritual", description: "就任儀式・Impact Pointsレビューなど、コミュニティの“型”を用意し行動を促す。" },
  { key: "K", title: "Karma", description: "Impact Pointsで貢献度を定量化し、更新基準や昇格条件を透明化。" },
];

export default function MethodsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
            Methods & FieldWorks
          </span>
          <h1 className="font-serif text-4xl">FieldWorks フレームワーク</h1>
          <p className="text-[#4B4135]">
            BAAO 実戦AI道場では、すべての案件を「流派（Field）× 勝ち筋（Mission）× 型（Practice）」の三軸で整理し、RACI に基づいて役割を明確化しています。このページでは FieldWorks の骨格と心理的な仕掛けを紹介します。
          </p>
        </header>

        <section id="matrix" className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">1. 三軸マトリクス</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Field（業界）、Mission（勝ち筋）、Practice（型）の組み合わせで案件を設計。どの流派でも同じ品質で実装できるよう、RECIPESと監修プロセスを標準化しています。
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
            <li>製造 × Quality-Up × Ops Automation：検査AIでP95不良率を改善。</li>
            <li>医療 × Speed-Up × GenAI Apps：問診生成でリードタイム短縮。</li>
            <li>公共 × Cost-Down × Change & Enablement：窓口問い合わせ自動化。</li>
            <li>金融 × Growth-Up × Data & Integration：提案資料生成を半自動化。</li>
          </ul>
        </section>

        <section id="raci" className="mt-10 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">2. 役割（RACI）</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Field Director が一次責任者（A）となり、Senior Fellow・Fellow が監修／実装を担当。Catalyst はリード獲得と 24h 担当宣言、横展開を支援します。
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
            <li><strong>Responsible</strong>：Fellow／実装チーム</li>
            <li><strong>Accountable</strong>：Field Director（契約・KPI・品質の最終責任）</li>
            <li><strong>Consulted</strong>：Senior Fellow（監修・RECIPES執筆）</li>
            <li><strong>Informed</strong>：Catalyst・Community Manager など</li>
          </ul>
        </section>

        <section id="quality" className="mt-10 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">3. 品質担保フロー</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            RECIPES（プレイブック）、週次レビュー、Impact Points の三層で品質を担保。成果はケース／Yearbook として公開され、次の案件にも再利用できるようになります。
          </p>
          <ol className="mt-4 space-y-2 text-sm text-[#4B4135] list-decimal list-inside">
            <li>RECIPES：Flow × Mission × Practice ごとの成功パターンを文書化。</li>
            <li>週次レビュー：Field Director と Senior Fellow が進捗・品質をチェック。</li>
            <li>Impact Points：関係者の貢献度を可視化し、昇格や優先アサインに反映。</li>
          </ol>
        </section>

        <section id="spark" className="mt-10 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">4. S.P.A.R.K. 心理設計</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Community の行動設計には S.P.A.R.K. を採用。希少性／検証可能性／特権／儀式／カルマの5要素で、継続的な参加と高品質なアウトカムを支えます。
          </p>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {spark.map((item) => (
              <li key={item.key} className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4 text-sm text-[#4B4135]">
                <p className="font-semibold text-[#1D1A15]">{item.key}：{item.title}</p>
                <p className="mt-1">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 space-y-4">
          <p className="text-sm text-[#4B4135]">
            FieldWorksの詳細や導入に関するご相談は <a href="/join#enterprise" className="text-[#2F4C6E] underline">/join#enterprise</a> から受け付けています。コミュニティ運営やFellow制度については <a href="/community#fellow" className="text-[#2F4C6E] underline">/community#fellow</a> をご覧ください。
          </p>
        </div>
      </div>
    </main>
  );
}
