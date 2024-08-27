/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";

/**
 * Reducer to show the textbox.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/show-textbox.js').SHOW_TEXTBOX_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function showTextboxReducer(state, payload) {
  const text = ["Ah, so you're awake.", "Time to get up!"];
  return copy(state, { text });
}
