import "@testing-library/jest-dom/vitest";
import { createElement } from "react";
import { vi } from "vitest";

// Mock next/link for testing environment
vi.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({ href, children, ...rest }: any) =>
      createElement("a", { href, ...rest }, children),
  };
});

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    const resolvedSrc = typeof src === "string" ? src : src?.src ?? "";
    return createElement("img", { src: resolvedSrc, alt, ...rest });
  },
}));
