/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { prng_alea } from "esm-seedrandom";

import { copy } from "../../helpers/copy.js";
import { pickRandom } from "../../helpers/pick-random.js";
import { roll } from "../../helpers/roll.js";

/**
 * Reducer to meet another person.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/meet.js').MEET_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function meetReducer(state, payload) {
  let { seed } = state;
  const rng = getRng(seed);
  const name = generateName(state, rng);
  seed = rng.state();

  const index = /** @type {string} */ (`#${name}`);
  const yu = /** @type {import('../initial-state.js').FoaFPerson} */ (
    state.facts["#Yu"]
  );

  const appleInInn =
    /** @type {import('../initial-state.js').ValueFlowsEconomicResource} */ ({
      "rdf:type": [
        {
          value: "https://w3id.org/valueflows/ont/vf#EconomicResource",
          type: "uri",
        },
      ],
      "vf:accountingQuantity": [{ value: "#One", type: "uri" }],
      "vf:currentLocation": [{ value: "#Inn", type: "uri" }],
      "vf:name": [{ value: "apple", type: "literal" }],
    });

  const appleInInnEvent =
    /** @type {import('../initial-state.js').ValueFlowsEconomicEvent} */ ({
      "rdf:type": [
        {
          value: "https://w3id.org/valueflows/ont/vf#EconomicEvent",
          type: "uri",
        },
      ],
      "vf:action": [{ value: "#RaiseAction", type: "uri" }],
      "vf:provider": [{ value: "#AppleTree", type: "uri" }],
      "vf:receiver": [{ value: index, type: "uri" }],
      "vf:resourceConformsTo": [
        {
          value: "#Apple",
          type: "uri",
        },
      ],
      "vf:resourceInventoriedAs": [{ value: "#AppleInInn", type: "uri" }],
      "vf:resourceQuantity": [{ value: "#One", type: "uri" }],
      "vf:seller": [{ value: index, type: "uri" }],
      "vf:toLocation": [{ value: "#Inn", type: "uri" }],
    });

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

/**
 * Helper function to generate a new name.
 *
 * @private
 * @argument {import('../initial-state.js').State} state
 * @argument {*} rng
 * @returns {string}
 */
function generateName(state, rng) {
  const consonants = "bdfghklmnprstvwz".split("");
  const vowels = "aeiou".split("");
  const MAXIMUM_NUMBER_OF_CHARACTERS = 6;
  const MINIMUM_NUMBER_OF_CHARACTERS = 2;

  const nameLength = roll(
    rng.quick,
    MAXIMUM_NUMBER_OF_CHARACTERS,
    MINIMUM_NUMBER_OF_CHARACTERS,
  );
  let seed = rng.state();

  const name = new Array(nameLength)
    .fill("x")
    .map(function (_, index) {
      const alphabet = index % 2 ? vowels : consonants;
      const character = pickRandom(alphabet, rng.quick);
      seed = rng.state();

      if (index === 0) {
        return character.toUpperCase();
      }
      return character;
    })
    .join("");

  return name;
}

/**
 * Helper function to prepare the RNG.
 *
 * @private
 * @argument {import('../initial-state.js').State["seed"]} seed
 * @returns {*}
 */
function getRng(seed) {
  const rngSeed = typeof seed === "string" ? seed : "";
  const rngState = typeof seed === "object" ? seed : true;
  const rng = prng_alea(rngSeed, { state: rngState });
  return rng;
}
