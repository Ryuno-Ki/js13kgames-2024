/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";
import { offer } from "../clauses/offer.js";

/**
 * Reducer to offer an item.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/offer.js').OFFER_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function offerReducer(state, payload) {
  let { prompt } = payload;

  let { activeRoom, facts, possiblePrompts } = state;
  let [command, ...options] = prompt.trim().split(" ");
  prompt = cleanup(prompt);

  if (prompt.startsWith("offer")) {
    possiblePrompts = maybeOfferSomething(state).map((item) =>
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
 * Helper function to focus on "offer" prompts.
 *
 * @private
 * @argument {import('../initial-state.js').State} state
 * @returns {Array<string>}
 */
function maybeOfferSomething(state) {
  const resources = offer(state);
  const possibleResources = resources.map(
    (resource) => resource["vf:name"][0].value,
  );
  return possibleResources;
}
