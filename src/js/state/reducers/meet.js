/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { prng_alea } from "esm-seedrandom";

import { copy } from "../../helpers/copy.js";

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

  const facts = {
    ...state.facts,
    ["#Yu"]: {
      ...state.facts["#Yu"],
      ["foaf:knows"]: [
        ...state.facts["#Yu"]["foaf:knows"],
        {
          value: index,
          type: "uri",
        },
      ],
    },
    [index]: {
      "foaf:knows": [{ value: "#Yu", type: "uri" }],
      "foaf:name": [{ value: name, type: "literal" }],
      "rdf:type": [
        {
          value: "http://xmlns.com/foaf/0.1/Person",
          type: "uri",
        },
      ],
    },
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

  const nameLength = roll(rng, 6);
  let seed = rng.state();

  const name = new Array(nameLength)
    .fill("x")
    .map(function (_, index) {
      const alphabet = index % 2 ? vowels : consonants;
      const character = pickRandom(alphabet, rng);
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
 * Helper function to randomly pick an item from a list.
 *
 * @private
 * @argument {Array<string>} list
 * @argument {*} rng
 * @returns {string}
 */
function pickRandom(list, rng) {
  const index = roll(rng, list.length);
  return list[index];
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

/**
 * Helper function to randomly generate a number between 0 and upper.
 *
 * @private
 * @argument {*} rng
 * @argument {number} upper
 * @returns {number}
 */
function roll(rng, upper) {
  return Math.floor(rng.quick() * upper);
}
