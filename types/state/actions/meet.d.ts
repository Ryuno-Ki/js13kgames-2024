/**
 * @typedef {object} MEET_ACTION
 * @property {import('../../constants.js').MEET_ACTION} MEET_ACTION.type
 * @property {object} MEET_ACTION.payload
 */
/**
 * Action creator to meet another person.
 *
 * @returns {MEET_ACTION}
 */
export function meetAction(): MEET_ACTION;
export type MEET_ACTION = {
  type: "MEET_ACTION";
  payload: object;
};
