/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { SHOW_TEXTBOX_ACTION } from "../../constants.js";

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
export function showTextboxAction() {
  return {
    type: SHOW_TEXTBOX_ACTION,
    payload: {},
  };
}
