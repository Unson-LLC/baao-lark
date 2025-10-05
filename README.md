# BAAO 実戦AI道場｜ドキュメント管理

**BAAO Dojo for Practical AI - Documentation Repository**

このリポジトリは、BAAO実戦AI道場のドキュメント、運営資料、Lark実装計画を管理します。

**プラットフォーム**: Lark（飛書/Feishu）
**運営方針**: ドライブ中心、Base（多次元表）活用
**更新日**: 2025/10/05

---

## 📁 ディレクトリ構造

```
baao-lark/
├── docs/                      # 公開・会員向けドキュメント（→ Wiki）
│   ├── ABOUT.md              # BAAOとは
│   ├── FAQ.md                # よくある質問
│   ├── programs/             # プログラム詳細（BASIC/ACTIVE/PRIME/CONSULT/RECIPES/BOOST）
│   ├── fieldworks/           # 流派×勝ち筋×型フレームワーク
│   ├── people/               # 師範会・現場責任者・専門師範
│   ├── events/               # イベント・現場見学
│   ├── cases/                # 公開ケース
│   └── governance/           # ガバナンス・ポリシー
│
└── docs/internal/            # 運営内部資料（→ ドライブ）
    ├── LARK_FINAL_PLAN.md          # 【最新】Lark実装計画
    ├── LARK_CONTENT_STRATEGY.md    # 【重要】Wiki/ドライブ/Base使い分け戦略
    ├── OPERATIONS_HANDBOOK.md       # 運営ハンドブック
    ├── CASHFLOW_SIMULATION.md       # キャッシュフローシミュレーション
    └── archive/                     # 過去の調査資料
```

---

## 🚀 Lark構成

### Wiki（公開ナレッジベース）

**公開・会員向けドキュメント = Wiki管理**（手動更新、検索性・体系性重視）

```
📚 BAAO実戦AI道場 Wiki
├── 📖 01_About｜BAAOとは
├── 📖 02_Programs｜プログラム
├── 📖 03_FieldWorks｜流派×勝ち筋×型
├── 📖 04_People｜師範会・現場責任者
├── 📖 05_Events｜イベント・見学
└── 📖 06_Cases｜公開ケース
```

### Base（多次元表）

**構造化データ = Base管理**（MCP対応、検索・自動化）

- **会員管理Base**: members, payments, event_registrations
- **RECIPESベース**: recipes, cases
- **イベント管理Base**: events

### ドライブ（運営・動的ファイル）

**運営資料・MCP生成物 = ドライブ管理**（API操作可能）

```
📁 BAAO運営ドライブ
├── 📂 運営内部資料（Internal）
├── 📂 RECIPES詳細（PDF・スクリプト）
├── 📂 一時ドキュメント（MCP生成）
└── 📂 アーカイブ
```

### グループチャット

- **全体**: announcements, office-hours, introductions
- **BASIC会員**: 3チャット
- **ACTIVE会員**: 4チャット（流派別含む）
- **PRIME会員**: 3チャット
- **運営**: 2チャット

---

## 📝 ドキュメント状況

### ✅ Wikiへ移行済み（手動）

1. BAAOとは（`docs/ABOUT.md`）→ Wiki: 01_About
2. よくある質問（`docs/FAQ.md`）→ Wiki: 01_About
3. ガバナンス・ポリシー（`docs/governance/README.md`）→ Wiki: 01_About
4. 役割一覧（`docs/people/README.md`）→ Wiki: 04_People
5. プログラム概要（`docs/programs/README.md`）→ Wiki: 02_Programs

### 📋 Wiki移行待ち（手動）

6. FieldWorks概要（`docs/fieldworks/README.md`）→ Wiki: 03_FieldWorks
7. イベント運営ガイド（`docs/events/README.md`）→ Wiki: 05_Events
8. ケース公開プロセス（`docs/cases/README.md`）→ Wiki: 06_Cases

### 📂 ドライブ移行待ち（手動）

9. 運営ハンドブック（`docs/internal/OPERATIONS_HANDBOOK.md`）→ ドライブ: Internal
10. キャッシュフローシミュレーション（`docs/internal/CASHFLOW_SIMULATION.md`）→ ドライブ: Internal

---

## 🔧 技術スタック

| カテゴリ | ツール | 用途 |
|---------|-------|------|
| **プラットフォーム** | Lark | チャット・ドキュメント・Base・カレンダー・ビデオ会議 |
| **会員管理** | Lark Base | 会員情報、決済履歴、イベント参加記録 |
| **決済** | Stripe | サブスクリプション課金 |
| **MCP統合** | Claude Desktop | AI Agent経由の自動化 |
| **メール** | SendGrid | 通知・リマインダー |
| **連携** | Zapier/Make | Webhook連携 |

---

## 📊 会員階層

| 会員層 | 月額 | 年額 | アクセス範囲 |
|-------|------|------|------------|
| **BASIC** | ¥2,980 | ¥29,800 | 基本コンテンツ、Weekly |
| **ACTIVE** | ¥9,800 | ¥98,000 | 流派別チャット、月次イベント、過去アーカイブ |
| **PRIME** | - | ¥220,000 | 全コンテンツ、現場見学、師範会、全サービス20%割引 |

---

## 🛠️ 実装ロードマップ

### Phase 1: Lark基盤構築（Week 1）
- [x] Bot作成・権限設定完了
- [x] 既存5ドキュメントインポート完了
- [ ] ドライブフォルダ構造構築（8フォルダ）
- [ ] 残り5ドキュメントインポート

### Phase 2: 会員管理フロー（Week 2）
- [ ] Base（多次元表）構築（会員・RECIPES・イベント）
- [ ] グループチャット作成（15個）
- [ ] Stripe Webhook連携

### Phase 3: MCP統合（Week 3）
- [ ] カスタムMCPツール実装（5ツール）
- [ ] Claude Desktop統合テスト

### Phase 4: 運用開始（Week 4〜）
- [ ] βテスト（内部10名）
- [ ] 正式オープン

---

## 📚 重要ドキュメント

### 最新実装計画
- **[Lark最終実装計画](docs/internal/LARK_FINAL_PLAN.md)** - 最新の構成・ロードマップ
- **[Larkコンテンツ管理戦略](docs/internal/LARK_CONTENT_STRATEGY.md)** - 【重要】Wiki/ドライブ/Base使い分け

### 組織・ガバナンス
- **[BAAOとは](docs/ABOUT.md)** - 団体概要、ミッション、提供モデル
- **[ガバナンス・ポリシー](docs/governance/README.md)** - 守秘、公開、COI、倫理

### プログラム
- **[プログラム一覧](docs/programs/README.md)** - BASIC/ACTIVE/PRIME/CONSULT/RECIPES/BOOST
- **[FieldWorks](docs/fieldworks/README.md)** - 流派×勝ち筋×型フレームワーク

### 運営
- **[運営ハンドブック](docs/internal/OPERATIONS_HANDBOOK.md)** - 日次・週次・月次・四半期タスク
- **[財務シミュレーション](docs/internal/CASHFLOW_SIMULATION.md)** - Year 1-3キャッシュフロー

---

## 🔗 関連リンク

- **Lark Workspace**: [hjprobt9yo74.jp.larksuite.com](https://hjprobt9yo74.jp.larksuite.com)
- **Bot App ID**: `cli_a86bb5a982b85e1b`
- **Wiki Space ID**: `7557443138508295701`

---

## 📞 問い合わせ

- **事務局（世話人）**: TBD
- **技術担当**: k.sato@unson.jp

---

**最終更新**: 2025/10/05
