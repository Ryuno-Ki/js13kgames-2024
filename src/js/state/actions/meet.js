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
 */

/**
 * Action creator to meet another person.
 *
 * @returns {MEET_ACTION}
 */
export function meetAction() {
  return {
    type: MEET_ACTION,
    payload: {},
  };
}
