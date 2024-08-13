/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import {
  RESET_ACTION,
  SET_COLOR_PREFERENCE_ACTION,
  SET_PLAYERNAME_ACTION,
  SWITCH_TO_SCENE_ACTION,
} from "../../constants.js";
import { initialState } from "../initial-state.js";
import { resetReducer } from "./reset.js";
import { setColorPreferenceReducer } from "./set-color-preference.js";
import { setPlayernameReducer } from "./set-playername.js";
import { switchToSceneReducer } from "./switch-to-scene.js";

/**
 * Combined reducer.
 *
 * @argument {import('../initial-state.js').State | undefined} state
 * @argument {import('../actions/index.js').ACTION} action
 * @returns {import('../initial-state.js').State}
 */
export function reducer(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  const { payload, type } = action;

  if (type === RESET_ACTION) {
    return resetReducer(
      state,
      /** @type {import('../actions/reset.js').RESET_ACTION['payload']} */ (
        payload
      ),
    );
  }

  if (type === SET_COLOR_PREFERENCE_ACTION) {
    return setColorPreferenceReducer(
      state,
      /** @type {import('../actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION['payload']} */ (
        payload
      ),
    );
  }

  if (type === SET_PLAYERNAME_ACTION) {
    return setPlayernameReducer(
      state,
      /** @type {import('../actions/set-playername.js').SET_PLAYERNAME_ACTION['payload']} */ (
        payload
      ),
    );
  }

  if (type === SWITCH_TO_SCENE_ACTION) {
    return switchToSceneReducer(
      state,
      /** @type {import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION['payload']} */ (
        payload
      ),
    );
  }

  return state;
}
