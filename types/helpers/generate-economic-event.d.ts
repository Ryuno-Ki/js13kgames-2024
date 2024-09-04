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
  action: string,
  provider: string,
  receiver: string,
  resourceSpecification: string,
  resource: string,
  quantity: string,
  place: string,
): import("../state/initial-state.js").ValueFlowsEconomicEvent;
