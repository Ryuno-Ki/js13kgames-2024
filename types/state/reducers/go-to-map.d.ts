/**
 * Reducer to update the prompt.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/go-to-map.js').GO_TO_MAP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function goToMapReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/go-to-map.js").GO_TO_MAP_ACTION["payload"],
): import("../initial-state.js").State;
