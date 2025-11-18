"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

const toFormspreeAction = (value?: string) => {
  if (!value) return null;
  return value.startsWith("http") ? value : `https://formspree.io/f/${value}`;
};

const formspreeActions = {
  freeLive: toFormspreeAction(process.env.NEXT_PUBLIC_FORMSPREE_FREE_LIVE),
  corporate: toFormspreeAction(
    process.env.NEXT_PUBLIC_FORMSPREE_CORPORATE ??
      process.env.NEXT_PUBLIC_FORMSPREE_ENTERPRISE
  ),
  monthly: toFormspreeAction(
    process.env.NEXT_PUBLIC_FORMSPREE_MONTHLY ??
      process.env.NEXT_PUBLIC_FORMSPREE_BASIC
  ),
  fellow: toFormspreeAction(process.env.NEXT_PUBLIC_FORMSPREE_FELLOW),
  project: toFormspreeAction(
    process.env.NEXT_PUBLIC_FORMSPREE_PROJECT ??
      process.env.NEXT_PUBLIC_FORMSPREE_FELLOW_ASSIGN
  ),
  media: toFormspreeAction(process.env.NEXT_PUBLIC_FORMSPREE_MEDIA),
};

function MissingFormNotice({ contact }: { contact?: string }) {
  return (
    <p className="rounded-xl border border-[#D8CFC3] bg-[#F9F6F0] px-4 py-3 text-sm text-[#4B4135]">
      フォームは準備中です。お急ぎの方は {contact ?? "media@baao.or.jp"} までご連絡ください。
    </p>
  );
}

type FormKey =
  | "freeLive"
  | "corporate"
  | "monthly"
  | "fellow"
  | "project"
  | "media";

type FormDefinition = {
  key: FormKey;
  label: string;
  anchor: string;
  heading: string;
  description: ReactNode;
  renderForm: (action: string | null, headingId: string) => ReactNode;
};

