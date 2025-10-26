export default function FinalCTA() {
  return (
    <section className="section bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            「触ったことがある」から
            <br />
            <span className="text-primary">「使いこなせる」へ。</span>
          </h2>

          <div className="mb-8">
            <p className="text-xl text-text mb-6">3ヶ月後のあなたは...</p>

            <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <div className="flex items-start justify-center">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light text-left">
                  プロンプトを部下に共有して頼られている
                </p>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light text-left">
                  最新ツールの情報で一目置かれている
                </p>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light text-left">
                  業界別の活用事例を即答できる
                </p>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light text-left">
                  週30分だけで学んでいる、と答える
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <a
              href="#pricing"
              className="btn-primary text-lg block sm:inline-block"
            >
              今すぐ参加（月2,980円）
            </a>
            <p className="text-sm text-text-light">
              7日間無料・今週のライブから参加可能
            </p>
          </div>

          <div className="border-t border-gray-300 pt-8">
            <p className="text-lg text-text mb-4">まだ迷っている方へ</p>
            <a
              href="#free-newsletter"
              id="free-newsletter"
              className="btn-secondary inline-block"
            >
              無料メール登録（週1回のAIニュース）
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
