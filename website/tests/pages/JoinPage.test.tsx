import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";

const originalEnv = { ...process.env };

const baseEnv = {
  NEXT_PUBLIC_FORMSPREE_FREE_LIVE: "https://formspree.io/f/xzzkjqyr",
  NEXT_PUBLIC_FORMSPREE_CORPORATE: "https://formspree.io/f/xeoprwvk",
  NEXT_PUBLIC_FORMSPREE_MONTHLY: "https://formspree.io/f/movpkzyl",
  NEXT_PUBLIC_FORMSPREE_FELLOW: "https://formspree.io/f/xkgpqakp",
  NEXT_PUBLIC_FORMSPREE_PROJECT: "https://formspree.io/f/xrboyvrd",
  NEXT_PUBLIC_FORMSPREE_MEDIA: "https://formspree.io/f/xnnogylk",
};

const resetEnv = (overrides: Record<string, string | undefined> = baseEnv) => {
  for (const key of Object.keys(process.env)) {
    if (!(key in originalEnv)) {
      delete process.env[key];
    }
  }

  Object.assign(process.env, originalEnv);

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
};

const renderJoinPage = async (
  {
    env = baseEnv,
    hash,
  }: {
    env?: Record<string, string | undefined>;
    hash?: string;
  } = {},
) => {
  resetEnv(env);
  vi.resetModules();
  if (hash) {
    window.location.hash = hash;
  } else {
    window.location.hash = "";
  }
  const { default: JoinPage } = await import("@/app/join/page");
  render(<JoinPage />);
};

describe("JoinPage tab navigation", () => {
  beforeEach(() => {
    resetEnv(baseEnv);
    vi.resetModules();
    window.location.hash = "";
  });

  it("shows free live form by default", async () => {
    await renderJoinPage();
    expect(
      await screen.findByRole("heading", { name: "無料稽古ライブ登録" })
    ).toBeInTheDocument();
  });

  it("navigates to enterprise form based on hash", async () => {
    await renderJoinPage({ hash: "#enterprise" });
    expect(
      await screen.findByRole("heading", { name: "企業向け相談（PRIME / BOOST）" })
    ).toBeInTheDocument();
  });

  it("renders required fields for the free live form", async () => {
    await renderJoinPage();
    const form = screen.getByRole("form", { name: "無料稽古ライブ登録" });

    expect(within(form).getByLabelText("所属（会社名・部門）")).toBeInTheDocument();
    expect(within(form).getByLabelText("参加の目的")).toBeInTheDocument();
    expect(
      within(form).getByLabelText("オープンチャット規約への同意", { selector: "input[type=checkbox]" })
    ).toBeInTheDocument();
    expect(
      within(form).getByLabelText("ニュースレターを受け取る", { selector: "input[type=checkbox]" })
    ).toBeInTheDocument();
  });

  it("renders the extended corporate consultation fields", async () => {
    await renderJoinPage({ hash: "#enterprise" });
    const form = screen.getByRole("form", { name: "企業向け相談（PRIME / BOOST）" });

    expect(within(form).getByLabelText("電話番号")).toBeInTheDocument();
    expect(within(form).getByLabelText("Field（業界）")).toBeInTheDocument();
    expect(within(form).getByLabelText("Practice（型）")).toBeInTheDocument();
    expect(within(form).getByLabelText("希望プログラム")).toBeInTheDocument();
    expect(within(form).getByLabelText("KPI / 目指す成果")).toBeInTheDocument();
    expect(within(form).getByLabelText("守秘レベル")).toBeInTheDocument();
  });

  it("renders required monthly plan fields", async () => {
    await renderJoinPage();
    const monthlyTab = screen.getByRole("tab", { name: "月謝プラン" });
    fireEvent.click(monthlyTab);

    const form = screen.getByRole("form", { name: "月謝プラン（BASIC / ACTIVE）への問い合わせ" });
    expect(within(form).getByLabelText("所属（会社名・部署）")).toBeInTheDocument();
    expect(within(form).getByLabelText("受講目的")).toBeInTheDocument();
    expect(within(form).getByLabelText("決済方法")).toBeInTheDocument();
    expect(within(form).getByLabelText("Lark / オープンチャット招待")).toBeInTheDocument();
  });

  it("links the active tab with the tabpanel for assistive tech", async () => {
    await renderJoinPage();
    const panel = await screen.findByRole("tabpanel");
    expect(panel).toHaveAttribute("id", "join-tab-panel");

    const activeTab = screen.getByRole("tab", {
      name: "無料稽古",
      selected: true,
    });

    expect(activeTab).toHaveAttribute("aria-controls", "join-tab-panel");
    expect(panel).toHaveAttribute("aria-labelledby", activeTab.id);
  });

  it("supports keyboard navigation between tabs", async () => {
    await renderJoinPage();

    const tablist = screen.getByRole("tablist");
    const freeLiveTab = screen.getByRole("tab", { name: "無料稽古" });
    freeLiveTab.focus();

    fireEvent.keyDown(tablist, { key: "ArrowRight" });

    expect(
      screen.getByRole("tab", { name: "企業相談" })
    ).toHaveAttribute("aria-selected", "true");
  });

  it("shows placeholder message when monthly form action is missing", async () => {
    const env = {
      ...baseEnv,
      NEXT_PUBLIC_FORMSPREE_MONTHLY: undefined,
      NEXT_PUBLIC_FORMSPREE_BASIC: undefined,
    };
    await renderJoinPage({ env });
    const monthlyTab = screen.getByRole("tab", { name: "月謝プラン" });
    fireEvent.click(monthlyTab);

    const panel = await screen.findByRole("tabpanel");
    expect(
      within(panel).getByText(/フォームは準備中です。お急ぎの方は/)
    ).toBeInTheDocument();
  });
});
