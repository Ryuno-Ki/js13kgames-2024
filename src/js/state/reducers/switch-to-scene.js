/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";

/**
 * Reducer to compute the transition to another scene.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function switchToSceneReducer(state, payload) {
  const activeScene = payload.scene;

  return copy(state, { activeScene });
}
