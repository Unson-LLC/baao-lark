const grades = [
  { name: "Fellow I", requirements: "Impact Points 5点/年、案件2件実務", benefit: "アサイン優先度：中／先行閲覧72h" },
  { name: "Fellow II", requirements: "Impact Points 8点/年、ケース公開1件", benefit: "小規模案件の監修権／報酬55%" },
  { name: "Fellow III", requirements: "Impact Points 12点/年、監修1件以上", benefit: "中規模案件監修／RECIPES共著30%" },
  { name: "Senior Fellow", requirements: "Impact Points 15点/年、RECIPES執筆1本", benefit: "Named Senior Fellow推薦／Green Room" },
];

const perks = [
  { title: "先行閲覧 72h", description: "RECIPESドラフトやケースレビューを72時間先に閲覧し、フィードバックでポイント獲得。" },
  { title: "Green Room", description: "PRIME会合前後の非公開セッション。Field Director／Senior Fellowとの打ち合わせ枠。" },
  { title: "案件報酬", description: "Delegated案件：55%分配。監修：10-30万円／案件規模に応じて。" },
];

const showcase = [
  {
    name: "佐藤 圭吾",
    role: "Field Director｜製造",
    appointment: "FW-2025-010",
    expertise: "Quality-Up / Ops Automation",
  },
  {
    name: "森本 真央",
    role: "Senior Fellow｜ヘルスケア",
    appointment: "FW-2025-021",
    expertise: "GenAI Apps / Safety & Legal",
  },
  {
    name: "小川 未来",
    role: "Fellow III｜公共",
    appointment: "FW-2025-035",
    expertise: "Change & Enablement",
  },
];

export default function CommunityFellows() {
  return (
    <section className="bg-white py-16 md:py-20" id="community">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            実装知を磨く師範と門下生。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            道場はオープンチャットからSlackへ、そしてFieldWorksへ。師範（Fellow）はImpact Pointsで評価され、役割と報酬がクリアです。
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#D8CFC3] bg-[#FDFBF6] p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
                Grade & Impact Points
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-[#4B4135]">
                {grades.map((grade) => (
                  <li key={grade.name}>
                    <p className="font-semibold text-[#1D1A15]">{grade.name}</p>
                    <p>{grade.requirements}</p>
                    <p className="text-xs text-[#2F4C6E]">{grade.benefit}</p>
                  </li>
                ))}
              </ul>
              <a
                href="/community#fellow"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#2F4C6E] hover:text-[#4E6E92]"
              >
                師範として応募する →
              </a>
            </div>

            <div className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
                特典と報酬
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {perks.map((perk) => (
                  <div key={perk.title} className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4 text-sm">
                    <p className="font-semibold text-[#1D1A15]">{perk.title}</p>
                    <p className="mt-2 text-[#4B4135]">{perk.description}</p>
                  </div>
                ))}
              </div>
              <a
                href="/join#fellow-assign"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#2F4C6E] hover:text-[#4E6E92]"
              >
                案件相談フォームへ →
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
              Field Director / Senior Fellow Showcase
            </h3>
            <div className="mt-4 space-y-4">
              {showcase.map((person) => (
                <div key={person.name} className="rounded-2xl border border-[#D8CFC3] bg-white/80 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-[#1D1A15]">{person.name}</p>
                  <p className="text-xs text-[#4B4135]">{person.role}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-[#4B4135]">
                    <span>Appointment# {person.appointment}</span>
                    <span>{person.expertise}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="/join#fellow"
                className="flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
              >
                師範として参画する
              </a>
              <a
                href="/join#media"
                className="flex items-center justify-center rounded-full border border-[#2F4C6E] px-6 py-3 text-sm font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
              >
                メディア・連携の相談
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
