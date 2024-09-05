/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generator to handle the ValueFlowsMeasure details.
 *
 * @argument {number} quantity
 * @argument {string} unit
 * @returns {import('../state/initial-state.js').ValueFlowsMeasure}
 */
export function generateMeasure(quantity, unit) {
  return {
    "rdf:type": [
      {
        value: "https://w3id.org/valueflows/ont/vf#Measure",
        type: "uri",
      },
    ],
    "vf:hasNumericalValue": [{ value: quantity, type: "literal" }],
    "vf:hasUnit": [{ value: unit, type: "uri" }],
  };
}
