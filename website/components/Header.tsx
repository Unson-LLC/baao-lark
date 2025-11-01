"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Programs & FieldWorks", href: "/programs" },
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

function NavItem({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-[#2F4C6E]/10 ${
        isActive ? "text-[#2F4C6E]" : "text-[#1D1A15]"
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
    <header className="sticky top-0 z-50 border-b border-[#D8CFC3] bg-[#F9F6F0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F4C6E]/90 font-serif text-lg text-white">
            道
          </span>
          <div className="leading-tight text-[#1D1A15]">
            <p className="font-serif text-lg">BAAO 実戦AI道場</p>
            <p className="text-xs text-[#4B4135]">Dojo for Practical AI</p>
          </div>
        </Link>
        <button
          type="button"
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center rounded-full border border-[#D8CFC3] px-3 py-2 text-sm text-[#1D1A15] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "閉じる" : "メニュー"}
        </button>
        <nav className="hidden flex-1 items-center justify-end gap-6 md:flex">
          <div className="flex items-center gap-2">
            {primaryNav.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} isActive={pathname === item.href} />
            ))}
          </div>
          <div className="hidden h-6 w-px bg-[#D8CFC3] lg:block" aria-hidden="true" />
          <div className="hidden items-center gap-2 lg:flex">
            {personaNav.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </div>
          <Link
            href="/join#free-live"
            className="rounded-full bg-[#2F4C6E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
          >
            無料稽古に参加
          </Link>
        </nav>
      </div>
      {menuOpen && (
        <div className="border-t border-[#D8CFC3] bg-white/95 px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                  pathname === item.href ? "bg-[#2F4C6E]/10 text-[#2F4C6E]" : "text-[#1D1A15]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-[#D8CFC3] pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">Persona</p>
            <div className="mt-2 flex flex-col gap-2">
              {personaNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                    pathname === item.href ? "bg-[#2F4C6E]/10 text-[#2F4C6E]" : "text-[#1D1A15]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/join#free-live"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#2F4C6E] px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              無料稽古に参加
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
