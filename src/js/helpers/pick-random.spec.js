/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import { pickRandom } from "./pick-random.js";

describe("pickRandom", function () {
  it("should pick a random item from a list", function () {
    // Arrange
    const list = [2, 5, 10, "a", true, console.log];
    const rng = Math.random;

    // Act
    const randomItem = pickRandom(list, rng);

    // Assert
    expect(list).toContainEqual(randomItem);
  });
});
