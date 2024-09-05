/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { helpReducer } from "./help.js";

describe("helpReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when prompt is empty", function () {
    it("should not change the possiblePrompts", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = helpReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(state.possiblePrompts);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "" };

      // Act
      const newState = helpReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal(state.prompt);
    });
  });

  describe("when the prompt starts with 'help '", function () {
    it("should suggest possible items", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "help " };

      // Act
      const newState = helpReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.possiblePrompts).to.deep.equal(["try go", "try offer"]);
    });

    it("should not change the prompt", function () {
      // Arrange
      const state = store.getState();
      const payload = { prompt: "help " };

      // Act
      const newState = helpReducer(state, payload);

      // Assert
      expect(newState).not.to.equal(state);
      expect(newState.prompt).to.equal(payload.prompt);
    });
  });
});
