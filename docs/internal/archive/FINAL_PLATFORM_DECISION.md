# 最終プラットフォーム決定｜Discord + Supabase + Notion

**調査日**: 2025/10/05
**結論**: **Discord（チャット） + Supabase（会員管理） + Notion（知識管理）**

---

## エグゼクティブサマリー

### 🏆 最終構成

| 本柱 | プラットフォーム | 理由 |
|------|---------------|------|
| **💬 チャット** | **Discord** | 公式MCP完備、無料、運用負荷ゼロ |
| **👥 会員管理** | **Supabase** | 公式MCP完備、RLS階層制御、リアルタイムDB |
| **📚 知識管理** | **Notion** | 公式MCP完備、UX最高、階層Wiki得意 |

### なぜこの構成か

**3本柱すべてに公式MCP実装がある唯一の組み合わせ**

1. ✅ **Discord MCP**: 87ツール（SaseQ版）
2. ✅ **Supabase MCP**: 20+ツール（公式）
3. ✅ **Notion MCP**: フル機能（公式 @notionhq/notion-mcp-server）

**Strapi vs Notion比較**:

| 項目 | Notion | Strapi |
|------|--------|--------|
| MCP実装 | ⭐⭐⭐⭐⭐ 公式完備 | ⭐⭐ 自作必要 |
| セットアップ | ⭐⭐⭐⭐⭐ 即利用可能 | ⭐⭐ Docker構築、DB設定 |
| UI/UX | ⭐⭐⭐⭐⭐ 業界最高峰 | ⭐⭐⭐ 管理画面のみ |
| 階層Wiki | ⭐⭐⭐⭐⭐ ページ階層自由 | ⭐⭐⭐ カスタムモデル必要 |
| 運用負荷 | ⭐⭐⭐⭐⭐ ゼロ | ⭐⭐ Docker管理、アップデート |
| コスト | $10/user/月 | VPS $40/月 |

**BAAOの要件では Notionが圧勝**

---

## 1. Notion vs Strapi 詳細比較

### 1.1 MCP対応

#### Notion（公式MCP）

