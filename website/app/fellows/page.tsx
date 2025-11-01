import Link from "next/link";
import Image from "next/image";
import { fellows } from "@/data/fellows";

const gradeOrder = [
  "Field Director",
  "Senior Fellow",
  "Fellow III",
  "Fellow II",
  "Fellow I",
] as const;

const gradeDescriptions: Record<(typeof gradeOrder)[number], string> = {
  "Field Director": "案件全体の品質とKPIを担保し、Fellowの評価・アサインを統括します。",
  "Senior Fellow": "専門領域の監修とRECIPES共著、Green Roomでの決議を担当。",
  "Fellow III": "専門領域のリードと案件監修。指名制で門下生を育成します。",
  "Fellow II": "案件実装と共著、現場ワークショップをリードします。",
  "Fellow I": "得意領域での実装サポート。Impact Points を積み上げ次の昇格を目指します。",
};

const grouped = gradeOrder
  .map((grade) => ({
    grade,
    members: fellows.filter((profile) => profile.grade === grade),
  }))
  .filter((group) => group.members.length > 0);

const leaderboard = [...fellows]
  .sort((a, b) => b.impactPoints - a.impactPoints)
  .slice(0, 3);

export default function FellowsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section className="mb-12 rounded-3xl border border-[#D8CFC3] bg-white/90 p-8 shadow-sm">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
              For Fellows & Field Directors
            </span>
            <h1 className="font-serif text-4xl leading-tight text-[#1D1A15] sm:text-5xl">
              専門性で社会に影響を与える。Appointment# と Impact Points で評価される師範の道。
            </h1>
          <p className="text-lg leading-relaxed text-[#4B4135]">
            無料稽古で登壇し、月謝で門下生を導き、案件では Field Director / Senior Fellow と共に成果を公開する。
            Impact Points や Green Room、72時間先行閲覧などの特権で、専門家としてのブランドと報酬を両立させます。案件報酬はDelegatedで55%を還元し、共著や登壇ごとにImpact Pointsが加算されます。
          </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/join#fellow"
                className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
              >
                Fellowに応募する
              </Link>
              <Link
                href="/join#fellow-assign"
                className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
              >
                案件アサインを相談
              </Link>
              <Link
                href="/resources#events"
                className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 font-semibold text-[#C47E3B] transition hover:bg-[#C47E3B]/10"
              >
                説明会の日程を見る
              </Link>
            </div>
          </div>
        </section>

        <header className="mb-12 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
            Fellows Directory
          </span>
          <h1 className="font-serif text-4xl">師範・Senior Fellow の紹介</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#4B4135]">
            Field Director / Senior Fellow / Fellow は、Impact Points と Appointment# に基づいて任命されます。流派（Field）× 勝ち筋（Mission）× 型（Practice）の軸で専門領域を明示し、案件での役割や代表成果、共著実績をオープンに共有します。
          </p>
          <p className="text-sm text-[#4B4135]">
            このディレクトリは公開可能な師範のみ掲載しています。案件の詳細や登壇依頼は <a href="/join#media" className="text-[#2F4C6E] underline">/join#media</a> からご相談ください。
          </p>
        </header>

        <section className="mb-12 rounded-3xl border border-[#D8CFC3] bg-white/90 p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Impact Points リーダーボード</h2>
          <p className="mt-2 text-sm text-[#4B4135]">
            四半期ごとに更新されるランキング。上位メンバーは Green Room や Yearbook での露出、次期案件の指名、報酬レンジの優遇を受けられます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {leaderboard.map((member, index) => (
              <article
                key={member.id}
                className="flex h-full flex-col gap-3 rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">#{index + 1}</span>
                  <p className="font-serif text-xl text-[#1D1A15]">{member.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-[#D8CFC3]">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#2F4C6E]">{member.grade}</p>
                    <p className="text-sm text-[#4B4135]">{member.title}</p>
                  </div>
                </div>
                <p className="text-sm text-[#4B4135]">{member.impactFocus}</p>
                <p className="text-xs font-semibold text-[#2F4C6E]">Impact Points：{member.impactPoints}</p>
                <Link
                  href={`#${member.grade.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs font-semibold text-[#2F4C6E] underline"
                >
                  セクションへ移動
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-4 rounded-3xl border border-[#D8CFC3] bg-white/70 p-6 text-sm text-[#4B4135] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">流派（Field）</p>
            <p className="mt-1">製造 / 医療 / 公共 / 金融 / 小売・CX / メディア・IP</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">勝ち筋（Mission）</p>
            <p className="mt-1">Cost-Down / Speed-Up / Quality-Up / Growth-Up</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">型（Practice）</p>
            <p className="mt-1">GenAI Apps / Data & Integration / Ops Automation / Change & Enablement / Design & DX Writing</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">Impact Points</p>
            <p className="mt-1">登壇・案件監修・共著などの貢献行動をスコア化し、昇格と報酬に反映します。</p>
          </div>
        </section>

        <div className="space-y-16">
          {grouped.map(({ grade, members }) => (
            <section key={grade} id={grade.toLowerCase().replace(/\s+/g, "-")}>
              <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">{grade}</span>
                  <h2 className="font-serif text-3xl text-[#1D1A15]">{grade === "Fellow I" ? "Fellow" : grade} のメンバー</h2>
                </div>
                <p className="max-w-xl text-sm text-[#4B4135]">{gradeDescriptions[grade]}</p>
              </header>
              <div className="grid gap-6 md:grid-cols-2">
                {members.map((member) => (
                  <article
                    key={member.id}
                    className="flex h-full flex-col rounded-3xl border border-[#D8CFC3] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="h-16 w-16 overflow-hidden rounded-full border border-[#D8CFC3]">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#E8E1D7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">
                          {member.field}
                        </span>
                        <span className="rounded-full bg-[#F4E8D9] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#C47E3B]">
                          {member.mission}
                        </span>
                        <span className="rounded-full border border-[#2F4C6E] px-3 py-1 text-xs uppercase tracking-wide text-[#2F4C6E]">
                          {member.practice}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="font-serif text-2xl text-[#1D1A15]">{member.name}</h3>
                      <p className="text-xs font-semibold text-[#2F4C6E]">Impact Points：{member.impactPoints}</p>
                    </div>
                    <p className="text-sm text-[#4B4135]">{member.title}</p>
                    <p className="mt-2 text-sm font-semibold text-[#1D1A15]">{member.impactFocus}</p>
                    <p className="mt-2 text-sm text-[#4B4135] leading-relaxed">{member.bio}</p>
                    <p className="mt-3 text-xs uppercase tracking-wide text-[#2F4C6E]">{member.appointment}</p>
                    <ul className="mt-4 space-y-1 text-sm text-[#4B4135]">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C47E3B]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {member.materials && (
                      <div className="mt-4 space-y-2 rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4 text-sm text-[#4B4135]">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">公開資料・登壇</p>
                        <ul className="space-y-1">
                          {member.materials.map((material) => (
                            <li key={material.href}>
                              <a href={material.href} className="text-[#2F4C6E] underline" target="_blank" rel="noreferrer">
                                {material.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {member.interviewLink && (
                      <div className="mt-3 text-xs">
                        <Link href={member.interviewLink} className="font-semibold text-[#C47E3B] underline">
                          インタビュー記事を読む
                        </Link>
                      </div>
                    )}
                    {member.socials && (
                      <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E]">
                        {member.socials.map((social) => (
                          <a key={social.href} href={social.href} className="underline" target="_blank" rel="noreferrer">
                            {social.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-[#FDFBF7] p-6 text-sm text-[#4B4135]">
          <h2 className="font-serif text-2xl text-[#1D1A15]">Fellow / Senior Fellow を募集中</h2>
          <p className="mt-3">
            四半期で成果を出す案件に参画したい方は、<a href="/join#fellow" className="text-[#2F4C6E] underline">/join#fellow</a> から応募してください。Impact Points や Appointment# の仕組み、報酬レンジに関する個別説明会も随時開催しています。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/join#fellow"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#4E6E92]"
            >
              Fellow応募フォームへ
            </a>
            <a
              href="/resources#events"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#2F4C6E] transition hover:bg-[#2F4C6E] hover:text-white"
            >
              説明会の予定を見る
            </a>
            <a
              href="/join#media"
              className="inline-flex items-center rounded-full border border-[#C47E3B] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#C47E3B] transition hover:bg-[#C47E3B] hover:text-white"
            >
              取材・登壇を依頼する
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
