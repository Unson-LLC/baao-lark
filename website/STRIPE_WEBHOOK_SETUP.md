# Stripe Webhook セットアップガイド

## 📧 Stripe Webhookとは

Stripeで無料トライアルを開始した顧客に、自動的にウェルカムメールを送信する機能です。

---

## 🚀 セットアップ手順

### 1. Stripe Secret APIキーを取得

1. [Stripe Dashboard](https://dashboard.stripe.com/apikeys) にアクセス
2. 「Developers」→「API keys」をクリック
3. 「Secret key」をコピー（`sk_live_...` または `sk_test_...`）

### 2. Webhookエンドポイントを作成

1. [Stripe Webhooks](https://dashboard.stripe.com/webhooks) にアクセス
2. 「Add endpoint」をクリック
3. エンドポイントURLを入力：
   ```
   https://dojo.baao.or.jp/api/stripe-webhook
   ```
4. 「Select events」で以下のイベントを選択：
   - `checkout.session.completed`
5. 「Add endpoint」をクリック

### 3. Webhook Signing Secretを取得

作成したWebhookエンドポイントのページで：
1. 「Signing secret」セクションを見つける
2. 「Reveal」をクリックしてシークレットをコピー（`whsec_...`）

### 4. 環境変数を設定

#### ローカル環境（`.env.local`）

```bash
STRIPE_SECRET_KEY=sk_live_your_actual_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_actual_webhook_secret
```

#### 本番環境（Vercel）

```bash
# Vercel CLIで追加
VERCEL_TOKEN=your_token vercel env add STRIPE_SECRET_KEY production
# 値を入力: sk_live_your_actual_secret_key

VERCEL_TOKEN=your_token vercel env add STRIPE_WEBHOOK_SECRET production
# 値を入力: whsec_your_actual_webhook_secret
```

または、Vercelダッシュボードから：
- https://vercel.com/unson/baao-dojo-lp/settings/environment-variables

### 5. デプロイ

環境変数を設定したら、再デプロイが必要です：

```bash
VERCEL_TOKEN=your_token vercel --prod
```

---

## ✅ 動作確認

### 1. テスト決済を実行

1. `https://dojo.baao.or.jp` にアクセス
2. 「今すぐ参加」ボタンをクリック
3. Stripeのテストカード番号を使用：
   - カード番号: `4242 4242 4242 4242`
   - 有効期限: 任意の未来の日付
   - CVC: 任意の3桁
   - メールアドレス: 実際に受信できるメールアドレス

### 2. Webhook配信を確認

1. [Stripe Webhooks](https://dashboard.stripe.com/webhooks) にアクセス
2. 作成したエンドポイントをクリック
3. 「Events」タブで `checkout.session.completed` イベントが配信されていることを確認
4. ステータスが「Succeeded」であることを確認

### 3. メール受信を確認

登録したメールアドレスにウェルカムメールが届いていることを確認

---

## 🔧 トラブルシューティング

### エラー: `Webhook signature verification failed`

**原因**: Webhook Signing Secretが正しく設定されていません

**解決策**:
1. Stripeダッシュボードで正しいシークレットをコピー
2. `.env.local` および Vercel環境変数を更新
3. 開発サーバーまたはVercelを再起動

### Webhookイベントが届かない

**確認事項**:
1. Webhookエンドポイントが正しく設定されているか
   - URL: `https://dojo.baao.or.jp/api/stripe-webhook`
   - イベント: `checkout.session.completed`
2. Vercelにデプロイされているか
3. ファイアウォールやセキュリティ設定でブロックされていないか

### メールが送信されない

**確認事項**:
1. `RESEND_API_KEY` が正しく設定されているか
2. `RESEND_FROM_EMAIL` が認証済みドメインか
3. Vercelのログでエラーを確認：
   ```bash
   VERCEL_TOKEN=your_token vercel logs https://dojo.baao.or.jp --follow
   ```

---

## 📨 送信されるメール内容

無料トライアル開始時に、以下の内容のメールが送信されます：

**件名**: 【BAAO実戦AI道場】ご登録ありがとうございます！

**内容**:
- ウェルカムメッセージ
- 7日間無料トライアルの説明
- 利用可能な特典リスト
- 次のステップ（Lark招待、ライブスケジュール、プロンプト集）
- 解約方法の案内

---

## 🔐 本番環境への移行

テスト環境（`sk_test_...`）で動作確認後、本番環境に移行：

1. Stripe ダッシュボードで本番モード（Live mode）に切り替え
2. 本番用のSecret APIキーを取得
3. 本番用のWebhookエンドポイントを作成
4. Vercel環境変数を本番キーに更新

---

## 📚 参考リンク

- [Stripe Webhooks ドキュメント](https://stripe.com/docs/webhooks)
- [Stripe API Keys](https://dashboard.stripe.com/apikeys)
- [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
