# BAAO 実戦AI道場 ランディングページ

BAAO実戦AI道場のBASIC会員向けLPです。

## ターゲット

**30-50代で、AIは触ったことがあるけど使いこなせていない人**

### ペルソナ
- ChatGPTは使ったことがある（無料版を数回試した）
- でも「これだ！」という手応えがない
- プロンプトの書き方がイマイチ分からない
- YouTube動画やブログは見るが、断片的で体系的に学べていない

## 技術スタック

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm build

# 本番サーバー起動
npm start
```

## デザインシステム

### カラーパレット

BAAO公式サイトのブランドカラーを踏襲：

- **Primary (青系)**: 信頼性・プロフェッショナルを表現
  - DEFAULT: `#1E40AF`
  - Light: `#3B82F6`
  - Dark: `#1E3A8A`

- **Accent (オレンジ系)**: 道場の和テイスト
  - DEFAULT: `#F59E0B`
  - Light: `#FBBF24`
  - Dark: `#D97706`

- **Background**:
  - DEFAULT: `#FFFFFF`
  - Light: `#F9FAFB`
  - Dark: `#F3F4F6`

### フォント

- **Sans**: Inter, Hiragino Sans, Yu Gothic, Meiryo
- **Serif**: Georgia, Yu Mincho

## ページ構成

1. **Hero** - ファーストビュー（キャッチコピー、CTAボタン）
2. **Empathy** - 共感（悩みに寄り添う）
3. **Benefits** - ベネフィット（3ヶ月後の未来）
4. **Testimonials** - 参加者の声
5. **HowItWorks** - なぜ使いこなせるようになるのか（5つの理由）
6. **Curriculum** - 学べる内容（4週間のカリキュラム）
7. **Pricing** - 料金プラン（BASIC会員 月2,980円）
8. **FAQ** - よくある質問（アコーディオン形式）
9. **FinalCTA** - 最終行動喚起
10. **Footer** - フッター

## キャッチコピー（A/Bテスト用）

以下の6パターンを用意（Hero.tsxで切り替え可能）：

- **パターンA**: 「ChatGPT、触ったけど使えない。その理由、30分で分かります。」
- **パターンB**: 「断片的な情報で、学ぶのをやめてはいけません。週30分で、体系的に最新AIが分かる」
- **パターンC**: 「なぜ、毎週参加する人の87%が『実務で使えた』と答えるのか？」
- **パターンD**: 「『触ったことがある』から『使いこなせる』へ。週30分で、プロンプトのコツが分かる」
- **パターンE**: 「『このプロンプト、使ってみて！』部下に共有できる、その日が来ます。」
- **パターンF**: 「月2,980円（1日100円）で、YouTubeの断片的な学びから卒業できます。」

## 環境変数の設定

`.env.local`ファイルを作成して、以下の環境変数を設定してください：

```bash
# Stripe Payment Links
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/4gM6oHg9o29DaDQ4W96wE00
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_ANNUAL=https://buy.stripe.com/your-annual-link

# Resend API
RESEND_API_KEY=your_resend_api_key_here
```

### Resend APIキーの取得方法

1. [Resend](https://resend.com/)にサインアップ
2. ダッシュボードで新しいAPIキーを作成
3. `.env.local`に`RESEND_API_KEY`として設定
4. 本番環境では、送信元ドメインを設定（`app/api/newsletter/route.ts`の`from`フィールドを変更）

## 実装済みの機能

### ✅ 1. Stripe決済リンク統合（完了）

以下のStripe payment linkが統合されています：

- **BASIC会員（月額）**: `https://buy.stripe.com/4gM6oHg9o29DaDQ4W96wE00`
- 環境変数で管理（`.env.local`）
- `components/Pricing.tsx`で使用

### ✅ 2. 無料メール登録フォーム（完了）

Resend統合により、以下の機能が実装されています：

- **API Route**: `app/api/newsletter/route.ts`
- **フォームコンポーネント**: `components/NewsletterForm.tsx`
- **機能**:
  - メールアドレス入力
  - バリデーション
  - Resend経由でウェルカムメール送信
  - 成功/エラーメッセージ表示

**配置場所**:
- FAQセクションとFinalCTAセクションの間
- アンカーリンク `#free-newsletter` でアクセス可能

**TODO（任意）**:
- メールアドレスをデータベースに保存（Resend Audiences、Airtable、Google Sheets等）
- 独自ドメインの設定（現在は`onboarding@resend.dev`）

### 3. A/Bテスト導入

- Vercel A/B Testing
- Google Optimize
- Optimizely

などのツールを導入してキャッチコピーの効果測定を実施

### 4. アナリティクス設定

- Google Analytics 4
- Google Tag Manager
- Meta Pixel（Facebook広告用）

### 5. SEO最適化

- `app/layout.tsx` のメタデータを最適化
- OGP画像の作成
- 構造化データ（JSON-LD）の追加

### 6. パフォーマンス最適化

- 画像最適化（WebP、Next.js Image）
- フォントの最適化
- コード分割
- Lighthouse スコア改善

## デプロイ

### Vercel（推奨）

```bash
# Vercelにデプロイ
npx vercel
```

### その他のプラットフォーム

- Netlify
- AWS Amplify
- Cloudflare Pages

## ライセンス

© 2025 一般社団法人ビジネスAI推進機構 (BAAO). All rights reserved.
