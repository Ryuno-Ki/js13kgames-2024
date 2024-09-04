/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import { OFFER_ACTION } from "../../constants.js";
import { offerAction } from "./offer.js";

describe("offerAction", function () {
  it(`should create a ${OFFER_ACTION}`, function () {
    // Arrange
    const prompt = "go home";

    // Act
    const action = offerAction(prompt);

    // Assert
    expect(action.type).to.equal(OFFER_ACTION);
    expect(action.payload.prompt).to.equal(prompt);
  });
});
