# AI道場 サイト構成（共通トップ + ペルソナ別LP）

最終的な情報設計を「共通トップサイト」と「ペルソナ別ランディングページ」の二層で整理する。メインサイトは全体像とブランド価値を伝え、詳細訴求は各ペルソナLPで最適化する。

## 1. グローバル構造

```
/
├─ Home
├─ Programs & FieldWorks
├─ Success Stories
├─ Resources
├─ Join / Contact
└─ Persona Landing Pages
    ├─ /executives
    ├─ /dx-leads
    ├─ /operators
    └─ /fellows
```

- **ヘッダー（PC）**：Home / Programs / Success Stories / Resources / Join + 右肩にペルソナ別ショートリンク（For Executives 等）。
- **モバイル**：メインナビとペルソナリンクをセクション分けして表示。
- **共通CTA**：フッター＆各ページ末尾に「無料稽古へ」「企業相談」「Fellow応募」を設置。
- **Joinページ**：アンカーで6種フォーム（free-live, enterprise, basic, fellow, fellow-assign, media）。クエリ `?persona=` で初期表示を切り替える設計を検討。

## 2. Home（/）

| セクション | 目的 | 主ターゲット | 次アクション |
|-------------|------|---------------|----------------|
| Hero | 道場のUSPを要約し、「成果を急ぎたい方はこちら」ボタンでペルソナLPへ誘導。 | 全ペルソナ | /executives 等、共通CTA |
| Why AI道場 | Fellows伴走・Impact Points・公開ポリシーを3ポイントで紹介。 | 経営層 / DX推進 | Programs, Success Stories |
| サービス全景 | 無料→月謝→伴走→公開のステップ説明。 | 実務担当 / DX推進 | Programs |
| ペルソナカード | 4枚のカード（課題＋ベネフィット）でLPへ分岐。 | 全ペルソナ | /executives など |
| 代表ケース & KPI | 最新案件の Before/After と四半期KPIダッシュボード。 | 経営層 / DX推進 | /success-stories |
| イベント & ブログ | 無料稽古／説明会／最新記事。 | 実務担当 / Fellows | /resources |
| グローバルCTA | 無料稽古 / 企業相談 / Fellow応募。 | 全ペルソナ | /join#free-live etc |

## 3. Programs & FieldWorks（/programs）

共通で参照されるサービス説明ページ。

- Program Overview：無料稽古 → BASIC/ACTIVE → PRIME/BOOST → 公開の流れ。
- BASIC/ACTIVE：学習体験、実務者の声、スケジュール。
- PRIME/BOOST：導入ステップ、ROI試算、保証＆守秘体制。
- FieldWorks：RACI、Impact Points、S.P.A.R.K. 設計、Fellow体制。
- ペルソナLPから必要箇所へアンカーリンク。

## 4. Success Stories（/success-stories）

- フィルタ付きケース一覧（Field / Mission / Practice）。
- ケース詳細は V字ストーリー（課題→どん底→成果）＋数字＋関与Fellow。
- KPIダッシュボード、公開ポリシー、Yearbook DL。
- CTA：BOOST相談（経営層/DX向け）、無料稽古（実務向け）、Fellow応募（Fellow向け）。

## 5. Resources（/resources）

- Events & Visits：無料稽古、現場見学、Fellow説明会。タグでペルソナ分類。
- Blog / Column：検索キーワードとベネフィットの融合を意識（記事構成はSEOガイド参照）。
- Downloads：稟議テンプレート、チェックリスト、比較表等。
- FAQ：支払い、守秘、導入プロセス、学習時間などをカテゴリ別に整理。
- Newsletter登録。

## 6. Join / Contact（/join）

- 「ご希望の相談内容は？」カードで 6 フォームへ誘導。
- フォーム自体は既存実装（Formspree連携）を活用。SLA/準備物を明示。

## 7. ペルソナ別ランディングページ

### /executives

1. Hero：ROI を3ヶ月で証明する伴走。CTA→企業相談。
2. DX投資の失敗パターンと損失額（数字）で共感。
3. PRIME/BOOST プロセス + 返金保証・守秘体制。
4. 代表ケース（財務インパクト）。
5. 取締役会資料のテンプレ案内、無料経営ブリーフィング。

### /dx-leads

1. Hero：PoC止まりを解消するロードマップ。CTA→無料稽古／伴走相談。
2. 推進担当の痛み（現場の巻き込み、教育、KPI可視化）。
3. 月謝＋伴走の具体活用法、Fellow伴走。
4. 成功事例（プロジェクト完遂）。
5. 導入キット・社内稟議テンプレ。

### /operators

1. Hero：残業30時間削減、無料稽古から開始。CTA→無料稽古／月謝。
2. Before/After（業務効率）。
3. BASIC/ACTIVEの体験、タイムライン、サンプル教材。
4. コミュニティの雰囲気（Lark / オープンチャット）。
5. FAQ：支払い、解約、時間確保。

### /fellows

1. Hero：専門性で社会に影響、CTA→Fellow応募。
2. グレード&報酬、Impact Points、昇格条件。
3. ブランド露出（Yearbook、メディア）。
4. 参加までの流れ、面談～案件参画。
5. インタビュー動画、案件募集。

## 8. クロスリンク

- ペルソナLPから Programs / Success Stories / Resources / Join へ共通リンク。
- ブログ／ケースからペルソナLPへ「あなたと同じ立場はこちら」誘導。
- Join フォームは `?persona=` で前提情報を表示（例：executive → enterprise フォームを開く）。

---

この構成を基にワイヤーフレーム・コンテンツ制作・CTAテストを進める。NotebookLM で生成するコピーはペルソナLP単位で評価する。
