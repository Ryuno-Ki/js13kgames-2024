/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";
import { generateEconomicEvent } from "../../helpers/generate-economic-event.js";
import { generateEconomicResource } from "../../helpers/generate-economic-resource.js";
import { generateFoaFPerson } from "../../helpers/generate-foaf-person.js";
import { makeAcquaintance } from "../../helpers/make-acquaintance.js";

/**
 * Reducer to meet another person.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/meet.js').MEET_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function meetReducer(state, payload) {
  let { name, seed } = payload;

  const index = /** @type {string} */ (`#${name}`);
  const innHolder = generateFoaFPerson(name, [], "#Inn");
  const acquaintancedPeople = makeAcquaintance({
    "#Yu": /** @type {import('../initial-state.js').FoaFPerson} */ (
      state.facts["#Yu"]
    ),
    [index]: innHolder,
  });

  const facts = {
    ...state.facts,
    ["#Yu"]: acquaintancedPeople["#Yu"],
    ["#AppleInInn"]: generateEconomicResource("apple", "#One", "#Inn"),
    ["#AppleInInnEvent"]: generateEconomicEvent(
      "#RaiseAction",
      "#AppleTree",
      index,
      "#Apple",
      "#AppleInInn",
      "#One",
      "#Inn",
    ),
    [index]: acquaintancedPeople[index],
  };

  return copy(state, { facts, seed });
}
