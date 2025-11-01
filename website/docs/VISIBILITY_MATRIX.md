# Visibility Matrix｜公開Webとコミュニティ情報の切り分け

AI道場の公式サイト（公開Web）と、会員コミュニティ（Lark／オープンチャット等）で扱う情報の境界を定義する。  
参照ソース：`docs/ABOUT.md`, `docs/programs/README.md`, `docs/people/README.md`, `docs/governance/README.md`, `docs/internal/OPERATIONS_HANDBOOK.md`, `docs/internal/LARK_FINAL_PLAN.md`

## 0. チャネル定義

| チャネル | 想定読者 | 役割 |
|----------|----------|------|
| **Public Web（公式サイト）** | 外部一般、潜在クライアント、Fellow候補 | ブランド訴求、サービス理解、リード獲得（`docs/ABOUT.md` の公開主義に基づく） |
| **Lark（会員・運営向け）** | BASIC/ACTIVE/PRIME会員、Fellows、運営 | 非公開情報、案件進捗、Impact Points、内部SLA（`docs/internal/OPERATIONS_HANDBOOK.md`） |
| **オープンチャット（LINE等）** | 無料会員・興味層 | 軽量な交流、イベント告知、BASIC導線（`meetings/2025-10-28_ai-dojo-event-followup.md` で議論された立ち位置） |

## 1. コンテンツカテゴリ別ガイド

### 1-1. Mission / About / FieldWorks

| 情報要素 | Public Web | Lark | オープンチャット | 補足 |
|----------|-----------|------|-----------------|------|
| タグライン・ミッション | ✅ 詳細掲載 | ✅ | ✅ ダイジェスト | `docs/ABOUT.md:21-31` |
| FieldWorks三軸（流派×勝ち筋×型）の概要 | ✅ 図解・用語説明 | ✅ 詳細RACI、案件テンプレ | ◯ 一部紹介 | Larkで担当者・案件宣言の詳細を扱う（`docs/internal/OPERATIONS_HANDBOOK.md:68-75`） |
| 役割定義（Field Director, Senior Fellow, Fellow） | ✅ ベネフィット中心に紹介 | ✅ 任命通知、Appointment#管理 | △ 簡易紹介 | 具体的なアサインや評価は Lark 限定 |

### 1-2. Programs・無料稽古コンテンツ

| 情報要素 | Public Web | Lark | オープンチャット | 補足 |
|----------|-----------|------|-----------------|------|
| サービス概要・価格レンジ | ✅ `docs/programs/README.md:33-138` を基に掲載 | ✅ 運営マニュアル・進行スクリプト | ◯ BASIC/イベントのみ抜粋 | 細かな割引やキャンペーンは Lark/メールで展開 |
| 成果物サンプル（匿名化） | ✅ 1枚サマリ等を抜粋＋無料ライブダイジェスト動画 | ✅ フル版（PDF, ノート, 録画） | △ 要約のみ | 守秘レベルに応じてマスク（`docs/governance/README.md`） |
| LIVE/アーカイブ閲覧方法 | ✅ 手順を記載 | ✅ 詳細URL・権限設定 | ◯ 参加案内リンク | 再生URLそのものは Lark 会員限定 |

### 1-3. Cases / KPI / Yearbook

| 情報要素 | Public Web | Lark | オープンチャット | 補足 |
|----------|-----------|------|-----------------|------|
| ケース概要（守秘レベル1-3に応じて） | ✅ 公開主義に沿って匿名/実名で掲載 | ✅ 詳細数値・ドキュメント | △ 守秘レベル1のハイライトのみ | 守秘レベルは `docs/governance/README.md` の表に準拠 |
| KPI（売上 / P95リードタイム / ケース公開本数 / BASIC→PRIME昇格率） | ✅ 指標と最新値を公開 | ✅ ダッシュボード、元データ | ◯ KPIのうち外向きに適したもの | 経営用の詳細データは Lark Base 管理（`docs/internal/LARK_FINAL_PLAN.md:31-62`） |
| Yearbook（PDF） | ✅ 公開版PDF（必要に応じ匿名処理） | ✅ フル版（内部数値・COI含む） | ✖ | 公開版はCOI明記、内部版はImpact Points等も表示 |
| Impact Points ランキング | ✖ 概念のみ紹介 | ✅ 個別スコア、昇格判定（`docs/people/README.md:386-416`） | ✖ | 公開Webでは「評価制度がある」まで |

### 1-4. Community & Fellows

| 情報要素 | Public Web | Lark | オープンチャット | 補足 |
|----------|-----------|------|-----------------|------|
| Fellow Grade表・昇格条件 | ✅ 概要公開（`docs/people/README.md:292-365`） | ✅ 個別ステータス、昇格審査 | △ 概要のみ | 個人のImpact Pointsは公開しない |
| ベネフィット（先行閲覧72h, Green Room, 帯同権） | ✅ 表示 | ✅ 詳細アクセスURL | △ 体験談シェア | 具体的なアクセス手段やURLは Lark |
| Delegated案件報酬比率 | ✅ 55%など主要数字を掲載（`docs/people/README.md:259-357`） | ✅ 個別案件配分表 | ✖ | 報酬支払い実績は Lark内会計で共有 |
| Appointment# 検証リンク | ✅ Field Director / Senior Fellow のみリンク掲出 | ✅ 全メンバー分のQR・失効管理 | ✖ | Fellows全員分はLarkで配布、Publicは紹介枠のみ |
| 内部儀式・台本 | ✖ 概念紹介まで | ✅ 詳細台本（`docs/internal/OPERATIONS_HANDBOOK.md:209-240`） | ✖ | 儀式演出は内部運用資料 |

