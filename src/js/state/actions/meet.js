/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { MEET_ACTION } from "../../constants.js";

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
export function meetAction(name, seed) {
  return {
    type: MEET_ACTION,
    payload: {
      name,
      seed,
    },
  };
}
