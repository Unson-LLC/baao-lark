import Image from "next/image";
import Link from "next/link";

const ctas = [
  {
    title: "週次稽古に参加する",
    description: "週次ライブで道場の空気を体感。LINEオープンチャット登録で視聴URLとリマインドをお届けします。",
    href: "https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    primary: true,
    external: true,
    buttonLabel: "オープンチャットへ",
  },
  {
    title: "四半期で成果を相談する",
    description: "師範が24時間以内に担当宣言。評議会/伴随で成果を可視化します。",
    href: "/join#enterprise",
    primary: false,
  },
  {
    title: "師範として参画する",
    description: "功績点と報酬で評価される師範制度。案件アサインや登壇の場が待っています。",
    href: "/join#fellow",
    primary: false,
  },
];

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-bamboo py-14">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/sumie.png"
          alt="墨絵のテクスチャ"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bamboo/90 via-bamboo/80 to-bamboo/90" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ctas.map((cta) => (
            <div
              key={cta.title}
              className="flex flex-col rounded-3xl bg-white/10 p-6 text-white shadow-[0_12px_24px_rgba(0,0,0,0.15)] backdrop-blur"
            >
              <h3 className="font-serif text-xl">{cta.title}</h3>
              <p className="mt-3 text-sm text-white/80">{cta.description}</p>
              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition shadow-lg ${
                    cta.primary
                      ? "bg-vermillion text-white hover:bg-vermillion-dark"
                      : "border border-white/70 text-white hover:bg-white/10"
                  }`}
                >
                  {cta.buttonLabel ?? "申し込む →"}
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition shadow-lg ${
                    cta.primary
                      ? "bg-vermillion text-white hover:bg-vermillion-dark"
                      : "border border-white/70 text-white hover:bg-white/10"
                  }`}
                >
                  {cta.buttonLabel ?? "申し込む →"}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
