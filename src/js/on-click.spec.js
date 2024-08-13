/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import { resetAction } from "./state/actions/reset.js";
import { switchToSceneAction } from "./state/actions/switch-to-scene.js";
import store from "./state/store.js";
import { onClick } from "./on-click.js";

describe("onClick", function () {
  beforeEach(async function () {
    await store.dispatch(resetAction());
  });

  it("should dispatch to switch to a scene", async function () {
    // Arrange
    const event = new window.Event("click");
    const target = document.createElement("button");
    target.type = "button";
    target.setAttribute("data-scene", "about-section");
    target.addEventListener("click", onClick);
    const spy = vi.spyOn(store, "dispatch");

    // Act
    await target.dispatchEvent(event);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(switchToSceneAction("about-section"));
  });
});
