/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";

/**
 * Reducer to display help.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/help.js').HELP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function helpReducer(state, payload) {
  let { prompt } = payload;

  let { possiblePrompts } = state;

  if (prompt.startsWith("help ")) {
    possiblePrompts = ["try go", "try offer"];
  }

  return copy(state, { possiblePrompts, prompt });
}
