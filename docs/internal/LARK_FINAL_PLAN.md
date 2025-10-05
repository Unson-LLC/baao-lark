# Lark実装計画｜BAAO実戦AI道場

**決定日**: 2025/10/05
**プラットフォーム**: Lark（飛書/Feishu）
**方針**: ドライブ中心運用、Wiki制約を回避

---

## エグゼクティブサマリー

### 採用理由

Larkは以下の理由で最終的に採用：
1. **オールインワン統合**: チャット・ドキュメント・カレンダー・ビデオ会議が1つに
2. **既存投資**: すでにBot作成済み、権限設定完了、MCP統合調査済み
3. **日本語完全対応**: UI・サポート含め完全日本語対応
4. **無料プランで十分**: 18ヶ月履歴、100GBストレージ

### 判明した制約と対策

| 制約 | 対策 |
|------|------|
| ❌ BotはWiki空間メンバーになれない | ✅ **ドライブ中心運用**に切り替え |
| ❌ Wiki MCP実装なし | ✅ ドキュメントをドライブ管理、MCPで操作可能 |
| ❌ API権限が複雑 | ✅ 必要な権限をすでに付与済み |

---

## 1. Lark構成設計

### 1.1 Wiki構造（公開ナレッジベース）

**公開・会員向けドキュメント = Wiki管理**（手動更新、検索性・体系性重視）

```
📚 BAAO実戦AI道場 Wiki
│
├── 📖 01_About｜BAAOとは
│   ├── 📄 BAAOとは
│   ├── 📄 よくある質問
│   └── 📄 ガバナンス・ポリシー
│
├── 📖 02_Programs｜プログラム
│   ├── 📄 プログラム概要（OVERVIEW）
│   ├── 📄 稽古場BASIC
│   ├── 📄 稽古場ACTIVE
│   ├── 📄 師範会PRIME
│   ├── 📄 型録RECIPES
│   ├── 📄 AIコンサルCONSULT
│   └── 📄 立合いBOOST
│
├── 📖 03_FieldWorks｜流派×勝ち筋×型
│   └── 📄 FieldWorks概要（統合ページ）
│
├── 📖 04_People｜師範会・現場責任者
│   └── 📄 役割一覧
│
├── 📖 05_Events｜イベント・見学
│   └── 📄 イベント運営ガイド
│
└── 📖 06_Cases｜公開ケース
    └── 📄 ケース公開プロセス
```

### 1.2 ドライブ構造（運営・動的ファイル）

**運営資料・MCP生成物 = ドライブ管理**（API操作可能）

```
📁 BAAO運営ドライブ
│
├── 📂 運営内部資料（Internal）
│   ├── 📄 LARK_FINAL_PLAN.docx
│   ├── 📄 LARK_CONTENT_STRATEGY.docx
│   ├── 📄 運営ハンドブック.docx
│   ├── 📄 キャッシュフローシミュレーション.docx
│   └── 📂 議事録
│
├── 📂 RECIPES詳細（PDF・スクリプト）
│   ├── 📁 製造_Cost-Down_OpsAutomation
│   │   ├── 📄 実装手順書.pdf
│   │   ├── 📄 プロンプト集.md
│   │   └── 📎 サンプルスクリプト.py
│   └── ...
│
├── 📂 一時ドキュメント（MCP生成）
│   ├── 📄 会員レポート_2025Q1.docx（MCP自動生成）
│   ├── 📄 Office Hours議事録_20250310.docx
│   └── ...
│
└── 📂 アーカイブ
    └── 過去の調査資料など
```

### 1.3 Base（多次元表）構造

**構造化データ = Base管理**（MCP対応、検索・自動化）

- **会員管理Base**: members, payments, event_registrations
- **RECIPESベース**: recipes, cases
- **イベント管理Base**: events

詳細は[LARK_CONTENT_STRATEGY.md](LARK_CONTENT_STRATEGY.md)を参照。

