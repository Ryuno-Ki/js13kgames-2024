/**
 * Reducer to display help.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/help.js').HELP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function helpReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/help.js").HELP_ACTION["payload"],
): import("../initial-state.js").State;
