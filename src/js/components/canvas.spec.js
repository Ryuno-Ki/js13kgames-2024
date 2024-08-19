/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import store from "../state/store.js";
import { canvas } from "./canvas.js";

describe("canvas", function () {
  it("should generate a SVG", function () {
    // Arrange
    const targetElement = document.createElement("div");
    const state = store.getState();

    // Act
    const component = canvas(targetElement, state);

    // Assert
    expect(component.firstElementChild).toBeInstanceOf(SVGElement);
  });
});
