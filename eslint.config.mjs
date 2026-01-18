// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import globals from "globals";

export default defineConfig(
  // Base rules (browser by default)
  eslint.configs.recommended,
  tseslint.configs.recommended,

  // Node-only files
  {
    files: ["log.js", "vite/**/*.mjs", "vite/**/*.js", "*.config.*"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
