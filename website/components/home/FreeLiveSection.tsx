import Image from "next/image";

const agenda = [
  {
    title: "前半 35分｜基礎編：今週押さえたいAIニュース",
    description: "最新のAI動向やトレンドを分かりやすく解説。ビジネスへの影響や注目ポイントを共有します。",
  },
  {
    title: "後半 25分｜応用編：深掘りディスカッション",
    description: "AI導入に役立つ実践的な知見を、会話を通じて深く掘り下げます。参加者と一緒に示唆を引き出していきます。",
  },
];

export default function FreeLiveSection() {
  return (
    <section id="free-live" className="ink-bleed relative overflow-hidden bg-white">
      {/* 明確な左右50/50分割レイアウト */}
      <div className="flex min-h-[600px] flex-col lg:flex-row">
        {/* 左側: テキストエリア（50%） */}
        <div className="relative flex flex-1 flex-col justify-center border-r border-[#D8CFC3]/30 bg-washi px-8 py-20 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto max-w-2xl space-y-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
              Weekly Free Dojo Live
            </span>
            <h2 className="font-serif text-3xl leading-tight text-[#1D1A15] sm:text-4xl lg:text-5xl">
              無料の稽古ライブで、
              <br />
              道場の空気を感じる。
            </h2>
            <p className="text-lg leading-relaxed text-[#4B4135]">
              毎週木曜日夜に開催。最新ケースの分解、実装実況、質疑応答までを60分で凝縮します。登録するとオープンチャット（LINE）に招待され、開催前後のアップデートも受け取れます。
            </p>
            <div className="space-y-4 rounded-2xl border border-[#D8CFC3] bg-white/80 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
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
            </div>

            <div className="rounded-2xl border border-[#D8CFC3] bg-white/80 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                参加方法
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#4B4135]">
                LINEのオープンチャットに参加するだけでOKです。開催日時になったら、視聴リンクとスライドがオープンチャットで共有されます。匿名での参加も可能です。
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
                >
                  LINEオープンチャットに参加する
                </a>
                <p className="text-xs text-[#4B4135]">
                  オープンチャットは匿名参加可。利用規約に同意した上でご参加ください。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右側: 画像エリア（50%） */}
        <div className="relative flex flex-1 overflow-hidden lg:min-h-[600px]">
          <Image
            src="/images/free-live/side.png"
            alt="無料の稽古ライブの雰囲気"
            fill
            priority
            className="object-cover object-center image-sepia"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
}
