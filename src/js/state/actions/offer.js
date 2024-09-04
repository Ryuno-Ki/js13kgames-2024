/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { OFFER_ACTION } from "../../constants.js";

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
export function offerAction(prompt) {
  return {
    type: OFFER_ACTION,
    payload: {
      prompt,
    },
  };
}
