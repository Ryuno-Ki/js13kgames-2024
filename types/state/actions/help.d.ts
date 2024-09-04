/**
 * @typedef {object} HELP_ACTION
 * @property {import('../../constants.js').HELP_ACTION} HELP_ACTION.type
 * @property {object} HELP_ACTION.payload
 * @property {string} HELP_ACTION.payload.prompt
 */
/**
 * Action creator to display help.
 *
 * @argument {string} prompt
 * @returns {HELP_ACTION}
 */
export function helpAction(prompt: string): HELP_ACTION;
export type HELP_ACTION = {
  type: "HELP_ACTION";
  payload: {
    prompt: string;
  };
};
