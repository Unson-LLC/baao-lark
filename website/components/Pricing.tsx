export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">料金プラン</h2>

        <div className="max-w-2xl mx-auto">
          {/* BASIC Plan */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl shadow-xl border-2 border-primary mb-8">
            <div className="text-center mb-6">
              <h3 className="heading-md text-primary mb-2">
                BASIC｜稽古場
              </h3>
              <div className="text-4xl font-bold text-text mb-2">
                月額 2,980円
                <span className="text-lg font-normal text-text-light">
                  （税込）
                </span>
              </div>
              <p className="text-text-light">
                または 年額 29,800円（税込・2ヶ月分お得）
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light">
                  毎週30分の解説＋30分Q&A
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light">
                  1枚サマリPDF（社内転送OK）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light">即使えるプロンプト集</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light">録画見放題（アーカイブ）</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light">Q&Aログ検索</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <p className="text-text-light">
                  Larkグループチャット参加
                </p>
              </div>
            </div>

            <div className="text-center mb-4">
              <a
                href={process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg w-full block"
              >
                今すぐ参加（初月無料）
              </a>
            </div>

            <p className="text-center text-sm text-text-light">
              いつでも解約OK・違約金なし
            </p>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-8 p-6 bg-accent/10 rounded-lg">
            <p className="text-lg text-text">
              💡 <span className="font-bold">1日あたり約100円</span>で、
              <br />
              最新AIを使いこなせるようになります。
            </p>
          </div>

          {/* ACTIVE Plan */}
          <div className="bg-background-light p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="heading-sm text-text mb-2">
              【さらに学びたい方へ】
            </h3>
            <div className="mb-4">
              <p className="font-bold text-text text-xl">
                ACTIVE｜過去アーカイブ全文検索
              </p>
              <p className="text-text-light">月額 9,800円</p>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-text-light">
                BASIC特典 + 全アーカイブ検索 + 業界別フィード
              </p>
            </div>
            <a href="#active-details" className="text-primary hover:underline">
              ACTIVEの詳細を見る →
            </a>
          </div>

          {/* Campaign */}
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-6 rounded-lg text-center">
            <p className="text-xl font-bold text-text mb-2">
              【期間限定】先着100名様
            </p>
            <p className="text-text-light">
              今なら初月無料キャンペーン実施中
              <br />
              （2025年12月末まで）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
