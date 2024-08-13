/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * @private
 */
const registry = new Map();

/**
 * Helper function to render DOM elements as copy of targetElement with state
 * updates applied.
 *
 * @private
 * @argument {function} component
 * @todo Replace function with component once typedef'ed
 */
function renderWrapper(component) {
  /**
   * @argument {HTMLElement} targetElement
   * @argument {object} state
   * @todo Replace object with state once typedef'ed
   */
  return function wrapper(targetElement, state) {
    const element = component(targetElement, state);
    const childComponents = Array.from(
      element.querySelectorAll("[data-component]"),
    );

    childComponents.forEach(function maybeReplace(target) {
      const name = target.dataset.component;
      const child = registry.get(name);

      if (!child) {
        return;
      }

      target.replaceWith(child(target, state));
    });

    return element;
  };
}

/**
 * Register a new component.
 *
 * @argument {string} name
 * @argument {function} component
 * @todo Replace function with component once typedef'ed
 */
export function add(name, component) {
  registry.set(name, renderWrapper(component));
}

/**
 * Render the new DOM with virtual nodes.
 *
 * @argument {HTMLElement} root
 * @argument {object} state
 * @todo Replace object with state once typedef'ed
 */
export function render(root, state) {
  /**
   * @argument {HTMLElement} root
   */
  function cloneComponent(root) {
    return root.cloneNode(true);
  }

  return renderWrapper(cloneComponent)(root, state);
}
