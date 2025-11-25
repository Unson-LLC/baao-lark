import type { Metadata } from "next";
import { Inter, Noto_Serif_JP, Yuji_Syuku } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif_JP({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-serif" });
const yujiBrush = Yuji_Syuku({ subsets: ["latin"], weight: ["400"], variable: "--font-yuji-brush" });

export const metadata: Metadata = {
  title: "BAAO 実戦AI道場｜流派 × 勝ち筋 × 型で四半期で成果",
  description:
    "無料稽古で空気を掴み、月謝で型を得て、師範が伴随して四半期で成果を公開する。役割別の稽古ガイドと師範コミュニティ案内を備えた常設サイト。",
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
      "無料稽古 → 月謝 → 師範が伴随して → 成果公開。役割別の稽古ルートと師範コミュニティ情報を二層構造で提供します。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAAO 実戦AI道場｜四半期で成果を証明",
    description: "無料稽古から師範の伴随まで一貫支援。役割別ガイドで疑問を解消。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerif.variable} ${yujiBrush.variable}`}>
      <body className="bg-washi text-ink">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
