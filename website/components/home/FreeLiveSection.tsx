import Link from "next/link";

const agenda = [
  {
    title: "前半 20分｜最新ケースダイジェスト",
    description: "製造・ヘルスケア・公共の3流派から成功/失敗例を共有。四半期で成果化するポイントを分解。",
  },
  {
    title: "後半 30分｜実装ハンズオン実況",
    description: "Vibe Codingを使ったハンズオン実況。月謝会員はそのままSlackで質問可能。",
  },
  {
    title: "クイック相談 10分",
    description: "PRIME/BOOSTを検討中の企業向けに個別の次アクションを案内。",
  },
];

export default function FreeLiveSection() {
  return (
    <section id="free-live" className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
            Weekly Free Dojo Live
          </span>
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            無料の稽古ライブで、
            <br className="hidden sm:block" />
            道場の空気を感じる。
          </h2>
          <p className="text-lg leading-relaxed text-[#4B4135]">
            毎週木曜日夜に開催。最新ケースの分解、実装実況、質疑応答までを60分で凝縮します。登録するとオープンチャット（LINE）に招待され、開催前後のアップデートも受け取れます。
          </p>
          <div className="space-y-4 rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
              稽古の流れ
            </h3>
            <ul className="space-y-3 text-sm text-[#4B4135]">
              {agenda.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-[#1D1A15]">{item.title}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-[#D8CFC3] bg-white px-4 py-3 text-sm text-[#4B4135]">
              <p className="font-semibold text-[#1D1A15]">参加に必要なもの</p>
              <ul className="mt-2 space-y-1">
                <li>・メールアドレス（参加URL送付）</li>
                <li>・LINEまたはメールでの通知受信</li>
                <li>・Zoom / YouTube Live 視聴環境</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-[0_12px_24px_rgba(29,26,21,0.08)]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2F4C6E]">
              参加方法
            </h3>
            <ol className="mt-4 space-y-4 text-sm text-[#4B4135]">
              <li>
                <span className="font-semibold text-[#1D1A15]">1. フォーム登録</span>
                <p>メールアドレス・興味領域・参加目的を入力。</p>
              </li>
              <li>
                <span className="font-semibold text-[#1D1A15]">2. オープンチャットへ招待</span>
                <p>LINEのオープンチャットでリマインドと補足資料を共有。</p>
              </li>
              <li>
                <span className="font-semibold text-[#1D1A15]">3. 当日アクセス</span>
                <p>開始1時間前に視聴URLとスライドを配信。</p>
              </li>
            </ol>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/join#free-live"
                className="flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
              >
                無料稽古に登録する
              </Link>
              <Link
                href="/resources#events"
                className="flex items-center justify-center rounded-full border border-[#2F4C6E] px-6 py-3 text-sm font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
              >
                オープンチャットの案内を見る
              </Link>
              <p className="text-xs text-[#4B4135]">
                オープンチャットは匿名参加可。利用規約に同意した上でご参加ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
