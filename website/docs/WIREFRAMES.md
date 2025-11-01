# Wireframes｜AI道場公式サイト

テキストベースで主要ページ（Home / Programs / Methods & FieldWorks / Cases & Yearbook / Community & Fellows / Join）のワイヤーフレームを定義する。UIモック作成や実装時に、ブロックの順序・構造・CTA配置の共通認識として使用する。

表記ルール：
- **セクション番号**はスクロール順。`(D)`はデスクトップの横幅レイアウト、`(M)`はモバイル時の配置補足。
- **ブロック**は Section 内のカードやリスト。必要な要素（見出し/コピー/ボタン/メディア）を箇条書き。
- CTAは `CTA_AND_FORMS.md` で定義したアンカーに合わせる。

---

## 1. Home

1. **Hero｜無料稽古ヒーロー**
   - (D) 背景：左半分に畳・木×現場写真のレイヤー、右半分にコピー。
   - 見出し：`流派 × 勝ち筋 × 型で四半期で成果`
   - サブコピー：`毎週の稽古は無料ライブ。月謝でアーカイブと伴走へ。`
   - CTAボタン（横並び）：`今週の稽古に参加`（Join#free-live）／`企業相談を予約`（Join#enterprise）／`師範として参画`（Community & Fellowsセクションへスクロール）
   - 右下：次回稽古の日付＋登壇師範の顔写真（小）
   - (M) CTAは縦積み。

2. **Free Live Strip｜無料稽古詳細**
   - (D) 3カラム：`テーマ + 日時`／`登壇師範カード`／`参加手順`。
   - オープンチャット参加導線（外部フォームリンク）と「利用規約同意」ラベル。
   - サブCTA：`無料コミュニティに参加`。

3. **Sample Videos & Voices｜ダイジェスト & 声**
   - (D) 左：埋め込み動画（YouTubeサムネ）＋再生ボタン。右：Quoteスライダー（3件）。
   - 平均満足度指標 `4.44 / 5` バッジ。
   - ボタン：`他のダイジェストを見る`（Resources/Events#archives）。

4. **Path to Mastery｜成長の道筋**
   - (D) 横フローチャート：`無料稽古` → `月謝プラン（BASIC/ACTIVE）` → `伴走（PRIME/BOOST）` → `成果公開（Cases/Yearbook）`。
   - それぞれの下に対象ペルソナとCTAを配置。

5. **Programs Snapshot**
   - (D) 5枚のカード（FREE / BASIC / ACTIVE / PRIME / BOOST / RECIPES）。FREEは左端に固定。
   - 各カードに月謝／提供内容サマリ／`詳しく見る`リンク。
   - (M) スワイプカルーセル。

6. **FieldWorks Overview**
   - マトリクス画像（流派 × 勝ち筋 × 型）＋役割解説テキスト。
   - サイドカラムに Field Director ハイライト（Appointment#付き）。

7. **Community & Fellows**
   - (D) 左：Gradeステップを表す縦タイムライン。右：特典グリッド（先行閲覧72h／Green Room／案件報酬）。
   - CTA：`師範として応募`（Join#fellow）／`案件相談`（Join#fellow-assign）。

8. **Featured Cases & KPI**
   - (D) カード3枚（業界別）＋KPIボード（売上／P95リードタイム／公開件数／昇格率）。
   - ボタン：`ケース一覧を見る`（/cases）。

9. **Events & Updates**
   - (D) 横スクロールできるイベントカード3枚＋ブログ記事3件。
   - CTA：`イベントをすべて見る`。

10. **FAQ Preview**
    - アコーディオン3件（無料視聴、アーカイブ、守秘/企業名）。
    - リンク：`FAQをもっと読む`。

11. **CTA Band**
    - 3列：`無料稽古に参加`／`四半期で成果を相談`／`師範の門に入る`。
    - (M) 縦並び。

12. **Footer**
    - 左：ロゴ・住所・連絡先。中央：主要リンク（Programs, Methods, Cases, Community, Join）。右：SNS、ニュースレター入力。
    - 下段に法的リンク（プライバシー、利用規約）。

---

## 2. Programs

1. **Hero（セクションナビ）**
   - 見出し `稽古から伴走まで、一気通貫で導くプログラム`
   - アンカーリンク：`FREE / BASIC / ACTIVE / PRIME / BOOST / RECIPES / CONSULT`。

2. **Overview タブ**
   - フローチャート（無料→月謝→伴走→公開）。
   - CTA：`まず無料稽古に参加`。

3. **FREE｜Weekly AI News**
   - コンテンツリスト、配信方法、参加手順。
   - CTA：Join#free-live。

4. **BASIC / ACTIVE**
   - 2カラム比較表（成果物／ライブ頻度／アーカイブ／Q&A）。
   - FAQアコーディオン。
   - CTA：Join#basic（申込フォーム選択肢でACTIVEも）。

