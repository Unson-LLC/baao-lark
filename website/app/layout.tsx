import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAAO 実戦AI道場 | AI Weekly - 週30分で最新AIを使いこなす",
  description:
    "ChatGPT触ったけど使えない？週30分のライブで、最新動向から実務活用まで体系的に学べます。プロンプト集、業界別事例、Q&Aで実務で使える知識が手に入ります。月2,980円・7日間無料。",
  keywords: [
    "AI",
    "ChatGPT",
    "生成AI",
    "プロンプト",
    "実務活用",
    "BAAO",
    "AI道場",
    "オンライン学習",
  ],
  openGraph: {
    title: "BAAO 実戦AI道場 | 週30分で最新AIを使いこなす",
    description:
      "ChatGPT触ったけど使えない？体系的に学べるAI Weekly。プロンプト集、業界別事例付き。月2,980円・7日間無料。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAAO 実戦AI道場 | 週30分で最新AIを使いこなす",
    description:
      "ChatGPT触ったけど使えない？体系的に学べるAI Weekly。月2,980円・7日間無料。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
