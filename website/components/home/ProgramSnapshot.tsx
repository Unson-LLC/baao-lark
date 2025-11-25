"use client";

import { useState } from "react";

const learningPrograms = [
  {
    name: "門下生（もんかせい）",
    subtitle: "無料で始める",
    description: "毎週木曜の無料稽古で道場の空気を体感",
    price: "¥0 / 月",
    features: ["毎週のライブ視聴", "オープンチャット参加", "開催後のダイジェスト配信"],
    href: "/programs#free",
  },
  {
    name: "修行者（しゅぎょうしゃ）",
    description: "過去の稽古を復習し、師範に質問しながら学ぶ",
    price: "¥2,980 / 月",
    priceNote: "年額 ¥29,800（2ヶ月分お得）",
    trial: "7日間無料",
    features: ["過去の稽古をいつでも視聴", "週次の知見まとめ配信", "Larkで師範に質問"],
    href: "/programs#basic",
  },
  {
    name: "書院生（しょいんせい）",
    description: "すべての知見を検索し、最新手法をいち早くキャッチアップ",
    price: "¥9,800 / 月",
    trial: "7日間無料",
    features: ["過去の稽古から必要な知見を検索", "業界別の最新事例まとめ", "未公開の実装手順書を先行閲覧"],
    href: "/programs#active",
    popular: true,
  },
];

const enterprisePrograms = [
  {
    name: "評議会（ひょうぎかい）",
    subtitle: "経営層コミュニティ",
    description: "未公開ケース・現場見学・月次相談で意思決定を加速",
    price: "個別見積",
    priceNote: "会員制コミュニティ",
    features: ["他社の成功・失敗事例を現場で見学", "月次のクイック相談枠", "全プログラム優待価格で利用可能"],
    href: "/programs#prime",
  },
  {
    name: "伴随（はんずい）",
    subtitle: "成果創出プロジェクト",
    description: "4〜8週でKPIを可視化し、横展開のロードマップまで提示",
    price: "個別見積",
    priceNote: "プロジェクト型（4〜8週）",
    features: ["導入前後のKPI測定と可視化", "専任チームによる伴随支援", "他部署への横展開計画を策定"],
    href: "/programs#boost",
  },
  {
    name: "秘伝書（ひでんしょ）",
    subtitle: "実装手順書",
    description: "業務別に失敗例・コストまで明記した実践ガイド",
    price: "1本あたり個別見積",
    priceNote: "買い切り型",
    features: ["ステップバイステップの実装手順", "よくある失敗と回避策を明記", "推奨ツールと導入コストを記載"],
    href: "/programs#recipes",
  },
];

export default function ProgramSnapshot() {
  const [enterpriseOpen, setEnterpriseOpen] = useState(false);

  return (
    <section id="programs" className="ink-bleed relative overflow-hidden bg-white py-16 md:py-20">
      {/* セクション全体に和紙テクスチャ（低不透明度・リピート） */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/images/programs/washi.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            無料稽古から伴随まで。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            まずは無料で道場に触れ、その後は月謝プランで学び、伴随プログラムで成果を出す。
          </p>
        </div>

        {/* 個人で学ぶプラン */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-bamboo rounded-full" />
            <h3 className="text-xl font-bold text-[#1D1A15]">個人で学ぶプラン</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {learningPrograms.map((program) => (
              <div
                key={program.name}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#D8CFC3] bg-[#FDFBF6]/90 p-6 shadow-[0_12px_24px_rgba(29,26,21,0.06)]"
                style={{
                  borderImage: program.popular
                    ? 'linear-gradient(135deg, rgba(196, 126, 59, 0.6) 0%, rgba(196, 126, 59, 0.3) 50%, rgba(196, 126, 59, 0.6) 100%) 1'
                    : 'linear-gradient(135deg, rgba(44, 44, 44, 0.6) 0%, rgba(44, 44, 44, 0.3) 50%, rgba(44, 44, 44, 0.6) 100%) 1',
                }}
              >
                {/* 人気バッジ */}
                {program.popular && (
                  <div className="absolute -right-2 top-4 rounded-l-full bg-vermillion px-4 py-1 text-xs font-bold text-[#1D1A15] shadow-md">
                    おすすめ
                  </div>
                )}
                {/* 各カードにも薄い模様を追加 */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: "url(/images/programs/washi.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "500px 500px",
                  }}
                />
                <div className="relative">
                  <h3 className="font-serif text-xl text-[#1D1A15]">{program.name}</h3>
                  {program.subtitle && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-bamboo">{program.subtitle}</p>
                  )}
                  <p className="mt-2 text-sm text-[#4B4135]">{program.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-lg font-bold text-[#1D1A15]">{program.price}</p>
                      {program.trial && (
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-vermillion/20 to-vermillion/10 px-3 py-1 text-xs font-bold text-vermillion border border-vermillion/30">
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{program.trial}</span>
                        </div>
                      )}
                    </div>
                    {program.priceNote && (
                      <p className="mt-1 text-xs text-[#4B4135]">{program.priceNote}</p>
                    )}
                  </div>
                </div>
                <ul className="relative mt-6 space-y-2 text-sm text-[#4B4135]">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-bamboo" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={program.href}
                  className="relative mt-auto inline-flex items-center pt-6 text-sm font-semibold text-bamboo hover:text-bamboo-light"
                >
                  詳細を見る →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 企業向け伴随支援プラン（アコーディオン） */}
        <div className="mt-16">
          <button
            onClick={() => setEnterpriseOpen(!enterpriseOpen)}
            className="group mb-6 flex w-full items-center justify-between rounded-2xl border-2 border-[#D8CFC3] bg-white/80 p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-dojo-gold rounded-full" />
              <h3 className="text-xl font-bold text-[#1D1A15]">企業向け伴随支援プラン</h3>
              <span className="rounded-full bg-dojo-gold/10 px-3 py-1 text-xs font-semibold text-[#C47E3B]">
                個別見積
              </span>
            </div>
            <svg
              className={`h-6 w-6 text-bamboo transition-transform ${enterpriseOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {enterpriseOpen && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {enterprisePrograms.map((program) => (
                <div
                  key={program.name}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#D8CFC3] bg-[#FDFBF6]/90 p-6 shadow-[0_12px_24px_rgba(29,26,21,0.06)]"
                  style={{
                    borderImage: 'linear-gradient(135deg, rgba(44, 44, 44, 0.6) 0%, rgba(44, 44, 44, 0.3) 50%, rgba(44, 44, 44, 0.6) 100%) 1',
                  }}
                >
                  {/* 各カードにも薄い模様を追加 */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: "url(/images/programs/washi.png)",
                      backgroundRepeat: "repeat",
                      backgroundSize: "500px 500px",
                    }}
                  />
                  <div className="relative">
                    <h3 className="font-serif text-xl text-[#1D1A15]">{program.name}</h3>
                    {program.subtitle && (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-bamboo">{program.subtitle}</p>
                    )}
                    <p className="mt-2 text-sm text-[#4B4135]">{program.description}</p>
                    <div className="mt-4">
                      <p className="text-lg font-bold text-[#1D1A15]">{program.price}</p>
                      {program.priceNote && (
                        <p className="mt-1 text-xs text-[#4B4135]">{program.priceNote}</p>
                      )}
                    </div>
                  </div>
                  <ul className="relative mt-6 space-y-2 text-sm text-[#4B4135]">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-bamboo" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={program.href}
                    className="relative mt-auto inline-flex items-center pt-6 text-sm font-semibold text-bamboo hover:text-bamboo-light"
                  >
                    詳細を見る →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
