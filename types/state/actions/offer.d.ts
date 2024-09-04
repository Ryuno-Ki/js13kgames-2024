/**
 * @typedef {object} OFFER_ACTION
 * @property {import('../../constants.js').OFFER_ACTION} OFFER_ACTION.type
 * @property {object} OFFER_ACTION.payload
 * @property {string} OFFER_ACTION.payload.prompt
 */
/**
 * Action creator to offer an item.
 *
 * @argument {string} prompt
 * @returns {OFFER_ACTION}
 */
export function offerAction(prompt: string): OFFER_ACTION;
export type OFFER_ACTION = {
  type: "OFFER_ACTION";
  payload: {
    prompt: string;
  };
};
