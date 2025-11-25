const faqCategories = [
  {
    category: "無料稽古について",
    questions: [
      {
        question: "無料ライブは誰でも参加できますか？",
        answer:
          "はい、誰でも無料で参加できます。LINEのオープンチャットに参加するだけでOKです。匿名での参加も可能です。",
      },
      {
        question: "無料稽古の開催頻度と時間は？",
        answer:
          "毎週木曜日 19:30-20:30 に開催しています。ZoomまたはYouTube Liveで視聴できます。開始1時間前に視聴URLとスライドを配信します。",
      },
      {
        question: "稽古の内容はどのようなものですか？",
        answer:
          "前半35分は基礎編で今週押さえたいAIニュースを解説します。後半25分は応用編で、AI導入に役立つ実践的な知見を会話を通じて深く掘り下げます。",
      },
    ],
  },
  {
    category: "月謝プラン（修行者・書院生）",
    questions: [
      {
        question: "月謝プランと企業向けプランの違いは？",
        answer:
          "月謝プラン（修行者・書院生）は個人で学ぶためのプランで、過去の稽古や知見を検索しながら学べます。企業向けプラン（評議会・伴走・秘伝書）は成果を出すための支援で、専任チームが伴走します。",
      },
      {
        question: "修行者と書院生の違いは？",
        answer:
          "修行者（¥2,980/月）は過去の稽古をいつでも視聴でき、週次の知見まとめ配信とLarkでの質問が可能です。書院生（¥9,800/月）はそれに加えて、過去の稽古から必要な知見を検索でき、業界別の最新事例まとめと未公開の実装手順書を先行閲覧できます。",
      },
      {
        question: "アーカイブや資料はいつ閲覧できますか？",
        answer:
          "月謝プラン（修行者・書院生）に加入すると即時閲覧可能です。",
      },
      {
        question: "月謝プランの料金は？",
        answer:
          "修行者は月額¥2,980（年額¥29,800で2ヶ月分お得）、書院生は月額¥9,800です。どちらも7日間無料でお試しいただけます。",
      },
    ],
  },
  {
    category: "企業向けプラン",
    questions: [
      {
        question: "評議会・伴走・秘伝書の違いは？",
        answer:
          "評議会は経営層向けコミュニティで、未公開ケースや現場見学、月次相談が可能です。伴走は4〜8週のプロジェクト型で、KPIを可視化し横展開のロードマップまで提示します。秘伝書は業務別の実装手順書で、買い切り型です。",
      },
      {
        question: "参加までにどれくらい時間がかかりますか？",
        answer:
          "無料稽古はLINEオープンチャットに参加すればすぐに視聴できます。月謝プランは登録後すぐ利用開始できます。企業向けプランは初回相談から1〜2週間で開始できます。",
      },
      {
        question: "四半期で成果を出すとはどういう意味ですか？",
        answer:
          "Before/Afterを可視化し、KPIの改善を測定します。例えば、不良率の削減、業務時間の短縮、受注率の向上など、具体的な数値で成果を示します。伴走期間中に測定方法も設計します。",
      },
      {
        question: "企業名や成果の公開について",
        answer:
          "守秘レベルに応じて、匿名公開・要素分解・実名公開から選択できます。公開しない選択肢もあります。公開する場合も、機密情報は含めず、他社でも再現できる形で共有します。",
      },
    ],
  },
  {
    category: "師範について",
    questions: [
      {
        question: "師範として参画するにはどうすればいいですか？",
        answer:
          "まずは無料稽古に参加し、月謝プランで学習を深めてください。その後、実案件への参画を相談いただけます。師範には役割に応じた報酬や特典があります。",
      },
      {
        question: "師範の役割と特典は？",
        answer:
          "師範は実装支援、ケース公開への寄稿、登壇などを担当します。功績点（こうせきてん）で評価され、役割と報酬が明確になります。詳細はコミュニティページをご覧ください。",
      },
    ],
  },
  {
    category: "その他",
    questions: [
      {
        question: "企業として導入を検討していますが、相談できますか？",
        answer:
          "はい、Joinページの企業向けフォームからご相談ください。業界や課題をお伺いし、最適なプランをご提案します。",
      },
      {
        question: "オープンチャットとLarkの違いは？",
        answer:
          "オープンチャット（LINE）は無料稽古参加者向けのリマインドと補足資料配信です。Larkは月謝プラン以上の会員向けで、質問や伴走レビューに利用します。",
      },
      {
        question: "秘伝書とは何ですか？",
        answer:
          "業務別に失敗例・コストまで明記した実装手順書です。製造、医療、公共、金融などの業界ごとに、実装手順、失敗例と回避策、推奨ツールとコストを記載しています。買い切り型で購入できます。",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
            よくある質問
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            AI道場に関するよくある質問をまとめました。
            <br />
            その他のご質問は、Joinページからお問い合わせください。
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <h2 className="mb-6 border-b-2 border-bamboo pb-2 font-serif text-2xl font-bold text-[#1D1A15]">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
                  >
                    <p className="font-semibold text-[#1D1A15]">{faq.question}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B4135]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-bamboo/30 bg-white p-8 text-center shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#1D1A15]">
            その他のご質問がありますか？
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            こちらに記載のない質問は、参加申し込みページからお問い合わせください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/join"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
            >
              お問い合わせ
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
            >
              トップに戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
