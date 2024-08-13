/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import terser from "@rollup/plugin-terser";
import license from "rollup-plugin-license";
import sizes from "rollup-plugin-sizes";
import { visualizer } from "rollup-plugin-visualizer";

const LICENSE_HEADER = `My entry to js13kgames 2024 - Triskaidekaphobia.
Copyright (C) 2024	André Jaenisch

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

const plugins =
  process.env.NODE_ENV === "development"
    ? [sizes({ details: true }), visualizer()]
    : [
        terser(),
        license({ banner: LICENSE_HEADER }),
        sizes({ details: true }),
        visualizer(),
      ];

const client = {
  input: "./src/js/app.js",
  output: {
    file: "./public/app.js",
    format: "iife",
    name: "myname",
  },
  plugins,
};

export default [client];
