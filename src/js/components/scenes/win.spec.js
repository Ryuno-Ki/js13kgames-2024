/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionWin } from "./win.js";

describe("sectionWin", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when win is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const winScene = sectionWin(targetElement, state);

      // Assert
      expect(winScene.innerHTML).to.be.empty;
    });
  });

  describe("when win is the active scene", function () {
    it("should show a Win", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "win-section",
      });

      // Act
      const winScene = sectionWin(targetElement, state);

      // Assert
      expect(winScene.querySelector("h1")).not.to.be.null;
    });

    it("should link to the title scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "win-section",
      });

      // Act
      const winScene = sectionWin(targetElement, state);

      // Assert
      expect(winScene.querySelector('[data-scene="title-section"]')).not.to.be
        .null;
    });
  });
});
