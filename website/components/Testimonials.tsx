export default function Testimonials() {
  const testimonials = [
    {
      name: "M.Tさん",
      age: 38,
      role: "製造業のDX推進担当",
      content:
        "ChatGPT使ってたけど、イマイチだった。プロンプトのコツを学んだら、品質が劇的に改善。部内展開できました。",
    },
    {
      name: "K.Sさん",
      age: 45,
      role: "金融機関の企画部長",
      content:
        "YouTube見ても断片的で困ってました。週30分のライブで体系的に学べて、1枚サマリを社内展開したら好評でした。",
    },
    {
      name: "H.Yさん",
      age: 32,
      role: "小売業のマーケター",
      content:
        "業界別の活用事例が参考になりました。自社のECサイトに応用したら、CVRが15%向上。上司に褒められました。",
    },
  ];

  return (
    <section className="section bg-background-light">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">参加者の声</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="mb-4">
                <p className="font-bold text-text">
                  {testimonial.name}（{testimonial.age}歳）
                </p>
                <p className="text-sm text-text-light">{testimonial.role}</p>
              </div>
              <p className="text-text-light italic">
                「{testimonial.content}」
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-text-light">
          ※準備中・2025 Q4以降順次公開予定
        </p>
      </div>
    </section>
  );
}
