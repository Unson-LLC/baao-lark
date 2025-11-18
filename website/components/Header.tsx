"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryNav = [
  { label: "稽古・伴走", href: "/programs" },
  { label: "実装記録", href: "/success-stories" },
  { label: "イベント・資料", href: "/resources" },
  { label: "参加方法", href: "/join" },
  { label: "FAQ", href: "/resources/faq" },
];

const guideNav = [
  { label: "参加検討の方へ", href: "/for-you" },
  { label: "師範コミュニティ", href: "/community" },
];

function NavItem({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-3 py-2 text-[13px] font-semibold transition hover:bg-dojo-green/10 whitespace-nowrap ${
        isActive ? "text-dojo-gold border-b-2 border-dojo-gold" : "text-ink"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-dojo-green/20 bg-washi/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12">
            <img
              src="/images/logo.png"
              alt="BAAO Dojo Logo"
              className="h-full w-full object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <p className="leading-tight text-dojo-green">
            <span className="font-brush text-xl block">BAAO 実戦AI道場</span>
            <span className="text-xs text-ink-light tracking-wide">四半期で成果を出すAI道場</span>
          </p>
        </Link>
        <button
          type="button"
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center rounded-full border border-[#D8CFC3] px-3 py-2 text-sm text-[#1D1A15] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "閉じる" : "メニュー"}
        </button>
        <nav className="hidden flex-1 items-center justify-between pl-4 md:flex">
          <div className="flex flex-nowrap items-center gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible">
            {primaryNav.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} isActive={pathname === item.href} />
            ))}
          </div>
          <div className="hidden h-6 w-px bg-[#D8CFC3]/60 lg:block" aria-hidden="true" />
          <div className="hidden items-center gap-3 lg:flex">
            {guideNav.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} isActive={pathname === item.href} />
            ))}
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="border-t-2 border-dojo-green/20 bg-washi/95 px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  pathname === item.href ? "bg-dojo-green/10 text-dojo-gold border-l-4 border-dojo-gold" : "text-ink hover:bg-dojo-green/5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-dojo-green/20 pt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-dojo-gold">ご案内</p>
            <div className="mt-2 flex flex-col gap-2">
              {guideNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    pathname === item.href ? "bg-dojo-green/10 text-dojo-gold border-l-4 border-dojo-gold" : "text-ink hover:bg-dojo-green/5"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
