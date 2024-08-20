/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import store from "../store.js";
import { go } from "./go.js";

describe("go", function () {
  it("should suggest possible rooms", function () {
    // Arrange
    const state = store.getState();

    // Act
    const rooms = go(state);
    const possibleRooms = state.facts.places.find(
      (r) => r.name == state.activeRoom,
    ).connections;

    // Assert
    expect(rooms).to.deep.equal(possibleRooms);
  });

  describe("when there is more than one room possible", function () {
    it("should list them all", function () {
      // Arrange
      const state = Object.assign({}, store.getState(), {
        activeRoom: "outside",
      });

      // Act
      const rooms = go(state);
      const possibleRooms = state.facts.places.find(
        (r) => r.name == state.activeRoom,
      ).connections;

      // Assert
      expect(rooms).to.deep.equal(possibleRooms);
    });
  });
});