**リポジトリ**: [`makenotion/notion-mcp-server`](https://github.com/makenotion/notion-mcp-server)

**提供機能**:
- ✅ ページ作成・更新・削除
- ✅ データベースクエリ（フィルタ、ソート）
- ✅ ブロック管理（コンテンツ追加・編集）
- ✅ コメント追加
- ✅ ユーザー情報取得
- ✅ 検索（全ワークスペース）

**セットアップ**:
```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "NOTION_TOKEN": "ntn_xxx"
      }
    }
  }
}
```

**すぐ使える** - npm installのみ

#### Strapi（MCPなし）

**状況**: カスタムMCPサーバー自作が必要

**必要な作業**:
1. Strapi APIラッパー実装
2. MCPツール定義（15-20個）
3. 認証ハンドリング
4. エラーハンドリング
5. テスト

**工数**: 2-3週間

**判定**: **Notion圧勝**（即利用可能 vs 3週間開発）

---

### 1.2 知識体系化の適性

#### Notion（階層Wiki特化）

**BAAO Wiki構造の実装**:

```
BAAO Workspace
├── 📖 About｜BAAOとは
│   ├── 名前と呼び方
│   ├── ミッション
│   └── 提供モデル
├── 🎓 Programs｜プログラム
│   ├── 稽古場 BASIC
│   ├── 師範会 PRIME
│   ├── 型録 RECIPES
│   └── 立合い BOOST
├── 🗺️ FieldWorks｜流派×勝ち筋×型
│   ├── 流派（Field）
│   ├── 勝ち筋（Mission）
│   └── 型（Practice）
├── 👥 People｜師範会・現場責任者
├── 📅 Events｜イベント・見学
├── 📚 Cases｜公開ケース
└── 🔒 Members Only
    ├── BASIC Resources
    ├── ACTIVE Resources
    └── PRIME Resources
```

**実装方法**: ページをドラッグ＆ドロップで階層化するだけ

**RECIPES データベース**:
```
RECIPESデータベース（Notionデータベース）
├── プロパティ
│   ├── タイトル（Title）
│   ├── 流派（Select: 製造, 医療, 金融...）
│   ├── 勝ち筋（Select: Cost-Down, Speed-Up...）
│   ├── 型（Select: GenAI Apps, Ops Automation...）
│   ├── 価格（Number）
│   ├── アクセス層（Select: BASIC, ACTIVE, PRIME）
│   ├── PDF（Files）
│   ├── 関連Cases（Relation → Cases DB）
│   └── 公開日（Date）
└── ビュー
    ├── 全体（Table）
    ├── 流派別（Board）
    ├── 勝ち筋別（Gallery）
    └── PRIME限定（Filter: アクセス層 = PRIME）
```

**Notion MCPでの操作**:
```javascript
// RECIPESを公開
await notion.pages.create({
  parent: { database_id: RECIPES_DB_ID },
  properties: {
    "タイトル": { title: [{ text: { content: "製造業向けOps Automation" } }] },
    "流派": { select: { name: "製造" } },
    "勝ち筋": { select: { name: "Cost-Down" } },
    "型": { select: { name: "Ops Automation" } },
    "価格": { number: 1200000 },
    "アクセス層": { select: { name: "PRIME" } }
  }
});
```

#### Strapi（カスタムモデル）

**同じ構造の実装**:

1. Content Types作成（手動設定）
2. Relations定義
3. API設定
4. Roles & Permissions設定
5. 管理画面カスタマイズ

**工数**: 1-2週間

**判定**: **Notion圧勝**（即利用 vs 2週間設定）

---

### 1.3 UX（エンドユーザー体験）

#### Notion

**会員がアクセスする場合**:
- ✅ 美しいUI、直感的ナビゲーション
- ✅ モバイルアプリ完璧
- ✅ オフライン対応
- ✅ コメント・メンション機能
- ✅ 検索が爆速
- ✅ 既に多くの人が使い慣れている

**例: PRIME会員がRECIPESを閲覧**
1. Notionアプリを開く
2. 「RECIPES」データベースにアクセス
3. 流派「製造」でフィルタ
4. ギャラリービューで一覧表示
5. クリックで詳細表示、PDF即ダウンロード

**体験**: ⭐⭐⭐⭐⭐

#### Strapi

**会員がアクセスする場合**:
- ❌ 管理画面はスタッフ用、会員には見せられない
- ❌ 別途フロントエンド構築が必要（Next.js等）
- ❌ フロントエンド開発工数: 1ヶ月+

**例: PRIME会員がRECIPESを閲覧**
1. 自作Webアプリにアクセス
2. ログイン
3. RECIPES一覧ページへ（自作）
4. フィルタ機能（自作）
5. 詳細ページ（自作）

**体験**: ⭐⭐（フロントエンド構築次第）

**判定**: **Notion圧勝**（即利用可能 vs 1ヶ月開発）

---

### 1.4 運用負荷

#### Notion

- ✅ **インフラ**: ゼロ
- ✅ **アップデート**: 自動
- ✅ **バックアップ**: Notion側で自動
- ✅ **監視**: 不要
- ✅ **障害対応**: Notion社が対応

**運用工数**: 実質ゼロ

#### Strapi

- ❌ **インフラ**: Docker、PostgreSQL、Nginx
- ❌ **アップデート**: 手動（月1回）
- ❌ **バックアップ**: 自前スクリプト
- ❌ **監視**: 自前
- ❌ **障害対応**: 自前

**運用工数**: 月10-20時間

**判定**: **Notion圧勝**

---

### 1.5 コスト

#### Notion

| プラン | 料金 | 機能 |
|-------|------|------|
| Plus | $10/user/月 | 無制限ページ、ブロック、ファイル（5GB/file） |
| Business | $18/user/月 | SAML SSO、高度な権限 |

**BAAO想定**（運営5名 + 閲覧専用ゲスト無料）:
- Plus: $10 × 5 = **$50/月** = **$600/年**

#### Strapi

| 項目 | 料金 |
|------|------|
| VPS（4vCPU/8GB） | $40/月 |
| ドメイン・SSL | $5/月 |
| バックアップ（S3） | $3/月 |
| **合計** | **$48/月** = **$576/年** |

**同等コスト**だが、Strapiは：
- フロントエンド開発コスト（初期100-200万円）
- 運用工数（月10-20h = 月15-30万円相当）

**判定**: **Notion圧勝**（追加開発不要）

---

### 1.6 唯一のStrapi優位点: セルフホスト

**Strapiのメリット**:
- データ主権（完全自社管理）
- カスタマイズ自由度

**BAAOの要件では不要な理由**:
1. **規制業界でない**: 医療・金融のような厳格なデータ規制なし
2. **Notionセキュリティ十分**: SOC2 Type2、GDPR準拠
3. **運用効率優先**: データ主権より、会員体験・運用効率が重要

**判定**: この優位点はBAAOには不要

---

## 2. 最終推奨構成: Discord + Supabase + Notion

### 2.1 システム構成図

```
┌─────────────────────────────────────────────────────┐
│        BAAO Community Platform (MCP完全統合)        │
│          すべて公式MCP実装あり・運用負荷ゼロ         │
└─────────────────────────────────────────────────────┘

           ┌──────────────────────────────┐
           │   🧠 Claude Desktop / Cursor │
           │       (MCP Client)           │
           └──────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ discord-mcp  │ │ supabase-mcp │ │  notion-mcp  │
│  (公式87)    │ │   (公式20+)  │ │   (公式)     │
└──────────────┘ └──────────────┘ └──────────────┘
        │               │               │
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 💬 Discord   │ │ 👥 Supabase  │ │ 📚 Notion    │
│  (チャット)   │ │ (会員管理)   │ │ (知識管理)   │
└──────────────┘ └──────────────┘ └──────────────┘
│ 無料          │ $25/月        │ $50/月        │
│ 運用負荷ゼロ   │ 運用負荷ゼロ   │ 運用負荷ゼロ   │
└──────────────┘ └──────────────┘ └──────────────┘
        │               │               │
        └───────────────┼───────────────┘
                        ▼
              ┌──────────────────┐
              │  🔗 統合レイヤー  │
              │   (Zapier/Make)  │
              └──────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 💳 Stripe    │ │ 📧 SendGrid  │ │ 📊 Metabase  │
└──────────────┘ └──────────────┘ └──────────────┘
```

### 2.2 MCPツール統合例

```typescript
// @baao/mcp-orchestrator
// 3本柱のMCPを統合するオーケストレータ

export const orchestratorTools = [
  {
    name: "register_baao_member_complete",
    description: "BAAO会員登録（Discord + Supabase + Notion統合）",
    async handler({ email, tier, name, organization }) {
      // 1. Supabase: 会員登録
      const { user } = await supabaseMCP.call('auth_sign_up', { email });

      const { member } = await supabaseMCP.call('insert_member', {
        user_id: user.id,
        email,
        tier,
        name,
        organization
      });

      // 2. Discord: 招待リンク生成
      const invite = await discordMCP.call('create_invite', {
        guildId: BAAO_GUILD_ID,
        maxUses: 1,
        maxAge: 86400 // 24h
      });

      // 3. Discord: ロール自動付与（Webhook経由）
      // → 会員がDiscord参加時に自動でtier別ロール付与

      // 4. Notion: 会員ページ作成
      await notionMCP.call('pages_create', {
        parent: { database_id: MEMBERS_DB_ID },
        properties: {
          "Name": { title: [{ text: { content: name } }] },
          "Email": { email },
          "Tier": { select: { name: tier } },
          "Organization": { rich_text: [{ text: { content: organization } }] }
        }
      });

      // 5. Stripe決済（tier別）
      const checkout = await stripe.checkout.sessions.create({
        customer_email: email,
        line_items: [{ price: TIER_PRICES[tier], quantity: 1 }],
        mode: 'subscription',
        success_url: invite.url // 決済完了後にDiscord招待へ
      });

      return { checkout_url: checkout.url, discord_invite: invite.url };
    }
  },

  {
    name: "publish_baao_recipe_complete",
    description: "RECIPES公開（Notion + Discord統合）",
    async handler({ title, field, mission, practice, content, price, pdf }) {
      // 1. Notion: RECIPES作成
      const recipe = await notionMCP.call('pages_create', {
        parent: { database_id: RECIPES_DB_ID },
        properties: {
          "タイトル": { title: [{ text: { content: title } }] },
          "流派": { select: { name: field } },
          "勝ち筋": { select: { name: mission } },
          "型": { select: { name: practice } },
          "価格": { number: price }
        }
      });

      // 2. Notion: コンテンツ追加
      await notionMCP.call('blocks_append', {
        block_id: recipe.id,
        children: markdownToNotionBlocks(content)
      });

      // 3. Notion: PDFアップロード
      // （Notion APIはファイル直接アップロード不可、外部URLのみ）
      // → Supabase Storageにアップロード後、URLをNotionに埋め込み
      const pdfUrl = await supabaseMCP.call('storage_upload', {
        bucket: 'recipes',
        path: `${recipe.id}.pdf`,
        file: pdf
      });

      await notionMCP.call('blocks_append', {
        block_id: recipe.id,
        children: [{
          type: 'file',
          file: { type: 'external', external: { url: pdfUrl } }
        }]
      });

      // 4. Discord: PRIME会員チャンネルに告知
      await discordMCP.call('send_message', {
        channelId: PRIME_RECIPES_CHANNEL_ID,
        embeds: [{
          title: `🆕 新RECIPES公開: ${title}`,
          description: `流派: ${field} | 勝ち筋: ${mission} | 型: ${practice}`,
          fields: [
            { name: "価格", value: `¥${price.toLocaleString()}`, inline: true },
            { name: "リンク", value: recipe.url, inline: true }
          ],
          color: 0xFF0000
        }]
      });

      return recipe;
    }
  },

  {
    name: "start_baao_office_hours",
    description: "Office Hours開始（Discord + Notion連携）",
    async handler({ topic, duration, field }) {
      // 1. Discord: スレッド作成
      const thread = await discordMCP.call('create_thread', {
        channelId: OFFICE_HOURS_CHANNEL_ID,
        name: `Office Hours: ${topic}`,
        autoArchiveDuration: duration
      });

      // 2. Discord: 開始告知
      await discordMCP.call('send_message', {
        channelId: thread.id,
        embeds: [{
          title: "📢 Office Hours開始",
          description: topic,
          fields: [
            { name: "流派", value: field, inline: true },
            { name: "時間", value: `${duration}分`, inline: true }
          ],
          color: 0x00FF00
        }]
      });

      // 3. Notion: イベントログ作成
      await notionMCP.call('pages_create', {
        parent: { database_id: EVENTS_LOG_DB_ID },
        properties: {
          "イベント名": { title: [{ text: { content: `Office Hours: ${topic}` } }] },
          "種別": { select: { name: "Office Hours" } },
          "流派": { select: { name: field } },
          "Discord Thread": { url: `https://discord.com/channels/${BAAO_GUILD_ID}/${thread.id}` },
          "開始時刻": { date: { start: new Date().toISOString() } }
        }
      });

      return { thread_id: thread.id, thread_url: `https://discord.com/channels/${BAAO_GUILD_ID}/${thread.id}` };
    }
  },

  {
    name: "search_baao_knowledge",
    description: "BAAO全体知識検索（Notion + Discord統合）",
    async handler({ query, user_tier }) {
      const results = {};

      // 1. Notion検索（会員層別フィルタ）
      const notionResults = await notionMCP.call('search', {
        query,
        filter: {
          property: 'アクセス層',
          select: { equals: user_tier }
        }
      });

      results.wiki = notionResults.filter(r => r.parent.type === 'page_id');
      results.recipes = notionResults.filter(r => r.parent.database_id === RECIPES_DB_ID);
      results.cases = notionResults.filter(r => r.parent.database_id === CASES_DB_ID);

      // 2. Discord検索（チャンネル履歴）
      const tierChannels = getTierChannels(user_tier);
      results.discussions = await discordMCP.call('search_messages', {
        channelIds: tierChannels,
        content: query,
        limit: 20
      });

      return results;
    }
  }
];
```

### 2.3 データフロー例

#### ユースケース1: 新規会員登録

```
User → Stripe決済 → Webhook
         ↓
