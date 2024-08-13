/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Helper function to sanitise user input by removing potentially dangerous characters.
 *
 * @argument {string} rawString
 * @returns {string}
 */
export function sanitise(rawString) {
  return rawString
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/{/g, "")
    .replace(/}/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/"/g, "")
    .replace(/'/g, "")
    .replace(/%/g, "")
    .replace(/&/g, "")
    .replace(/=/g, "")
    .replace(/\$/g, "")
    .replace(/\//g, "")
    .replace(/\\/g, "")
    .replace(/\s+/, " ");
}
