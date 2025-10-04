# Lark セットアップガイド｜Lark Setup Guide

> BAAO実戦AI道場のLarkコミュニティ構築手順書

**対象**: 理事・Program GM・Community Manager

**目的**: LarkでBAAOコミュニティを構築し、会員種別ごとのアクセス制御とコミュニケーション基盤を整備

**更新**: 2025/10/05

**秘匿区分**: 内部限定（理事会・運営スタッフのみ）

---

## 目次

1. [Lark構造概要](#1-lark構造概要)
2. [管理者階層](#2-管理者階層)
3. [Wiki構造](#3-wiki構造)
4. [グループチャット構造](#4-グループチャット構造)
5. [アクセス権限マトリクス](#5-アクセス権限マトリクス)
6. [セットアップ手順](#6-セットアップ手順)
7. [Community Manager運用ガイド](#7-community-manager運用ガイド)

---

## 1. Lark構造概要

### 1-1. 使用するLark機能

| 機能 | 用途 | 備考 |
|-----|------|------|
| **Wiki** | ナレッジベース（ドキュメント管理） | 階層構造、アクセス制御、検索 |
| **Group Chat** | コミュニケーション（Field別、会員種別別） | リアルタイム交流、質問対応 |
| **Permission Groups** | アクセス制御（会員種別、役職別） | BASIC/ACTIVE/PRIME、理事/FD/CM |
| **Moderation** | コミュニティガイドライン運用 | 警告、ミュート、除名 |
| **Calendar** | イベント管理 | BASIC Live、PRIME会合、現場見学 |

### 1-2. 会員種別とアクセス範囲

| 会員種別 | 月額/年額 | Wiki アクセス | グループチャット | 特典 |
|---------|----------|-------------|----------------|------|
| **BASIC** | 月2,980円/年29,800円 | 📘はじめに、🎯プログラム、📅イベント（一部） | なし | 週次ライブ、Notes |
| **ACTIVE** | 月9,800円/年98,000円 | BASIC + 🏭FieldWorks、📊ケース | なし | アーカイブ検索、Flow feeds |
| **PRIME** | 年220,000円 | ACTIVE + 全イベント | Field別グループ、PRIME専用グループ | クローズド会合、現場見学、20%割引 |
| **理事・運営** | - | 全て + 🔒内部資料 | 全て + 運営グループ | 管理権限 |

---

## 2. 管理者階層

### 2-1. 管理者権限レベル

```
Level 1: 理事会（Council Member）- 3名
├── 全権限
├── CM任命・解任権
├── ガバナンスポリシー変更承認
└── 会員除名決定権

Level 2: Program GM - 1名
├── 全Wiki編集権限
├── 全グループチャット管理
├── CM監督権限
├── KPI・収支データアクセス
└── システム設定変更

Level 3: Community Manager - 2名
├── 公開Wiki編集権限（🔒内部資料は閲覧のみ）
├── 全グループチャット管理
├── 会員サポート
├── イベント運営
├── ケース公開（Level 1/2承認権）
└── モデレーション（警告・一時ミュート）

Level 4: Field Director - 6名
├── 自Field Wikiページ編集
├── 自Fieldグループチャット管理
├── ケース公開承認（Level 3実名公開）
└── 技術的問い合わせ対応

Level 5: Senior Fellow / Fellow
├── Wiki閲覧（権限に応じて）
├── Fieldグループチャット参加（PRIME会員の場合）
├── コメント投稿
└── ケース提案

Level 6: 会員（BASIC/ACTIVE/PRIME）
├── 会員種別に応じたWiki閲覧
├── グループチャット参加（PRIMEのみ）
└── コメント投稿
```

### 2-2. CM（Community Manager）の役割分担

**CM1: コンテンツ・イベント担当**
- BASIC Liveの企画・運営（週次、48回/年）
- PRIME会合のファシリテーション（月次、12回/年）
- 現場見学の調整（四半期、4回/年）
- ケース公開プロセスの管理

**CM2: メンバーサポート・モデレーション担当**
- 会員オンボーディング（新規会員対応）
- グループチャットモデレーション
- 禁止事項の監視・対応
- 会員満足度管理（アンケート、フィードバック収集）

---

## 3. Wiki構造

### 3-1. Wiki階層設計

```
BAAO Wiki（ルート）
│
├── 📘 はじめに [BASIC+]
│   ├── BAAOとは（ABOUT.md）
│   ├── よくある質問（FAQ.md）
│   └── ガバナンス・ポリシー（governance/README.md）
│
├── 👥 組織・役割 [BASIC+]
│   ├── 役割一覧（people/README.md）
│   ├── Council Member（師範会）
│   ├── Field Director（現場責任者）
│   ├── Senior Fellow（専門師範）
│   └── Fellow（師範）- Fellow Grade制度
│
├── 🎯 プログラム [BASIC+]
│   ├── プログラム概要（programs/README.md）
│   ├── BOOST（90日実装プログラム）
│   ├── CONSULT（相談サービス）
│   └── RECIPES（実装知）
│
├── 🏭 FieldWorks（業界別）[ACTIVE+]
│   ├── FieldWorks概要（fieldworks/README.md）
│   ├── Healthcare（医療・ヘルスケア）
│   ├── Manufacturing（製造業）
│   ├── Finance（金融）
│   ├── Public（公共）
│   ├── Retail & CX（小売・顧客体験）
│   └── Media & IP（メディア・知財）
│
├── 📅 イベント [BASIC+]
│   ├── イベント運営ガイド（events/README.md）
│   ├── BASIC Live（週次ライブ）[BASIC+]
│   ├── PRIME会合（月次クローズド）[PRIME]
│   └── 現場見学（四半期）[PRIME]
│
├── 📊 ケース [ACTIVE+]
│   └── ケース公開プロセス（cases/README.md）
│
└── 🔒 内部資料（理事・経営層限定）[理事・運営のみ]
    ├── 運営ハンドブック（OPERATIONS_HANDBOOK.md）
    │   ├── 組織構造
    │   ├── CP配分ルール
    │   ├── Fellow Grade制度
    │   └── Lead/Delegated案件配分
    └── キャッシュフローシミュレーション（CASHFLOW_SIMULATION.md）
```

### 3-2. Wikiページ作成順序

**Phase 1: 公開ドキュメント（8ページ）**
1. BAAOとは（docs/ABOUT.md → Wiki）
2. よくある質問（docs/FAQ.md → Wiki）
3. ガバナンス・ポリシー（docs/governance/README.md → Wiki）
4. 役割一覧（docs/people/README.md → Wiki）
5. プログラム概要（docs/programs/README.md → Wiki）
6. FieldWorks概要（docs/fieldworks/README.md → Wiki）
7. イベント運営ガイド（docs/events/README.md → Wiki）
8. ケース公開プロセス（docs/cases/README.md → Wiki）

**Phase 2: 内部資料（2ページ、アクセス制限付き）**
9. 運営ハンドブック（docs/internal/OPERATIONS_HANDBOOK.md → Wiki）
10. キャッシュフローシミュレーション（docs/internal/CASHFLOW_SIMULATION.md → Wiki）

---

## 4. グループチャット構造

### 4-1. グループチャット一覧

| グループ名 | メンバー | 目的 | 管理者 |
|----------|---------|------|--------|
| **BAAO理事会** | 理事3名、Program GM | 経営判断、重要事項決定 | 理事 |
| **BAAO運営** | 理事、Program GM、CM2名、事務局 | 日次運営、タスク管理 | Program GM |
| **Field Directors** | FD 6名、Program GM、CM1 | Field間調整、案件配分 | Program GM |
| **Healthcare Field** | FD、Senior Fellow、Fellow、PRIME会員 | Healthcare業界の議論 | Healthcare FD |
| **Manufacturing Field** | FD、Senior Fellow、Fellow、PRIME会員 | Manufacturing業界の議論 | Manufacturing FD |
| **Finance Field** | FD、Senior Fellow、Fellow、PRIME会員 | Finance業界の議論 | Finance FD |
| **Public Field** | FD、Senior Fellow、Fellow、PRIME会員 | Public業界の議論 | Public FD |
| **Retail & CX Field** | FD、Senior Fellow、Fellow、PRIME会員 | Retail & CX業界の議論 | Retail & CX FD |
| **Media & IP Field** | FD、Senior Fellow、Fellow、PRIME会員 | Media & IP業界の議論 | Media & IP FD |
| **PRIME会員** | PRIME会員、理事、Program GM、CM | PRIME会員限定の交流 | CM |
| **イベント告知** | 全会員（BASIC/ACTIVE/PRIME） | イベント告知専用（投稿制限） | CM |

### 4-2. グループチャット設定

**運営グループ（理事会、運営、Field Directors）**
- メンバー追加: 管理者のみ
- メッセージ削除: 管理者のみ
- 履歴: 無制限保存

**Fieldグループ（6個）**
- メンバー追加: Field Director + CM
- メッセージ削除: Field Director + CM
- 履歴: 1年間保存

**PRIME会員グループ**
- メンバー追加: CM（PRIME会員登録時に自動追加）
- メッセージ削除: CM
- 履歴: 1年間保存

**イベント告知グループ**
- メンバー追加: 自動（全会員）
- 投稿権限: CM、理事、Program GMのみ
- メッセージ削除: CM
- 履歴: 3ヶ月保存

---

## 5. アクセス権限マトリクス

### 5-1. Community Manager権限詳細

```
【Wiki管理権限】
✅ 公開ドキュメント（📘はじめに、🎯プログラム、🏭FieldWorks、📅イベント、📊ケース）
   - 編集権限あり（ただしFact-check後のみ）
   - コメント管理
   - アクセスログ閲覧

❌ 内部資料（🔒運営ハンドブック、キャッシュフローシミュレーション）
   - 閲覧のみ（編集不可）
   - 給与情報・CP配分の詳細は閲覧不可

【グループチャット管理権限】
✅ 全グループチャットの管理者権限
   - メンバー追加・削除
   - メッセージ削除（禁止事項違反時）
   - グループ設定変更
   - アナウンス投稿

✅ モデレーション権限
   - 警告発行（1回目）
   - 一時ミュート（24時間）
   - 理事へのエスカレーション（2回目以降）

【会員管理権限】
✅ 会員情報閲覧
   - 会員種別（BASIC/ACTIVE/PRIME）
   - 参加イベント履歴
   - 問い合わせ履歴

⚠️ 会員情報の制限
   - 支払情報・請求情報は閲覧不可
   - 個人の案件参加情報は閲覧不可

【イベント管理権限】
✅ イベント作成・管理
   - BASIC Live（週次）の開催
   - PRIME会合（月次）の調整
   - 現場見学（四半期）の調整
   - 参加者管理

✅ 録画・資料管理
   - イベント録画のアップロード
   - アーカイブ整理
   - 資料の公開範囲設定

【ケース公開権限】
✅ ケース公開プロセス管理
   - Fact-check確認（技術的内容はField Directorに確認）
   - 30分クールダウン実施
   - 守秘レベル確認
   - COI明記確認

⚠️ 最終承認権限
   - Level 1/2: CM単独で承認可能
   - Level 3（実名公開）: Field Director承認必須

【通知・アナウンス権限】
✅ 全会員への通知送信
   - イベント告知
   - 重要なお知らせ
   - システムメンテナンス通知

⚠️ 制限
   - 営業的メッセージは理事承認必須
   - 週2回まで（スパム防止）
```

### 5-2. Field Director権限詳細

```
【Wiki管理権限】
✅ 自Field Wikiページ編集
   - FieldWorks配下の自Field ページのみ
   - ケース追加・更新
   - RECIPES追加（Senior Fellow執筆後の承認）

【グループチャット管理権限】
✅ 自Fieldグループチャット管理
   - メンバー追加（自Fieldの専門家のみ）
   - メッセージ削除（禁止事項違反時）
   - アナウンス投稿

【案件管理権限】
✅ 案件受入可否判断
✅ Lead/Delegated宣言
✅ Fellow/Senior Fellowアサイン
✅ ケース公開承認（Level 3実名公開）

【会員対応権限】
✅ 技術的問い合わせ対応（自Field関連）
```

---

## 6. セットアップ手順

### 6-1. Phase 1: ワークスペース基本設定（Day 1）

**タスク1: Larkワークスペース（テナント）の作成**
- [ ] Larkアカウント作成（理事代表）
- [ ] ワークスペース名: 「BAAO実戦AI道場」
- [ ] ワークスペースURL: baao-dojo.larksuite.com（希望）

**タスク2: 管理者階層の設定**
- [ ] 理事3名をOwnerに設定
- [ ] Program GMをAdminに設定
- [ ] CM2名をModeratorに設定
- [ ] Field Director 6名をGroup Adminに設定

**タスク3: Permission Groups作成**
- [ ] グループ作成:
  - 理事会（Council）
  - 運営スタッフ（Operations）
  - Field Directors
  - Senior Fellows
  - Fellows
  - PRIME会員
  - ACTIVE会員
  - BASIC会員

### 6-2. Phase 2: Wiki空間の作成（Day 2-3）

**タスク4: Wiki空間の作成とルートページ構築**
- [ ] Wiki空間作成: 「BAAO Wiki」
- [ ] ルートページ作成（目次）
- [ ] 9つのセクション作成:
  - 📘 はじめに
  - 👥 組織・役割
  - 🎯 プログラム
  - 🏭 FieldWorks
  - 📅 イベント
  - 📊 ケース
  - 🔒 内部資料

**タスク5: 公開ドキュメントのWikiページ作成（8ページ）**
- [ ] BAAOとは（docs/ABOUT.md → Wiki）
- [ ] よくある質問（docs/FAQ.md → Wiki）
- [ ] ガバナンス・ポリシー（docs/governance/README.md → Wiki）
- [ ] 役割一覧（docs/people/README.md → Wiki）
- [ ] プログラム概要（docs/programs/README.md → Wiki）
- [ ] FieldWorks概要（docs/fieldworks/README.md → Wiki）
- [ ] イベント運営ガイド（docs/events/README.md → Wiki）
- [ ] ケース公開プロセス（docs/cases/README.md → Wiki）

**タスク6: 内部資料のWikiページ作成（2ページ、アクセス制限付き）**
- [ ] 運営ハンドブック（docs/internal/OPERATIONS_HANDBOOK.md → Wiki）
  - アクセス制限: 理事・運営スタッフのみ
- [ ] キャッシュフローシミュレーション（docs/internal/CASHFLOW_SIMULATION.md → Wiki）
  - アクセス制限: 理事のみ

### 6-3. Phase 3: グループチャットの作成（Day 4-5）

**タスク7: 運営グループチャット作成（3個）**
- [ ] BAAO理事会（理事3名、Program GM）
- [ ] BAAO運営（理事、Program GM、CM2名、事務局）
- [ ] Field Directors（FD 6名、Program GM、CM1）

**タスク8: Fieldグループチャット作成（6個）**
- [ ] Healthcare Field
- [ ] Manufacturing Field
- [ ] Finance Field
- [ ] Public Field
- [ ] Retail & CX Field
- [ ] Media & IP Field

**タスク9: 会員グループチャット作成（2個）**
- [ ] PRIME会員（PRIME会員専用）
- [ ] イベント告知（全会員、投稿制限）

### 6-4. Phase 4: アクセス権限設定（Day 6-7）

**タスク10: Wikiアクセス権限設定**
- [ ] 📘はじめに → BASIC+
- [ ] 👥組織・役割 → BASIC+
- [ ] 🎯プログラム → BASIC+
- [ ] 🏭FieldWorks → ACTIVE+
- [ ] 📅イベント → BASIC+（PRIME会合・現場見学はPRIME）
- [ ] 📊ケース → ACTIVE+
- [ ] 🔒内部資料 → 理事・運営スタッフのみ

**タスク11: Community Manager権限の詳細設定**
- [ ] 公開Wiki編集権限付与
- [ ] 全グループチャット管理権限付与
- [ ] モデレーション権限設定（警告・一時ミュート）
- [ ] イベント管理権限付与
- [ ] ケース公開権限設定（Level 1/2）

**タスク12: Field Director権限設定（6名分）**
- [ ] 各FieldのWikiページ編集権限付与
- [ ] 各Fieldグループチャット管理権限付与

**タスク13: モデレーションルールの設定**
- [ ] 自動ミュート設定（禁止キーワード）
- [ ] 警告メッセージテンプレート作成
- [ ] エスカレーションフロー設定

### 6-5. Phase 5: テスト・運用開始（Day 8-10）

**タスク14: テストユーザーでの動作確認**
- [ ] BASIC会員テストユーザー作成 → アクセス範囲確認
- [ ] ACTIVE会員テストユーザー作成 → アクセス範囲確認
- [ ] PRIME会員テストユーザー作成 → アクセス範囲確認
- [ ] Field Directorテストユーザー作成 → 権限確認
- [ ] CMテストユーザー作成 → 権限確認

**タスク15: 運用マニュアル作成（CM向け）**
- [ ] イベント作成手順
- [ ] 会員オンボーディング手順
- [ ] モデレーション対応手順
- [ ] ケース公開承認手順
- [ ] トラブルシューティング

---

## 7. Community Manager運用ガイド

### 7-1. 日次業務

**毎日（平日）**
- [ ] グループチャット確認（禁止事項違反チェック）
- [ ] 新規会員オンボーディング（参加後24時間以内）
- [ ] 問い合わせ対応（24時間以内返信）

**毎週**
- [ ] BASIC Live開催（週次、木曜19:00-20:00）
- [ ] イベント告知（次週イベント、毎週月曜）
- [ ] アーカイブ整理（BASIC Live録画アップロード）

**毎月**
- [ ] PRIME会合調整（月次、第3金曜19:00-21:00）
- [ ] 会員満足度アンケート送付（月末）
- [ ] 月次レポート作成（会員数、イベント参加率、問い合わせ件数）

**四半期**
- [ ] 現場見学調整（四半期1回）
- [ ] 四半期レビュー（理事会報告）

### 7-2. モデレーション対応フロー

**軽度違反（感情的発言、スパム等）**
1. CM単独で警告メッセージ送信
2. 24時間ミュート設定
3. 違反ログ記録（Lark内部ツール）

**中度違反（守秘情報の無断公開、COI未開示）**
1. CM即時ミュート
2. Program GMへ報告（24時間以内）
3. 対応協議（48時間以内）
4. 警告または一時停止（1週間）

**重度違反（ハラスメント、情報漏洩）**
1. CM即時アカウント停止
2. 理事会へ緊急報告（即時）
3. 処分決定（48時間以内）
4. 除名または永久追放

### 7-3. ケース公開承認フロー

**Level 1/2（CM単独承認可能）**
1. ケース提案受領（Field Director or Fellow）
2. Fact-check確認（数値根拠、測定方法）
3. 30分クールダウン実施（形容詞削除、数値のみ）
4. 守秘レベル確認（Level 1: 完全匿名、Level 2: 要素分解）
5. COI明記確認
6. CM承認 → Wiki公開

**Level 3（実名公開、Field Director承認必須）**
1. ケース提案受領
2. Fact-check確認
3. 30分クールダウン実施
4. 守秘レベル確認（Level 3: 実名公開）
5. COI明記確認
6. **Field Director承認依頼**（該当Fieldの FD）
7. FD承認後、CM承認 → Wiki公開

### 7-4. トラブルシューティング

**会員からの問い合わせが多い項目**
- Q: PRIMEに昇格したのにFieldグループに入れない
  - A: CM2がグループ追加を手動実施（24時間以内）

- Q: Wikiページが見えない
  - A: 会員種別確認 → 権限再設定

- Q: イベント録画が見つからない
  - A: アーカイブ整理済み確認 → 該当ページリンク送付

**システムトラブル**
- Lark接続エラー → Larkサポートへ問い合わせ
- Wiki編集できない → 権限確認 → Program GMへエスカレーション
- グループチャット通知が来ない → ユーザー設定確認

---

## 付録: Lark MCP コマンド例

### Wiki作成

```javascript
// Wiki空間作成
mcp__lark__wiki_v2_space_create({
  name: "BAAO Wiki",
  description: "BAAO実戦AI道場のナレッジベース"
});

// Wikiノード作成
mcp__lark__wiki_v2_space_createNode({
  space_id: "space_id",
  obj_type: "docx",
  title: "BAAOとは",
  parent_node_token: "parent_token"
});
```

### グループチャット作成

```javascript
// グループチャット作成
mcp__lark__im_v1_chat_create({
  chat_type: "private",
  name: "Healthcare Field",
  description: "Healthcare業界の議論グループ",
  user_id_list: ["open_id_1", "open_id_2"]
});
```

### 権限設定

```javascript
// ドキュメント権限追加
mcp__lark__drive_v1_permissionMember_create({
  token: "doc_token",
  type: "docx",
  member_type: "openid",
  member_id: "open_id",
  perm: "edit" // または "view", "full_access"
});
```

---

## 変更履歴

- **2025/10/05**: 初版作成（Larkセットアップガイド、CM運用ガイド、権限マトリクス）
