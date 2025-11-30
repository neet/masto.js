import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    pool: "threads",
    coverage: {
      include: [
        "src/**/*.ts",
        "!src/**/index.ts",
        "!src/**/*.spec.ts",
        "!**/__mocks__/**",
      ],
    },
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "node",
          include: ["src/**/*.spec.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "e2e",
          retry: 3,
          testTimeout: 60_000,
          globalSetup: "./test-utils/vitest-global-setup.ts",
          environment: "./test-utils/vitest-environment.ts",
          setupFiles: [
            "./test-utils/setup-files/vitest-extend-expect.ts",
            "./test-utils/setup-files/vitest-polyfills.ts",
            "./test-utils/setup-files/vitest-sessions.ts",
          ],
          include: ["tests/**/*.spec.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "eslint",
          environment: "node",
          setupFiles: ["./eslint/vitest-eslint-setup.ts"],
          include: ["eslint/**/*.spec.js"],
        },
      },
    ],
  },
});
