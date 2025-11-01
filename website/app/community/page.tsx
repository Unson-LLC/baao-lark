const journey = [
  {
    step: "STEP 1",
    title: "無料稽古で空気を掴む",
    description:
      "木曜夜の無料ライブで最新ケースを体験。参加後アンケートで知りたい流派を申告すると、週次ノートと次回テーマが届きます。",
    cta: { label: "無料稽古に参加", href: "/join#free-live" }
  },
  {
    step: "STEP 2",
    title: "月謝プランで定着させる",
    description:
      "BASIC / ACTIVE ではアーカイブ視聴とSlackでの質問、Field Director との月次レビューが受けられます。3ヶ月で成果を可視化。",
    cta: { label: "月謝プランを相談", href: "/join#basic" }
  },
  {
    step: "STEP 3",
    title: "Fellowとして案件に入る",
    description:
      "Impact Points を蓄積し、師範の推薦を得た方は Fellow エントリー可能。Field Director / Senior Fellow と共に案件へ。",
    cta: { label: "Fellow応募", href: "/join#fellow" }
  }
];

const grades = [
  {
    name: "Fellow Grade I",
    focus: "得意領域の実装サポート",
    requirements: ["Impact Points 3pt / 四半期", "BASIC / ACTIVE での継続参加"],
    privileges: ["オープンチャット運営メンバー", "公開ケースの共著優先"]
  },
  {
    name: "Fellow Grade II",
    focus: "案件リード・共著",
    requirements: ["Impact Points 5pt / 四半期", "案件レビューへの参加（2件）"],
    privileges: ["RECIPES 共著ロイヤリティ", "Green Room 参加"]
  },
  {
    name: "Fellow Grade III",
    focus: "領域単位の監修",
    requirements: ["Impact Points 7pt / 四半期", "Field Director からの推薦"],
    privileges: ["活躍領域の命名権（Named Fellow）", "Yearbook 掲載"]
  },
  {
    name: "Senior Fellow",
    focus: "品質監修・Council 参画",
    requirements: ["Impact Points 9pt / 四半期", "BOOST / PRIME での監修実績"],
    privileges: ["Council 席次", "Green Room での議決権", "ケース公開時の帯同"]
  }
];

const impactActions = [
  { action: "無料稽古での登壇・モデレーション", points: "+3pt" },
  { action: "案件レビュー（週次 同席）", points: "+2pt" },
  { action: "RECIPES 共著投稿", points: "+4pt" },
  { action: "CommunityでのQA回答（5件）", points: "+1pt" },
  { action: "メディア取材帯同", points: "+2pt" }
];

const privileges = [
  { title: "Green Room", detail: "月次で開催するクローズドセッション。未公開ケースのレビューとCouncil決議を共有。" },
  { title: "72h先行閲覧", detail: "公開前のRECIPESやYearbook草稿を先行で確認し、フィードバックできる権限。" },
  { title: "Impact Points Dashboard", detail: "個人の貢献履歴をリアルタイムで可視化。昇格やアサインに反映。" },
  { title: "Delegated案件の優先指名", detail: "BOOST案件やPRIME相談での専門家アサインを優先的に受けられます。" }
];

