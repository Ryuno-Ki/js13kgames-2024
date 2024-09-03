/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it } from "vitest";

import { meetAction } from "../actions/meet.js";
import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { pickup } from "./pickup.js";

describe("pickup", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  describe("when nobody is offering goods", function () {
    it("should have nothing to offer", function () {
      // Arrange
      const state = store.getState();

      // Act
      const items = pickup(state);

      // Assert
      expect(items).to.deep.equal([]);
    });
  });

  describe("when somebody is offering goods", function () {
    beforeEach(async function () {
      await store.dispatch(meetAction());
    });

    it("should list the good", function () {
      // Arrange
      const state = store.getState();

      // Act
      const items = pickup(state);

      // Assert
      expect(items).toHaveLength(1);
    });
  });
});
