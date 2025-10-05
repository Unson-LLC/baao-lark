# Lark実装計画｜Lark Implementation Plan

> BAAOコミュニティのLark実装における具体的な手順とMCPコマンド

**対象**: 理事・Program GM

**前提**: Larkワークスペースが作成済み、App認証情報が取得済み

**更新**: 2025/10/05

---

## 事前準備

### 1. Larkワークスペース作成

**手順**:
1. https://www.larksuite.com/ にアクセス
2. 「無料で始める」をクリック
3. ワークスペース名: **BAAO実戦AI道場**
4. 管理者アカウント設定（理事代表のメールアドレス）
5. ワークスペースURL確認（例: baao-dojo.larksuite.com）

### 2. Lark Custom App作成

**手順**:
1. Lark管理画面 → 「開発者」→「アプリ」→ 「カスタムアプリを作成」
2. アプリ名: **BAAO MCP Bot**
3. アプリ説明: **BAAOコミュニティ管理用Bot**
4. 必要な権限を付与:
   - **Wiki**: 読み取り・書き込み・管理
   - **グループチャット**: 作成・管理・メッセージ送信
   - **ユーザー管理**: ユーザー情報読み取り
   - **Base（Bitable）**: 読み取り・書き込み

### 3. 認証情報の取得

**必要な情報**:
- **App ID**: アプリ識別子
- **App Secret**: アプリシークレット
- **User Access Token**: ユーザー認証トークン（Wiki・グループチャット操作用）
- **Tenant Access Token**: テナント認証トークン（管理操作用）

**環境変数設定**:
```bash
export LARK_APP_ID="cli_xxxxx"
export LARK_APP_SECRET="xxxxx"
export LARK_USER_ACCESS_TOKEN="u-xxxxx"
export LARK_TENANT_ACCESS_TOKEN="t-xxxxx"
```

---

## Phase 1: Wiki空間とドキュメント作成

### Step 1: Wikiノード検索（既存確認）

まず、既存のWikiノードを確認します。

```javascript
// Wiki検索
mcp__lark__wiki_v1_node_search({
  data: {
    query: "BAAO"
  },
  useUAT: true
});
```

### Step 2: BAAOドキュメントのインポート

Markdownファイルを新規ドキュメントとしてインポートします。

#### 2-1. BAAOとは（ABOUT.md）

```javascript
// ファイルを読み込み
const aboutContent = fs.readFileSync('./docs/ABOUT.md', 'utf8');

// Larkドキュメントとしてインポート
mcp__lark__docx_builtin_import({
  data: {
    markdown: aboutContent,
    file_name: "BAAOとは"
  },
  useUAT: true
});
```

#### 2-2. よくある質問（FAQ.md）

```javascript
const faqContent = fs.readFileSync('./docs/FAQ.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: faqContent,
    file_name: "よくある質問"
  },
  useUAT: true
});
```

#### 2-3. ガバナンス・ポリシー（governance/README.md）

```javascript
const governanceContent = fs.readFileSync('./docs/governance/README.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: governanceContent,
    file_name: "ガバナンス・ポリシー"
  },
  useUAT: true
});
```

#### 2-4. 役割一覧（people/README.md）

```javascript
const peopleContent = fs.readFileSync('./docs/people/README.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: peopleContent,
    file_name: "役割一覧"
  },
  useUAT: true
});
```

#### 2-5. プログラム概要（programs/README.md）

```javascript
const programsContent = fs.readFileSync('./docs/programs/README.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: programsContent,
    file_name: "プログラム概要"
  },
  useUAT: true
});
```

#### 2-6. FieldWorks概要（fieldworks/README.md）

```javascript
const fieldworksContent = fs.readFileSync('./docs/fieldworks/README.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: fieldworksContent,
    file_name: "FieldWorks概要"
  },
  useUAT: true
});
```

#### 2-7. イベント運営ガイド（events/README.md）

```javascript
const eventsContent = fs.readFileSync('./docs/events/README.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: eventsContent,
    file_name: "イベント運営ガイド"
  },
  useUAT: true
});
```

#### 2-8. ケース公開プロセス（cases/README.md）

```javascript
const casesContent = fs.readFileSync('./docs/cases/README.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: casesContent,
    file_name: "ケース公開プロセス"
  },
  useUAT: true
});
```

#### 2-9. 運営ハンドブック（internal/OPERATIONS_HANDBOOK.md）

