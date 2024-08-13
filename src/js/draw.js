/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { applyToDOM } from "./apply-to-dom.js";
import * as componentRegistry from "./registry.js";
import store from "./state/store.js";

/**
 * Update view with state changes.
 */
export function draw() {
  const main = document.getElementById("app");

  if (!main) {
    return console.error('Could not find element with id "app"!');
  }

  const newMain = componentRegistry.render(main, store.getState());
  applyToDOM(document.body, main, newMain);
}