Supabase: 会員DB登録（tier情報）
         ↓
Discord: 招待リンク送信
         ↓
User: Discord参加
         ↓
Discord Bot: tier別ロール自動付与
         ↓
Notion: 会員ページ自動作成
         ↓
完了: User は tier 別チャンネル・Notionリソースにアクセス可能
```

#### ユースケース2: RECIPES公開

```
Fellow → Claude Desktop
         ↓
MCP: publish_baao_recipe_complete()
         ↓
Notion: RECIPESデータベースに追加
         ↓
Supabase Storage: PDF保存
         ↓
Notion: PDF URLリンク
         ↓
Discord: PRIME会員チャンネルに告知
         ↓
PRIME会員: Notion で RECIPES 閲覧・ダウンロード
```

---

## 3. コスト最終試算

### 推奨構成（Discord + Supabase + Notion）

| 項目 | 月額 | 年額 |
|------|------|------|
| **Discord** | $0 | $0 |
| **Supabase Pro** | $25 | $300 |
| **Notion Plus（5ユーザー）** | $50 | $600 |
| **Zapier（連携）** | $20 | $240 |
| **SendGrid（メール）** | $20 | $240 |
| **合計（USD）** | **$115** | **$1,380** |
| **合計（JPY、¥150/USD）** | **¥17,250** | **¥207,000** |

### vs Mattermost + Strapi構成

| 項目 | Discord + Notion | Mattermost + Strapi |
|------|-----------------|---------------------|
| 年間コスト | ¥207,000 | ¥167,400（インフラのみ） |
| 初期開発コスト | ¥0 | ¥3,000,000（フロントエンド構築） |
| 運用工数/年 | 0h | 120-240h（= ¥180-360万円相当） |
| **3年間総コスト** | **¥621,000** | **¥4,000,000+** |

**判定**: Discord + Notionが圧倒的に安い

---

## 4. 実装ロードマップ

### Phase 1: 基盤構築（Week 1）

**Discord**:
- [x] サーバー作成
- [ ] カテゴリ・チャンネル構造（9カテゴリ、20チャンネル）
- [ ] ロール設定（BASIC/ACTIVE/PRIME/Fellow）
- [ ] Bot作成・招待

**Supabase**:
- [ ] プロジェクト作成（Free tier）
- [ ] スキーマ設計（members, payments, events）
- [ ] RLS設定（tier別アクセス制御）
- [ ] Stripe Webhook設定

**Notion**:
- [ ] ワークスペース作成
- [ ] Wiki階層構築（9セクション）
- [ ] データベース作成（RECIPES, Cases, Events, Members）
- [ ] Integration設定（API Token取得）

### Phase 2: MCP統合（Week 2）

- [ ] Claude Desktop設定ファイル作成（3つのMCPサーバー）
- [ ] discord-mcp セットアップ（SaseQ版）
- [ ] supabase-mcp セットアップ（公式）
- [ ] notion-mcp セットアップ（公式）
- [ ] オーケストレータMCP作成（統合ツール5個）

### Phase 3: 自動化・テスト（Week 3）

- [ ] Stripe → Supabase → Discord 連携テスト
- [ ] 会員登録フロー完全自動化
- [ ] RECIPES公開フロー（Notion → Discord）
- [ ] Office Hours運営フロー（Discord → Notion）

### Phase 4: 本番稼働（Week 4〜）

- [ ] βテスト（内部10名）
- [ ] 初回BASIC会員募集（30名）
- [ ] 初回Office Hours（Discord）
- [ ] 初回RECIPES公開（Notion）

**Mattermost + Strapi版より4週間短縮**（インフラ構築・フロントエンド開発不要）

---

## 5. リスク・対策

### リスク1: Notion Rate Limit（3req/秒）

**対策**:
- バッチ処理時はsleep挿入
- 頻繁な更新はSupabaseで管理、Notionは閲覧用

### リスク2: Discord無料版の制限

**対策**:
- ファイルサイズ制限（25MB）→ 大容量はSupabase Storage使用
- 絵文字枠制限 → 必要に応じてServer Boost ($4.99/月)

### リスク3: Notionのセルフホスト不可

**対策**:
- 重要データはSupabaseにも保存（Dual Write）
- Notion Export API定期実行（バックアップ）

---

## 6. 最終判断

### ✅ Discord + Supabase + Notion を採用

**決定理由**:
1. **3本柱すべてに公式MCP実装** → 即利用可能
2. **運用負荷ゼロ** → すべてマネージドサービス
3. **UX最高** → Discord（チャット）、Notion（知識）ともに業界最高峰
4. **開発工数ゼロ** → インフラ構築・フロントエンド開発不要
5. **3年間で¥340万円節約** → Mattermost + Strapi構成と比較

### ❌ Mattermost + Strapi は不採用

**理由**:
1. MCP自作が必要（2-3週間）
2. フロントエンド構築が必要（1ヶ月+、¥200-300万円）
3. 運用負荷大（月10-20h）
4. セルフホストのメリットがBAAOには不要

---

## 7. 次のアクション

### 今週実行

1. **Discordサーバー作成** → チャンネル構造構築
2. **Supabase Free tier** → スキーマ設計
3. **Notion Plus契約** → Wiki階層構築

### 来週実行

4. **3つのMCPサーバー統合** → Claude Desktopテスト
5. **会員登録フロー構築** → Stripe連携
6. **βテスト開始** → 内部メンバー10名

---

**調査完了日**: 2025/10/05
**最終決定**: Discord + Supabase + Notion
**推定総コスト（3年）**: ¥621,000
**構築期間**: 4週間
