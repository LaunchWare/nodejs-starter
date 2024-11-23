import path from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    coverage: {
      exclude: [
        "src/**/*.test.ts",
        "eslint.config.cjs",
        "prettier.config.mjs",
      ],
    },
    environment: "node",
    typecheck: {
      enabled: true,
    },
    include: ["src/**/*.test.ts"],
  },
})
