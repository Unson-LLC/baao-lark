const faqs = [
  {
    question: "無料ライブは誰でも参加できますか？",
    answer:
      "メールアドレスと興味領域を登録すれば無料で参加できます。オープンチャットでリマインドと補足資料を配信します。",
  },
  {
    question: "アーカイブや資料はいつ閲覧できますか？",
    answer:
      "月謝プラン（BASIC/ACTIVE）に加入すると即時閲覧可能です。過去のライブも全文検索できます。",
  },
  {
    question: "企業名や成果は公開しないといけませんか？",
    answer:
      "守秘レベル1〜3から選択できます。Level 1は匿名公開、Level 2は要素分解、Level 3は実名公開です。",
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
            className="inline-flex items-center text-sm font-semibold text-[#2F4C6E] hover:text-[#4E6E92]"
          >
            FAQをもっと読む →
          </a>
        </div>
      </div>
    </section>
  );
}
