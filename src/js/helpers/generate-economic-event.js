/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generator to handle the ValueFlowsEconomicEvent details.
 *
 * @argument {string} action
 * @argument {string} provider
 * @argument {string} receiver
 * @argument {string} resourceSpecification
 * @argument {string} resource
 * @argument {string} quantity
 * @argument {string} place
 * @returns {import('../state/initial-state.js').ValueFlowsEconomicEvent}
 */
export function generateEconomicEvent(
  action,
  provider,
  receiver,
  resourceSpecification,
  resource,
  quantity,
  place,
) {
  return {
    "rdf:type": [
      {
        value: "https://w3id.org/valueflows/ont/vf#EconomicEvent",
        type: "uri",
      },
    ],
    "vf:action": [{ value: action, type: "uri" }],
    "vf:provider": [{ value: provider, type: "uri" }],
    "vf:receiver": [{ value: receiver, type: "uri" }],
    "vf:resourceConformsTo": [
      {
        value: resourceSpecification,
        type: "uri",
      },
    ],
    "vf:resourceInventoriedAs": [{ value: resource, type: "uri" }],
    "vf:resourceQuantity": [{ value: quantity, type: "uri" }],
    "vf:toLocation": [{ value: place, type: "uri" }],
  };
}
