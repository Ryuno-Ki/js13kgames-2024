/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generator to handle the FoaFPerson details.
 *
 * @argument {string} name
 * @argument {Array<string>} knows
 * @argument {string} place
 * @returns {import('../state/initial-state.js').FoaFPerson}
 */
export function generateFoaFPerson(name, knows, place) {
  return {
    "foaf:knows": knows.map((uri) => ({ value: uri, type: "uri" })),
    "foaf:name": [{ value: name, type: "literal" }],
    "rdf:type": [
      {
        value: "http://xmlns.com/foaf/0.1/Person",
        type: "uri",
      },
    ],
    "schema:gameLocation": [{ value: place, type: "uri" }],
  };
}
