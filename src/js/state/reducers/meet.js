/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { copy } from "../../helpers/copy.js";
import { generateEconomicEvent } from "../../helpers/generate-economic-event.js";
import { generateEconomicResource } from "../../helpers/generate-economic-resource.js";

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
  const yu = /** @type {import('../initial-state.js').FoaFPerson} */ (
    state.facts["#Yu"]
  );

  const appleInInn = generateEconomicResource("apple", "#One", "#Inn");
  const appleInInnEvent = generateEconomicEvent(
    "#RaiseAction",
    "#AppleTree",
    index,
    "#Apple",
    "#AppleInInn",
    "#One",
    "#Inn",
  );

  const newPerson = /** @type {import('../initial-state.js').FoaFPerson} */ ({
    "foaf:knows": [{ value: "#Yu", type: "uri" }],
    "foaf:name": [{ value: name, type: "literal" }],
    "rdf:type": [
      {
        value: "http://xmlns.com/foaf/0.1/Person",
        type: "uri",
      },
    ],
    "schema:gameLocation": [{ value: "#Inn", type: "uri" }],
  });

  const facts = {
    ...state.facts,
    ["#Yu"]: {
      ...yu,
      "foaf:knows": [
        ...yu["foaf:knows"],
        {
          value: index,
          type: "uri",
        },
      ],
    },
    ["#AppleInInn"]: appleInInn,
    ["#AppleInInnEvent"]: appleInInnEvent,
    [index]: newPerson,
  };

  return copy(state, { facts, seed });
}
