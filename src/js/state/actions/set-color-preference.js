/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { SET_COLOR_PREFERENCE_ACTION } from "../../constants.js";

/**
 * @typedef {object} SET_COLOR_PREFERENCE_ACTION
 * @property {import('../../constants.js').SET_COLOR_PREFERENCE_ACTION} SET_COLOR_PREFERENCE_ACTION.type
 * @property {object} SET_COLOR_PREFERENCE_ACTION.payload
 * @property {import('../initial-state.js').ColorScheme} SET_COLOR_PREFERENCE_ACTION.payload.colorScheme
 */

/**
 * Action creator to set a color preference.
 *
 * @argument {import('../initial-state.js').ColorScheme} colorScheme
 * @returns {SET_COLOR_PREFERENCE_ACTION}
 */
export function setColorPreferenceAction(colorScheme) {
  return {
    type: SET_COLOR_PREFERENCE_ACTION,
    payload: {
      colorScheme,
    },
  };
}