### 1.4 グループチャット構造

```
🏛️ 全体
├── 📢 announcements（お知らせ）
├── 💡 office-hours（Office Hours）
└── 🤝 introductions（自己紹介）

🟢 BASIC会員
├── 💬 basic-lounge
├── 📚 basic-resources
└── ❓ basic-qa

🟡 ACTIVE会員
├── 💼 active-lounge
├── 🏭 field-manufacturing（製造の流派）
├── 🏥 field-healthcare（医療の流派）
└── 💰 field-finance（金融の流派）

🔴 PRIME会員
├── 👑 prime-council（師範会）
├── 👀 visits（現場見学）
└── 🎯 executive-session

🛠️ 運営
├── 🛡️ admin-only
└── 📊 analytics
```


---

## 2. Lark MCP統合アプローチ

### 2.1 利用可能なMCP機能

現在のLark MCP（`mcp__lark__*`）で可能な操作：

**ドキュメント**:
- ✅ `docx_builtin_import`: Markdownからドキュメント作成（ドライブ）
- ✅ `docx_v1_document_rawContent`: ドキュメント本文取得
- ✅ `docx_builtin_search`: ドキュメント検索

**Base（多次元表）**:
- ✅ `bitable_v1_app_create`: Base作成
- ✅ `bitable_v1_appTable_create`: テーブル作成
- ✅ `bitable_v1_appTableField_list`: フィールド一覧
- ✅ `bitable_v1_appTableRecord_create`: レコード作成
- ✅ `bitable_v1_appTableRecord_search`: レコード検索
- ✅ `bitable_v1_appTableRecord_update`: レコード更新

**チャット**:
- ✅ `im_v1_chat_create`: グループチャット作成
- ✅ `im_v1_chat_list`: グループチャット一覧
- ✅ `im_v1_chatMembers_get`: メンバー一覧
- ✅ `im_v1_message_create`: メッセージ送信
- ✅ `im_v1_message_list`: チャット履歴取得

**ユーザー**:
- ✅ `contact_v3_user_batchGetId`: メール/電話からユーザーID取得

### 2.2 カスタムMCPツール設計

