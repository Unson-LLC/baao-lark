# MCP化可能なコミュニティ基盤の分析｜2025年版

**調査日**: 2025/10/05
**目的**: AI Agentから直接操作可能な（MCP化可能な）コミュニティ基盤の選定
**前提**: Larkは技術的制約（Wiki Bot権限なし、API制限）によりMCP化に不向きと判明

---

## エグゼクティブサマリー

**結論**: **Supabase + Strapi/Directus のヘッドレス構成**が最もMCP化に適している。

**理由**:
1. **公式MCPサーバー完備**: Supabase、Notion、Discordは公式MCP実装あり
2. **完全なAPI制御**: Strapi/Directusは全機能がAPI経由で操作可能
3. **セルフホスト可能**: データ主権を保ちつつ、カスタムMCPサーバー構築が可能
4. **拡張性**: コミュニティ規模拡大に応じて柔軟にスケール

---

## 1. MCP化適性スコアボード

| プラットフォーム | 公式MCP | API完全性 | 認証柔軟性 | セルフホスト | カスタマイズ性 | 総合スコア |
|-----------------|---------|---------|-----------|------------|--------------|-----------|
| **Supabase** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | **4.8** |
| **Strapi** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | **4.4** |
| **Directus** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | **4.6** |
| **Notion** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐⭐⭐ | **3.2** |
| **Discord** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐⭐ | **3.8** |
| **Discourse** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | **4.0** |
| **Flarum** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | **3.6** |
| **Lark** | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ | **1.8** |

---

## 2. 各プラットフォームのMCP化分析

### 2.1 Supabase ⭐⭐⭐⭐⭐（最有力候補）

#### 公式MCPサーバーの詳細

