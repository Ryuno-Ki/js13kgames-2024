/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from "vitest";

import { draw } from "./draw.js";

describe("draw", function () {
  it("should bail out if the app cannot be bootstrapped", function () {
    // Arrange
    const restore = document.body.innerHTML;
    const spy = vi.spyOn(document, "getElementById");

    // Act
    draw();

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(document.body.innerHTML).to.equal(restore);
    document.body.innerHTML = restore;
  });

  it("should render the game", function () {
    // Arrange
    const restore = document.body.innerHTML;
    document.body.innerHTML = '<main id="app"></main>';
    const spy = vi.spyOn(document, "getElementById");

    // Act
    draw();

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(document.body.innerHTML).not.to.equal(restore);
    document.body.innerHTML = restore;
  });
});
