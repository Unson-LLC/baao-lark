# Cooperative Sitemap｜AI道場 新構成

本サイトマップは、共通トップサイト（横断的なブランド・サービス紹介）と、ペルソナ別ランディングページ群（各ターゲットに最適化した訴求）を組み合わせた新構成を定義する。ナビゲーション設計・CTA配置・コンテンツ制作は本ドキュメントを基準に行う。

## 1. 全体像

```
/
├─ Home （共通トップ）
├─ Programs & FieldWorks（サービス/体制の横断紹介）
├─ Success Stories（ケース & Yearbook）
├─ Resources（ブログ / イベント / ダウンロード）
├─ Join / Contact
└─ Persona Landing Pages
    ├─ /executives （経営層・事業責任者）
    ├─ /dx-leads （DX推進担当 / 人材開発）
    ├─ /operators （実務担当者 / 個人参加希望）
    └─ /fellows   （Fellow候補 / 上位ロール）
```

- **グローバルナビ（PC）**：Home / Programs & FieldWorks / Success Stories / Resources / Join、右側に「For Executives」「For DX Leads」などドロップダウンでペルソナLPへ遷移。
- **共通CTA**：フッターとページ下部に「無料稽古」「企業相談」「Fellow応募」を常設（`/join` 内アンカー）。
- **流入設計**：検索・広告・ブログからはペルソナLPへの直リンク、共通トップからはペルソナ分岐カードで誘導。

## 2. Home（/）

| セクション | 目的 | 主ターゲット | 次アクション |
|-------------|------|---------------|----------------|
| Hero | ミッションと主要ベネフィットを提示。「すぐに成果を見たい方へ」ボタンで各ペルソナLPへ分岐。 | 全ペルソナ | ペルソナ分岐（executives / dx-leads / operators / fellows）、共通CTA |
| Why AI道場 | 道場のUSP（Fellow伴走、Impact Points、公開主義）を3ポイントで要約。 | 経営層 / DX推進 | Programs & FieldWorks、Success Stories |
| サービス全景 | 無料→月謝→伴走→公開をステップ表示。 | 実務担当 / DX推進 | Programs & FieldWorks |
| ペルソナ別ハイライト | 4枚のカードで課題とベネフィットを要約し、各LPへ誘導。 | 全ペルソナ | /executives など |
| 最新ケース＆実績 | 代表的なBefore/After、KPIメトリクスを抜粋。 | 経営層 / DX推進 | /success-stories |
| 今月の稽古・イベント | 無料ライブ、現場見学等のスケジュール。 | 実務担当 / DX推進 | /resources#events、/join#free-live |
| ニュース＆ブログ | 最新記事、Yearbook案内。 | 全ペルソナ | /resources |
| グローバルCTA | 無料稽古 / 企業相談 / Fellow応募。 | 全ペルソナ | /join 各アンカー |

Homeは「AI道場とは何か」を俯瞰できる構成とし、読者が即座に自分ごとのLPへ移れるようファネル上部で分岐を設ける。

## 3. Programs & FieldWorks（/programs）

共通コンテンツとして以下を掲載し、ペルソナLPから参照される前提とする。

| セクション | 内容 | ペルソナ | CTA |
|-------------|------|----------|-----|
| Program Overview | 無料稽古→月謝（BASIC/ACTIVE）→伴走（PRIME/BOOST）→公開（Yearbook）の流れ。 | 実務・DX・経営層 | /join#free-live, /join#basic, /join#enterprise |
| 月謝プラン詳細 | BASIC/ACTIVE の提供価値、受講体験、実務者の声。 | 実務担当 | /operators LP、/join#basic |
| 企業伴走 | PRIME/BOOST の導入プロセス、ROIシミュレーション、保証。 | 経営層 / DX推進 | /executives LP、/dx-leads LP、/join#enterprise |
| FieldWorks体制 | RACI、Fellow伴走、Impact Points、S.P.A.R.K. 設計。 | 経営層 / Fellows | /success-stories、/fellows LP |

## 4. Success Stories（/success-stories）

- フィルタ付きケースグリッド（Field / Mission / Practice）。
- V字ストーリー形式のケース詳細（Before→どん底→After＋数字）。
- KPIダッシュボード（四半期更新）。
- 公開ポリシー説明、Yearbookダウンロード、メディア問い合わせ。
- 各ケースカードから該当ペルソナLP/Join CTAへのブリッジコピー。

## 5. Resources（/resources）

