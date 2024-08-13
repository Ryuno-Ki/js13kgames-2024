/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../../state/actions/reset.js";
import store from "../../state/store.js";
import { sectionSettings } from "./settings.js";

describe("sectionSettings", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when settings is not the active scene", function () {
    it("should be empty", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = store.getState();

      // Act
      const settingsScene = sectionSettings(targetElement, state);

      // Assert
      expect(settingsScene.innerHTML).to.be.empty;
    });
  });

  describe("when settings is the active scene", function () {
    it("should allow to choose colour preference", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "settings-section",
      });

      // Act
      const settingsScene = sectionSettings(targetElement, state);

      // Assert
      expect(settingsScene.querySelector("select#color-preference")).not.to.be
        .null;
      expect(settingsScene.querySelector('option[value="system"]')).not.to.be
        .null;
      expect(settingsScene.querySelector('option[value="light"]')).not.to.be
        .null;
      expect(settingsScene.querySelector('option[value="dark"]')).not.to.be
        .null;
    });

    it("should link to the title scene", function () {
      // Arrange
      const targetElement = document.createElement("section");
      const state = Object.assign({}, store.getState(), {
        activeScene: "settings-section",
      });

      // Act
      const settingsScene = sectionSettings(targetElement, state);

      // Assert
      expect(settingsScene.querySelector('button[data-scene="title-section"]'))
        .not.to.be.null;
    });
  });
});
