import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FellowsPage from "@/app/fellows/page";

describe("Fellows landing page", () => {
  it("highlights concrete rewards in the hero section", () => {
    render(<FellowsPage />);
    expect(screen.getByText(/案件報酬はDelegatedで55%を還元/)).toBeInTheDocument();
  });
});
