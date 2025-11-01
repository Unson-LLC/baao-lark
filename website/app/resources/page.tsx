const events = [
  {
    title: "Weekly Dojo Live｜木曜夜 無料稽古",
    date: "毎週木曜 19:00-19:45",
    location: "オンライン（Zoom）",
    description:
      "最新ケースの実況、Q&A、オープンチャット案内までを一気に体験できる無料稽古。申込みでリマインドと資料を送付します。",
    cta: { label: "無料稽古に登録", href: "/join#free-live" }
  },
  {
    title: "AI Create Workshop｜現場バイブコーディング",
    date: "2024年12月6日（金） 19:00-21:00",
    location: "BAAO Lab（東京都内） + オンライン配信",
    description:
      "10月開催の好評イベントをアップデート。Field Director と Senior Fellow がチーム制で Vibe Coding を実演し、Impact Points の加点も実施します。",
    cta: { label: "参加希望を送る", href: "/join#enterprise" }
  },
  {
    title: "現場見学ツアー｜Field Director 同行",
    date: "隔月開催（次回 2025年1月予定）",
    location: "製造・医療現場ほか",
    description:
      "BOOST案件の現場を少人数で見学。守秘レベルに応じて誓約書を結び、実際のBefore/After資料を閲覧できます。",
    cta: { label: "空き状況を問い合わせ", href: "/join#enterprise" }
  }
];

const downloads = [
  {
    title: "FieldWorksガイド（Preview）",
    status: "準備中：12月上旬リリース",
    description: "流派 × 勝ち筋 × 型 のマトリクスと導入プロセスをまとめたPDF。稟議資料のテンプレート付き。",
    cta: { label: "公開時に通知を受け取る", href: "/join#free-live" }
  },
  {
    title: "プログラム比較表（BASIC / ACTIVE / PRIME / BOOST）",
    status: "最新版：2024 Q4",
    description: "各プランの提供内容・月謝・SLA・推奨ペルソナを1枚で比較。社内共有用に利用できます。",
    cta: { label: "資料DLリンクを受け取る", href: "/join#enterprise" }
  },
  {
    title: "Yearbook 2024 Preview",
    status: "会員・メディア向け先行版",
    description: "公開予定のケースサマリ、Impact Points ランキング、Council論考のダイジェスト。",
    cta: { label: "メディア窓口へ連絡", href: "/join#media" }
  }
];

const articles = [
  {
    title: "流派別ロードマップ：製造 × Quality-Up 編",
    status: "近日公開",
    summary: "検査AIプロジェクトのBefore/After、必要データと監修体制を現場視点で解説します。"
  },
  {
    title: "FREE → 月謝 → BOOST で成果を出すレバー",
    status: "執筆中",
    summary: "アンケートで得られた課題をもとに、稽古ノートとSlackコミュニティの活用法を紹介します。"
  },
  {
    title: "Fellow Impact Points 運用レポート（2024 Q3）",
    status: "公開中（会員限定）",
    summary: "Fellowの行動データと昇格事例をまとめた内部レポート。無料版はニュースレターで抜粋配信します。"
  }
];

