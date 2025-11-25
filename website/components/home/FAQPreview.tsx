const faqs = [
  {
    question: "無料ライブは誰でも参加できますか？",
    answer:
      "はい、誰でも無料で参加できます。LINEのオープンチャットに参加するだけでOKです。匿名での参加も可能です。",
  },
  {
    question: "月謝プランと企業向けプランの違いは？",
    answer:
      "月謝プラン（修行者・書院生）は個人で学ぶためのプランで、過去の稽古や知見を検索しながら学べます。企業向けプラン（評議会・伴随・秘伝書）は成果を出すための支援で、専任チームが伴随します。",
  },
  {
    question: "参加までにどれくらい時間がかかりますか？",
    answer:
      "無料稽古はLINEオープンチャットに参加すればすぐに視聴できます。月謝プランは登録後すぐ利用開始できます。企業向けプランは初回相談から1〜2週間で開始できます。",
  },
];

export default function FAQPreview() {
  return (
    <section id="faq" className="bg-[#F9F6F0] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            よくある質問（抜粋）
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            詳細は FAQ セクションをご覧ください。守秘・料金・導入スケジュールに関する質問をまとめています。
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
              <p className="font-semibold text-[#1D1A15]">{faq.question}</p>
              <p className="mt-2 text-sm text-[#4B4135]">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/resources/faq"
            className="inline-flex items-center text-sm font-semibold text-bamboo hover:text-bamboo-light"
          >
            FAQをもっと読む →
          </a>
        </div>
      </div>
    </section>
  );
}
