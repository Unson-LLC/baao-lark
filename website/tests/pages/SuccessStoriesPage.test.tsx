import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import SuccessStoriesPage from "@/app/success-stories/page";

describe("SuccessStoriesPage", () => {
  it("includes bridge copy guiding readers before CTA", () => {
    render(<SuccessStoriesPage />);
    expect(screen.getByText(/この成功事例と同じ伴走をまずは無料稽古で体験しませんか/)).toBeInTheDocument();
  });

  it("provides a real link for the公開ガイドラインPDF button", () => {
    render(<SuccessStoriesPage />);
    const link = screen.getByRole("link", { name: "公開ガイドラインを確認する" });
    expect(link.getAttribute("href")).not.toBe("#");
  });

  it("anchors yearbook section for cross-page navigation", () => {
    render(<SuccessStoriesPage />);
    const section = screen.getByRole("heading", { level: 2, name: "Yearbook 2024 Preview" }).closest("section");
    expect(section?.getAttribute("id")).toBe("yearbook");
  });
});
