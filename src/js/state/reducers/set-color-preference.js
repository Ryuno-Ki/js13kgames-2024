/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";

/**
 * Reducer to set the color preference.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setColorPreferenceReducer(state, payload) {
  return copy(state, { activeColorScheme: payload.colorScheme });
}
