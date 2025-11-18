# Information Architecture｜共通トップ + ペルソナ別ランディング

ペルソナ定義（`PERSONAS.md`）とサイトマップ（`SITEMAP.md`）を基に、常設サイトのグローバルナビ・ページ構成・クロスリンク方針を整理する。共通トップでブランドと全体像を伝え、各ペルソナLPで疑問を解消し、Programs / Success Stories / Join に接続する。

## 1. グローバルナビ（PC）

| 順番 | ラベル | URL | 役割 | 備考 |
|------|--------|-----|------|------|
| 1 | Home | `/` | 道場のUSP・社会的証明・各ペルソナの入口を提示 | HeroにCTA3種（無料稽古 / 企業相談 / Fellow応募）
| 2 | Programs & FieldWorks | `/programs` | 無料→月謝→伴走→公開という全体像と各プログラム詳細 | FieldWorksマトリクスはページ内セクションとして配置
| 3 | Success Stories | `/success-stories` | KPI・ケースハイライト・Yearbook導線で信頼を補強 | Casesフィルタ→KPI→Yearbook→保証CTA
| 4 | Resources | `/resources` | イベント／ダウンロード／FAQ／ブログ | オープンチャット・ニュースレターもここから誘導
| 5 | Join / Contact | `/join` | 6種類のフォーム（無料稽古 / 企業相談 / 月謝 / Fellow応募 / 案件相談 / メディア） | クエリ `?persona=` で初期表示制御を検討

**Persona Quick Links（右肩）**：`For Executives (/executives)` / `For DX Leads (/dx-leads)` / `For Operators (/operators)` / `For Fellows (/fellows)` をトグル可能なショートリンクとして並べる。モバイルではメインナビ→区切り→ペルソナリンクの順。

## 2. サイトマップ（概要）

共通トップ＋5ページと4つのペルソナLPで構成する。`SITEMAP.md` の詳細図を参照。

```
/
├─ Home
├─ Programs & FieldWorks (/programs)
├─ Success Stories (/success-stories)
├─ Resources (/resources)
├─ Join / Contact (/join)
└─ Persona LPs
    ├─ /executives
    ├─ /dx-leads
    ├─ /operators
    └─ /fellows
```

各ページは以下のモジュールを最低限含む。

### Home
- Hero（USP + 3CTA + 次回無料稽古）
- 無料稽古セクション（テーマ・登壇者・オプチャ導線）
- サンプル動画 & アンケート引用
- Path to Mastery（無料→月謝→伴走→公開）
- Program snapshot（FREE/BASIC/ACTIVE/PRIME/BOOST/RECIPES）
- FieldWorks overview + Field Director紹介
- Community & Fellows（Impact Points / 特典）
- Cases & KPIダイジェスト
- Events & Updates（イベント / ブログ）
- FAQ Preview
- CTAバンド

### Programs & FieldWorks（`/programs`）
- Overview：無料→月謝→伴走→公開の流れ
- プログラムごとのセクション（FREE / BASIC / ACTIVE / PRIME / BOOST / RECIPES）
- FieldWorksマトリクスと役割（Field Director / Senior / Fellow）
- 守秘・公開ポリシーと期待成果物
- Cross CTA：無料稽古、月謝相談、企業相談

### Success Stories（`/success-stories`）
- Hero：公開できる成果＝再現性の証明
- ケースハイライト（業界・勝ち筋別カード）
- KPIダッシュボード（売上、P95リードタイム、公開件数、昇格率）
- 公開ポリシー（守秘レベル / COI）
- Yearbook紹介（DL、アーカイブ）
- FellowsのByline例、Field Directorコメント
- CTA：企業相談、無料稽古、Fellow応募

### Resources（`/resources`）
- Events & Visits（週次稽古、現場見学、説明会）
- Downloads（稟議テンプレ、比較表、FieldWorksガイド）
- Blog / Column（SEO記事）
- FAQ（支払い・守秘・参加方法）
- Newsletter / オープンチャット導線

### Join / Contact（`/join`）
- Hero：次のアクションを選ぶ
- カード型セグメント（無料稽古 / 企業相談 / 月謝 / Fellow応募 / Fellow案件相談 / メディア）
- 各フォーム（Formspree連携）の入力項目は `CTA_AND_FORMS.md` に準拠
- 送信後のSLA・フォローアップ案内

### Persona LP
- `/executives`：失敗パターン、ROI保証、Field Director紹介、ケース証拠、返金ポリシー
- `/dx-leads`：PoCから脱却するロードマップ、月謝/伴走活用、稟議テンプレ、成功事例
- `/operators`：Before/After、月謝カリキュラム、コミュニティの雰囲気、FAQ、無償サンプル
- `/fellows`：招待コピー、Grade/Impact Points、報酬・特権、Field Director/Senior Showcase、Byline例、応募CTA

## 3. クロスリンクとCTAの整合

| 起点 | 経由ページ | 目的 | 備考 |
|------|------------|------|------|
| Home Hero CTA | /join#free-live / #enterprise / #fellow | 即時行動を促す | `CTA_AND_FORMS.md` と同期
| Personaカード | /executives /dx-leads /operators /fellows | 深い疑問を解消するLPへ誘導 | ペルソナ判定が不要な場合は直接広告で流入
| Persona LP | /programs, /success-stories, /resources | 補助的な証拠・資料 | LPから戻る必要がないようモジュール内リンクを配置
| Programsセクション | /join#basic / #active / #enterprise | 決裁・申込へジャンプ | BASIC/ACTIVEはフォーム内で選択切替
| Success Stories | /join#enterprise / #fellow | 成果証明後に行動させる | ケース個別ページ実装時も同様
| Resources Downloads | /join#enterprise / #free-live | DL後のフォローアップ導線 | MAシナリオと連動

## 4. モバイルIAの注意点

- ハンバーガーメニュー内にメインナビ、その下にペルソナショートリンクを配置。CTAボタン（無料稽古 / 企業相談 / Fellow応募）はスクロール後も最下部にスティッキー表示を検討。
- Heroのペルソナカードは横スクロール（スワイプ）可。CTAは縦積み。
- 比較表（Programs）はカード化し、横スクロールで全プランを閲覧。
- CTAアンカーは `history.replaceState` を使って適切にハイライトし、フォームまで自動スクロール。

## 5. 更新フローとの連携

- Homeの無料稽古情報・KPI・イベントは `OPERATIONS_PLAN.md` のSLAに従って更新。Heroの`nextLive`は環境変数。
- Persona LPの課題コピーは `FEEDBACK_SUMMARY.md` の最新アンケートを参照し四半期ごとに更新。
- CTAアンカーとフォーム項目は `CTA_AND_FORMS.md` をソース・オブ・トゥルースとし、変更時は Home / Persona LP / Join のリンクを同時に差し替える。
- Fellows LP内の Field Director / Senior Showcase は `data/fellows.ts` の構造に合わせて掲載し、Appointment#の更新は Lark #fellow-ops にて承認を得る。

この IA を `CONTENT_GUIDELINES.md`（コピー）と `WIREFRAMES.md`（ワイヤー）に同期し、Next.js 実装ではセクション単位のコンポーネント化を徹底する。
