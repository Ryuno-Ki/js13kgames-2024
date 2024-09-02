/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import store from "./state/store.js";
import { showTextboxAction } from "./state/actions/show-textbox.js";
import { meetAction } from "./state/actions/meet.js";
import { draw } from "./draw.js";

/**
 * Event listener on end events.
 *
 * @argument {Event} event
 */
export async function onEnd(event) {
  const target = /** @type {HTMLSelectElement} */ (event.target);

  if (!target) {
    return;
  }

  await store.dispatch(meetAction());
  await store.dispatch(showTextboxAction());
  draw();
}
