/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from "vitest";

import { RESET_ACTION } from "../../constants.js";
import { resetAction } from "./reset.js";

describe("resetAction", function () {
  it(`should create a ${RESET_ACTION}`, function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = resetAction();

    // Assert
    expect(action.type).to.equal(RESET_ACTION);
    expect(action.payload).to.deep.equal({});
  });
});