```typescript
// @baao/lark-mcp/tools.ts
export const baaoLarkTools = [
  {
    name: "register_baao_member_to_lark",
    description: "BAAO会員をLarkに登録",
    async handler({ email, tier, name, organization, field }) {
      // 1. Larkユーザー検索（既存確認）
      const user = await larkMCP.call('contact_v3_user_batchGetId', {
        emails: [email]
      });

      // 2. 会員Baseにレコード追加
      const member = await larkMCP.call('bitable_v1_appTableRecord_create', {
        app_token: MEMBERS_BASE_TOKEN,
        table_id: MEMBERS_TABLE_ID,
        data: {
          fields: {
            "氏名": name,
            "メール": email,
            "会員層": tier,
            "組織": organization,
            "専門分野": field,
            "Lark User ID": user.user_id,
            "ステータス": "active",
            "登録日": new Date().toISOString()
          }
        }
      });

      // 3. 会員層別グループチャットに追加
      const tierChats = await getTierChats(tier);
      for (const chatId of tierChats) {
        await addMemberToChat(chatId, user.user_id);
      }

      // 4. ウェルカムメッセージ送信
      await larkMCP.call('im_v1_message_create', {
        receive_id: user.user_id,
        receive_id_type: 'user_id',
        msg_type: 'text',
        content: JSON.stringify({
          text: `BAAO実戦AI道場へようこそ！\n会員層: ${tier}\n専門分野: ${field}`
        })
      });

      return { member, user };
    }
  },

  {
    name: "publish_baao_recipe_to_lark",
    description: "RECIPESをLarkドライブ＋Baseに公開",
    async handler({ title, field, mission, practice, content, price, pdf }) {
      // 1. ドキュメント作成（ドライブ）
      const doc = await larkMCP.call('docx_builtin_import', {
        data: {
          markdown: content,
          file_name: `${field}_${mission}_${practice}`
        },
        useUAT: true
      });

      // 2. RECIPESBaseにレコード追加
      const recipe = await larkMCP.call('bitable_v1_appTableRecord_create', {
        app_token: RECIPES_BASE_TOKEN,
        table_id: RECIPES_TABLE_ID,
        data: {
          fields: {
            "タイトル": title,
            "流派": field,
            "勝ち筋": mission,
            "型": practice,
            "価格": price,
            "ドキュメント": doc.url,
            "アクセス層": "PRIME", // デフォルトPRIME限定
            "公開日": new Date().toISOString()
          }
        }
      });

      // 3. PRIME会員チャットに告知
      await larkMCP.call('im_v1_message_create', {
        receive_id: PRIME_CHAT_ID,
        receive_id_type: 'chat_id',
        msg_type: 'interactive',
        content: JSON.stringify({
          elements: [
            {
              tag: "div",
              text: {
                tag: "lark_md",
                content: `**🆕 新RECIPES公開**\n\n**${title}**\n\n流派: ${field} | 勝ち筋: ${mission} | 型: ${practice}\n価格: ¥${price.toLocaleString()}\n\n[📄 ドキュメントを開く](${doc.url})`
              }
            }
          ]
        })
      });

      return { recipe, doc };
    }
  },

  {
    name: "start_baao_office_hours_in_lark",
    description: "Larkで Office Hours セッション開始",
    async handler({ topic, duration, field }) {
      // 1. Office Hours専用チャットでスレッド開始メッセージ
      const message = await larkMCP.call('im_v1_message_create', {
        receive_id: OFFICE_HOURS_CHAT_ID,
        receive_id_type: 'chat_id',
        msg_type: 'interactive',
        content: JSON.stringify({
          elements: [
            {
              tag: "div",
              text: {
                tag: "lark_md",
                content: `**📢 Office Hours 開始**\n\n**トピック**: ${topic}\n**流派**: ${field}\n**時間**: ${duration}分\n\n質問をこのスレッドに投稿してください 👇`
              }
            }
          ]
        })
      });

      // 2. イベントBaseに記録
      await larkMCP.call('bitable_v1_appTableRecord_create', {
        app_token: EVENTS_BASE_TOKEN,
        table_id: EVENTS_TABLE_ID,
        data: {
          fields: {
            "タイトル": `Office Hours: ${topic}`,
            "イベント種別": "OfficeHours",
            "日時": new Date().toISOString(),
            "流派": field,
            "Larkメッセージ": message.message_id
          }
        }
      });

      return { message_id: message.message_id };
    }
  },

  {
    name: "search_baao_knowledge_in_lark",
    description: "Lark全体から知識検索（ドキュメント＋Base＋チャット）",
    async handler({ query, user_tier }) {
      const results = {};

      // 1. ドキュメント検索
      results.documents = await larkMCP.call('docx_builtin_search', {
        data: { search_key: query },
        useUAT: true
      });

      // 2. RECIPESベース検索（tier別フィルタ）
      const tierFilter = getTierAccessFilter(user_tier); // BASIC, ACTIVE, PRIME
      results.recipes = await larkMCP.call('bitable_v1_appTableRecord_search', {
        app_token: RECIPES_BASE_TOKEN,
        table_id: RECIPES_TABLE_ID,
        data: {
          filter: {
            conditions: [
              { field_name: "タイトル", operator: "contains", value: [query] },
              { field_name: "アクセス層", operator: "is", value: tierFilter }
            ],
            conjunction: "and"
          }
        }
      });

      // 3. チャット履歴検索（tier別チャンネル）
      const tierChats = await getTierChats(user_tier);
      results.discussions = [];
      for (const chatId of tierChats) {
        const messages = await larkMCP.call('im_v1_message_list', {
          params: {
            container_id: chatId,
            container_id_type: 'chat'
          }
        });
        // メッセージ内容でフィルタ（簡易実装）
        results.discussions.push(
          ...messages.items.filter(m => m.body.content.includes(query))
        );
      }

      return results;
    }
  },

  {
    name: "update_member_tier_in_lark",
    description: "会員層変更（Base更新＋チャット権限変更）",
    async handler({ member_id, old_tier, new_tier }) {
      // 1. 会員Base更新
      await larkMCP.call('bitable_v1_appTableRecord_update', {
        app_token: MEMBERS_BASE_TOKEN,
        table_id: MEMBERS_TABLE_ID,
        record_id: member_id,
        data: {
          fields: {
            "会員層": new_tier
          }
        }
      });

      // 2. 旧tierチャットから削除
      const oldChats = await getTierChats(old_tier);
      const memberRecord = await getMemberRecord(member_id);
      const userId = memberRecord.fields["Lark User ID"];

      for (const chatId of oldChats) {
        await removeMemberFromChat(chatId, userId);
      }

      // 3. 新tierチャットに追加
      const newChats = await getTierChats(new_tier);
      for (const chatId of newChats) {
        await addMemberToChat(chatId, userId);
      }

      // 4. 通知メッセージ
      await larkMCP.call('im_v1_message_create', {
        receive_id: userId,
        receive_id_type: 'user_id',
        msg_type: 'text',
        content: JSON.stringify({
          text: `会員層が ${old_tier} から ${new_tier} に変更されました 🎉`
        })
      });

      return { success: true };
    }
  }
];
```

