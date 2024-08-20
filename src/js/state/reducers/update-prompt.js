/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";
import { go } from "../clauses/go.js";
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

  switch (cleanup(command)) {
    case "go":
      const room = go(state);
      possiblePrompts = room;

      if (room.includes(cleanup(options.join(" ")))) {
        activeRoom = /** @type {import('../initial-state.js').Room['name']} */ (
          cleanup(options.join(" "))
        );
        prompt = "";
        possiblePrompts = [];
      }
      break;
    case "pickup":
      const items = pickup(state);
      possiblePrompts = items.map(
        ({ name, quantity }) =>
          `${quantity} ${quantity === 1 ? name : name + "s"}`,
      );

      if (
        possiblePrompts
          .map((prompt) => prompt.split(" ").slice(1))
          .flat(1)
          .includes(cleanup(options.slice(1).join(" ")))
      ) {
        prompt = "";
        possiblePrompts = [];
        const quantity = parseInt(options[0], 10);

        facts = {
          ...state.facts,
          people: state.facts.people.map((person) => {
            if (person.name !== "Yu") {
              return person;
            }

            const room = state.facts.places.find(
              (room) => room.name === state.activeRoom,
            );
            const item = room?.items.find((item) =>
              cleanup(options.slice(1).join("")).includes(item.name),
            );

            return {
              ...person,
              inventory: [
                ...person.inventory,
                {
                  name: item?.name || "",
                  quantity: Math.min(
                    quantity,
                    item?.quantity || Number.POSITIVE_INFINITY,
                  ),
                },
              ],
            };
          }),
          places: state.facts.places.map((room) => {
            if (room.name !== state.activeRoom) {
              return room;
            }

            return {
              ...room,
              items: room.items
                .map((item) => {
                  if (
                    !cleanup(options.slice(1).join(" ")).includes(item.name)
                  ) {
                    return item;
                  }

                  if (item.quantity <= quantity) {
                    return {
                      ...item,
                      quantity: 0,
                    };
                  }

                  return {
                    ...item,
                    quantity: item.quantity - quantity,
                  };
                })
                .filter((item) => item.quantity > 0),
            };
          }),
        };
      }
      break;
    default:
    // Do nothing
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
