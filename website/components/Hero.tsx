export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-white py-20 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              BAAO 実戦AI道場
            </h1>
          </div>

          {/* Catchcopy - パターンA: 共感×驚き */}
          <h2 className="heading-xl mb-6 max-w-4xl break-keep">
            ChatGPT、触ったけど使えない。
            <br />
            <span className="text-primary">その理由、30分で分かります。</span>
          </h2>

          {/* Lead Copy */}
          <div className="mb-8 max-w-2xl">
            <p className="text-lg md:text-xl text-text-light mb-6">
              こんなこと、ありませんか？
            </p>
            <ul className="text-left space-y-3 text-text-light">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                ChatGPT使ってみたけど、期待した結果が出ない
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                プロンプトの書き方がイマイチ分からない
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                新しいツールが多すぎて、何を使えばいいか分からない
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                YouTube見ても断片的で、体系的に学べない
              </li>
            </ul>
          </div>

          <p className="text-lg md:text-xl mb-8 text-text">
            週30分のライブで、
            <br />
            <span className="font-bold text-primary">
              最新動向から実務活用まで体系的に学べます。
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="#pricing" className="btn-primary text-lg">
              今すぐ参加（月2,980円）
            </a>
            <a href="#free-newsletter" className="btn-secondary text-lg">
              まずは無料メール登録
            </a>
          </div>

          {/* Sub Text */}
          <p className="text-sm text-text-light">
            7日間無料・今週のライブから参加可能
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