### 1-5. Resources / Events / FAQ / Downloads

| 情報要素 | Public Web | Lark | オープンチャット | 補足 |
|----------|-----------|------|-----------------|------|
| イベント一覧・申込フォーム | ✅ 外向け公開 | ✅ 運営手順、参加者リスト | ✅ 告知・リマインド | 個別参加者情報は公開しない |
| FAQ（公開可能な範囲） | ✅ `docs/FAQ.md` を整形 | ✅ 個社事例含む詳細FAQ | ◯ よくある質問の抜粋 | 守秘が必要なQAは会員限定 |
| ホワイトペーパー / 資料DL | ✅ メールフォーム経由で配布（匿名処理済） | ✅ フルバージョン（匿名解除版） | ✖ | 詳細版はLark Drive で共有 |
| RECIPES | ✅ 概要説明・購入導線 | ✅ 実ファイル（PDF+スクリプト） | ✖ | `docs/internal/LARK_FINAL_PLAN.md:1-120` の構造に従いLarkドライブで管理 |
| ニュースレター | ✅ 登録フォーム表示 | ✅ 配信管理（RESEND） | ✅ 告知 | Segment情報は内部で管理 |

### 1-6. CTA / フォーム / CRM連携

| 情報要素 | Public Web | Lark | オープンチャット | 補足 |
|----------|-----------|------|-----------------|------|
| CTA文言・フォーム | ✅ `CTA_AND_FORMS.md` に沿って実装 | ✅ 回答データのルーティング | ◯ フォームリンクを共有 | 取得データはCRMで管理、オープンチャットでは簡易ルームフォームのみ |
| 回答データ（Field/Mission/Practiceタグ） | ✖ | ✅ CRM + Lark Base | ✖ | 24h担当宣言と連動（`docs/internal/OPERATIONS_HANDBOOK.md:68-75`） |
| Impact Points反映 | ✖ | ✅ Lark Baseで自動計算 | ✖ | Publicには制度概要のみ |

## 2. チャネル別チェックリスト

### Public Web に載せても良いもの
- タグライン、理念、FieldWorks概要（責任範囲は抽象化）
- プログラム内容・料金レンジ・成果物の匿名サンプル
- 公開ケース（守秘レベル1〜3に準拠）、KPI指標の最新値
- Fellow Grade制度・Impact Pointsの仕組み（スコア値は非公開）
- Appointment#付き紹介カード（Field Director / Senior Fellow中心）
- イベント予定・資料ダウンロード（匿名処理済）
- CTAフォーム（企業相談 / BASIC参加 / Fellow応募 等）

### Lark（会員限定）でのみ共有するもの
- 個別案件のBefore/After数値、顧客名、稟議資料（`docs/governance/README.md`の守秘レベルに依存）
- Impact Pointsスコア、昇格判定、案件アサイン状況
- 会計配分（PF/CP計算式の実績）、支払スケジュール
- RECIPES全文、クローズドイベントの録画・議事録
- 内部儀式台本、心理トリガー運用コピー（`docs/internal/OPERATIONS_HANDBOOK.md:209-240`）
- CRM連携データ（Field×Mission×Practiceタグ、24h担当宣言ログ）

### オープンチャットで共有するもの
- BASIC/イベント告知、申込リンク
- 無料コンテンツのダイジェスト（ニュースレター、ブログ更新情報）
- コミュニティ参加者の体験談（個人特定情報は避ける）
- Fellows募集のライトな案内（詳細は公式サイトへ誘導）

共有禁止事項（全チャネル共通）：
- 守秘義務に反する具体企業名や担当者名の公開（`docs/governance/README.md`）
- 未公開CASEの数値、未承認のCOI情報
- Impact Points等の評価データを外部へ無断共有
- 契約書・SLA・支払い条件など機密書類

## 3. オープンチャット運用留意点

- 参加時に利用規約・禁止行為（個人情報の投稿、勧誘、誹謗中傷等）を明示し同意取得。違反時は退出措置とログ記録。
- モデレーターを最低2名配置し、スパムや荒らし投稿を即時削除。週次で投稿を確認し守秘情報が流出していないか点検する。
- 重要告知は必ず公式サイト／メールでも配信し、オープンチャットのみで完結させない。
- オンラインイベントURLなど機微情報を投稿する場合は、イベント終了後に削除するか、限定公開リンクを使用する。

## 4. 運用フロー（公開⇔内部）

1. **情報作成**：案件完了→Field Directorが守秘レベル選択→Case Editorが公開用コンテンツを整形。
2. **内部承認**：Larkで詳細版を共有し、師範会が承認。Impact Points・支払い処理。
3. **公開版生成**：匿名処理／要素分解→公式サイトへ掲載。必要に応じてYearbook抜粋を更新。
4. **コミュニティ配信**：同内容のダイジェストをLarkやオープンチャットで案内し、詳細へ誘導。
5. **更新・アーカイブ**：四半期ごとに公開WebとLark資料を突合。公開版と内部版の差分を保持（`docs/internal/LARK_FINAL_PLAN.md:31-120`）。

---

このマトリクスを参照し、各ページのコンテンツ制作・CMS運用・コミュニティ投稿時に情報露出のレベルをチェックすること。特に Cases / KPI / Fellows 周りは公開主義と守秘のバランスが重要であり、守秘レベル設定と Appointment# 管理を必ず行う。
