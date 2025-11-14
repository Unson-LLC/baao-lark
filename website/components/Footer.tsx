import Link from "next/link";
import Image from "next/image";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Resources", href: "/resources" },
  { label: "Join", href: "/join" },
];

const personaNav = [
  { label: "For Executives", href: "/executives" },
  { label: "For DX Leads", href: "/dx-leads" },
  { label: "For Operators", href: "/operators" },
  { label: "For Fellows", href: "/fellows" },
];

const metaLinks = [
  { label: "プライバシーポリシー", href: "#" },
  { label: "利用規約", href: "#" },
  { label: "BAAO本体サイト", href: "https://www.baao.or.jp/" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-dojo-gold/30 bg-dojo-green text-washi gold-brush-divider">
      {/* 夕景の背景（暗め） */}
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/footer/evening.png" alt="夕景" fill className="object-cover object-center opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-dojo-green-dark via-dojo-green/90 to-dojo-green/70" />
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-dojo-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-dojo-indigo/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16">
                <img
                  src="/logo.png"
                  alt="BAAO Dojo Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-brush text-2xl text-dojo-gold">BAAO 実戦AI道場</p>
                <p className="text-sm text-washi-light tracking-wide">Dojo for Practical AI</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-washi-light">
              和の現場知と実装知を公開し、四半期で成果を証明するコミュニティです。
              無料稽古から月謝、伴走まで一貫した流れで支援します。
            </p>
            <div className="space-y-2 text-sm text-washi-light border-l-2 border-dojo-gold pl-4">
              <p className="font-bold text-dojo-gold">一般社団法人ビジネスAI推進機構（BAAO）</p>
              <p>東京都港区 ― BAAO Lab</p>
              <p>
                お問い合わせ：
                <a className="ml-1 underline hover:text-dojo-gold transition" href="mailto:info@baao.or.jp">
                  info@baao.or.jp
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-dojo-gold border-b border-dojo-gold/30 pb-2">Navigation</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-washi-light">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-dojo-gold hover:pl-2 duration-200 flex items-center gap-2 group">
                  <span className="text-dojo-gold opacity-0 group-hover:opacity-100 transition">◆</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-wider text-dojo-gold border-b border-dojo-gold/30 pb-2">Persona</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-washi-light">
              {personaNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-dojo-gold hover:pl-2 duration-200 flex items-center gap-2 group">
                  <span className="text-dojo-gold opacity-0 group-hover:opacity-100 transition">◆</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-dojo-gold border-b border-dojo-gold/30 pb-2">Stay in Touch</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <a href="/join#free-live" className="inline-flex items-center rounded-lg bg-dojo-gold px-5 py-2.5 text-dojo-green font-bold transition hover:bg-dojo-gold-light shadow-lg hover:shadow-xl">
                  無料稽古に参加
                </a>
              </p>
              <p>
                <a href="/join#enterprise" className="inline-flex items-center rounded-lg border-2 border-washi px-5 py-2.5 text-washi font-bold transition hover:bg-washi hover:text-dojo-green">
                  企業相談を予約
                </a>
              </p>
              <p>
                <a href="/join#fellow" className="inline-flex items-center rounded-lg border-2 border-dojo-indigo px-5 py-2.5 text-dojo-indigo-light font-bold transition hover:bg-dojo-indigo hover:text-white">
                  Fellowとして参画
                </a>
              </p>
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-wider text-dojo-gold border-b border-dojo-gold/30 pb-2">Newsletter</p>
            <p className="mt-3 text-xs text-washi-light leading-relaxed">
              月2回、公開ケースとイベント情報をお届けします。
            </p>
            <a
              href="/resources#newsletter"
              className="mt-3 inline-flex items-center rounded-lg border-2 border-dojo-gold px-4 py-2 text-xs font-bold text-dojo-gold transition hover:bg-dojo-gold hover:text-dojo-green"
            >
              ニュースレターに登録
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t-2 border-dojo-gold/30 pt-8 text-xs text-washi-light md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            {metaLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-dojo-gold font-semibold">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-serif text-dojo-gold">© {new Date().getFullYear()} BAAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
