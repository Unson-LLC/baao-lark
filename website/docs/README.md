# BAAO 実戦AI道場 Web Docs

**目的**：`docs/ABOUT.md` や `docs/programs/README.md` で定義された事業モデルを踏まえ、AI道場公式サイト（LPではなく常設サイト）を構築するための情報設計・コンテンツ要件を整理する。

**対象読者**：プロダクトオーナー / デザイナー / コンテンツ編集者 / 開発チーム

**最終成果物のゴール**
- ペルソナ別（需要側 + 実装パートナー側）の導線と必要情報が明文化されている
- Fellows を中心とした供給側の魅力訴求と、Field Director / Senior Fellow のブランド演出が両立できる
- 4本柱プログラム・FieldWorks骨格・公開主義など AI道場の独自価値がページ構成に落とし込まれている
- CTA とフォーム要件が MA / CRM 連携前提で定義されている

## 収録ドキュメント

| ファイル | 概要 |
|----------|------|
| [PERSONAS.md](PERSONAS.md) | 需要側（経営層 / DX担当 / 実務者）と供給側（Fellow / Field Director / Senior Fellow）の情報ニーズとメッセージング |
| [USER_JOURNEYS.md](USER_JOURNEYS.md) | ペルソナ別の来訪動機・疑問・情報フローを整理したジャーニーマップ |
| [INFORMATION_ARCHITECTURE.md](INFORMATION_ARCHITECTURE.md) | グローバルナビ、コンテンツ構造、主要導線。セクション粒度のIA |
| [SITEMAP.md](SITEMAP.md) | ページごとの役割・CTA・ジャーニー段階を対応付けた協調サイトマップ |
| [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) | ページ別モジュール構成、コピーのトーン＆マナー、CTA設計、公開主義の見せ方 |
| [CTA_AND_FORMS.md](CTA_AND_FORMS.md) | 問い合わせ・体験会・資料DLなど各CTAの目的、必要項目、MA/CRM 連携要件 |
| [VISIBILITY_MATRIX.md](VISIBILITY_MATRIX.md) | 公開Web・Lark・オープンチャットでの情報出し分けと運用フロー |
| [FEEDBACK_SUMMARY.md](FEEDBACK_SUMMARY.md) | イベントアンケートの指標・引用・改善要望まとめ（無料ライブ訴求用） |

> 参照元となる一次情報: `docs/ABOUT.md`, `docs/programs/README.md`, `docs/people/README.md`, `docs/internal/OPERATIONS_HANDBOOK.md`
>
> **メンテナンスのコツ**：サイト構造を変更した場合は `INFORMATION_ARCHITECTURE.md`（全体構造）と `SITEMAP.md`（ジャーニー対応）をセットで更新し、CTAアンカーは `CTA_AND_FORMS.md` の表と同期させる。

## 今後の更新フロー

1. 本ドキュメントで IA / コンテンツ要件を確定
2. ワイヤーフレームとデザインコンポーネントに展開
3. `website/` 配下のNext.js実装に反映
4. リリース後は `docs/` 側の運用ガイド（更新頻度が高い領域）と同期しながら改善
