/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generator to handle the ValueFlowsEconomicResource details.
 *
 * @argument {string} name
 * @argument {string} quantity
 * @argument {string} place
 * @returns {import('../state/initial-state.js').ValueFlowsEconomicResource}
 */
export function generateEconomicResource(name, quantity, place) {
  return {
    "rdf:type": [
      {
        value: "https://w3id.org/valueflows/ont/vf#EconomicResource",
        type: "uri",
      },
    ],
    "vf:accountingQuantity": [{ value: quantity, type: "uri" }],
    "vf:currentLocation": [{ value: place, type: "uri" }],
    "vf:name": [{ value: name, type: "literal" }],
  };
}
