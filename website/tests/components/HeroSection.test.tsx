import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/home/HeroSection";

describe("HeroSection", () => {
  it("links the fellow CTA directly to /fellows", () => {
    render(<HeroSection />);
    const fellowLink = screen.getByRole("link", { name: "師範として参画する" });
    expect(fellowLink).toHaveAttribute("href", "/fellows");
  });
});
