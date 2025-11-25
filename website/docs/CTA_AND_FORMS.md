# CTA & Forms｜AI道場公式サイト

主要CTAとフォーム項目を定義する。共通トップとペルソナLPからの導線が増えたため、エントリーポイントにペルソナページを追記し、Formspree・MA連携の前提条件を整理する。

## 1. CTA一覧

| CTA名称 | ペルソナ | 目的 | エントリーポイント |
|---------|----------|------|---------------------|
| 無料稽古ライブ参加登録 | Operators / DX Leads / Fellows候補 | 週次ライブ視聴、オープンチャット招待 | Home Hero、Home Free Live、`/dx-leads`、`/operators`、Resources/Events |
| オープンチャット参加 | 無料会員・興味層 | 継続接点 + ナーチャリング | 無料稽古サンクス、Resources（Events）、メール通知 |
| 企業向け相談（PRIME/BOOST） | Executives / DX Leads | 四半期内の伴随相談・ROI試算 | Home CTA、`/executives`、`/dx-leads`、Programs（PRIME/BOOST）、Success Stories、Join |
| 資料ダウンロード（FieldWorks / プラン比較） | Executives / DX Leads | 稟議資料・社内共有 | `/executives`、`/dx-leads`、Programs、Resources/Downloads |
| 体験会・現場見学予約 | DX Leads / Fellows | コミュニティ体験・案件想起 | Home Events、Resources/Events、`/fellows` |
| BASIC月謝プラン申込 | Operators | アーカイブとLarkを活用した定着 | `/operators`、Programs（BASIC/ACTIVE）、Join |
| ACTIVE月謝プラン申込 | DX Leads / Operators | 上位プラン（全文検索、ドラフト閲覧） | `/dx-leads`、Programs、Join |
| PRIME相談 | Executives | クローズドコミュニティ・役員向け伴随 | `/executives`、Programs、Success Stories、Join |
| BOOST見積 | DX Leads | KPI可視化プロジェクト見積 | `/dx-leads`、Programs、Success Stories、Join |
| RECIPES購入相談 | DX Leads | Playbook購入、横展開支援 | Programs、Resources、Persona LP
| Fellow応募 | Fellows候補 | コミュニティ参画・案件参画 | Home CTA、`/fellows`、Communityページ、Join |
| 案件相談（現Fellow向け） | Fellows | Delegated案件アサイン | `/fellows`、Communityページ、Join |
| メディア問い合わせ | Field Director / Senior Fellow / メディア | 取材・登壇・Yearbook掲載 | Success Stories、`/fellows`、Resources |
| ニュースレター登録 | 全ペルソナ | 継続的な接点獲得 | フッター、Resources |

### 1.1 Joinページ セクションアンカー

| アンカーID | 対応フォーム / 目的 | 備考 |
|-----------|----------------------|------|
| `#free-live` | 無料稽古ライブ登録 | ペルソナLP（DX Leads / Operators）から直接スクロール |
| `#enterprise` | 企業向け相談（PRIME/BOOST/CONSULT） | Executives, DX Leads, Fellowsの案件相談誘導 |
| `#basic` | BASIC / ACTIVE 月謝プラン | クエリ `?plan=active` でACTIVEを初期表示検討 |
| `#fellow` | Fellow応募 | `/fellows` の主要CTA |
| `#fellow-assign` | Fellowsの案件相談 | Fellows LP 内の二次CTA |
| `#media` | メディア・協業問い合わせ | Success Stories / Fellows から誘導 |

> オープンチャット登録フォームはJoinには含めず、無料稽古サンクスメールとResources内の案内から外部フォームへ誘導する。

### 1.2 Formspree環境変数

| 環境変数 | 用途 | Joinアンカー |
|----------|------|-------------|
| `NEXT_PUBLIC_FORMSPREE_FREE_LIVE` | 無料稽古登録 | `#free-live` |
| `NEXT_PUBLIC_FORMSPREE_CORPORATE` | 企業相談（PRIME/BOOST/CONSULT） | `#enterprise` |
| `NEXT_PUBLIC_FORMSPREE_MONTHLY` | 月謝プラン（BASIC/ACTIVE） | `#basic` |
| `NEXT_PUBLIC_FORMSPREE_FELLOW` | Fellow応募 | `#fellow` |
| `NEXT_PUBLIC_FORMSPREE_PROJECT` | Fellows案件相談 | `#fellow-assign` |
| `NEXT_PUBLIC_FORMSPREE_MEDIA` | メディア問い合わせ | `#media` |

未設定の場合はフォームを表示せず「準備中」のメッセージを出す実装とする。

#### JoinタブUIのふるまいメモ

- タブ選択はURLハッシュ（例：`/join#enterprise`）と同期し、単一のタブパネルを表示する。
- 各`form`はタブ見出し（`<h2>`）に`aria-labelledby`で紐づけ、補助技術でもフォーム名が取得できる。
- タブリストは左右キー / Home / End に対応。クリック・キーボード操作ともにパネル冒頭までスムーズスクロールする。
- フォームごとにCTA直前のマイクロコピーとして「無料稽古→OC案内」「企業相談→返金保証」「Fellow応募→Impact Points」等のSLA文言を併記。

