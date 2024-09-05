/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";
import { go } from "../clauses/go.js";

/**
 * Reducer to update the prompt.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/go-to-map.js').GO_TO_MAP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function goToMapReducer(state, payload) {
  let { prompt } = payload;

  let { possiblePrompts } = state;
  let [command, ...options] = prompt.trim().split(" ");

  if (cleanup(prompt) === "") {
    return copy(state, { possiblePrompts });
  }

  possiblePrompts = maybeGoSomewhere(state);
  const possibleTarget = possiblePrompts.find((target) => {
    return options.includes(target.toLowerCase());
  });

  if (possibleTarget) {
    return copy(state, {
      activeRoom: possibleTarget,
      possiblePrompts: [],
      prompt: "",
    });
  }

  return copy(state, {
    prompt: payload.prompt,
    possiblePrompts: possiblePrompts.map((rooms) => rooms.toLowerCase()),
  });
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
 * Helper function to focus on "go" prompts.
 *
 * @private
 * @argument {import('../initial-state.js').State} state
 * @returns {Array<string>}
 */
function maybeGoSomewhere(state) {
  const room = go(state);
  const possibleRooms = room.map(
    // Remove the leading '#'
    (schemaPlace) => schemaPlace["schema:name"][0].value.slice(1),
  );
  return possibleRooms;
}
