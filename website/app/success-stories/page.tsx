const filters = {
  fields: ["製造", "医療", "公共", "金融", "小売 / CX", "メディア・IP"],
  missions: ["Cost-Down", "Speed-Up", "Quality-Up", "Growth-Up"],
  programs: ["FREE → BASIC", "ACTIVE", "PRIME", "BOOST", "RECIPES"]
};

const featuredCases = [
  {
    title: "製造業｜検査AIでP95不良率 -37%",
    field: "製造",
    mission: "Quality-Up",
    program: "BOOST + RECIPES",
    summary:
      "全国5工場で検査プロセスを標準化。週次レビューで誤検知率を調整し、8週で量産ラインへ展開。",
    outcome: [
      "P95不良率 -37%、再検査時間 -42%",
      "Appointment#144｜Field Director: 山本 力弥",
      "守秘レベル2（要素分解で公開）"
    ]
  },
  {
    title: "医療｜問診生成アシストで初診リードタイム 45%短縮",
    field: "医療",
    mission: "Speed-Up",
    program: "ACTIVE → BOOST",
    summary:
      "BASICで収集した問診テンプレートをもとに、現場ワークショップを3回開催。Senior Fellowが安全性レビューを実施。",
    outcome: [
      "初診リードタイム 45%短縮、待ち時間 18分削減",
      "Impact Points +8｜Senior Fellow 共著 RECIPES #MED-12",
      "守秘レベル1（匿名・統計値のみ公開）"
    ]
  },
  {
    title: "金融｜提案資料ジェネレートで週20時間削減",
    field: "金融",
    mission: "Growth-Up",
    program: "PRIME + RECIPES",
    summary:
      "PRIMEセッションで課題定義→Field DirectorがMission設計→RECIPESをベースに全支店へ展開。",
    outcome: [
      "営業資料作成時間 -20h／週、受注率 +6pt",
      "Appointment#158｜Senior Fellow: 吉見 貴光",
      "守秘レベル3（実名公開調整中）"
    ]
  }
];

const kpis = [
  { label: "四半期平均 Before→After", value: "P95リードタイム -32%", note: "2024 Q3 集計（BOOST 12案件）" },
  { label: "Live→月謝昇格率", value: "23.8%", note: "無料稽古→BASIC/ACTIVE" },
  { label: "ケース公開本数", value: "28件", note: "守秘レベル2以上（累計）" },
  { label: "Fellowアサイン満足度", value: "4.6 / 5.0", note: "案件後アンケート（2024）" }
];