**リポジトリ**: [`supabase-community/supabase-mcp`](https://github.com/supabase-community/supabase-mcp)

**提供ツール**: 20+種類
- プロジェクト管理: 作成、設定、ブランチ管理
- データベース設計: テーブル作成、スキーマ管理、マイグレーション生成
- データ操作: SQL実行（Read/Write）、リアルタイムクエリ
- 認証管理: ユーザー管理、RLS（Row Level Security）設定
- ログ・デバッグ: プロジェクトログ取得

**認証方式**:
- OAuth（推奨）- トークン管理不要
- Personal Access Token（PAT）- 従来方式

**セキュリティベストプラクティス（2025）**:
- ❌ 本番環境への直接接続は避ける
- ✅ Read-Only モード使用（本番データ参照が必要な場合）
- ✅ プロジェクトスコープ限定（特定プロジェクトのみアクセス可能）

#### BAAOへの適用シナリオ

```typescript
// カスタムMCPサーバー例: BAAO会員登録
{
  "name": "baao_register_member",
  "description": "BAAO会員を登録（BASIC/ACTIVE/PRIME）",
  "inputSchema": {
    "type": "object",
    "properties": {
      "email": "string",
      "tier": "enum[BASIC, ACTIVE, PRIME]",
      "payment_method": "enum[stripe, bank_transfer]"
    }
  },
  // Supabase MCP経由でusersテーブルにINSERT
  // + Auth.signUp() 実行
  // + Stripe連携（tier別料金）
}
```

**コスト**:
- Free tier: 500MB DB、2GBファイルストレージ、50,000 MAU（月間アクティブユーザー）
- Pro tier: $25/月 - 8GB DB、100GB転送、100,000 MAU
- セルフホスト: 無料（インフラコストのみ）

---

### 2.2 Strapi（オープンソースCMS）⭐⭐⭐⭐⭐

#### API完全性

**すべてがAPI**: Content Type、ユーザー、権限、メディア、全てREST/GraphQL経由

**公式APIエンドポイント例**:
```
POST   /api/members                    # 会員登録
GET    /api/members?filters[tier]=PRIME # PRIME会員一覧
POST   /api/events                      # イベント作成
GET    /api/recipes?populate=*          # RECIPES取得（リレーション含む）
PUT    /api/members/:id                 # 会員情報更新
DELETE /api/cases/:id                   # ケース削除
```

#### カスタムMCPサーバー構築例

```javascript
// tools/baao-strapi-mcp/index.js
import Anthropic from '@anthropic-ai/sdk';
import axios from 'axios';

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export const tools = [
  {
    name: "create_baao_member",
    description: "BAAOメンバーを作成（tier: BASIC/ACTIVE/PRIME）",
    input_schema: {
      type: "object",
      properties: {
        email: { type: "string" },
        name: { type: "string" },
        tier: { type: "string", enum: ["BASIC", "ACTIVE", "PRIME"] },
        organization: { type: "string" }
      },
      required: ["email", "name", "tier"]
    }
  },
  {
    name: "list_upcoming_events",
    description: "今後のBAAOイベント一覧を取得",
    input_schema: {
      type: "object",
      properties: {
        limit: { type: "number", default: 10 },
        event_type: { type: "string", enum: ["BASIC", "PRIME", "Visits"] }
      }
    }
  },
  {
    name: "publish_case_study",
    description: "ケーススタディを公開（匿名化処理込み）",
    input_schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" },
        anonymize: { type: "boolean", default: true },
        field: { type: "string" },
        mission: { type: "string" }
      }
    }
  }
];

// ツール実行ハンドラ
export async function handleToolCall(toolName, toolInput) {
  const api = axios.create({
    baseURL: STRAPI_URL,
    headers: { 'Authorization': `Bearer ${STRAPI_TOKEN}` }
  });

  switch (toolName) {
    case "create_baao_member":
      return await api.post('/api/members', { data: toolInput });

    case "list_upcoming_events":
      const { limit, event_type } = toolInput;
      return await api.get('/api/events', {
        params: {
          'filters[date][$gte]': new Date().toISOString(),
          'filters[type][$eq]': event_type,
          'pagination[limit]': limit,
          'sort': 'date:asc'
        }
      });

    case "publish_case_study":
      // 匿名化処理
      if (toolInput.anonymize) {
        toolInput.content = anonymizeContent(toolInput.content);
      }
      return await api.post('/api/cases', { data: toolInput });
  }
}
```

#### MCPサーバー設定（Claude Desktop）

```json
{
  "mcpServers": {
    "baao-strapi": {
      "command": "node",
      "args": ["/path/to/baao-strapi-mcp/index.js"],
      "env": {
        "STRAPI_URL": "https://cms.baao.jp",
        "STRAPI_API_TOKEN": "your_token_here"
      }
    }
  }
}
```

**コスト**:
- セルフホスト: 無料（VPS $10-50/月程度）
- Strapi Cloud: $99/月〜（Enterprise向け）

---

### 2.3 Directus（データプラットフォーム）⭐⭐⭐⭐⭐

#### 特徴: 既存DB上にAPI層を構築

**アーキテクチャ**:
```
既存PostgreSQL/MySQL
    ↓
Directus APIレイヤー（自動生成）
    ↓
REST/GraphQL/WebSocket
    ↓
カスタムMCPサーバー
```

#### BAAOデータモデル例

```sql
-- 既存のPostgreSQLスキーマ
CREATE TABLE members (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  tier VARCHAR CHECK (tier IN ('BASIC', 'ACTIVE', 'PRIME')),
  created_at TIMESTAMP
);

CREATE TABLE events (
  id UUID PRIMARY KEY,
  title VARCHAR,
  event_type VARCHAR,
  date TIMESTAMP,
  capacity INT
);

CREATE TABLE recipes (
  id UUID PRIMARY KEY,
  title VARCHAR,
  field VARCHAR,
  practice VARCHAR,
  content JSONB
);
```

Directusをインストールすると、**自動的に**これらのテーブル用のAPIが生成される：
- `GET /items/members`
- `POST /items/events`
- `PATCH /items/recipes/:id`

#### カスタムMCPサーバー（Directus版）

```python
# baao-directus-mcp/server.py
from mcp.server import Server, Tool
import httpx

DIRECTUS_URL = "https://cms.baao.jp"
DIRECTUS_TOKEN = "your_token"

server = Server("baao-directus")

@server.tool()
async def create_member(email: str, tier: str, name: str):
    """BAAO会員を作成"""
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{DIRECTUS_URL}/items/members",
            headers={"Authorization": f"Bearer {DIRECTUS_TOKEN}"},
            json={"email": email, "tier": tier, "name": name}
        )
        return response.json()

@server.tool()
async def get_prime_members():
    """PRIME会員一覧を取得"""
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{DIRECTUS_URL}/items/members",
            headers={"Authorization": f"Bearer {DIRECTUS_TOKEN}"},
            params={"filter": {"tier": {"_eq": "PRIME"}}}
        )
        return response.json()
```

**コスト**:
- セルフホスト: 無料
- Directus Cloud: $15/user/月〜

---

### 2.4 Notion（公式MCP完備）⭐⭐⭐⭐

#### 公式MCPサーバー

**リポジトリ**: [`makenotion/notion-mcp-server`](https://github.com/makenotion/notion-mcp-server)

**提供機能**:
- ページ作成・更新・削除
- データベースクエリ
- ブロック管理
- コメント機能
- ユーザー管理

**セットアップ**:
```json
{
  "mcpServers": {
    "notionApi": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "NOTION_TOKEN": "ntn_****"
      }
    }
  }
}
```

**制約**:
- セルフホスト不可（Notion SaaSのみ）
- カスタマイズ性低い（APIの範囲内のみ）
- 会員管理機能はネイティブサポートなし

**適用シナリオ**: 知識管理層（Wiki、RECIPES）のみ

---

### 2.5 Discord（公式MCP複数あり）⭐⭐⭐⭐

#### MCPサーバー実装例

**リポジトリ**:
- [`v-3/discordmcp`](https://github.com/v-3/discordmcp)
- [`SaseQ/discord-mcp`](https://github.com/SaseQ/discord-mcp)

**提供機能**:
- メッセージ送信・取得・削除
- チャンネル作成・管理
- サーバー情報取得
- リアクション追加
- スレッド管理

**BAAOへの適用**:
```javascript
// Office Hours自動運営
{
  name: "conduct_office_hours",
  description: "Office Hoursセッションを実施",
  async execute() {
    // 1. 専用チャンネル作成
    await discord.createChannel("office-hours-2025-10-05");

    // 2. 質問収集メッセージ送信
    await discord.sendMessage(channelId, "本日のOffice Hoursを開始します。質問を投稿してください。");

    // 3. 質問にリアクションでトリアージ
    const questions = await discord.getMessages(channelId);
    for (const q of questions) {
      await discord.addReaction(q.id, "👍"); // 優先度高
      await discord.addReaction(q.id, "👀"); // 検討中
    }
  }
}
```

**制約**:
- カジュアルな印象（BAAOのブランドと不一致の可能性）
- 会員管理はRole機能のみ（階層制御は可能だが柔軟性低い）

**適用シナリオ**: コミュニケーション層（Office Hours、カジュアルQ&A）

---

### 2.6 Discourse（フォーラム特化）⭐⭐⭐⭐

#### API完全性

**全機能がAPI経由**: トピック、投稿、ユーザー、カテゴリ、タグ、通知

**エンドポイント例**:
```
GET    /categories.json                # カテゴリ一覧
POST   /topics.json                     # トピック作成
GET    /t/{topic_id}.json               # トピック詳細
POST   /posts.json                      # 投稿
PUT    /posts/{post_id}.json            # 投稿編集
GET    /users/{username}.json           # ユーザー情報
POST   /admin/users/{id}/suspend.json   # ユーザー停止
```

#### カスタムMCPサーバー例

```typescript
// baao-discourse-mcp
const tools = [
  {
    name: "create_discussion_topic",
    description: "BAAO流派別ディスカッショントピックを作成",
    input_schema: {
      category_id: "number", // 流派別カテゴリID
      title: "string",
      raw: "string", // Markdown本文
      tags: "array" // ["製造", "Cost-Down"]
    }
  },
  {
    name: "summarize_weekly_discussions",
    description: "週次ディスカッションをサマリー化",
    async execute() {
      const topics = await discourse.getTopics({
        category: "weekly-ai",
        from: lastWeek,
        to: today
      });

      // Claude APIで要約生成
      const summary = await claude.messages.create({
        model: "claude-sonnet-4-5",
        messages: [{
          role: "user",
          content: `以下のトピックを要約:\n${topics.map(t => t.title).join('\n')}`
        }]
      });

      // 要約をNotionに保存
      await notion.pages.create({
        parent: { database_id: weeklyReportsDB },
        properties: { title: "週次ディスカッション要約" },
        children: [{ type: "paragraph", paragraph: { text: summary } }]
      });
    }
  }
];
```

**コスト**:
- セルフホスト: 無料（VPS $20-100/月）
- Discourse Hosting: $100/月〜

**市場シェア**: 32.92%（フォーラムソフトウェア市場）

---

### 2.7 Flarum（軽量フォーラム）⭐⭐⭐

#### 特徴

- PHP製、シンプル軽量
- REST API提供
- 拡張プラグイン豊富

#### MCP化の課題

- 公式MCPサーバーなし（自作必要）
- API仕様がDiscourseほど網羅的でない
- 市場シェア0.07%（コミュニティ小さい）

**判定**: Discourseに劣る

---

### 2.8 Lark（検証済み・不適）❌

#### 判明した制約

1. **Wiki API制限**:
   - BotはWiki空間メンバーになれない
   - `wiki/v2/spaces/{space_id}/nodes` APIは数値space_id必須
   - 権限エラー: "wiki space permission denied, tenant needs edit permission"

2. **MCP実装の困難さ**:
   - 公式MCPサーバーなし
   - コミュニティ実装もなし
   - 複雑な権限モデル（Bot/User/Tenant権限の分離）

3. **API設計の不完全性**:
   - ドキュメント作成はDriveのみ（Wiki不可）
   - バルク操作に制限多い

**結論**: MCP化には**不適**

---

## 3. 推奨アーキテクチャ

### 🏆 最終推奨: **Supabase + Strapi ハイブリッドMCP構成**

#### 構成図

```
┌─────────────────────────────────────────────────────────┐
│                  BAAO Community Platform                 │
│                    (MCP Native Design)                   │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  🗄️ Supabase（データ＋認証層）                           │
│  ├── PostgreSQL: 会員、イベント、トランザクション        │
│  ├── Auth: Email/Magic Link/OAuth（Stripe連携）         │
│  ├── Realtime: イベント参加状況のリアルタイム更新        │
│  ├── Storage: RECIPESファイル、ケース添付資料            │
│  └── 公式MCPサーバー: 20+ツール                          │
│                                                           │
│  📝 Strapi（CMS＋知識層）                                │
│  ├── Content Types: RECIPES、Cases、Wiki Pages          │
│  ├── Media Library: 画像、PDF、動画                      │
│  ├── Workflows: ケース公開承認フロー                     │
│  ├── Roles & Permissions: BASIC/ACTIVE/PRIME制御        │
│  └── カスタムMCPサーバー（自作）                         │
│                                                           │
│  💬 Discord（コミュニケーション層・オプション）           │
│  ├── Office Hours専用チャンネル                          │
│  ├── 流派別ディスカッション                              │
│  └── 公式MCPサーバー（コミュニティ実装）                 │
│                                                           │
│  🧠 Claude Desktop / Cursor（MCP Client）               │
│  ├── baao-supabase-mcp（公式）                          │
│  ├── baao-strapi-mcp（自作）                            │
│  ├── baao-discord-mcp（コミュニティ版）                 │
│  └── notion-mcp（参照用・公式）                         │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

#### 役割分担

| レイヤー | 担当 | 理由 |
|---------|------|------|
| **データ＋認証** | Supabase | 公式MCP完備、RLS（Row Level Security）で会員階層制御 |
| **CMS＋知識体系** | Strapi | API完全性、カスタムMCP構築容易、日本語対応 |
| **リアルタイム通信** | Discord（オプション） | MCP実装あり、Office Hours・カジュアルQ&A向け |
| **静的知識** | Notion（参照用） | 既存ドキュメント活用、公式MCP利用 |

#### カスタムMCPツール例（BAAO専用）

```javascript
// @baao/mcp-server/tools.js
export const tools = [
  // 1. 会員管理
  {
    name: "register_baao_member",
    description: "BAAO会員を登録し、Stripe決済セットアップ",
    handler: async ({ email, tier, payment_method }) => {
      // Supabase MCP: ユーザー作成
      const user = await supabase.auth.signUp({ email });

      // Supabase MCP: membersテーブルに挿入
      await supabase.from('members').insert({
        user_id: user.id,
        tier,
        payment_method,
        status: 'pending_payment'
      });

      // Stripe API: Checkout Session作成
      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        line_items: [{ price: TIER_PRICE_IDS[tier], quantity: 1 }],
        mode: 'subscription'
      });

      return { checkout_url: session.url };
    }
  },

  // 2. イベント管理
  {
    name: "create_baao_event",
    description: "BAAOイベントを作成（BASIC/PRIME/Visits）",
    handler: async ({ title, event_type, date, capacity }) => {
      // Strapi MCP: イベント作成
      const event = await strapi.post('/api/events', {
        data: { title, event_type, date, capacity }
      });

      // Supabase MCP: event_registrationsテーブル作成
      await supabase.from('event_registrations').insert({
        event_id: event.id,
        max_capacity: capacity,
        current_count: 0
      });

      // Discord MCP: イベント告知
      await discord.sendMessage(ANNOUNCEMENT_CHANNEL, {
        embeds: [{
          title: `📅 新イベント: ${title}`,
          description: `日時: ${date}\n定員: ${capacity}名`,
          url: `https://baao.jp/events/${event.id}`
        }]
      });

      return event;
    }
  },

  // 3. RECIPES公開
  {
    name: "publish_recipe",
    description: "RECIPESを公開（Field × Mission × Practice）",
    handler: async ({ title, field, mission, practice, content }) => {
      // Strapi MCP: RECIPES作成
      const recipe = await strapi.post('/api/recipes', {
        data: {
          title,
          field,      // 流派
          mission,    // 勝ち筋
          practice,   // 型
          content,
          status: 'published'
        }
      });

      // Notion MCP: ナレッジベースにミラーリング
      await notion.pages.create({
        parent: { database_id: RECIPES_DB_ID },
        properties: {
          Title: { title: [{ text: { content: title } }] },
          Field: { select: { name: field } },
          Mission: { select: { name: mission } },
          Practice: { select: { name: practice } }
        },
        children: markdownToNotionBlocks(content)
      });

      return recipe;
    }
  },

  // 4. ケース分析
  {
    name: "analyze_case_for_publication",
    description: "ケースを分析し、匿名化版を生成",
    handler: async ({ case_id, anonymization_level }) => {
      // Strapi MCP: ケース取得
      const caseData = await strapi.get(`/api/cases/${case_id}?populate=*`);

      // Claude API: 匿名化処理
      const anonymized = await claude.messages.create({
        model: "claude-sonnet-4-5",
        messages: [{
          role: "user",
          content: `以下のケースを${anonymization_level}レベルで匿名化:\n${caseData.content}`
        }]
      });

      // Strapi MCP: 匿名化版を保存
      const published = await strapi.post('/api/cases', {
        data: {
          ...caseData,
          content: anonymized.content[0].text,
          original_case_id: case_id,
          anonymization_level,
          status: 'published'
        }
      });

      return published;
    }
  },

  // 5. 週次レポート生成
  {
    name: "generate_weekly_report",
    description: "週次アクティビティレポートを自動生成",
    handler: async ({ week_start, week_end }) => {
      // Supabase MCP: 週次データ取得
      const newMembers = await supabase.from('members')
        .select('*')
        .gte('created_at', week_start)
        .lte('created_at', week_end);

      const events = await strapi.get('/api/events', {
        params: {
          'filters[date][$gte]': week_start,
          'filters[date][$lte]': week_end
        }
      });

      const discussions = await discord.getMessages(DISCUSSION_CHANNEL, {
        after: week_start,
        before: week_end
      });

      // Claude API: レポート生成
      const report = await claude.messages.create({
        model: "claude-sonnet-4-5",
        messages: [{
          role: "user",
          content: `以下のデータから週次レポートを生成:
            - 新規会員: ${newMembers.length}名
            - イベント: ${events.data.length}件
            - ディスカッション: ${discussions.length}件`
        }]
      });

      // Notion MCP: レポート保存
      await notion.pages.create({
        parent: { database_id: WEEKLY_REPORTS_DB },
        properties: {
          Week: { title: [{ text: { content: `${week_start} - ${week_end}` } }] }
        },
        children: markdownToNotionBlocks(report.content[0].text)
      });

      return report;
    }
  }
];
```

#### MCPサーバー設定（Claude Desktop）

```json
{
  "mcpServers": {
    "baao-platform": {
      "command": "node",
      "args": ["/path/to/baao-mcp-server/index.js"],
      "env": {
        "SUPABASE_URL": "https://xxx.supabase.co",
        "SUPABASE_ANON_KEY": "eyJ...",
        "STRAPI_URL": "https://cms.baao.jp",
        "STRAPI_API_TOKEN": "xxx",
        "DISCORD_BOT_TOKEN": "xxx",
        "NOTION_TOKEN": "ntn_xxx",
        "STRIPE_SECRET_KEY": "sk_xxx",
        "CLAUDE_API_KEY": "sk-ant-xxx"
      }
    }
  }
}
```

---

## 4. 実装ロードマップ

### Phase 1: 基盤構築（Week 1-2）

**Supabase**:
- [ ] プロジェクト作成
- [ ] スキーマ設計: members, events, registrations, recipes, cases
- [ ] RLS（Row Level Security）設定: BASIC/ACTIVE/PRIMEの階層制御
- [ ] Auth設定: Email + Magic Link

**Strapi**:
- [ ] セルフホストセットアップ（Docker推奨）
- [ ] Content Types作成: RECIPES, Cases, Wiki Pages
- [ ] Roles設定: BASIC, ACTIVE, PRIME, Admin
- [ ] API Token生成

### Phase 2: MCPサーバー開発（Week 3-4）

- [ ] `@baao/mcp-server` パッケージ作成
- [ ] Supabase公式MCPサーバー統合
- [ ] Strapiカスタムツール実装（5つの基本ツール）
- [ ] Claude Desktop設定ファイル作成

### Phase 3: テスト＆統合（Week 5-6）

- [ ] 会員登録フロー検証（MCP経由）
- [ ] イベント作成→Discord通知の自動化
- [ ] RECIPES公開→Notionミラーリング
- [ ] ケース匿名化パイプライン

### Phase 4: 拡張機能（Week 7-8）

- [ ] Discord MCPサーバー追加（Office Hours自動化）
- [ ] 週次レポート自動生成
- [ ] 分析ダッシュボード（Supabase Studio使用）
- [ ] Stripe Webhook統合（決済→会員ステータス更新）

### Phase 5: 本番リリース（Week 9〜）

- [ ] セキュリティ監査
- [ ] パフォーマンステスト（100会員想定）
- [ ] ドキュメント整備
- [ ] 正式運用開始

---

## 5. コスト比較

### 推奨構成（Supabase + Strapi）

| 項目 | 月額 | 年額 |
|------|------|------|
| Supabase Pro | $25 | $300 |
| VPS（Strapi用、2vCPU/4GB） | $20 | $240 |
| Discord（無料） | $0 | $0 |
| **合計** | **$45** | **$540** |

**円換算**: 約¥6,750/月、**¥81,000/年**

### 代替案: マネージドサービス

| 項目 | 月額 | 年額 |
|------|------|------|
| Supabase Pro | $25 | $300 |
| Strapi Cloud | $99 | $1,188 |
| **合計** | **$124** | **$1,488** |

**円換算**: 約¥18,600/月、**¥223,200/年**

### Lark（参考・不採用）

| 項目 | 月額 | 年額 |
|------|------|------|
| Lark Standard（5ユーザー） | $0 | $0 |
| 追加ストレージ | $0 | $0 |
| **MCP実装コスト** | ❌ | ❌ 不可 |

---

## 6. リスク＆対策

### リスク1: カスタムMCPサーバーの保守コスト

**対策**:
- TypeScript + 自動テストで品質担保
- 公式MCPサーバー（Supabase/Notion）を優先活用
- Strapiツールは最小限（5-10個）に絞る

### リスク2: Supabase無料枠超過

**対策**:
- 会員数50名到達前にPro移行（$25/月）
- ファイルストレージはS3/Cloudflare R2併用検討

### リスク3: MCP仕様の変更

**対策**:
- Anthropic公式仕様を定期確認
- MCPコミュニティ（Discord）参加

---

## 7. 次のアクション

### 即座に実行（今週）

1. **Supabaseプロジェクト作成**: Free tierで開始
2. **Strapiローカルセットアップ**: Docker Compose使用
3. **基本スキーマ設計**: members, events, recipesテーブル

### 2週間以内

4. **カスタムMCPサーバーのPoC**: 1つのツール（register_member）を実装
5. **Claude Desktop統合テスト**: 実際にClaude経由で会員登録
6. **意思決定**: この構成で進めるか最終確認

---

## 8. 参考リソース

### 公式ドキュメント

- Supabase MCP: https://supabase.com/docs/guides/getting-started/mcp
- Notion MCP: https://developers.notion.com/docs/mcp
- Strapi API: https://docs.strapi.io/dev-docs/api/rest
- MCP仕様: https://spec.modelcontextprotocol.io/

### GitHub

- Supabase MCP: https://github.com/supabase-community/supabase-mcp
- Discord MCP: https://github.com/v-3/discordmcp
- Strapi: https://github.com/strapi/strapi

### コミュニティ

- MCP Discord: https://discord.gg/mcp (Anthropic公式)
- Supabase Discord: https://discord.supabase.com
- Strapi Discord: https://discord.strapi.io

---

**調査完了日**: 2025/10/05
**推奨構成**: Supabase + Strapi ハイブリッドMCP
**次回更新**: PoC完了後（2週間後目安）
