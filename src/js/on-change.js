/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import store from "./state/store.js";
import { goToMapAction } from "./state/actions/go-to-map.js";
import { helpAction } from "./state/actions/help.js";
import { offerAction } from "./state/actions/offer.js";
import { setColorPreferenceAction } from "./state/actions/set-color-preference.js";
import { draw } from "./draw.js";

/**
 * Event listener on change events.
 *
 * @argument {Event} event
 */
export async function onChange(event) {
  const target = /** @type {HTMLSelectElement} */ (event.target);

  if (!target) {
    return;
  }

  if (target.id === "color-preference") {
    const colorScheme =
      /** @type {import('./state/initial-state.js').ColorScheme} */ (
        target.value
      );
    await store.dispatch(setColorPreferenceAction(colorScheme));
    draw();
  }

  if (target.id === "possible-commands") {
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
