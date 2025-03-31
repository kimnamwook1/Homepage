import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextConfig from "./next.config.mjs";
import { eslintConfig } from "next/eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default [
  {
    ignores: [
      // '.next/**/*',
      "node_modules/**/*",
      "**/.git/**/*",
      "**/.cache/**/*",
      "**/.svelte-kit/**/*",
      "**/built/**/*",
      "**/coverage/**/*",
      "**/dist/**/*",
      "**/out/**/*",
    ],
  },
  {
    ...eslintConfig,
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      ...eslintConfig.rules,
    },
  },
];
