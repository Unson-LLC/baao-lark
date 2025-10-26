"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "毎週参加できないかもしれませんが...",
      answer:
        "大丈夫です。録画が見放題なので、都合の良い時に視聴できます。1.5倍速再生もできます。",
    },
    {
      question: "プロンプト集だけ欲しいのですが...",
      answer:
        "プロンプト集は会員特典の一部です。ただし、7日間無料なので、7日間試してプロンプト集を入手し、解約することも可能です。",
    },
    {
      question: "ChatGPT Plusと併用できますか？",
      answer:
        "はい、むしろ推奨します。BAAOで学んだプロンプト技術をChatGPT Plusで実践すると効果的です。",
    },
    {
      question: "業界特化の内容はありますか？",
      answer:
        "はい。毎週、製造・金融・医療・小売など業界別の事例を紹介しています。ACTIVEプランなら業界別フィードも利用可能です。",
    },
    {
      question: "途中で解約できますか？",
      answer:
        "はい、いつでも解約できます。違約金も一切ありません。",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-background-light">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">よくある質問</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-background-light transition-colors"
              >
                <span className="font-bold text-text pr-4">
                  Q. {faq.question}
                </span>
                <span
                  className={`text-2xl text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-text-light">
                  <p>A. {faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#all-faqs"
            className="text-primary hover:underline font-bold"
          >
            もっと見る →
          </a>
        </div>
      </div>
    </section>
  );
}