---

## 3. 実装ロードマップ

### Phase 1: Lark基盤構築（Week 1）

**Wiki構造**（手動作成）:
- [ ] Wiki空間に6セクション作成
- [ ] 既存5ドキュメントをWikiにコピー（移行済み）
- [ ] 残り3ドキュメントをWikiにコピー（FieldWorks、Events、Cases）
- [ ] プログラム個別ページ作成（BASIC/ACTIVE/PRIME/RECIPES/CONSULT/BOOST）

**Base（多次元表）構築**（MCP）:
- [x] 会員管理Base作成（members/payments/event_registrations）
- [x] RECIPESベース作成（recipes/cases）
- [x] イベント管理Base作成（events）

**ドライブ整理**（手動）:
- [ ] 運営フォルダ作成
- [ ] 内部資料4件を移動（LARK計画2つ、運営ハンドブック、キャッシュフロー）

**グループチャット**（MCP）:
- [x] 全体チャット3個作成
- [x] BASIC会員チャット3個
- [x] ACTIVE会員チャット4個
- [x] PRIME会員チャット3個
- [x] 運営チャット2個

### Phase 2: 会員管理フロー構築（Week 2）

- [ ] Stripe Webhook → Lark連携
- [ ] 会員登録時の自動処理:
  1. 会員Baseにレコード追加
  2. tier別チャットに自動追加
  3. ウェルカムメッセージ送信
- [ ] 会員層変更時の自動処理:
  1. Baseレコード更新
  2. チャット権限変更
  3. 通知送信

### Phase 3: MCP統合（Week 3）

- [ ] Claude Desktop設定
- [ ] カスタムMCPツール実装（上記5ツール）
- [ ] Lark公式MCPツール統合
- [ ] テスト実行

### Phase 4: 運用開始（Week 4〜）

- [ ] βテスト（内部10名）
- [ ] ドキュメント・FAQ整備
- [ ] 初回BASIC会員募集
- [ ] 正式オープン

---

## 4. ドキュメント整理タスク

### ✅ Wikiへ移行済み（手動）

1. BAAOとは（`docs/ABOUT.md`）→ Wiki: 01_About
2. よくある質問（`docs/FAQ.md`）→ Wiki: 01_About
3. ガバナンス・ポリシー（`docs/governance/README.md`）→ Wiki: 01_About
4. 役割一覧（`docs/people/README.md`）→ Wiki: 04_People
5. プログラム概要（`docs/programs/OVERVIEW.md`）→ Wiki: 02_Programs

