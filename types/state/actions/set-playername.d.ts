/**
 * @typedef {object} SET_PLAYERNAME_ACTION
 * @property {import('../../constants.js').SET_PLAYERNAME_ACTION} SET_PLAYERNAME_ACTION.type
 * @property {object} SET_PLAYERNAME_ACTION.payload
 * @property {string} SET_PLAYERNAME_ACTION.payload.playername
 */
/**
 * Action creator to set name of the player.
 *
 * @argument {string} playername
 * @returns {SET_PLAYERNAME_ACTION}
 */
export function setPlayernameAction(playername: string): SET_PLAYERNAME_ACTION;
export type SET_PLAYERNAME_ACTION = {
  type: "SET_PLAYERNAME_ACTION";
  payload: {
    playername: string;
  };
};
