import Link from "next/link";

const ctas = [
  {
    title: "無料稽古に参加する",
    description: "週次ライブで道場の空気を体感。メール登録で視聴URLとリマインドをお届けします。",
    href: "/join#free-live",
    primary: true,
  },
  {
    title: "四半期で成果を相談する",
    description: "Field Directorが24時間以内に担当宣言。PRIME/BOOSTで成果を可視化します。",
    href: "/join#enterprise",
    primary: false,
  },
  {
    title: "師範として参画する",
    description: "Impact Pointsと報酬で評価されるFellow制度。案件アサインや登壇の場が待っています。",
    href: "/join#fellow",
    primary: false,
  },
];

export default function CTABand() {
  return (
    <section className="bg-bamboo py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ctas.map((cta) => (
            <div
              key={cta.title}
              className="flex flex-col rounded-3xl bg-white/10 p-6 text-white shadow-[0_12px_24px_rgba(0,0,0,0.15)] backdrop-blur"
            >
              <h3 className="font-serif text-xl">{cta.title}</h3>
              <p className="mt-3 text-sm text-white/80">{cta.description}</p>
              <Link
                href={cta.href}
                className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition shadow-lg ${
                  cta.primary
                    ? "bg-vermillion text-white hover:bg-vermillion-dark"
                    : "border border-white/70 text-white hover:bg-white/10"
                }`}
              >
                申し込む →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
