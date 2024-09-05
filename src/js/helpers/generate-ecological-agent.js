/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { generateFoaFPerson } from "./generate-foaf-person.js";
/**
 * Generator to handle the ValueFlowsEcologicalAgent details.
 *
 * @argument {string} name
 * @argument {Array<string>} knows
 * @argument {string} place
 * @returns {import('../state/initial-state.js').ValueFlowsEcologicalAgent}
 */
export function generateEcologicalAgent(name, knows, place) {
  // Cast to any first to overwrite the rdf:type
  const ecologicalAgent = /** @type {*} */ (
    generateFoaFPerson(name, knows, place)
  );
  ecologicalAgent["rdf:type"][0].value =
    "https://w3id.org/valueflows/ont/vf#EcologicalAgent";
  return ecologicalAgent;
}
