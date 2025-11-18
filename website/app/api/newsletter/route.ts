import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key_for_build");

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    console.log("Newsletter signup attempt for:", email);

    // API Keyがない場合はエラーを返す
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "メール送信機能が設定されていません。管理者にお問い合わせください。" },
        { status: 503 }
      );
    }

    // メールアドレスのバリデーション
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    // Resend Audiencesにメールアドレスを保存
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        console.log("Adding to audience:", process.env.RESEND_AUDIENCE_ID);
        const contactResult = await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: process.env.RESEND_AUDIENCE_ID,
        });
        console.log("Contact added successfully:", contactResult);
      } catch (audienceError: any) {
        console.error("Failed to add to audience:", {
          error: audienceError,
          message: audienceError?.message,
          statusCode: audienceError?.statusCode,
        });
        // エラーでもウェルカムメールは送信する
      }
    } else {
      console.warn("RESEND_AUDIENCE_ID not set");
    }

    // Resendを使ってウェルカムメールを送信
    console.log("Sending welcome email to:", email);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "BAAO実戦AI道場 <newsletter@dojo.baao.or.jp>";
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "【BAAO実戦AI道場】無料メール登録ありがとうございます",
      html: `
        <h1>登録ありがとうございます！</h1>
        <p>BAAO実戦AI道場の無料メールニュースレターにご登録いただき、ありがとうございます。</p>
        <p>毎週、最新のAI動向や実務で使えるプロンプト技術をお届けします。</p>
        <br />
        <p>今後ともよろしくお願いいたします。</p>
        <p>BAAO実戦AI道場</p>
      `,
    });
    console.log("Email sent successfully:", emailResult);

    return NextResponse.json(
      { message: "登録ありがとうございます！ウェルカムメールを送信しました。" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Newsletter signup error:", {
      error: error,
      message: error?.message,
      statusCode: error?.statusCode,
      name: error?.name,
    });
    return NextResponse.json(
      { error: "登録中にエラーが発生しました。もう一度お試しください。" },
      { status: 500 }
    );
  }
}
