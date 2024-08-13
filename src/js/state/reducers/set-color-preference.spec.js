/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { setColorPreferenceReducer } from "./set-color-preference.js";

describe("setColorPreferenceReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should set the color preference", function () {
    // Arrange
    const state = store.getState();
    const payload = { colorScheme: "dark" };

    // Act
    const newState = setColorPreferenceReducer(state, payload);

    // Assert
    expect(newState).not.to.equal(state);
    expect(newState.activeColorScheme).to.equal(payload.colorScheme);
  });
});
