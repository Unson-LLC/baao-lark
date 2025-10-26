# Resend Audiences セットアップガイド

## 📧 Resend Audiencesとは

無料メール登録者を管理するためのメーリングリスト機能です。登録されたメールアドレスは自動的にAudienceに保存され、週次メール配信などに使用できます。

---

## 🚀 セットアップ手順

### 1. Resendダッシュボードにログイン

[https://resend.com/audiences](https://resend.com/audiences) にアクセス

### 2. 新しいAudienceを作成

1. 「Create Audience」ボタンをクリック
2. Audience名を入力（例：`BAAO Newsletter Subscribers`）
3. 「Create」をクリック

### 3. Audience IDを取得

作成したAudienceのページで、Audience IDをコピーします。

**取得方法**:
- URLから取得: `https://resend.com/audiences/95480074-acd2-469b-b2ca-c9e62d750521`
- または、Audience設定ページの「Audience ID」フィールドからコピー

例：`95480074-acd2-469b-b2ca-c9e62d750521` （UUID形式）

### 4. 環境変数に追加

#### ローカル環境（`.env.local`）

```bash
RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxx
```

#### 本番環境（Vercel）

```bash
# Vercel CLIで追加
VERCEL_TOKEN=your_token vercel env add RESEND_AUDIENCE_ID production

# または Vercelダッシュボード
https://vercel.com/unson/baao-dojo-lp/settings/environment-variables
```

---

## ✅ 動作確認

### 1. 開発サーバーを再起動

```bash
npm run dev
```

### 2. メール登録フォームをテスト

1. `http://localhost:3002#free-newsletter` にアクセス
2. メールアドレスを入力して「無料登録」をクリック
3. 成功メッセージが表示されることを確認

### 3. Resend Audiencesで確認

1. [Resend Audiences](https://resend.com/audiences) にアクセス
2. 作成したAudienceを開く
3. 登録したメールアドレスが「Contacts」リストに追加されていることを確認

---

## 📨 週次メール配信の方法

### オプション1: Resend Broadcasts（推奨）

Resendダッシュボードから手動で配信：

1. [Broadcasts](https://resend.com/broadcasts) にアクセス
2. 「Create Broadcast」をクリック
3. Audienceを選択
4. メール内容を作成
5. 「Send」をクリック

### オプション2: API経由で自動配信

Next.js API Routeを作成して定期配信：

```typescript
// app/api/send-weekly-newsletter/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.broadcasts.create({
    audienceId: process.env.RESEND_AUDIENCE_ID!,
    from: "BAAO実戦AI道場 <newsletter@dojo.baao.or.jp>",
    subject: "【週刊】BAAO AI Newsletter",
    html: "<h1>今週のAI動向</h1>...",
  });
}
```

Vercel Cronで毎週自動実行：

```json
// vercel.json
{
  "crons": [{
    "path": "/api/send-weekly-newsletter",
    "schedule": "0 9 * * 1" // 毎週月曜日 9:00 JST
  }]
}
```

---

## 🔧 トラブルシューティング

### エラー: `audienceId is required`

環境変数 `RESEND_AUDIENCE_ID` が設定されていません。

**解決策**:
1. `.env.local` にAudience IDを追加
2. 開発サーバーを再起動

### メールアドレスが保存されない

**確認事項**:
1. Resend APIキーが正しいか
2. Audience IDが正しいか
3. サーバーログにエラーが出ていないか

---

## 📚 参考リンク

- [Resend Audiences ドキュメント](https://resend.com/docs/dashboard/audiences/introduction)
- [Resend API リファレンス](https://resend.com/docs/api-reference/contacts/create-contact)
- [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs)
