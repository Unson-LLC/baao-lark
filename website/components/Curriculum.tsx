export default function Curriculum() {
  const weeks = [
    {
      week: "Week 1",
      title: "最新動向",
      items: [
        "今週発表された新しいAIツール",
        "ChatGPT/Gemini/Claudeの比較",
        "注目すべき機能アップデート",
      ],
    },
    {
      week: "Week 2",
      title: "実務活用",
      items: [
        "業界別の成功事例",
        "失敗事例から学ぶ（なぜ上手くいかなかったか）",
        "Before/Afterの数字（工数削減率など）",
      ],
    },
    {
      week: "Week 3",
      title: "プロンプト技術",
      items: [
        "良いプロンプト vs 悪いプロンプト",
        "Chain-of-Thought（思考の連鎖）の使い方",
        "Few-Shot（例示）のテクニック",
        "即使えるテンプレート集",
      ],
    },
    {
      week: "Week 4",
      title: "ツール比較",
      items: [
        "ChatGPT vs Gemini vs Claude",
        "無料版 vs 有料版（どっちを使うべき？）",
        "業務別のおすすめツール",
      ],
    },
  ];

  return (
    <section className="section bg-background-light">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">
          毎週、こんなことが学べます
        </h2>
        <p className="text-center text-text-light mb-12">
          体系的なカリキュラムで、着実にスキルアップ
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
            >
              <div className="mb-4">
                <span className="text-sm font-bold text-primary">
                  {week.week}
                </span>
                <h3 className="heading-sm text-text">{week.title}</h3>
              </div>
              <ul className="space-y-2">
                {week.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-text-light"
                  >
                    <span className="text-accent mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-text-light mt-8">
          毎週、実務で使える内容をお届けします。
        </p>
      </div>
    </section>
  );
}
