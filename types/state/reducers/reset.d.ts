/**
 * Reducer to reset the state.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/reset.js').RESET_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function resetReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/reset.js").RESET_ACTION["payload"],
): import("../initial-state.js").State;
