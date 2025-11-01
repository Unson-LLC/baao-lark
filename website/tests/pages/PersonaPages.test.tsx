import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ExecutivesPage from "@/app/executives/page";
import DxLeadsPage from "@/app/dx-leads/page";
import OperatorsPage from "@/app/operators/page";
import FellowsPage from "@/app/fellows/page";

describe("Persona landing pages", () => {
  it("Executive page reassures with guarantee microcopy near CTA", () => {
    render(<ExecutivesPage />);
    expect(
      screen.getByText(/返金保証付きの伴走でリスクはゼロ。ご相談だけでも歓迎です。/)
    ).toBeInTheDocument();
  });

  it("DX Leads page references templatesと保証 before CTA", () => {
    render(<DxLeadsPage />);
    expect(
      screen.getByText(/稟議テンプレートと返金保証で安心してご相談いただけます。/)
    ).toBeInTheDocument();
  });

  it("Operators page offers low-risk invitation before CTA", () => {
    render(<OperatorsPage />);
    expect(screen.getByText(/もちろん相談だけでも歓迎です。/)).toBeInTheDocument();
  });

  it("Fellows page hero highlights concrete rewards", () => {
    render(<FellowsPage />);
    expect(screen.getByText(/案件報酬はDelegatedで55%を還元/)).toBeInTheDocument();
  });
});