```javascript
const opsContent = fs.readFileSync('./docs/internal/OPERATIONS_HANDBOOK.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: opsContent,
    file_name: "運営ハンドブック"
  },
  useUAT: true
});
```

#### 2-10. キャッシュフローシミュレーション（internal/CASHFLOW_SIMULATION.md）

```javascript
const cashflowContent = fs.readFileSync('./docs/internal/CASHFLOW_SIMULATION.md', 'utf8');

mcp__lark__docx_builtin_import({
  data: {
    markdown: cashflowContent,
    file_name: "キャッシュフローシミュレーション"
  },
  useUAT: true
});
```

### Step 3: ドキュメントの整理とフォルダ構造作成

インポート後、Lark UI上で手動でフォルダ構造を作成します：

```
BAAO Wiki
├── 📘 はじめに
│   ├── BAAOとは
│   ├── よくある質問
│   └── ガバナンス・ポリシー
│
├── 👥 組織・役割
│   └── 役割一覧
│
├── 🎯 プログラム
│   └── プログラム概要
│
├── 🏭 FieldWorks
│   └── FieldWorks概要
│
├── 📅 イベント
│   └── イベント運営ガイド
│
├── 📊 ケース
│   └── ケース公開プロセス
│
└── 🔒 内部資料
    ├── 運営ハンドブック
    └── キャッシュフローシミュレーション
```

---

## Phase 2: グループチャット作成

### Step 1: 運営グループチャット作成

#### 1-1. BAAO理事会

```javascript
mcp__lark__im_v1_chat_create({
  data: {
    name: "BAAO理事会",
    description: "経営判断、重要事項決定",
    chat_type: "private",
    user_id_list: [
      "ou_理事1_open_id",
      "ou_理事2_open_id",
      "ou_理事3_open_id",
      "ou_ProgramGM_open_id"
    ]
  },
  params: {
    user_id_type: "open_id"
  }
});
```

#### 1-2. BAAO運営

```javascript
mcp__lark__im_v1_chat_create({
  data: {
    name: "BAAO運営",
    description: "日次運営、タスク管理",
    chat_type: "private",
    user_id_list: [
      "ou_理事1_open_id",
      "ou_理事2_open_id",
      "ou_理事3_open_id",
      "ou_ProgramGM_open_id",
      "ou_CM1_open_id",
      "ou_CM2_open_id",
      "ou_事務局_open_id"
    ]
  },
  params: {
    user_id_type: "open_id"
  }
});
```

#### 1-3. Field Directors

```javascript
mcp__lark__im_v1_chat_create({
  data: {
    name: "Field Directors",
    description: "Field間調整、案件配分",
    chat_type: "private",
    user_id_list: [
      "ou_Healthcare_FD_open_id",
      "ou_Manufacturing_FD_open_id",
      "ou_Finance_FD_open_id",
      "ou_Public_FD_open_id",
      "ou_RetailCX_FD_open_id",
      "ou_MediaIP_FD_open_id",
      "ou_ProgramGM_open_id",
      "ou_CM1_open_id"
    ]
  },
  params: {
    user_id_type: "open_id"
  }
});
```

### Step 2: Fieldグループチャット作成（6個）

#### 2-1. Healthcare Field

```javascript
mcp__lark__im_v1_chat_create({
  data: {
    name: "Healthcare Field",
    description: "Healthcare業界の議論グループ",
    chat_type: "private",
    user_id_list: [
      "ou_Healthcare_FD_open_id"
      // Senior Fellow、Fellow、PRIME会員は後から追加
    ]
  },
  params: {
    user_id_type: "open_id"
  }
});
```

同様に以下を作成：
- Manufacturing Field
- Finance Field
- Public Field
- Retail & CX Field
- Media & IP Field

### Step 3: 会員グループチャット作成

#### 3-1. PRIME会員

```javascript
mcp__lark__im_v1_chat_create({
  data: {
    name: "PRIME会員",
    description: "PRIME会員限定の交流グループ",
    chat_type: "private",
    user_id_list: [
      "ou_理事1_open_id",
      "ou_ProgramGM_open_id",
      "ou_CM1_open_id",
      "ou_CM2_open_id"
      // PRIME会員は登録時に追加
    ]
  },
  params: {
    user_id_type: "open_id"
  }
});
```

#### 3-2. イベント告知

