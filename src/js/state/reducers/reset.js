/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";
import { initialState } from "../initial-state.js";

/**
 * Reducer to reset the state.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/reset.js').RESET_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function resetReducer(state, payload) {
  return copy(initialState, {});
}
