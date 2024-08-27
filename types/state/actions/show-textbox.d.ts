/**
 * @typedef {object} SHOW_TEXTBOX_ACTION
 * @property {import('../../constants.js').SHOW_TEXTBOX_ACTION} SHOW_TEXTBOX_ACTION.type
 * @property {object} SHOW_TEXTBOX_ACTION.payload
 */
/**
 * Action creator to show the textbox.
 *
 * @returns {SHOW_TEXTBOX_ACTION}
 */
export function showTextboxAction(): SHOW_TEXTBOX_ACTION;
export type SHOW_TEXTBOX_ACTION = {
  type: "SHOW_TEXTBOX_ACTION";
  payload: object;
};
