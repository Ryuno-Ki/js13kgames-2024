/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";
import { pickup } from "../clauses/pickup.js";

/**
 * Reducer to update the prompt.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/update-prompt.js').UPDATE_PROMPT_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function updatePromptReducer(state, payload) {
  let { prompt } = payload;

  let { activeRoom, facts, possiblePrompts } = state;
  let [command, ...options] = prompt.trim().split(" ");
  prompt = cleanup(prompt);

  if (prompt.startsWith("pickup")) {
    possiblePrompts = maybePickupSomething(state).map((item) =>
      item.toLowerCase(),
    );
    const possibleItem = possiblePrompts.find((item) => {
      return options.includes(item);
    });

    if (possibleItem) {
      possiblePrompts = [];
      prompt = "";
    }
  }

  return copy(state, { activeRoom, facts, possiblePrompts, prompt });
}

/**
 * Helper function to format a string for comparison.
 *
 * @private
 * @argument {string} commandOrOption
 * @returns {string}
 */
function cleanup(commandOrOption) {
  return commandOrOption.toLowerCase().trim();
}

/**
 * Helper function to focus on "pickup" prompts.
 *
 * @private
 * @argument {import('../initial-state.js').State} state
 * @returns {Array<string>}
 */
function maybePickupSomething(state) {
  const resources = pickup(state);
  const possibleResources = resources.map(
    (resource) => resource["vf:name"][0].value,
  );
  return possibleResources;
}
