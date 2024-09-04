/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { draw } from "./draw.js";
import { generateName } from "./helpers/generate-name.js";
import { getRng } from "./helpers/get-rng.js";
import store from "./state/store.js";
import { showTextboxAction } from "./state/actions/show-textbox.js";
import { meetAction } from "./state/actions/meet.js";

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

  let { facts, seed } = store.getState();
  const rng = getRng(seed);
  let name = null;
  while (name === null || !Object.keys(facts).includes(name)) {
    name = generateName(rng);
    seed = rng.state();
  }
  await store.dispatch(meetAction(name, seed));
  await store.dispatch(showTextboxAction());
  draw();
}
