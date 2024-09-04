/**
 * Reducer to offer an item.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/offer.js').OFFER_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function offerReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/offer.js").OFFER_ACTION["payload"],
): import("../initial-state.js").State;
