/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from "vitest";

import { SET_COLOR_PREFERENCE_ACTION } from "../../constants.js";
import { setColorPreferenceAction } from "./set-color-preference.js";

describe("setColorPreferenceAction", function () {
  it(`should create a ${SET_COLOR_PREFERENCE_ACTION}`, function () {
    // Arrange
    const colorScheme = "dark";

    // Act
    const action = setColorPreferenceAction(colorScheme);

    // Assert
    expect(action.type).to.equal(SET_COLOR_PREFERENCE_ACTION);
    expect(action.payload.colorScheme).to.equal(colorScheme);
  });
});
