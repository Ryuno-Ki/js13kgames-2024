/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const cssnano = require("cssnano");
const atImports = require("postcss-import");

module.exports = {
  plugins: [
    atImports(),
    cssnano({
      preset: "default",
    }),
  ],
};
