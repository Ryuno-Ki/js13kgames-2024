/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { SWITCH_TO_SCENE_ACTION } from "../../constants.js";

/**
 * @typedef {object} SWITCH_TO_SCENE_ACTION
 * @property {import('../../constants.js').SWITCH_TO_SCENE_ACTION} SWITCH_TO_SCENE_ACTION.type
 * @property {object} SWITCH_TO_SCENE_ACTION.payload
 * @property {import('../../components/scenes/index.js').Scene} SWITCH_TO_SCENE_ACTION.payload.scene
 */

/**
 * Action creator to switch to another scene.
 *
 * @argument {import('../../components/scenes/index.js').Scene} scene
 * @returns {SWITCH_TO_SCENE_ACTION}
 */
export function switchToSceneAction(scene) {
  return {
    type: SWITCH_TO_SCENE_ACTION,
    payload: {
      scene,
    },
  };
}