const faqs = [
  {
    question: "無料稽古のアーカイブはどこで視聴できますか？",
    answer:
      "アーカイブは月謝プラン（BASIC以上）のメンバーに限定公開しています。無料稽古参加後のメールで案内する Slack 招待からアクセスしてください。"
  },
  {
    question: "イベント参加にあたって守秘義務はありますか？",
    answer:
      "現場見学やBOOST案件報告会に参加する際は、守秘レベル2以上の資料を扱うため、個別にNDAを締結いただきます。オンライン無料稽古は不要です。"
  },
  {
    question: "資料ダウンロード後はどんなフォローがありますか？",
    answer:
      "24時間以内に Field Director から導入事例の追加資料と相談CTAをメールでお送りします。不要な場合はメール内から停止できます。"
  },
  {
    question: "ニュースレターの配信頻度は？",
    answer: "月2回（前半：最新ケース／後半：イベント案内）を基本とし、重要トピックがある場合のみ臨時配信します。"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">Resources</span>
          <h1 className="font-serif text-4xl">イベント・資料・FAQ</h1>
          <p className="text-[#4B4135]">
            無料稽古のリマインドから現場見学の申込み、稟議用資料まで、道場に関する情報をここに集約しています。公開済みコンテンツは順次 CMS と連動予定です。
          </p>
        </header>

        <section id="events" className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Events & Visits</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            参加後はアンケートを通じて Impact Points や次のステップを提案。空席状況は Slack / メールで随時更新します。
          </p>
          <div className="mt-6 space-y-6">
            {events.map((event) => (
              <article key={event.title} className="rounded-2xl bg-[#F9F6F0] p-5 text-sm text-[#4B4135]">
                <h3 className="font-serif text-xl text-[#1D1A15]">{event.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">
                  {event.date}｜{event.location}
                </p>
                <p className="mt-2 leading-relaxed">{event.description}</p>
                <a
                  href={event.cta.href}
                  className="mt-3 inline-flex items-center rounded-full bg-[#2F4C6E] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#4E6E92]"
                >
                  {event.cta.label}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="downloads" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Downloads</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            資料は Formspree 経由でお申し込みいただくと、メールでダウンロードリンクをお届けします。公開前の資料は先行通知リストへ登録ください。
          </p>
          <div className="mt-6 space-y-6">
            {downloads.map((item) => (
              <article key={item.title} className="rounded-2xl bg-[#F9F6F0] p-5 text-sm text-[#4B4135]">
                <h3 className="font-serif text-xl text-[#1D1A15]">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{item.status}</p>
                <p className="mt-2 leading-relaxed">{item.description}</p>
                <a
                  href={item.cta.href}
                  className="mt-3 inline-flex items-center rounded-full border border-[#2F4C6E] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E] transition hover:bg-[#2F4C6E] hover:text-white"
                >
                  {item.cta.label}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Blog / Column</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            コミュニティで蓄積した稽古ノートやField Directorの論考を順次公開します。公開済み記事はニュースレターでも要約を配信します。
          </p>
          <div className="mt-6 space-y-4 text-sm text-[#4B4135]">
            {articles.map((article) => (
              <div key={article.title} className="rounded-2xl bg-[#F9F6F0] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">{article.status}</p>
                <h3 className="mt-1 font-serif text-xl text-[#1D1A15]">{article.title}</h3>
                <p className="mt-2 leading-relaxed">{article.summary}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#4B4135]">
            記事公開時には X（@baao_ai_dojo）とニュースレターで通知します。アーカイブは BASIC / ACTIVE のメンバー専用エリアでも閲覧可能です。
          </p>
        </section>

        <section id="faq" className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">FAQ</h2>
          <div className="mt-4 space-y-4 text-sm text-[#4B4135]">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl bg-[#F9F6F0] p-4">
                <summary className="cursor-pointer font-semibold text-[#1D1A15]">{faq.question}</summary>
                <p className="mt-2 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#4B4135]">
            その他の質問は <a href="/join#media" className="text-[#2F4C6E] underline">/join#media</a> もしくは Slack 内の #support チャンネルで受け付けます。
          </p>
        </section>

        <section id="newsletter" className="mt-12 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-[#FDFBF7] p-6">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Newsletter</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            月2回のニュースレターでは、最新ケースの要約・イベント案内・Fellow募集状況をお届けします。無料稽古に登録済みの方は自動で購読対象となります。個別登録をご希望の場合は下記からメールアドレスをお知らせください。
          </p>
          <a
            href="mailto:info@baao.or.jp?subject=AI%E9%81%93%E5%A0%B4%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%AC%E3%82%BF%E3%83%BC%E7%99%BB%E9%8C%B2&body=%E4%B8%8B%E8%A8%98%E6%83%85%E5%A0%B1%E3%81%AE%E3%81%94%E8%A8%98%E5%85%A5%E3%82%92%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%0A%E3%83%BB%E3%81%8A%E5%90%8D%E5%89%8D%0A%E3%83%BB%E3%81%94%E5%B1%9E%E6%80%A7%EF%BC%88%E4%BC%81%E6%A5%AD%E3%83%BB%E5%80%8B%E4%BA%BA%E3%83%BBFellow%E3%83%BB%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%EF%BC%89%0A%E3%83%BB%E5%85%B7%E4%BD%93%E7%9A%84%E3%81%AB%E7%9B%AE%E6%8C%87%E3%81%99%E9%A0%85%E7%9B%AE%0A"
            className="mt-4 inline-flex items-center rounded-full bg-[#C47E3B] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#a96830]"
          >
            ニュースレター登録を依頼
          </a>
        </section>
      </div>
    </main>
  );
}
