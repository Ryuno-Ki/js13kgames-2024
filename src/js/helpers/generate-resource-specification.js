/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generator to handle the ValueFlowsResourceSpecification details.
 *
 * @argument {string} name
 * @returns {import('../state/initial-state.js').ValueFlowsResourceSpecification}
 */
export function generateResourceSpecification(name) {
  return {
    "rdf:type": [
      {
        value: "https://w3id.org/valueflows/ont/vf#ResourceSpecification",
        type: "uri",
      },
    ],
    "vf:name": [{ value: name, type: "literal" }],
  };
}
