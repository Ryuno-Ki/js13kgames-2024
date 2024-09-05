/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generator to handle the ValueFlowsAction details.
 *
 * @argument {"https://w3id.org/valueflows/ont/vf#raise"} type
 * @returns {import('../state/initial-state.js').ValueFlowsAction}
 */
export function generateAction(type) {
  return {
    "rdf:type": [
      {
        value: type,
        type: "uri",
      },
    ],
    "vf:accountingEffect": [{ value: "", type: "uri" }],
    "vf:accountableEffect": [{ value: "", type: "uri" }],
    "vf:createResource": [{ value: "", type: "uri" }],
    "vf:eventQuantity": [{ value: "", type: "uri" }],
    "vf:onhandEffect": [{ value: "", type: "uri" }],
    "vf:stateEffect": [{ value: "", type: "uri" }],
  };
}
