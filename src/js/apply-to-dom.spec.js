/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi } from "vitest";

import { applyToDOM } from "./apply-to-dom.js";

describe("applyToDOM", function () {
  it("should remove a DOM node if it is not present in the virtual DOM", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = document.createElement("button");
    const virtualNode = null;
    const spy = vi.spyOn(realNode, "remove");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should add a node to the DOM if it is present in the virtual DOM", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = null;
    const virtualNode = document.createElement("button");
    const spy = vi.spyOn(parentNode, "appendChild");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(virtualNode);
  });

  it("should replace a real node if attribute values differ", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = document.createElement("button");
    realNode.type = "button";
    parentNode.appendChild(realNode);
    const virtualNode = document.createElement("button");
    virtualNode.type = "submit";
    const spy = vi.spyOn(realNode, "replaceWith");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(virtualNode);
  });

  it("should replace a real node if tag names differ", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = document.createElement("button");
    parentNode.appendChild(realNode);
    const virtualNode = document.createElement("a");
    const spy = vi.spyOn(realNode, "replaceWith");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(virtualNode);
  });

  it("should replace a real node if number of attributes differ", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = document.createElement("button");
    realNode.type = "button";
    parentNode.appendChild(realNode);
    const virtualNode = document.createElement("button");
    const spy = vi.spyOn(realNode, "replaceWith");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(virtualNode);
  });

  it("should replace a real node if text content differ", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = document.createElement("button");
    realNode.textContent = "click me";
    parentNode.appendChild(realNode);
    const virtualNode = document.createElement("button");
    const spy = vi.spyOn(realNode, "replaceWith");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(virtualNode);
  });

  it("should not replace identical nodes", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = document.createElement("button");
    const virtualNode = document.createElement("button");
    const spy = vi.spyOn(realNode, "replaceWith");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(spy).not.toHaveBeenCalled();
  });

  it("should recurse into children", function () {
    // Arrange
    const parentNode = document.createElement("div");
    const realNode = document.createElement("button");
    const icon = document.createElement("i");
    realNode.appendChild(icon);
    const virtualNode = document.createElement("button");
    const realSpy = vi.spyOn(realNode, "replaceWith");
    const iconSpy = vi.spyOn(icon, "remove");

    // Act
    applyToDOM(parentNode, realNode, virtualNode);

    // Assert
    expect(realSpy).not.toHaveBeenCalled();
    expect(iconSpy).toHaveBeenCalledTimes(1);
  });
});
