/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import store from "./state/store.js";
import { setPlayernameAction } from "./state/actions/set-playername.js";
import { draw } from "./draw.js";

/**
 * Input event handler
 *
 * @argument {Event} event
 */
export async function onInput(event) {
  const target = /** @type {HTMLInputElement} */ (event.target);
  if (!target) {
    return;
  }

  if (target.id === "playername") {
    await store.dispatch(setPlayernameAction(target.value));
    draw();
  }
}
