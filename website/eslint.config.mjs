import next from "eslint-config-next";

export default [
  ...next,
  {
    name: "custom-rules",
    ignores: ["node_modules", ".next", "out"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
