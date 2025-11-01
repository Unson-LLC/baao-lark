import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif_JP({ subsets: ["latin"], variable: "--font-noto-serif" });

export const metadata: Metadata = {
  title: "BAAO 実戦AI道場｜流派 × 勝ち筋 × 型で四半期で成果",
  description:
    "無料稽古で空気を掴み、月謝で定着し、Field Director と伴走して四半期で成果を公開する。Executives / DX Leads / Operators / Fellows のためのペルソナ別LPを備えた常設サイト。",
  keywords: [
    "BAAO",
    "AI道場",
    "生成AI",
    "DX伴走",
    "月謝プラン",
    "Field Director",
    "Fellow",
    "成功事例",
    "ROI",
  ],
  openGraph: {
    title: "BAAO 実戦AI道場｜四半期で成果を証明",
    description:
      "無料稽古 → 月謝 → 伴走 → 成果公開。Executives / DX Leads / Operators / Fellows のための情報を二層構造で提供します。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAAO 実戦AI道場｜四半期で成果を証明",
    description: "無料稽古から伴走まで一貫支援。ペルソナ別LPで疑問を解消。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="bg-[#F9F6F0] text-[#1D1A15]">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
