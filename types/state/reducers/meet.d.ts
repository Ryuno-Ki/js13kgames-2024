/**
 * Reducer to meet another person.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/meet.js').MEET_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function meetReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/meet.js").MEET_ACTION["payload"],
): import("../initial-state.js").State;
