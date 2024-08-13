/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      all: true,
      enabled: true,
      exclude: ["*.config.js", "*.config.cjs", "public", "scripts", "types"],
      //include: ['./src/js/**/*.js'],
      provider: "v8",
      reporter: ["text", "json", "lcov", "html"],
    },
    environment: "happy-dom",
  },
});
