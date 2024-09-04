/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { HELP_ACTION } from "../../constants.js";

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
export function helpAction(prompt) {
  return {
    type: HELP_ACTION,
    payload: {
      prompt,
    },
  };
}
