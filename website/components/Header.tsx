'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Resources", href: "/resources" },
  { label: "Join", href: "/join" },
];

const personaNavLinks = [
  { label: "For Executives", href: "/executives" },
  { label: "For DX Leads", href: "/dx-leads" },
  { label: "For Operators", href: "/operators" },
  { label: "For Fellows", href: "/fellows" },
];

const ctaButtons = [
  { label: "無料稽古に参加", href: "/join#free-live", variant: "primary" },
  { label: "成果を相談", href: "/join#enterprise", variant: "secondary" },
  { label: "師範を志願", href: "/join#fellow", variant: "ghost" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F9F6F0]/80 backdrop-blur transition border-b ${
        isScrolled ? "border-[#D8CFC3]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-full bg-[#2F4C6E] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            BAAO Dojo
          </span>
          <span className="hidden text-sm text-[#4B4135] sm:inline">
            実戦AI道場｜Flow × Mission × Practice
          </span>
        </Link>

        <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-2">
          <nav className="flex items-center gap-6">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4B4135] transition hover:text-[#2F4C6E]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex items-center gap-4 text-xs uppercase tracking-wide text-[#4B4135]">
            {personaNavLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-[#2F4C6E]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {ctaButtons.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                cta.variant === "primary"
                  ? "bg-[#2F4C6E] text-white hover:bg-[#4E6E92]"
                  : cta.variant === "secondary"
                  ? "border border-[#2F4C6E] text-[#2F4C6E] hover:bg-[#2F4C6E]/10"
                  : "text-[#4B4135] hover:text-[#2F4C6E]"
              }`}
            >
              {cta.label}
            </Link>
          ))}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CFC3] text-[#2F4C6E] lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="space-y-6 border-t border-[#D8CFC3] bg-white px-4 py-6">
            <div className="space-y-3">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-lg font-medium text-[#2F4C6E]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2 border-t border-[#D8CFC3] pt-4 text-sm">
              <p className="text-[#4B4135]">ペルソナ別ページ</p>
              <div className="space-y-2">
                {personaNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-[#2F4C6E]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3 pt-4">
              {ctaButtons.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={`block rounded-full px-4 py-3 text-center text-sm font-semibold transition ${
                    cta.variant === "primary"
                      ? "bg-[#2F4C6E] text-white"
                      : cta.variant === "secondary"
                      ? "border border-[#2F4C6E] text-[#2F4C6E]"
                      : "text-[#4B4135]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
