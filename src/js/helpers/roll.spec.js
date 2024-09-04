/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import { roll } from "./roll.js";

describe("roll", function () {
  it('should create a random integer less than "upper"', function () {
    // Arrange
    const rng = Math.random;
    const upper = 10;

    // Act
    const randomNumber = roll(rng, upper);

    // Assert
    expect(randomNumber).toBeTypeOf("number");
    expect(randomNumber).to.be.greaterThanOrEqual(0);
    expect(randomNumber).to.be.lessThan(upper);
  });

  it('should create a random integer greater than "lower"', function () {
    // Arrange
    const rng = Math.random;
    const upper = 10;
    const lower = 2;

    // Act
    const randomNumber = roll(rng, upper, lower);

    // Assert
    expect(randomNumber).toBeTypeOf("number");
    expect(randomNumber).to.be.greaterThanOrEqual(lower);
    expect(randomNumber).to.be.lessThan(upper);
  });
});