```javascript
mcp__lark__im_v1_chat_create({
  data: {
    name: "イベント告知",
    description: "イベント告知専用（投稿制限）",
    chat_type: "public", // 全会員が閲覧可能
    user_id_list: [
      "ou_CM1_open_id",
      "ou_CM2_open_id"
    ]
  },
  params: {
    user_id_type: "open_id"
  }
});
```

---

## Phase 3: アクセス権限設定

### Step 1: ドキュメント権限設定

#### 1-1. 公開ドキュメント（BASIC会員以上）

```javascript
// BAAOとは、FAQ、ガバナンス、役割、プログラム、イベント
const publicDocs = [
  "doc_BAAOとは_token",
  "doc_FAQ_token",
  "doc_ガバナンス_token",
  "doc_役割_token",
  "doc_プログラム_token",
  "doc_イベント_token"
];

// BASIC会員グループに閲覧権限付与
publicDocs.forEach(docToken => {
  mcp__lark__drive_v1_permissionMember_create({
    path: { token: docToken },
    params: { type: "docx" },
    data: {
      member_type: "groupid",
      member_id: "group_BASIC_id",
      perm: "view"
    }
  });
});
```

#### 1-2. ACTIVE会員以上（FieldWorks、ケース）

```javascript
const activeDocs = [
  "doc_FieldWorks_token",
  "doc_ケース_token"
];

// ACTIVE会員グループに閲覧権限付与
activeDocs.forEach(docToken => {
  mcp__lark__drive_v1_permissionMember_create({
    path: { token: docToken },
    params: { type: "docx" },
    data: {
      member_type: "groupid",
      member_id: "group_ACTIVE_id",
      perm: "view"
    }
  });
});
```

#### 1-3. 内部資料（理事・運営のみ）

```javascript
const internalDocs = [
  "doc_運営ハンドブック_token",
  "doc_キャッシュフロー_token"
];

// 理事グループに編集権限付与
internalDocs.forEach(docToken => {
  mcp__lark__drive_v1_permissionMember_create({
    path: { token: docToken },
    params: { type: "docx" },
    data: {
      member_type: "groupid",
      member_id: "group_Council_id",
      perm: "full_access"
    }
  });
});

// Program GMに編集権限付与
internalDocs.forEach(docToken => {
  mcp__lark__drive_v1_permissionMember_create({
    path: { token: docToken },
    params: { type: "docx" },
    data: {
      member_type: "openid",
      member_id: "ou_ProgramGM_open_id",
      perm: "full_access"
    }
  });
});

// CMに閲覧権限付与（運営ハンドブックのみ）
mcp__lark__drive_v1_permissionMember_create({
  path: { token: "doc_運営ハンドブック_token" },
  params: { type: "docx" },
  data: {
    member_type: "openid",
    member_id: "ou_CM1_open_id",
    perm: "view"
  }
});
```

### Step 2: Community Manager権限設定

CMには以下の権限を付与：
- 公開ドキュメント: 編集権限
- 内部資料: 閲覧権限（運営ハンドブックのみ、キャッシュフローは不可）
- 全グループチャット: 管理者権限

```javascript
// 公開ドキュメントに編集権限付与
publicDocs.forEach(docToken => {
  mcp__lark__drive_v1_permissionMember_create({
    path: { token: docToken },
    params: { type: "docx" },
    data: {
      member_type: "openid",
      member_id: "ou_CM1_open_id",
      perm: "edit"
    }
  });

  mcp__lark__drive_v1_permissionMember_create({
    path: { token: docToken },
    params: { type: "docx" },
    data: {
      member_type: "openid",
      member_id: "ou_CM2_open_id",
      perm: "edit"
    }
  });
});
```

---

## Phase 4: Baseテーブル作成（会員管理・案件管理）

### Step 1: 会員管理Base作成

```javascript
// Base App作成
mcp__lark__bitable_v1_app_create({
  data: {
    name: "BAAO会員管理",
    folder_token: "folder_運営_token"
  }
});

// 会員テーブル作成
mcp__lark__bitable_v1_appTable_create({
  path: { app_token: "app_会員管理_token" },
  data: {
    table: {
      name: "会員一覧",
      default_view_name: "全会員",
      fields: [
        {
          field_name: "会員ID",
          type: 1, // Text
          ui_type: "Text"
        },
        {
          field_name: "氏名",
          type: 1,
          ui_type: "Text"
        },
        {
          field_name: "メールアドレス",
          type: 1,
          ui_type: "Text"
        },
        {
          field_name: "会員種別",
          type: 3, // SingleSelect
          ui_type: "SingleSelect",
          property: {
            options: [
              { name: "BASIC" },
              { name: "ACTIVE" },
              { name: "PRIME" }
            ]
          }
        },
        {
          field_name: "登録日",
          type: 5, // DateTime
          ui_type: "DateTime"
        },
        {
          field_name: "Lark Open ID",
          type: 1,
          ui_type: "Text"
        }
      ]
    }
  }
});
```

