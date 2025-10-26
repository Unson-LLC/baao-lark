import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-09-30.clover",
});

const resend = new Resend(process.env.RESEND_API_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      console.error("No Stripe signature found");
      return NextResponse.json(
        { error: "No signature" },
        { status: 400 }
      );
    }

    // Stripe webhookの署名検証
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    }

    console.log("Stripe webhook event received:", event.type);

    // checkout.session.completedイベントを処理
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log("Checkout session completed:", {
        sessionId: session.id,
        customerEmail: session.customer_email,
        customerDetailsEmail: session.customer_details?.email,
        subscriptionId: session.subscription,
      });

      // 顧客のメールアドレスを取得（customer_emailまたはcustomer_details.emailから）
      const customerEmail = session.customer_email || session.customer_details?.email;

      if (!customerEmail) {
        console.warn("No customer email in checkout session");
        return NextResponse.json({ received: true });
      }

      // Resendでウェルカムメールを送信
      const fromEmail = process.env.RESEND_FROM_EMAIL || "BAAO AI Dojo <info@baao.or.jp>";

      try {
        console.log("Sending welcome email to:", customerEmail);
        const emailResult = await resend.emails.send({
          from: fromEmail,
          to: customerEmail,
          subject: "【BAAO実戦AI道場】ご登録ありがとうございます！",
          html: `
            <h1>BAAO実戦AI道場へようこそ！</h1>
            <p>この度は、BAAO実戦AI道場にご登録いただき、誠にありがとうございます。</p>

            <h2>7日間の無料トライアル期間が開始しました</h2>
            <p>今週のライブセッションから、すぐにご参加いただけます。</p>

            <h3>ご利用いただける特典</h3>
            <ul>
              <li>✓ 毎週30分の解説＋30分Q&A（ライブ参加）</li>
              <li>✓ 1枚サマリPDF（社内転送OK）</li>
              <li>✓ 即使えるプロンプト集</li>
              <li>✓ 録画見放題（アーカイブ）</li>
              <li>✓ Q&Aログ検索</li>
              <li>✓ Larkグループチャット参加</li>
            </ul>

            <h3>次のステップ</h3>
            <p>
              1. Larkグループへの招待メールが別途届きます<br />
              2. 今週のライブスケジュールをご確認ください<br />
              3. プロンプト集をダウンロードしてご活用ください
            </p>

            <p>
              <strong>7日間の無料期間終了前に、解約も可能です。</strong><br />
              違約金は一切かかりませんので、まずはお気軽にお試しください。
            </p>

            <br />
            <p>ご不明な点がございましたら、お気軽にお問い合わせください。</p>
            <p>今後ともよろしくお願いいたします。</p>

            <br />
            <p>
              BAAO実戦AI道場<br />
              <a href="https://dojo.baao.or.jp">https://dojo.baao.or.jp</a>
            </p>
          `,
        });

        console.log("Welcome email sent successfully:", emailResult);
      } catch (emailError: any) {
        console.error("Failed to send welcome email:", {
          error: emailError,
          message: emailError?.message,
        });
        // メール送信失敗してもwebhookは成功として返す
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Stripe webhook error:", {
      error: error,
      message: error?.message,
    });
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
