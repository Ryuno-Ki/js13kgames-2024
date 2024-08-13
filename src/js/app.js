/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { init } from "./init.js";

function app() {
  window.addEventListener("load", init, false);
}

app();
