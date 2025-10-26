export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">
          なぜ、週30分で使いこなせるようになるのか？
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 理由1 */}
          <div>
            <h3 className="heading-sm text-primary mb-4">
              【理由1】体系的なカリキュラム
            </h3>
            <div className="bg-background-light p-6 rounded-lg space-y-3">
              <div className="flex items-start">
                <span className="font-bold text-primary mr-3">Week 1:</span>
                <p className="text-text-light">最新動向（今週のトピック）</p>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-primary mr-3">Week 2:</span>
                <p className="text-text-light">実務活用（業界別事例）</p>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-primary mr-3">Week 3:</span>
                <p className="text-text-light">
                  プロンプト技術（コツと失敗例）
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-primary mr-3">Week 4:</span>
                <p className="text-text-light">
                  ツール比較（何を使うべきか）
                </p>
              </div>
            </div>
            <p className="text-text-light mt-4">
              YouTubeやブログの断片的な情報ではなく、
              <span className="font-bold text-primary">体系的に学べます。</span>
            </p>
          </div>

          {/* 理由2 */}
          <div>
            <h3 className="heading-sm text-primary mb-4">
              【理由2】即使えるプロンプト集
            </h3>
            <ul className="space-y-2 text-text-light">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                議事録まとめ用プロンプト
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                企画書アイデア出しプロンプト
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                メール文章作成プロンプト
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                データ分析用プロンプト
              </li>
            </ul>
            <p className="text-text-light mt-4">
              <span className="font-bold text-primary">
                コピペで今日から使えます。
              </span>
            </p>
          </div>

          {/* 理由3 */}
          <div>
            <h3 className="heading-sm text-primary mb-4">
              【理由3】業界別（流派）の活用事例
            </h3>
            <ul className="space-y-2 text-text-light">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                製造業: 検査記録の自動化
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                金融業: 与信審査の効率化
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                小売業: FAQ対応の自動化
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                医療業: 文書作成の効率化
              </li>
            </ul>
            <p className="text-text-light mt-4">
              <span className="font-bold text-primary">
                自分の業界に当てはめられます。
              </span>
            </p>
          </div>

          {/* 理由4 */}
          <div>
            <h3 className="heading-sm text-primary mb-4">
              【理由4】Q&Aで疑問を即解決
            </h3>
            <ul className="space-y-2 text-text-light">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                ライブ中に質問できる（30分Q&A）
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                過去のQ&Aログも検索可能
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Larkグループチャットで質問し放題
              </li>
            </ul>
            <p className="text-text-light mt-4">
              <span className="font-bold text-primary">
                分からないことをすぐ解決できます。
              </span>
            </p>
          </div>

          {/* 理由5 */}
          <div>
            <h3 className="heading-sm text-primary mb-4">
              【理由5】1枚サマリPDF
            </h3>
            <ul className="space-y-2 text-text-light">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                今週の重要ポイントをA4・1枚に
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                社内共有OK（部下に配れる）
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                印刷してデスクに貼れる
              </li>
            </ul>
            <p className="text-text-light mt-4">
              <span className="font-bold text-primary">
                復習にも、社内展開にも使えます。
              </span>
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#pricing" className="btn-primary text-lg">
            今すぐ始める（月2,980円）
          </a>
        </div>
      </div>
    </section>
  );
}
