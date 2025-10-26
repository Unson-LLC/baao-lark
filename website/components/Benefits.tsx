export default function Benefits() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">3ヶ月後、あなたは...</h2>
        <p className="text-center text-text-light mb-12 text-lg">
          「触ったことがある」から「使いこなせる」へ。
        </p>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <p className="text-lg font-bold text-text mb-2">
                  「このプロンプト使ってみて」と
                </p>
                <p className="text-text-light">
                  部下に即戦力のテンプレートを共有
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <p className="text-lg font-bold text-text mb-2">
                  会議で「最新のGemini、こんな機能が」
                </p>
                <p className="text-text-light">情報の早さで一目置かれる</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <p className="text-lg font-bold text-text mb-2">
                  上司から「AI活用の事例、教えて」
                </p>
                <p className="text-text-light">業界別の成功パターンを即答</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </div>
              <div>
                <p className="text-lg font-bold text-text mb-2">
                  同僚から「どうやって勉強してるの？」
                </p>
                <p className="text-text-light">BAAOで週30分だけ、と答える</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#pricing" className="btn-primary text-lg">
            この未来を手に入れる
          </a>
        </div>
      </div>
    </section>
  );
}
