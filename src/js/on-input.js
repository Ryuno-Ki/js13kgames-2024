/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import store from "./state/store.js";
import { goToMapAction } from "./state/actions/go-to-map.js";
import { helpAction } from "./state/actions/help.js";
import { offerAction } from "./state/actions/offer.js";
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

  if (target.id === "prompt") {
    const prompt = /** @type {string} */ (target.value);
    if (prompt.startsWith("go ")) {
      await store.dispatch(goToMapAction(prompt));
    } else if (prompt.startsWith("help ")) {
      await store.dispatch(helpAction(prompt));
    } else {
      await store.dispatch(offerAction(prompt));
    }
    draw();
  }
}
