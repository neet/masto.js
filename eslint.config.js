import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

import allowNullInOptionalParameter from "./eslint/allow-null-in-optional-parameter.js";
import namingConvention from "./eslint/naming-convention.js";

export default tseslint.config(
  eslint.configs.recommended,
  // eslint-disable-next-line import/no-named-as-default-member
  ...tseslint.configs.strict,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  eslintPluginUnicorn.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/**/*", "docs/**/*", "coverage/**/*", "playground/**/*"],
  },
  {
    settings: {
      "import/resolver": {
        typescript: { alwaysTryTypes: true },
        node: true,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      masto: {
        rules: {
          "allow-null-in-optional-parameter": allowNullInOptionalParameter,
          "naming-convention": namingConvention,
        },
      },
    },
    rules: {
      "no-console": "error",
      "no-unused-vars": "off",
      "import/no-cycle": "error",
      "simple-import-sort/imports": "error",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-array-reduce": "off",
      "no-restricted-imports": [
        "error",
        { paths: [{ name: "ws", message: "Use `isomophic-ws` instead." }] },
      ],
    },
  },
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        { accessibility: "no-public" },
      ],
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.esm.json",
      },
    },
  },
  {
    files: ["src/mastodon/{rest,oauth,streaming}/**/*.ts"],
    rules: {
      // "masto/naming-convention": ["warn"],
      "masto/allow-null-in-optional-parameter": ["warn"],
    },
  },
  {
    files: [
      "vitest.config.ts",
      "tests/**/*.ts",
      "test-utils/**/*.ts",
      "src/**/*.spec.ts",
      "src/**/__mocks__/**/*.ts",
    ],
    languageOptions: {
      parserOptions: { project: "./tsconfig.test.json" },
      globals: { ...globals.jest },
    },
    rules: { "no-constant-condition": "off" },
  },
  {
    files: ["examples/**/*.ts"],
    languageOptions: { parserOptions: { project: "./examples/tsconfig.json" } },
    rules: {
      "no-console": "off",
      "import/no-unresolved": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/no-process-exit": "off",
    },
  },
);
