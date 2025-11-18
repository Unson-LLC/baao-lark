const fellows = [
  {
    name: "山本 力弥",
    role: "BAAO代表理事 / AI戦略コンサルタント",
    expertise: "製造・通信業のサプライチェーン改革、サービスロボット事業開発。経産省AI原則実践ガバナンス・ガイドライン策定参画。",
    background: "慶應義塾大学理工学部管理工学科卒。外資コンサル、大手通信会社を経て、「AI技術の民主化」を掲げBAAOを設立。",
  },
  {
    name: "佐藤 圭吾",
    role: "BAAO理事 / 生成AIエキスパート",
    expertise: "生成AIプロダクト開発、企業のAIトランスフォーメーション支援。NTTコミュニケーションズ生成AIエキスパート。",
    background: "2024年9月に雲孫LLC設立。AI利活用指針の策定や倫理ガイドラインの普及に注力。",
  },
];

export default function CommunityFellows() {
  return (
    <section className="bg-white py-16 md:py-20" id="community">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            経験豊富な師範が、<br />
            実装をサポート。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            AI道場には、各業界で実績を持つ師範が在籍。
            実装の支援から、ケーススタディの共有まで、実践的な知見を提供します。
          </p>
        </div>

        <div className="mt-12">
          <div className="rounded-3xl border border-[#D8CFC3] bg-[#F9F6F0] p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
              在籍する師範（一部）
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {fellows.map((fellow) => (
                <div key={fellow.name} className="rounded-2xl border border-[#D8CFC3] bg-white/80 p-6 backdrop-blur">
                  <p className="font-semibold text-[#1D1A15]">{fellow.name}</p>
                  <p className="mt-1 text-sm text-bamboo">{fellow.role}</p>
                  <div className="mt-4 space-y-3 text-xs text-[#4B4135]">
                    <div>
                      <p className="font-semibold text-[#1D1A15]">専門領域</p>
                      <p className="mt-1">{fellow.expertise}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1D1A15]">経歴</p>
                      <p className="mt-1">{fellow.background}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-[#D8CFC3] bg-white/40 p-6 backdrop-blur flex items-center justify-center">
                <p className="text-sm font-semibold text-[#4B4135]">and more...</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/join#fellow"
                className="flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
              >
                師範として参画する
              </a>
              <a
                href="/join#enterprise"
                className="flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
              >
                企業向け導入相談
              </a>
              <a
                href="/community"
                className="flex items-center justify-center rounded-full border border-[#D8CFC3] px-6 py-3 text-sm font-semibold text-[#4B4135] transition hover:bg-[#F9F6F0]"
              >
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
