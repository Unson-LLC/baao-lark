import Link from "next/link";
import Image from "next/image";
import { fellows } from "@/data/fellows";

const fellowMap = new Map(fellows.map((fellow) => [fellow.id, fellow] as const));

const cases = [
  {
    field: "製造 × Quality-Up",
    title: "画像検査AIでP95不良率 38%改善",
    description:
      "匿名大手メーカーのラインにAI検査を導入。Before/Afterを可視化し、同工場内の横展開も実施。",
    metrics: ["P95不良率 38%→19%", "検査時間 12分→5分"],
    secrecy: "守秘レベル 2（要素分解）",
    fellowId: "yamamoto-rikiya",
  },
  {
    field: "公共 × Speed-Up",
    title: "窓口問い合わせをGenAIで自動応答",
    description:
      "自治体の問い合わせ業務をGenAIで自動化。FAQ公開と同時に職員向けハンドブックを整備。",
    metrics: ["問い合わせ応答時間 3日→数秒", "職員工数 40%削減"],
    secrecy: "守秘レベル 1（匿名公開）",
    fellowId: "ogawa-miku",
  },
  {
    field: "金融 × Growth-Up",
    title: "個社向け提案資料を半自動生成",
    description:
      "金融機関の法人営業部門で提案資料生成を半自動化。PRIMEコミュニティでベストプラクティスとして共有。",
    metrics: ["資料作成工数 65%削減", "受注率 +14pt"],
    secrecy: "守秘レベル 3（実名公開予定）",
    fellowId: "yoshimi-takamitsu",
  },
] as const;

const kpis = [
  { name: "公開ケース数", value: "48件", note: "守秘レベル1〜3" },
  { name: "P95リードタイム", value: "-32%", note: "BOOST導入企業平均" },
  { name: "BASIC→PRIME昇格率", value: "28%", note: "四半期平均" },
  { name: "Yearbookダウンロード", value: "1,200+", note: "2025年版" },
];

export default function CasesHighlights() {
  return (
    <section id="cases" className="ink-bleed bg-[#F9F6F0] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            公開できる実装知＝再現できる品質。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            守秘レベルを設定しつつ、可能な限りケースを公開。伴随の結果はYearbookで検証可能です。
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => {
            const fellow = fellowMap.get(item.fellowId);
            return (
              <div
                key={item.title}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#D8CFC3] bg-white p-6 shadow-[0_12px_24px_rgba(29,26,21,0.06)]"
                style={{
                  borderImage: 'linear-gradient(135deg, rgba(44, 44, 44, 0.6) 0%, rgba(44, 44, 44, 0.3) 50%, rgba(44, 44, 44, 0.6) 100%) 1',
                }}
              >
                {/* カード背景に和紙テクスチャ（淡く） */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: "url(/images/cases/washi.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <p className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">
                  {item.field}
                </p>
                <h3 className="mt-2 font-serif text-xl text-[#1D1A15]">{item.title}</h3>
                <p className="mt-3 text-sm text-[#4B4135]">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-bamboo" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#4B4135]">{item.secrecy}</p>
                {fellow && (
                  <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#F9F6F0]/90 px-4 py-3">
                    {/* 円形の和風装飾つきアバター */}
                    <div className="relative h-10 w-10">
                      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,_#C47E3B_0deg,_#F3E7D3_120deg,_#C47E3B_240deg,_#F3E7D3_360deg)] opacity-30" />
                      <div className="absolute left-1 top-1 h-8 w-8 overflow-hidden rounded-full border border-[#D8CFC3] bg-white">
                        <Image
                          src={fellow.avatar}
                          alt={fellow.name}
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-xs text-[#4B4135]">
                      <p className="font-semibold text-[#1D1A15]">{fellow.name}</p>
                      <p>{fellow.appointment}</p>
                    </div>
                  </div>
                )}
                <div className="mt-auto flex items-center justify-between pt-6">
                  <a
                    href="/success-stories"
                    className="text-sm font-semibold text-bamboo hover:text-bamboo-light"
                  >
                    ケースの詳細を見る →
                  </a>
                  {fellow && (
                    <Link
                      href={`/fellows#${fellow.grade.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-xs font-semibold text-[#C47E3B] underline"
                    >
                      師範プロフィールへ
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border-2 border-dojo-gold/30 bg-white p-8 shadow-lg md:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.name} className="rounded-xl bg-white border-2 border-dojo-green/20 p-6 hover:border-dojo-gold/50 transition-all">
              <p className="text-xs font-bold uppercase tracking-wider text-dojo-green">
                {kpi.name}
              </p>
              <p className="mt-3 font-brush text-3xl text-dojo-gold">{kpi.value}</p>
              <p className="mt-2 text-xs text-ink-light">{kpi.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-[#4B4135] md:flex-row">
          <a
            href="/success-stories"
            className="rounded-full bg-vermillion px-6 py-3 text-white transition hover:bg-vermillion-dark shadow-lg"
          >
            ケース一覧を見る
          </a>
          <a
            href="/success-stories#yearbook"
            className="rounded-full border border-bamboo px-6 py-3 text-bamboo transition hover:bg-bamboo/10"
          >
            Yearbook 2025 をダウンロード
          </a>
        </div>
      </div>
    </section>
  );
}
