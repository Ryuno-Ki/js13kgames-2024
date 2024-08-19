/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import store from "../state/store.js";
import { prompt } from "./prompt.js";

describe("prompt", function () {
  it("should generate a label", function () {
    // Arrange
    const targetElement = document.createElement("div");
    const state = store.getState();

    // Act
    const component = prompt(targetElement, state);

    // Assert
    expect(component.firstElementChild).toBeInstanceOf(HTMLLabelElement);
  });

  it("should generate an input", function () {
    // Arrange
    const targetElement = document.createElement("div");
    const state = store.getState();

    // Act
    const component = prompt(targetElement, state);

    // Assert
    expect(component.querySelector("input#prompt")).toBeInstanceOf(
      HTMLInputElement,
    );
  });
});
