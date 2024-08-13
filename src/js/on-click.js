/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { attr } from "./helpers/attr.js";
import store from "./state/store.js";
import { switchToSceneAction } from "./state/actions/switch-to-scene.js";
import { draw } from "./draw.js";

/**
 * Click event handler
 *
 * @argument {MouseEvent} event
 */
export async function onClick(event) {
  const target = /** @type {HTMLElement} */ (event.target);

  if (!target) {
    return;
  }

  if (attr(target, "scene")) {
    const scene = /** @type {import('./components/scenes/index.js').Scene} */ (
      attr(target, "scene")
    );

    await store.dispatch(switchToSceneAction(scene));
    draw();
  }
}