const disclosurePolicies = [
  {
    level: "レベル1｜匿名統計",
    description: "社名・固有名詞を伏せ、Before/After の割合とプロセスのみ公開。無料稽古やニュースレターで共有。"
  },
  {
    level: "レベル2｜要素分解",
    description: "社名は伏せつつ、Field／Mission／Practice を具体的に記載。Yearbook と RECIPES で詳細共有。"
  },
  {
    level: "レベル3｜実名公開",
    description: "経営層合意のもと、社名・担当者・成果数値を公開。メディア取材やイベント登壇へ展開。"
  }
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
            Cases & Yearbook
          </span>
          <h1 className="font-serif text-4xl">成果事例と公開ポリシー</h1>
          <p className="text-[#4B4135]">
            Field（業界）× Mission（勝ち筋）× Practice（型）の組み合わせで設計された案件のうち、公開合意を得た事例を抜粋して紹介します。守秘レベルに応じた公開ルールと四半期ごとのKPIも併記しています。
          </p>
        </header>

        <section id="filters" className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">検索フィルター</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            公開カタログでは下記の軸でケースを絞り込めます。現在はサンプルのみ掲載していますが、Yearbook リリースに合わせて検索機能を開放します。
          </p>
          <div className="mt-4 space-y-4 text-sm text-[#4B4135]">
            <div>
              <p className="mb-2 font-semibold text-[#1D1A15]">流派（Field）</p>
              <div className="flex flex-wrap gap-2">
                {filters.fields.map((field) => (
                  <span key={field} className="rounded-full bg-[#E8E1D7] px-3 py-1 text-xs uppercase tracking-wide text-[#2F4C6E]">
                    {field}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 font-semibold text-[#1D1A15]">勝ち筋（Mission）</p>
              <div className="flex flex-wrap gap-2">
                {filters.missions.map((mission) => (
                  <span key={mission} className="rounded-full bg-[#F4E8D9] px-3 py-1 text-xs uppercase tracking-wide text-[#C47E3B]">
                    {mission}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 font-semibold text-[#1D1A15]">プログラム</p>
              <div className="flex flex-wrap gap-2">
                {filters.programs.map((program) => (
                  <span key={program} className="rounded-full border border-[#D8CFC3] px-3 py-1 text-xs uppercase tracking-wide text-[#4B4135]">
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="mt-10 space-y-6">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Featured Cases</h2>
          <p className="text-sm text-[#4B4135]">
            守秘ポリシーに沿って公開許諾済みのサマリを掲載しています。詳細は無料稽古のダイジェスト、または PRIME / BOOST 相談時に共有するYearbookでご確認ください。
          </p>
          <div className="mt-4 space-y-6">
            {featuredCases.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
              >
                <header className="flex flex-wrap items-baseline gap-2">
                  <span className="rounded-full bg-[#E8E1D7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">
                    {item.field}
                  </span>
                  <span className="rounded-full bg-[#F4E8D9] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">
                    {item.mission}
                  </span>
                  <span className="rounded-full border border-[#2F4C6E] px-3 py-1 text-xs uppercase tracking-wide text-[#2F4C6E]">
                    {item.program}
                  </span>
                </header>
                <h3 className="mt-4 font-serif text-2xl text-[#1D1A15]">{item.title}</h3>
                <p className="mt-3 text-sm text-[#4B4135]">{item.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
                  {item.outcome.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#2F4C6E]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="/join#enterprise"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              BOOST / PRIME を相談する
            </a>
            <a
              href="/join#media"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E] hover:text-white"
            >
              取材・メディア問い合わせ
            </a>
          </div>
        </section>

        <section id="kpi" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">KPIダッシュボード（Quarterly）</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            各案件のBefore/Afterは Impact Points と連動して集計され、四半期ごとに Council がレビューします。最新値は無料稽古ライブでも速報しています。
          </p>
          <dl className="mt-6 grid gap-6 md:grid-cols-2">
            {kpis.map((item) => (
              <div key={item.label} className="rounded-2xl bg-[#F9F6F0] p-5">
                <dt className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
                  {item.label}
                </dt>
                <dd className="mt-2 font-serif text-3xl text-[#1D1A15]">{item.value}</dd>
                <p className="mt-1 text-xs text-[#4B4135]">{item.note}</p>
              </div>
            ))}
          </dl>
        </section>

        <section id="policy" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">公開ポリシー（P / C / R）</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            守秘義務と再現性の両立を図るため、案件ごとに公開レベルを定義しています。公開レベルが上がるほど Yearbook やメディア露出での取り上げが可能になり、Impact Points も加点されます。
          </p>
          <div className="mt-4 space-y-4 text-sm text-[#4B4135]">
            {disclosurePolicies.map((policy) => (
              <div key={policy.level} className="rounded-2xl bg-[#F9F6F0] p-4">
                <p className="font-semibold text-[#1D1A15]">{policy.level}</p>
                <p className="mt-1 leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="yearbook" className="mt-12 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-[#FDFBF7] p-6">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Yearbook & Downloads</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            毎年1月に前年度の Yearbook（PDF）を公開します。案件サマリ、Impact Points ランキング、Council 論考を収録。公開前にプレビューをご希望の方は無料稽古またはメディア問い合わせからご連絡ください。
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href="/resources#downloads"
              className="inline-flex items-center rounded-full bg-[#C47E3B] px-5 py-2 font-semibold text-white transition hover:bg-[#a96830]"
            >
              資料・Yearbookの案内を見る
            </a>
            <a
              href="/join#media"
              className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B] hover:text-white"
            >
              メディア取材を依頼する
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
