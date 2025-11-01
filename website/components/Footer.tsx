import Link from "next/link";

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
    <footer className="border-t border-[#D8CFC3] bg-[#F3EEE4] text-[#1D1A15]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <div>
              <p className="font-serif text-xl">BAAO 実戦AI道場</p>
              <p className="text-sm text-[#4B4135]">Dojo for Practical AI</p>
            </div>
            <p className="text-sm leading-relaxed text-[#4B4135]">
              和の現場知と実装知を公開し、四半期で成果を証明するコミュニティです。
              無料稽古から月謝、伴走まで一貫した流れで支援します。
            </p>
            <div className="space-y-1 text-sm text-[#4B4135]">
              <p>一般社団法人ビジネスAI推進機構（BAAO）</p>
              <p>東京都港区 ― BAAO Lab</p>
              <p>
                お問い合わせ：
                <a className="ml-1 underline" href="mailto:info@baao.or.jp">
                  info@baao.or.jp
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">Navigation</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[#4B4135]">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-[#2F4C6E]">
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">Persona</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[#4B4135]">
              {personaNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-[#2F4C6E]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">Stay in Touch</p>
            <div className="mt-3 space-y-3 text-sm text-[#4B4135]">
              <p>
                <a href="/join#free-live" className="inline-flex items-center rounded-full bg-[#2F4C6E] px-4 py-2 text-white transition hover:bg-[#4E6E92]">
                  無料稽古に参加
                </a>
              </p>
              <p>
                <a href="/join#enterprise" className="inline-flex items-center rounded-full border border-[#2F4C6E] px-4 py-2 text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10">
                  企業相談を予約
                </a>
              </p>
              <p>
                <a href="/join#fellow" className="inline-flex items-center rounded-full border border-[#C47E3B] px-4 py-2 text-[#C47E3B] transition hover:bg-[#C47E3B]/10">
                  Fellowとして参画
                </a>
              </p>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">Newsletter</p>
            <p className="mt-2 text-xs text-[#4B4135]">
              月2回、公開ケースとイベント情報をお届けします。
            </p>
            <a
              href="/resources#newsletter"
              className="mt-3 inline-flex items-center rounded-full border border-[#2F4C6E] px-4 py-2 text-xs font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
            >
              ニュースレターに登録
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#D8CFC3] pt-6 text-xs text-[#4B4135] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            {metaLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-[#2F4C6E]">
                {link.label}
              </Link>
            ))}
          </div>
          <p>© {new Date().getFullYear()} BAAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
