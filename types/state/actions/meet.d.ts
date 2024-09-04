/**
 * @typedef {object} MEET_ACTION
 * @property {import('../../constants.js').MEET_ACTION} MEET_ACTION.type
 * @property {object} MEET_ACTION.payload
 * @property {string} MEET_ACTION.payload.name
 * @property {string | object} MEET_ACTION.payload.seed
 */
/**
 * Action creator to meet another person.
 *
 * @argument {string} name
 * @argument {string | object} seed
 * @returns {MEET_ACTION}
 */
export function meetAction(name: string, seed: string | object): MEET_ACTION;
export type MEET_ACTION = {
  type: "MEET_ACTION";
  payload: {
    name: string;
    seed: string | object;
  };
};
