"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("登録ありがとうございます！ウェルカムメールを送信しました。");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "登録に失敗しました。");
      }
    } catch (error) {
      setStatus("error");
      setMessage("通信エラーが発生しました。");
    }
  };

  return (
    <section id="free-newsletter" className="section bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-custom max-w-2xl">
        <h2 className="heading-md text-center mb-4">無料メール登録</h2>
        <p className="text-center text-text-light mb-8">
          週1回、最新AIニュースと実務で使えるプロンプト技術をお届けします
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "登録中..." : "無料登録"}
            </button>
          </div>

          {message && (
            <div
              className={`p-4 rounded-lg text-center ${
                status === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}
        </form>

        <p className="text-sm text-text-light text-center mt-4">
          ※ いつでも配信停止できます
        </p>
      </div>
    </section>
  );
}
