/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generator to handle the SchemaGameLocation details.
 *
 * @argument {string} name
 * @argument {Array<string>} adjacentTo
 * @returns {import('../state/initial-state.js').SchemaGameLocation}
 */
export function generateSchemaGameLocation(name, adjacentTo) {
  return {
    "rdf:type": [
      {
        value: "https://schema.org/gameLocation",
        type: "uri",
      },
    ],
    "schema:geoTouches": adjacentTo.map((uri) => ({ value: uri, type: "uri" })),
    "schema:name": [{ value: name, type: "literal" }],
  };
}