const spotlight = [
  {
    name: "山本 力弥",
    role: "Field Director｜製造 × Quality-Up",
    message: "量産ラインとカルチャー変革を両立させることが使命。Impact Points を次の世代に還流させます。"
  },
  {
    name: "吉見 貴光",
    role: "Senior Fellow｜金融 × Growth-Up",
    message: "営業・CX領域での生成AI活用を担当。YearbookではByline付きでケースを公開。"
  },
  {
    name: "卯田 剛史",
    role: "Community Catalyst",
    message: "無料稽古から月謝プランへの導線づくりと、オープンチャットの雰囲気作りをリードしています。"
  }
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
            Community & Fellows
          </span>
          <h1 className="font-serif text-4xl">専門家コミュニティとFellow制度</h1>
          <p className="text-[#4B4135]">
            実戦AI道場の核は「専門家コミュニティで実装知を磨き、四半期で成果を出し、公開して再現性を高める」こと。無料稽古から始まり、Impact Points を軸にFellowへ昇格していくステップを紹介します。
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="/fellows"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              師範ディレクトリを見る
            </a>
            <a
              href="/resources#events"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E] hover:text-white"
            >
              Fellow向け説明会の予定を見る
            </a>
          </div>
        </header>

        <section id="community" className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">コミュニティのステップ</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            ペルソナごとのジャーニーに合わせ、「覗く → 継続する → 参画する」の3段階で導線を整えています。各ステップでアンケート／Impact Points が連動し、最適な次アクションを提案します。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {journey.map((item) => (
              <div key={item.step} className="rounded-2xl bg-[#F9F6F0] p-4 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">
                  {item.step}
                </p>
                <h3 className="mt-2 font-serif text-xl text-[#1D1A15]">{item.title}</h3>
                <p className="mt-2 leading-relaxed">{item.description}</p>
                <a href={item.cta.href} className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#2F4C6E] underline">
                  {item.cta.label}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="fellow" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Fellow Grade & Impact Points</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Impact Points は貢献行動をスコア化し、Fellow の昇格や案件アサインに利用します。下表は四半期ごとの基準です。詳細は Council や Field Director と面談時に共有します。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {grades.map((grade) => (
              <div key={grade.name} className="rounded-2xl bg-[#F9F6F0] p-5 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">
                  {grade.name}
                </p>
                <p className="mt-1 font-semibold text-[#1D1A15]">{grade.focus}</p>
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">昇格条件</p>
                  <ul className="mt-2 space-y-1">
                    {grade.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2F4C6E]" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">特典</p>
                  <ul className="mt-2 space-y-1">
                    {grade.privileges.map((priv) => (
                      <li key={priv} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C47E3B]" />
                        <span>{priv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Impact Points の加点例</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            加点・減点ルールは Council が四半期ごとに見直し。行動ベースで透明性を担保することで、Fellow が自尊心を持って参画できる仕組みを整えています。
          </p>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {impactActions.map((item) => (
              <li key={item.action} className="rounded-2xl bg-[#F9F6F0] p-4 text-sm text-[#4B4135]">
                <p className="font-semibold text-[#1D1A15]">{item.action}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{item.points}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[#4B4135]">
            ※ 減点例：SLA 超過 -1pt、守秘違反 -3pt。Councilでのレビュー後、Slack Impact-Points チャンネルで公開します。
          </p>
        </section>

        <section id="privileges" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">特権とリソース</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Fellows は「Green Room」「72h先行閲覧」「Impact Points Dashboard」など、ブランドを高める仕組みを享受できます。Field Director / Senior Fellow は、Fellow の自尊心をくすぐる紹介導線を用意しています。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {privileges.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#F9F6F0] p-4 text-sm text-[#4B4135]">
                <p className="font-semibold text-[#1D1A15]">{item.title}</p>
                <p className="mt-1 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="showcase" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Field Director & Senior Fellow Showcase</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Council のメンバーは案件の成功体験とブランドを共有し、次の世代の Fellows を内部から勧誘します。名前・Appointment#の掲載は本人承諾のもとで行います。
          </p>
          <p className="mt-2 text-sm text-[#4B4135]">
            さらに多くの師範プロフィールは <a href="/fellows" className="text-[#2F4C6E] underline">/fellows</a> にまとめています。案件の共著者や登壇予定も随時更新中です。
          </p>
          <div className="mt-6 space-y-4">
            {spotlight.map((person) => (
              <article key={person.name} className="rounded-2xl bg-[#F9F6F0] p-5 text-sm text-[#4B4135]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{person.role}</p>
                <h3 className="mt-1 font-serif text-xl text-[#1D1A15]">{person.name}</h3>
                <p className="mt-2 leading-relaxed">{person.message}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="/join#fellow"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              Fellow として参画する
            </a>
            <a
              href="/join#fellow-assign"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E] hover:text-white"
            >
              案件へのアサインを希望する
            </a>
            <a
              href="/join#media"
              className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B] hover:text-white"
            >
              メディア紹介の相談をする
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
