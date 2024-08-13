/**
 * @typedef {object} SET_COLOR_PREFERENCE_ACTION
 * @property {import('../../constants.js').SET_COLOR_PREFERENCE_ACTION} SET_COLOR_PREFERENCE_ACTION.type
 * @property {object} SET_COLOR_PREFERENCE_ACTION.payload
 * @property {import('../initial-state.js').ColorScheme} SET_COLOR_PREFERENCE_ACTION.payload.colorScheme
 */
/**
 * Action creator to set a color preference.
 *
 * @argument {import('../initial-state.js').ColorScheme} colorScheme
 * @returns {SET_COLOR_PREFERENCE_ACTION}
 */
export function setColorPreferenceAction(
  colorScheme: import("../initial-state.js").ColorScheme,
): SET_COLOR_PREFERENCE_ACTION;
export type SET_COLOR_PREFERENCE_ACTION = {
  type: "SET_COLOR_PREFERENCE_ACTION";
  payload: {
    colorScheme: import("../initial-state.js").ColorScheme;
  };
};
