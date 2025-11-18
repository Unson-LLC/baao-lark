import Link from "next/link";
import Image from "next/image";

const dojoNav = [
  { label: "道場トップ", href: "/" },
  { label: "稽古・伴走プログラム", href: "/programs" },
  { label: "ケース公開・資料", href: "/resources" },
  { label: "参加方法（ご入門）", href: "/join" },
  { label: "実装記録", href: "/success-stories" },
];

const roleNav = [
  { label: "経営・意思決定者の方", href: "/executives" },
  { label: "DX推進・PMの方", href: "/dx-leads" },
  { label: "現場で実装する方", href: "/operators" },
  { label: "師範志望（Fellow）", href: "/fellows" },
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
        <div className="absolute -right-10 bottom-4 hidden h-72 w-72 opacity-35 md:block">
          <Image src="/images/bamboo2.png" alt="竹のシルエット" fill sizes="300px" className="object-contain object-bottom" />
        </div>
        <div className="absolute -left-8 top-10 hidden h-60 w-60 opacity-25 md:block">
          <Image src="/images/stone.png" alt="石庭のモチーフ" fill sizes="240px" className="object-contain object-top" />
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16">
                <img
                  src="/images/logo.png"
                  alt="BAAO Dojo Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-brush text-2xl text-dojo-gold">BAAO 実戦AI道場</p>
                <p className="text-sm text-washi-light tracking-wide">流派 × 勝ち筋 × 型</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-washi-light">
              和の現場知と実装知を公開し、四半期で成果を証明するコミュニティです。
              無料稽古から月謝、伴走まで一貫した流れで支援します。
            </p>
            <div className="space-y-2 text-sm text-washi-light border-l-2 border-dojo-gold pl-4">
              <p className="font-bold text-dojo-gold">一般社団法人ビジネスAI推進機構（BAAO）</p>
              <p>
                お問い合わせ：
                <a className="ml-1 underline hover:text-dojo-gold transition" href="mailto:info@baao.or.jp">
                  info@baao.or.jp
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-dojo-gold border-b border-dojo-gold/30 pb-2">道場案内</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-washi-light">
              {dojoNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-dojo-gold hover:pl-2 duration-200 flex items-center gap-2 group">
                  <span className="text-dojo-gold opacity-0 group-hover:opacity-100 transition">◆</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold tracking-wide text-dojo-gold border-b border-dojo-gold/30 pb-2">役割から探す</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-washi-light">
              {roleNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-dojo-gold hover:pl-2 duration-200 flex items-center gap-2 group">
                  <span className="text-dojo-gold opacity-0 group-hover:opacity-100 transition">◆</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-dojo-gold border-b border-dojo-gold/30 pb-2">稽古の入り口</p>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <a
                  href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-dojo-gold px-5 py-2.5 text-dojo-green font-bold transition hover:bg-dojo-gold-light shadow-lg hover:shadow-xl"
                >
                  週次稽古に入る
                </a>
              </p>
              <p>
                <a href="/join#enterprise" className="inline-flex w-full items-center justify-center rounded-lg border-2 border-washi px-5 py-2.5 text-washi font-bold transition hover:bg-washi hover:text-dojo-green">
                  評議会・伴走の相談
                </a>
              </p>
              <p>
                <a href="/join#fellow" className="inline-flex w-full items-center justify-center rounded-lg border-2 border-dojo-indigo px-5 py-2.5 text-dojo-indigo-light font-bold transition hover:bg-dojo-indigo hover:text-white">
                  師範として参画
                </a>
              </p>
            </div>
            <p className="mt-8 text-sm font-semibold tracking-wide text-dojo-gold border-b border-dojo-gold/30 pb-2">道場便り</p>
            <p className="mt-3 text-xs text-washi-light leading-relaxed">
              月に二度、公開ケース・稽古予定・評議会の記録をお届けします。
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
          <p className="font-serif text-dojo-gold">© {new Date().getFullYear()} BAAO 実戦AI道場</p>
        </div>
      </div>
    </footer>
  );
}
