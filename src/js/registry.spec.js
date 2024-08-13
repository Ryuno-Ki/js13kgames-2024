/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from "vitest";

import { add, render } from "./registry.js";

describe("registry", function () {
  describe("add", function () {
    it("should register a component", function () {
      // Arrange
      const component = document.createElement("div");

      // Act
      add("nobody", component);

      // Assert
      // Nothing to assert
    });
  });

  describe("render", function () {
    it("should render a clone of a component", function () {
      // Arrange
      const root = document.createElement("div");
      const state = {};

      // Act
      const component = render(root, state);

      // Assert
      expect(component).not.to.equal(root);
      expect(component.tagName).to.equal("DIV");
    });

    it("should recurse into known child components", function () {
      // Arrange
      const root = document.createElement("div");
      const child = document.createElement("span");
      child.setAttribute("data-component", child);
      root.appendChild(child);
      const state = {};

      // Act
      const component = render(root, state);

      // Assert
      expect(component).not.to.equal(root);
      expect(component.tagName).to.equal("DIV");
      expect(component.firstChild).not.to.equal(child);
      expect(component.firstChild.tagName).to.equal("SPAN");
    });
  });
});