### Step 2: 案件管理Base作成

```javascript
// 案件テーブル作成
mcp__lark__bitable_v1_appTable_create({
  path: { app_token: "app_会員管理_token" },
  data: {
    table: {
      name: "案件一覧",
      default_view_name: "進行中",
      fields: [
        {
          field_name: "案件ID",
          type: 1,
          ui_type: "Text"
        },
        {
          field_name: "案件名",
          type: 1,
          ui_type: "Text"
        },
        {
          field_name: "Field",
          type: 3,
          ui_type: "SingleSelect",
          property: {
            options: [
              { name: "Healthcare" },
              { name: "Manufacturing" },
              { name: "Finance" },
              { name: "Public" },
              { name: "Retail & CX" },
              { name: "Media & IP" }
            ]
          }
        },
        {
          field_name: "Field Director",
          type: 11, // User
          ui_type: "User"
        },
        {
          field_name: "案件タイプ",
          type: 3,
          ui_type: "SingleSelect",
          property: {
            options: [
              { name: "Lead" },
              { name: "Delegated" }
            ]
          }
        },
        {
          field_name: "GCV",
          type: 2, // Number
          ui_type: "Number"
        },
        {
          field_name: "COGS",
          type: 2,
          ui_type: "Number"
        },
        {
          field_name: "NSR",
          type: 20, // Formula
          ui_type: "Formula",
          property: {
            formula_expression: "GCV - COGS"
          }
        },
        {
          field_name: "PF",
          type: 20,
          ui_type: "Formula",
          property: {
            formula_expression: "NSR * 0.18"
          }
        },
        {
          field_name: "CP",
          type: 20,
          ui_type: "Formula",
          property: {
            formula_expression: "NSR - PF"
          }
        },
        {
          field_name: "ステータス",
          type: 3,
          ui_type: "SingleSelect",
          property: {
            options: [
              { name: "提案中" },
              { name: "進行中" },
              { name: "完了" },
              { name: "中止" }
            ]
          }
        }
      ]
    }
  }
});
```

---

## Phase 5: 自動化・通知設定

### メッセージ送信（イベント告知例）

```javascript
mcp__lark__im_v1_message_create({
  params: {
    receive_id_type: "chat_id"
  },
  data: {
    receive_id: "chat_イベント告知_id",
    msg_type: "interactive",
    content: JSON.stringify({
      elements: [
        {
          tag: "div",
          text: {
            content: "**【BASIC Live開催のお知らせ】**\n\n日時: 2025/10/10（木）19:00-20:00\nテーマ: AIプロジェクトの始め方\n講師: Healthcare Field Director 佐藤太郎\n\n参加リンク: https://baao-dojo.larksuite.com/live/xxxxx",
            tag: "lark_md"
          }
        }
      ]
    })
  }
});
```

---

## まとめ: 実装チェックリスト

### Phase 1: Wiki作成
- [ ] 公開ドキュメント8件インポート完了
- [ ] 内部資料2件インポート完了
- [ ] フォルダ構造整理完了

### Phase 2: グループチャット作成
- [ ] 運営グループ3件作成完了
- [ ] Fieldグループ6件作成完了
- [ ] 会員グループ2件作成完了

### Phase 3: アクセス権限設定
- [ ] BASIC会員権限設定完了
- [ ] ACTIVE会員権限設定完了
- [ ] PRIME会員権限設定完了
- [ ] CM権限設定完了
- [ ] FD権限設定完了

### Phase 4: Base作成
- [ ] 会員管理Base作成完了
- [ ] 案件管理Base作成完了

### Phase 5: テスト
- [ ] テストユーザーで動作確認完了
- [ ] 権限テスト完了
- [ ] メッセージ送信テスト完了

---

## 次のステップ

1. Larkワークスペース作成
2. Custom App作成・認証情報取得
3. 本ドキュメントに従って実装
4. テストユーザーで動作確認
5. 本番運用開始

---

## 変更履歴

- **2025/10/05**: 初版作成（Lark実装計画、MCPコマンド例）
