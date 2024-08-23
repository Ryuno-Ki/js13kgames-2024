/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";

import store from "../state/store.js";
import { suggestions } from "./suggestions.js";

describe("suggestions", function () {
  it("should generate a combobox", function () {
    // Arrange
    const targetElement = document.createElement("div");
    const state = store.getState();

    // Act
    const component = suggestions(targetElement, state);

    // Assert
    expect(component.querySelector("select")).toBeInstanceOf(HTMLSelectElement);
    expect(component.querySelectorAll("option")).toHaveLength(1);
  });

  describe("when possible prompts are suggested", function () {
    it("should have an option for each of them", function () {
      // Arrange
      const prompt = "go";
      const possiblePrompts = ["home"];
      const targetElement = document.createElement("div");
      const state = Object.assign({}, store.getState(), {
        prompt,
        possiblePrompts,
      });

      // Act
      const component = suggestions(targetElement, state);

      // Assert
      expect(component.querySelector("select")).toBeInstanceOf(
        HTMLSelectElement,
      );
      expect(component.querySelectorAll("option")).toHaveLength(
        1 + possiblePrompts.length,
      );
      expect(component.querySelector("option + option").value).toEqual(
        `${prompt} ${possiblePrompts[0]}`,
      );
    });
  });
});
