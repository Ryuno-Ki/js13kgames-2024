/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "../actions/reset.js";
import store from "../store.js";
import { setPlayernameReducer } from "./set-playername.js";

describe("setPlayernameReducer", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should set a sanitised playername", function () {
    // Arrange
    const state = store.getState();
    const payload = { playername: "I <script> a '$H4(k' into Ur \"G&me\"" };

    // Act
    const newState = setPlayernameReducer(state, payload);

    // Assert
    expect(newState).not.to.equal(state);
    expect(newState.playername).to.equal("I script a H4k into Ur Gme");
  });
});
