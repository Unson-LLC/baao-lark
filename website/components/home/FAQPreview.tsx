const faqs = [
  {
    question: "無料ライブは誰でも参加できますか？",
    answer:
      "はい、メールアドレスと興味領域を登録すれば誰でも無料で参加できます。オープンチャットでリマインドと補足資料を配信します。",
  },
  {
    question: "月謝プランとBOOST・PRIMEの違いは？",
    answer:
      "月謝プラン（BASIC/ACTIVE）は学習重視で、アーカイブやノートへのアクセスが中心です。BOOST・PRIMEは実案件での伴走支援で、四半期で成果を出すことを目指します。",
  },
  {
    question: "導入までにどれくらいの期間が必要ですか？",
    answer:
      "無料稽古は即日参加可能です。月謝プランは登録後すぐ利用開始できます。BOOST・PRIMEは初回相談から1〜2週間でキックオフ可能です。",
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