## 2. フォーム項目（推奨）

### 2-1. 無料稽古ライブ
- 氏名 / メール
- 所属（会社名 or 個人）
- 参加の目的（選択式：最新情報収集 / 社内展開 / キャリア / その他）
- オープンチャット利用規約への同意（チェックボックス）
- メールマガジン希望有無（チェックボックス）
- Field（業界：製造 / 医療 / 公共 / 金融 / 小売・CX / メディア・IP）
- Mission（Cost-Down / Speed-Up / Quality-Up / Growth-Up）

### 2-2. 企業向け相談（PRIME / BOOST / CONSULT）
- 会社名 / 部署
- 氏名 / メール / 電話番号
- Field（業界）：医療 / 製造 / 金融 / 公共 / 小売・CX / メディア・IP / その他
- Mission（勝ち筋）：Cost-Down / Speed-Up / Quality-Up / Growth-Up
- Practice（型）：GenAI Apps / Data & Integration / Ops Automation / Safety & Legal / Change & Enablement / Design & DX Writing
- 希望プログラム：PRIME / BOOST / CONSULT / 未定
- 目指したい成果指標／KPI（テキスト）
- 守秘レベルの希望（公開可 / 匿名 / 非公開）
- 希望時期（3ヶ月以内 / 半年以内 / 未定）
- 予算レンジ（任意）
- 相談内容（自由記述）
- 個人情報の取り扱い同意

### 2-3. 月謝プラン（BASIC / ACTIVE）
- 氏名 / メール
- 所属（会社名・部署）
- 受講目的：最新情報 / 業務効率化 / 社内展開 / キャリア / その他
- 希望プラン（BASIC / ACTIVE）
- 決済方法（法人請求 / 個人決済 / 未定）
- 社内共有予定（あり / なし）
- Lark / オープンチャット招待可否（希望する / 一部のみ / 不要）
- メモ（任意）

### 2-4. Fellow応募
- 氏名 / メール / SNS or URL
- 得意領域（Field / Mission / Practice）
- 経歴・実績（リンク可）
- 希望する関与（実装 / 監修 / 共著 / 登壇）
- 期待するリターン（報酬 / ブランド露出 / Impact Points等）
- 参画可能な時間帯
- 推薦者（任意）
- Green Roomや守秘ポリシーへの同意

### 2-5. Fellows案件相談（既存メンバー）
- 氏名 / メール
- Appointment# / Fellow Grade（任意入力）
- 希望案件カテゴリ（Field×Mission×Practice）
- 希望ロール（実務 / 監修 / 共著 / 登壇）
- 参画可能時期 / 稼働時間
- 補足コメント（得意アセット、必要なサポート等）

### 2-6. メディア問い合わせ
- 氏名 / メディア名 / メール / 電話（必須）
- 取材テーマ・企画概要
- 希望出演者（Field Director / Senior Fellow / Council / Named Chair）
- 公開予定日
- その他要望

### 2-7. ニュースレター登録
- メールアドレス
- 区分（企業 / 個人 / Fellow / メディア）※任意
- 同意チェック

## 3. サンクスページ & フォローアップ

| CTA | サンクスページ要素 | フォローアップ |
|-----|--------------------|----------------|
| 無料稽古 | 視聴URL、オープンチャット招待、次回テーマ、FAQ | 前日&当日リマインダ。終了後アンケート＋月謝案内 |
| 企業相談 | 担当 Field Director のコメント、導入プロセス、関連ケース | 24h以内担当宣言 → 3営業日以内面談調整 |
| 月謝プラン | 決済手順、Lark招待、アーカイブアクセス方法 | 即時ウェルカムメール、週次コンテンツ案内 |
| Fellow応募 | 選考フロー、必要資料、Impact Pointsガイド | 3営業日以内面談案内、Impact Points仮登録 |
| 案件相談 | Impact Points申請の案内、担当者の連絡先 | 48h以内にField Directorが稼働確認 |
| メディア | ブランドアセットDL、広報連絡先 | 24h以内に担当が返信 |
| 資料DL | ダウンロードリンク、関連イベント紹介 | 24h以内に追加資料メール、相談CTA |

## 4. データ連携メモ

- **CRMタグ**：`persona_type`, `entry_page`, `field`, `mission`, `practice`, `program_interest`, `stage`（free/live/paid/enterprise/fellow）。
- **MAシナリオ例**：
  - 無料稽古登録 → リマインダ → アンケート → 月謝案内 → Success Stories 紹介。
  - 企業相談 → 面談調整 → 案件進捗 → 成果公開後にYearbook案内。
  - Fellow応募 → 面談 → Impact Points登録 → 案件アサイン。
- **Impact Points**：Fellow応募／案件相談の送信はZapierやn8nでImpact Pointsダッシュボードに記録し、承認後に加点。

本仕様をNext.jsのフォーム実装・運用オペレーションの一次情報とし、変更があった場合は本ドキュメント → `Join` ページ → 各CTAの順に反映する。