5. **PRIME / BOOST**
   - 伴走プロセスのタイムライン（診断→設計→実装→公開）。
   - 成果メトリクスと守秘レベル図。
   - CTA：Join#enterprise。

6. **RECIPES / CONSULT**
   - カード表示（業務別Playbook・単発相談）。
   - CTA：Join#enterprise、資料DL。

7. **Cross Sell**
   - “稽古から伴走へ”の誘導。既存会員向けメッセージ。

8. **FAQ / Next Steps**
   - 共通FAQとCTAバンド（Join#free-live, Join#enterprise, Join#basic）。

---

## 3. Methods & FieldWorks

1. **Hero**
   - 見出し `流派 × 勝ち筋 × 型で品質を担保する`
   - テキストサマリ＋CTA：`FieldWorksを資料で読む（Downloads）`。

2. **FieldWorksマトリクス**
   - 3×4グリッドのビジュアル。各セルに代表ケースへのリンク。

3. **役割マトリクス（RACI）**
   - テーブル形式：`Field Director / Senior Fellow / Fellow / Catalyst` × `設計 / 実装 / 公開 / フォロー`.
   - CTA：`師範として参画`（Join#fellow）。

4. **品質担保フロー**
   - 3ステップダイアグラム（RECIPES→週次レビュー→Impact Points）。
   - CTA：`公開ケースを見る`。

5. **S.P.A.R.K.心理設計**
   - 5つのカード（Scarcity / Proof / Access / Ritual / Karma）。
   - CTA：`Community & Fellowsへ`。

---

## 4. Cases & Yearbook

1. **Hero**
   - 見出し `公開できる実装知＝再現性の証明`
   - CTA：`成果相談をする`（Join#enterprise）。

2. **ケースフィルタ**
   - (D) 左にフィルタパネル（流派・勝ち筋・プログラム・守秘レベル）、右にカードグリッド。
   - カード内：課題／アプローチ／成果／関与メンバー（Byline順）。

3. **KPIダッシュボード**
   - 4つの大型メトリクスカード＋`四半期アップデートを見る`リンク。

4. **公開ポリシー**
   - 守秘レベル1〜3の説明＋COI明記ポリシー。

5. **Yearbook**
   - 最新版PDFのダウンロードボタン＋過去版アーカイブリスト。
   - CTA：Join#media（掲載や取材相談）。

---

## 5. Community & Fellows

1. **Hero**
   - 見出し `実装知を磨く師範と門下生のコミュニティ`
   - CTA：`無料稽古から始める`（Join#free-live）。

2. **コミュニティ紹介**
   - 無料稽古→月謝→オープンチャット→Slackの流れ。
   - CTA：Join#basic。

3. **Fellow Grade & Impact Points**
   - グラデーションカード（Fellow I → III → Senior → Named）。
   - ダッシュボードのサンプル画像と配点表。
   - CTA：Join#fellow。

4. **特権・報酬**
   - 3列カード：`先行閲覧72h`／`Green Room`／`案件報酬・分配`。
   - 二次CTA：Join#fellow-assign（案件相談）。

5. **Field Director / Senior Fellow Showcase**
   - プロフィールカード（写真、Appointment#、専門領域）。
   - CTA：Join#media、Join#fellow。

6. **FAQ / Next Steps**
   - Fellows向けFAQとCTAバンド。

---

## 6. Join / Contact

1. **Hero**
   - 見出し `稽古で試し、伴走で成果へ。次の一歩を選ぶ`
   - シンプルな説明＋CTAバンド（アンカー付き）。

2. **無料稽古ライブ（#free-live）**
   - フォーム：氏名/メール/目的/オプチャ同意。
   - サイドに「参加すると出来ること」「利用規約リンク」。

3. **企業向け相談（#enterprise）**
   - フォーム：Field/Mission/Practice/時期/予算/自由記述。
   - 右カラムに導入プロセス（4ステップ）と期待成果。

4. **月謝プラン申込（#basic）**
   - フォーム：Stripeチェックアウト／Plan選択（BASIC/ACTIVE）。
   - 補足：付き添いFAQ、決済後の流れ。

5. **Fellow応募（#fellow）**
   - フォーム：専門領域／実績／期待リターン／紹介者。
   - 右カラムにGradeとImpact Points要件。

6. **案件相談（現Fellow向け）（#fellow-assign）**
   - フォーム：Appointment#／希望案件／ロール／希望時期。
   - 補足として案件配分・Impact Pointsのリマインダー。

7. **メディア問い合わせ（#media）**
   - フォーム：媒体情報／取材テーマ／希望出演者／公開予定日。
   - 右カラム：メディアキットへのリンク。

8. **FAQ / サポート連絡先**
   - 共通問い合わせ先（support@baao.or.jp 予定）と応答SLA。

---

これらのワイヤーフレームを基に、Figma等でローフィデリティ→ハイフィデリティモックを作成する際は、各セクションの優先度・CTAを維持しつつビジュアルディテールを詰めていく。