- Events & Visits：無料稽古、現場見学、Fellow説明会。ペルソナ別タグでフィルタリング。
- Blog / Column：検索意図に合わせた記事（アウトラインは Q4 のSEO要件に準拠）。
- Downloads：資料、チェックリスト、比較表。行動後はメールで該当LPへ誘導。
- FAQ：支払い、守秘、導入プロセスなど。ペルソナ別カテゴリを設置。
- Newsletter 登録。

## 6. Join / Contact（/join）

既存フォーム構成を維持しつつ、上部に「どのようなご相談ですか？」カードを配置し、each LP からの意図に応じたアンカーへ誘導する。

## 7. ペルソナ別LP

### 7-1. /executives（経営層・事業責任者）

| ブロック | 目的 | CTA |
|----------|------|-----|
| Hero | 「四半期でROIを証明するAI伴走」 | /join#enterprise |
| 課題とリスク | DX投資失敗の痛み、機会損失を数字で提示。 | /join#enterprise |
| 解決策 | PRIME/BOOST プロセス、Field Director 伴走、保証。 | /programs#prime /#boost |
| 実績 | 代表ケースのビフォーアフター（財務指標）。 | /success-stories |
| 体制とガバナンス | 守秘、Impact Points、公開ポリシー。 | /resources#downloads, /join#enterprise |
| CTAバンド | 無料経営ブリーフィングの案内。 | /join#enterprise |

### 7-2. /dx-leads（DX推進担当 / 人材開発）

| ブロック | 目的 | CTA |
|----------|------|-----|
| Hero | 「PoC止まりを終わらせる推進ロードマップ」 | /join#enterprise, /join#basic |
| 現状の悩み | 現場の巻き込み、社内教育の課題。 | /resources#blog |
| 解決策 | 月謝＋伴走のセット、Fellowによる週次伴走。 | /programs#active, /programs#boost |
| 成功事例 | プロジェクト成功ストーリー（V字構造）。 | /success-stories |
| 運用サポート | 導入キット、無料稽古、Impact Points ダッシュボード。 | /resources#downloads |
| CTAバンド | 「無料稽古にチームで参加」「伴走相談」。 | /join#free-live, /join#enterprise |

### 7-3. /operators（実務担当者 / 個人参加希望）

| ブロック | 目的 | CTA |
|----------|------|-----|
| Hero | 「残業30時間削減を叶えるAI稽古」 | /join#free-live, /join#basic |
| Before/After | 具体的な業務改善例、参加者の声。 | /success-stories |
| 月謝プラン紹介 | BASIC/ACTIVE の学習体験、スケジュール。 | /programs#basic, /programs#active |
| コミュニティ | Slack/オープンチャットの雰囲気、サポート体制。 | /community |
| FAQ | 支払い、解約、時間確保など実務者向けQ&A。 | /resources#faq |
| CTAバンド | 無料稽古 → 月謝へのアップセル。 | /join#free-live, /join#basic |

### 7-4. /fellows（Fellow候補 / 上位ロール）

| ブロック | 目的 | CTA |
|----------|------|-----|
| Hero | 「専門性で社会に影響を与える師範制度」 | /join#fellow |
| グレード & 報酬 | Impact Points と報酬モデル、昇格条件。 | /community#fellow |
| ブランド露出 | Success Stories、Yearbook、メディア掲載。 | /success-stories, /resources |
| 参加までの流れ | エントリー〜面談〜案件アサイン。 | /join#fellow |
| インタビュー | 既存 Fellow の声、動画。 | /resources#blog |
| CTAバンド | エントリーフォーム、案件相談、メディア問い合わせ。 | /join#fellow, /join#fellow-assign, /join#media |

## 8. クロスリンク方針

- ペルソナLP → 共通ページ：Programs / Success Stories / Resources への誘導で詳細補強。
- 共通ページ → ペルソナLP：ケースやブログ内で「あなたと同じ立場の成功事例はこちら」として該当LPへ誘導。
- Joinページ：来訪元のパラメータ（例：?persona=executive）でアンカー初期表示を制御する設計を検討。

## 9. 運用メモ

- ペルソナLPのコンテンツは NotebookLM のテンプレートと評価チェックリストを使用して継続改善。
- ブログ記事（Resources）からのCTAは必ず該当ペルソナLP、もしくは Join アンカーに接続。
- グローバルナビとフッターのリンク構造を更新し、パンくずリストで共通→LP→Join の遷移を一貫させる。

このサイトマップを基にワイヤーフレームとコンテンツ制作を刷新し、ペルソナ別のメッセージングとテスト運用を強化する。