const formDefinitions: FormDefinition[] = [
  {
    key: "freeLive",
    label: "無料稽古",
    anchor: "#free-live",
    heading: "無料稽古ライブ登録",
    description: (
      <p className="text-sm text-[#4B4135]">
        週次ライブの視聴URLとリマインドをお送りします。興味のある流派や参加目的を教えてください。
      </p>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            お名前
            <input
              type="text"
              name="name"
              autoComplete="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            所属（会社名・部門）
            <input
              type="text"
              name="organization"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）BAAO株式会社 DX推進部"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            参加の目的
            <select
              name="purpose"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="latest-insights">最新情報の収集</option>
              <option value="internal-rollout">社内展開の準備</option>
              <option value="career">キャリア形成</option>
              <option value="other">その他</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            興味のある流派（複数選択可）
            <select
              name="interest"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="manufacturing">製造</option>
              <option value="healthcare">医療</option>
              <option value="public">公共</option>
              <option value="finance">金融</option>
              <option value="retail">小売・CX</option>
              <option value="media">メディア・IP</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            Mission（目指す勝ち筋）
            <select
              name="mission"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="cost-down">Cost-Down</option>
              <option value="speed-up">Speed-Up</option>
              <option value="quality-up">Quality-Up</option>
              <option value="growth-up">Growth-Up</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            現在の課題・相談したい内容
            <textarea
              name="message"
              rows={4}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）自部署のPoCが前進しない／生成AIを業務に組み込みたい など"
              required
            />
          </label>
          <label className="flex items-start gap-2 text-sm text-[#4B4135] md:col-span-2">
            <input
              type="checkbox"
              name="open_chat_consent"
              aria-label="オープンチャット規約への同意"
              className="mt-1 h-4 w-4 rounded border-[#D8CFC3] text-[#2F4C6E] focus:ring-[#2F4C6E]"
              required
            />
            <span>
              オープンチャット規約への同意
              <span className="block text-xs text-[#6B5D4F]">
                無料稽古終了後にご案内するLINEオープンチャットでの情報共有に同意します。
              </span>
            </span>
          </label>
          <label className="flex items-start gap-2 text-sm text-[#4B4135] md:col-span-2">
            <input
              type="checkbox"
              name="newsletter_opt_in"
              aria-label="ニュースレターを受け取る"
              className="mt-1 h-4 w-4 rounded border-[#D8CFC3] text-[#2F4C6E] focus:ring-[#2F4C6E]"
            />
            <span>ニュースレターを受け取る</span>
          </label>
          <input type="hidden" name="_subject" value="無料稽古ライブ登録" />
          <input type="hidden" name="origin" value="join_free_live" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
          >
            登録する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
  {
    key: "corporate",
    label: "企業相談",
    anchor: "#enterprise",
    heading: "企業向け相談（PRIME / BOOST）",
    description: (
      <div className="space-y-3 text-sm text-[#4B4135]">
        <p>Field Director が24時間以内に担当宣言し、四半期で成果を証明するロードマップをご提案します。</p>
        <div>
          <p className="font-semibold text-[#1D1A15]">送信前にご準備いただきたいもの</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>四半期で追いたいKPI（例：リードタイム、売上、コスト削減額）</li>
            <li>対象部署の規模と関係者（役職・人数）</li>
            <li>利用しているシステム／データの概要（分かる範囲で可）</li>
          </ul>
        </div>
        <p className="text-xs text-[#4B4135]">返金保証付きの伴走でリスクはゼロ。ご相談だけでも歓迎です。</p>
      </div>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            会社名
            <input
              type="text"
              name="company"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            部署・役職
            <input
              type="text"
              name="department"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            氏名
            <input
              type="text"
              name="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            電話番号
            <input
              type="tel"
              name="phone"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）03-1234-5678"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            Field（業界）
            <select
              name="field"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="healthcare">医療</option>
              <option value="manufacturing">製造</option>
              <option value="finance">金融</option>
              <option value="public">公共</option>
              <option value="retail">小売・CX</option>
              <option value="media">メディア・IP</option>
              <option value="other">その他</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            Mission（勝ち筋）
            <select
              name="mission"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="cost-down">Cost-Down</option>
              <option value="speed-up">Speed-Up</option>
              <option value="quality-up">Quality-Up</option>
              <option value="growth-up">Growth-Up</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            Practice（型）
            <select
              name="practice"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="genai-apps">GenAI Apps</option>
              <option value="data-integration">Data &amp; Integration</option>
              <option value="ops-automation">Ops Automation</option>
              <option value="safety-legal">Safety &amp; Legal</option>
              <option value="change-enablement">Change &amp; Enablement</option>
              <option value="design-writing">Design &amp; DX Writing</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            希望プログラム
            <select
              name="program"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="prime">PRIME</option>
              <option value="boost">BOOST</option>
              <option value="consult">CONSULT</option>
              <option value="undecided">未定</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            希望時期
            <select
              name="timeline"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="within-3months">3ヶ月以内</option>
              <option value="within-6months">半年以内</option>
              <option value="undecided">未定</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            守秘レベル
            <select
              name="privacy"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="public">公開可</option>
              <option value="anonymous">匿名なら公開可</option>
              <option value="confidential">非公開</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            予算レンジ（任意）
            <select
              name="budget"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="lt-1m">〜100万円</option>
              <option value="1-3m">100〜300万円</option>
              <option value="3-5m">300〜500万円</option>
              <option value="gt-5m">500万円以上</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            KPI / 目指す成果
            <textarea
              name="kpi"
              rows={3}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）リードタイムP95を50%短縮／営業一人あたり売上＋20% など"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            相談したい内容
            <textarea
              name="message"
              rows={4}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="現状の課題や関係者、社内の背景を記入してください。"
              required
            />
          </label>
          <input type="hidden" name="_subject" value="企業向け相談 (PRIME/BOOST)" />
          <input type="hidden" name="origin" value="join_enterprise" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
          >
            相談を送信する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
  {
    key: "monthly",
    label: "月謝プラン",
    anchor: "#basic",
    heading: "月謝プラン（BASIC / ACTIVE）への問い合わせ",
    description: (
      <div className="space-y-3 text-sm text-[#4B4135]">
        <p>
          Stripe 決済・Lark 招待は通常 1 営業日以内に発行します。導入背景や希望する開始時期を記入いただくと、最適なプランを Field Director
          がおすすめします。
        </p>
      </div>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            氏名
            <input
              type="text"
              name="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            所属（会社名・部署）
            <input
              type="text"
              name="organization"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）DX推進部 3名で受講予定"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            受講目的
            <select
              name="purpose"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="latest">最新情報のキャッチアップ</option>
              <option value="efficiency">業務効率化</option>
              <option value="internal">社内展開・研修</option>
              <option value="career">キャリア開発</option>
              <option value="other">その他</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            検討しているプラン
            <select
              name="plan"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="basic">BASIC</option>
              <option value="active">ACTIVE</option>
              <option value="undecided">未定</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            希望開始時期
            <input
              type="month"
              name="start_month"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            決済方法
            <select
              name="payment_method"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="corporate">法人請求書払い</option>
              <option value="personal">個人決済（クレカ）</option>
              <option value="undecided">未定</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            社内共有予定
            <select
              name="internal_sharing"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="yes">共有予定あり</option>
              <option value="no">共有予定なし</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            Lark / オープンチャット招待
            <select
              name="community_invite"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="allow">希望する</option>
              <option value="limit">一部メンバーのみ</option>
              <option value="no">不要</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            利用想定（部署・人数など）
            <input
              type="text"
              name="team_info"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）営業部 15名／DX推進チーム 3名"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            ご質問・期待している伴走内容
            <textarea
              name="message"
              rows={4}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="活用アイデアや社内展開の課題など、自由に記入ください。"
            />
          </label>
          <input type="hidden" name="_subject" value="月謝プラン問い合わせ" />
          <input type="hidden" name="origin" value="join_monthly" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
          >
            問い合わせを送信する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
  {
    key: "fellow",
    label: "Fellow応募",
    anchor: "#fellow",
    heading: "Fellow応募",
    description: (
      <div className="space-y-3 text-sm text-[#4B4135]">
        <p>専門領域や参画の動機を記入してください。Impact Points・グレードに応じた参画プランをご案内します。</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>応募後 3 営業日以内に担当 Field Director が面談日程をご連絡します。</li>
          <li>面談時に Impact Points の仮付与、参画可能な案件や登壇枠をご提案します。</li>
          <li>合意後は Green Room / Lark へ招待し、最初の案件または登壇にアサインします。</li>
        </ul>
      </div>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            氏名
            <input
              type="text"
              name="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            専門領域（Field × Mission × Practice）
            <input
              type="text"
              name="speciality"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）製造 × Quality-Up × Vision AI"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            経歴・実績（リンク可）
            <textarea
              name="experience"
              rows={4}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            期待する関与（案件実装 / 監修 / 共著 / 登壇など）
            <textarea
              name="engagement"
              rows={3}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            期待するリターン
            <textarea
              name="expected_return"
              rows={2}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="報酬、ブランド露出、Impact Pointsなど"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            参画可能な時間帯
            <input
              type="text"
              name="availability"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）平日夜・土曜午前"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            参考URL / SNS
            <input
              type="url"
              name="portfolio"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="ポートフォリオやSNSなど"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            推薦者（任意）
            <input
              type="text"
              name="referrer"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="紹介者がいればご記入ください"
            />
          </label>
          <label className="flex items-start gap-2 text-sm text-[#4B4135] md:col-span-2">
            <input
              type="checkbox"
              name="policy_consent"
              className="mt-1 h-4 w-4 rounded border-[#D8CFC3] text-[#2F4C6E] focus:ring-[#2F4C6E]"
              required
            />
            <span>
              Green Room / 守秘ポリシーへの同意
              <span className="block text-xs text-[#6B5D4F]">
                コミュニティ内の情報と案件内容を外部に持ち出さないことに同意します。
              </span>
            </span>
          </label>
          <input type="hidden" name="_subject" value="Fellow応募" />
          <input type="hidden" name="origin" value="join_fellow" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
          >
            応募する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
  {
    key: "project",
    label: "案件相談",
    anchor: "#fellow-assign",
    heading: "案件相談（既存Fellow向け）",
    description: (
      <p className="text-sm text-[#4B4135]">
        既にFellowの方が案件に参画したい場合はこちらからご連絡ください。Larkでの連絡と併用可能で、24時間以内に Field Director が稼働可否をご返信します。
      </p>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            氏名
            <input
              type="text"
              name="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            Appointment#
            <input
              type="text"
              name="appointment"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）FW-2025-010"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            Fellow Grade
            <input
              type="text"
              name="grade"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）Senior Fellow / Field Works"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            希望する役割
            <select
              name="role"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="implementation">実務担当</option>
              <option value="supervision">監修</option>
              <option value="co-author">共著</option>
              <option value="speaker">登壇</option>
              <option value="advisor">アドバイザー</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            希望する案件・Field × Mission × Practice
            <textarea
              name="areas"
              rows={3}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）公共 × Change & Enablement：自治体PoC支援"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            稼働可能な時期
            <input
              type="text"
              name="availability"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）来月から稼働可（週10h）"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            補足（稼働可能な時間帯・希望条件など）
            <textarea
              name="message"
              rows={3}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
            />
          </label>
          <input type="hidden" name="_subject" value="Fellow案件相談" />
          <input type="hidden" name="origin" value="join_fellow_assign" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
          >
            案件相談を送る
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
  {
    key: "media",
    label: "メディア",
    anchor: "#media",
    heading: "メディア・協業のご相談",
    description: (
      <p className="text-sm text-[#4B4135]">
        取材テーマや希望出演者、公開予定日などをご記入ください。広報チームと Field Director が対応します。
      </p>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            氏名
            <input
              type="text"
              name="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            媒体名 / 企業名
            <input
              type="text"
              name="company"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            希望出演者
            <input
              type="text"
              name="speaker"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="例）Field Director 山本、Senior Fellow 吉見 など"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            企画概要・取材テーマ
            <textarea
              name="message"
              rows={4}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            公開予定日
            <input
              type="date"
              name="publish_date"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            電話番号
            <input
              type="tel"
              name="phone"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-[#2F4C6E] focus:outline-none focus:ring-2 focus:ring-[#2F4C6E]/20"
              placeholder="取材当日のご連絡先"
              required
            />
          </label>
          <input type="hidden" name="_subject" value="メディア取材・協業のご相談" />
          <input type="hidden" name="origin" value="join_media" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#2F4C6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4E6E92]"
          >
            送信する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
];

const hashToKey: Record<string, FormKey> = {
  "#free-live": "freeLive",
  "#enterprise": "corporate",
  "#basic": "monthly",
  "#fellow": "fellow",
  "#fellow-assign": "project",
  "#media": "media",
};

const anchorByKey = formDefinitions.reduce<Record<FormKey, string>>((acc, def) => {
  acc[def.key] = def.anchor;
  return acc;
}, {
  freeLive: "#free-live",
  corporate: "#enterprise",
  monthly: "#basic",
  fellow: "#fellow",
  project: "#fellow-assign",
  media: "#media",
});

export default function JoinPage() {
  const [activeKey, setActiveKey] = useState<FormKey>("freeLive");
  const tabRefs = useRef<Record<FormKey, HTMLButtonElement | null>>({
    freeLive: null,
    corporate: null,
    monthly: null,
    fellow: null,
    project: null,
    media: null,
  });
  const panelId = "join-tab-panel";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initialKey = hashToKey[window.location.hash] ?? "freeLive";
    setActiveKey(initialKey);
    const handleHashChange = () => {
      setActiveKey(hashToKey[window.location.hash] ?? "freeLive");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeDefinition = useMemo(
    () => formDefinitions.find((def) => def.key === activeKey) ?? formDefinitions[0],
    [activeKey]
  );

  const focusTab = (key: FormKey) => {
    const target = tabRefs.current[key];
    target?.focus();
  };

  const scrollPanelIntoView = () => {
    if (typeof document === "undefined") return;
    const panel = document.getElementById(panelId);
    if (panel && typeof panel.scrollIntoView === "function") {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const selectTab = (key: FormKey, { scroll = true }: { scroll?: boolean } = {}) => {
    setActiveKey(key);
    if (typeof window !== "undefined") {
      const anchor = anchorByKey[key] ?? "";
      const target = anchor ? `/join${anchor}` : "/join";
      try {
        window.history.replaceState(null, "", target);
      } catch {
        // ignore history errors in non-browser environments
      }
      if (scroll) {
        scrollPanelIntoView();
      }
    }
  };

  const handleSelect = (key: FormKey, options?: { scroll?: boolean }) => {
    selectTab(key, options);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const navigableKeys = formDefinitions.map((def) => def.key) as FormKey[];
    const { key } = event;
    if (!(["ArrowRight", "ArrowLeft", "Home", "End"].includes(key))) {
      return;
    }

    event.preventDefault();

    const activeElement = (typeof document !== "undefined"
      ? document.activeElement
      : null) as HTMLButtonElement | null;

    let currentIndex = navigableKeys.findIndex(
      (formKey) => tabRefs.current[formKey] === activeElement
    );

    if (currentIndex === -1) {
      currentIndex = navigableKeys.findIndex((formKey) => formKey === activeKey);
    }

    if (currentIndex === -1) {
      currentIndex = 0;
    }

    let nextIndex = currentIndex;
    if (key === "Home") {
      nextIndex = 0;
    } else if (key === "End") {
      nextIndex = navigableKeys.length - 1;
    } else if (key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % navigableKeys.length;
    } else if (key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + navigableKeys.length) % navigableKeys.length;
    }

    const nextKey = navigableKeys[nextIndex];
    focusTab(nextKey);
    selectTab(nextKey, { scroll: false });
  };

  const activeTabId = `join-tab-${activeDefinition.key}`;
  const activeAnchorId = activeDefinition.anchor.replace("#", "");
  const headingId = `${activeDefinition.key}-heading`;

  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <header className="mb-10">
          <h1 className="font-serif text-4xl">Join & Contact</h1>
          <p className="mt-4 text-[#4B4135]">
            BAAO 実戦AI道場への参加・相談窓口です。無料稽古の登録から、企業向け伴走相談、Fellow 応募、メディア取材までこちらで受け付けています。送信後は担当よりメールまたはLarkでご連絡します。
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2F4C6E]" />
              <span>無料稽古：登録直後に自動返信メール＋LINEオープンチャット案内をお送りします。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2F4C6E]" />
              <span>企業向け相談：24時間以内に Field Director が担当宣言。3営業日以内にヒアリング日程をご案内します。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2F4C6E]" />
              <span>Fellow応募：3営業日以内に面談調整の連絡。Impact Points 仮付与とコミュニティガイドを共有します。</span>
            </li>
          </ul>
        </header>

        <nav
          role="tablist"
          aria-label="お問い合わせの種類"
          aria-orientation="horizontal"
          onKeyDown={handleKeyDown}
          className="flex flex-wrap gap-3 rounded-3xl border border-[#D8CFC3] bg-white p-4 shadow-sm"
        >
          {formDefinitions.map((tab) => {
            const selected = tab.key === activeKey;
            const tabId = `join-tab-${tab.key}`;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                id={tabId}
                ref={(element) => {
                  tabRefs.current[tab.key] = element;
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "bg-[#2F4C6E] text-white shadow"
                    : "bg-[#F9F6F0] text-[#2F4C6E] hover:bg-[#2F4C6E]/10"
                }`}
                onClick={() => handleSelect(tab.key)}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div id={activeAnchorId} aria-hidden className="h-0" />
        <section
          id={panelId}
          role="tabpanel"
          aria-labelledby={activeTabId}
          className="mt-8 space-y-6 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
        >
          <h2 id={headingId} className="text-2xl font-semibold">
            {activeDefinition.heading}
          </h2>
          <div className="space-y-3">{activeDefinition.description}</div>
          <div className="space-y-4">
            {activeDefinition.renderForm(
              formspreeActions[activeDefinition.key],
              headingId
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
