/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Clause to check available items for pickup.
 *
 * @argument {import('../initial-state.js').State} state
 * @returns {Array<import('../initial-state.js').ValueFlowsEconomicResource>}
 */
export function pickup(state) {
  return /** @type {Array<import('../initial-state.js').ValueFlowsEconomicResource>} */ (
    Object.values(state.facts)
      .filter((fact) => {
        return (
          fact["rdf:type"][0].value ===
          "https://w3id.org/valueflows/ont/vf#EconomicEvent"
        );
      })
      .filter((economicEvent) => {
        return (
          /** @type {import('../initial-state.js').ValueFlowsEconomicEvent} */ (
            economicEvent
          )["vf:toLocation"][0].value === `#${state.activeRoom}`
        );
      })
      .map((economicEvent) => {
        return /** @type {import('../initial-state.js').ValueFlowsEconomicEvent} */ (
          economicEvent
        )["vf:resourceConformsTo"][0].value;
      })
      .map((id) => state.facts[id])
  );
}
