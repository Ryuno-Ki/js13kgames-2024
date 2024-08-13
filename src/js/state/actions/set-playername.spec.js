/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from "vitest";

import { SET_PLAYERNAME_ACTION } from "../../constants.js";
import { setPlayernameAction } from "./set-playername.js";

describe("setPlayernameAction", function () {
  it(`should create a ${SET_PLAYERNAME_ACTION}`, function () {
    // Arrange
    const playername = "Christoph";

    // Act
    const action = setPlayernameAction(playername);

    // Assert
    expect(action.type).to.equal(SET_PLAYERNAME_ACTION);
    expect(action.payload.playername).to.equal(playername);
  });
});
