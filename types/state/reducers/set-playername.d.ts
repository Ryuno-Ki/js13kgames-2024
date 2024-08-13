/**
 * Reducer to set the name of the player (sanitised).
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-playername.js').SET_PLAYERNAME_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setPlayernameReducer(
  state: import("../initial-state.js").State,
  payload: import("../actions/set-playername.js").SET_PLAYERNAME_ACTION["payload"],
): import("../initial-state.js").State;
