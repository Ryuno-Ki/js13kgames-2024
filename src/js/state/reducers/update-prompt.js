/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";

/**
 * Reducer to update the prompt.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/update-prompt.js').UPDATE_PROMPT_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function updatePromptReducer(state, payload) {
  let { prompt } = payload;

  let { activeRoom, possiblePrompts } = state;
  let [command, ...options] = prompt.trim().split(" ");
  const activities = state.activities[state.activeRoom];

  if (command.toLowerCase().trim() === "go") {
    possiblePrompts =
      activities[
        /** @type {import('../initial-state.js').Command} */ (
          command.toLowerCase().trim()
        )
      ] || [];

    if (activities.go.includes(options.join(" "))) {
      activeRoom = /** @type {import('../initial-state.js').Room} */ (
        options.join(" ")
      );
      prompt = "";
      possiblePrompts = [];
    }
  } else {
    possiblePrompts =
      activities[
        /** @type {import('../initial-state.js').Command} */ (
          command.toLowerCase().trim()
        )
      ] || [];
  }
  return copy(state, { activeRoom, possiblePrompts, prompt });
}
