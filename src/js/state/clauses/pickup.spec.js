/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import store from "../store.js";
import { pickup } from "./pickup.js";

describe("pickup", function () {
  it("should suggest possible rooms", function () {
    // Arrange
    const state = store.getState();

    // Act
    const items = pickup(state);
    const possibleItems = state.facts.places.find(
      (r) => r.name == state.activeRoom,
    ).items;

    // Assert
    expect(items).to.deep.equal(possibleItems);
  });

  describe("when there is more than one item possible", function () {
    it("should list them all", function () {
      // Arrange
      const state = Object.assign({}, store.getState(), {
        activeRoom: "outside",
      });

      // Act
      const items = pickup(state);
      const possibleItems = state.facts.places.find(
        (r) => r.name == state.activeRoom,
      ).items;

      // Assert
      expect(items).to.deep.equal(possibleItems);
    });
  });
});