### 📋 Wiki移行待ち（手動）

6. [ ] FieldWorks概要（`docs/fieldworks/README.md`）→ Wiki: 03_FieldWorks（統合ページ）
7. [ ] イベント運営ガイド（`docs/events/README.md`）→ Wiki: 05_Events
8. [ ] ケース公開プロセス（`docs/cases/README.md`）→ Wiki: 06_Cases

### 📋 プログラム個別ページ（Wiki手動作成）

9. [ ] BASIC（`docs/programs/BASIC.md`）→ Wiki: 02_Programs/BASIC
10. [ ] ACTIVE（`docs/programs/ACTIVE.md`）→ Wiki: 02_Programs/ACTIVE
11. [ ] PRIME（`docs/programs/PRIME.md`）→ Wiki: 02_Programs/PRIME
12. [ ] RECIPES（`docs/programs/RECIPES.md`）→ Wiki: 02_Programs/RECIPES
13. [ ] CONSULT（`docs/programs/CONSULT.md`）→ Wiki: 02_Programs/CONSULT
14. [ ] BOOST（`docs/programs/BOOST.md`）→ Wiki: 02_Programs/BOOST

### 📂 ドライブ移行待ち（手動）

15. [ ] LARK_FINAL_PLAN.md → ドライブ: Internal
16. [ ] LARK_CONTENT_STRATEGY.md → ドライブ: Internal
17. [ ] 運営ハンドブック（`docs/internal/OPERATIONS_HANDBOOK.md`）→ ドライブ: Internal
18. [ ] キャッシュフローシミュレーション（`docs/internal/CASHFLOW_SIMULATION.md`）→ ドライブ: Internal

---

## 5. コスト試算

### Lark無料プラン

| 項目 | 無料プラン | 備考 |
|------|----------|------|
| チャット履歴 | 18ヶ月 | 十分 |
| ストレージ | 100GB | 十分（会員100名想定） |
| ビデオ会議 | 60分/回 | Office Hours対応可 |
| Base（多次元表） | 無制限 | ✅ |
| ユーザー数 | 無制限 | ✅ |

**月額コスト**: **¥0**

### 追加サービス

| 項目 | 月額 | 年額 |
|------|------|------|
| Stripe手数料（3.6%） | 会員収入による | - |
| SendGrid（メール） | $20 | $240 |
| Zapier（連携） | $20 | $240 |
| **合計** | **$40** | **$480** |

**年間総コスト**: **¥72,000**（Stripe除く）

---

## 6. リスク・対策

### リスク1: Wiki機能の制約

**制約**: BotがWiki空間メンバーになれない、MCP実装なし

**対策**: ✅ Wikiは手動管理、公開ナレッジベースとして活用

### リスク2: ドキュメント権限管理の複雑さ

**対策**:
- Wiki: 空間全体で会員層別アクセス制御
- Base: アクセス層フィールドで管理
- ドライブ: 運営メンバーのみアクセス

### リスク3: MCPカスタム実装の保守

**対策**:
- 公式MCPツールを最大限活用
- カスタムツールは最小限（5-10個）

---

## 7. 次のアクション

### 今週実行

1. **Wiki構造整備** - 残り3ドキュメント＋プログラム個別ページをWikiにコピー
2. **ドライブ整理** - 運営フォルダ作成、内部資料4件移動
3. **Base構築開始** - 会員管理Base作成（MCP経由）

### 来週実行

4. **Base完成** - RECIPES・イベント管理Base作成
5. **グループチャット作成** - 15チャット（MCP経由）
6. **カスタムMCPツール実装** - 5ツール

---

**更新日**: 2025/10/05
**決定**: Larkで進める
**次回更新**: Phase 1完了後（1週間後）
