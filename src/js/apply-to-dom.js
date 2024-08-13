/*
 * SPDX-FileCopyrightText: 2024 André Jaenisch
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Helper function to add a virtual node to the real DOM.
 *
 * @private
 * @argument {HTMLElement} parentNode
 * @argument {HTMLElement} virtualNode
 */
function addToRealDOM(parentNode, virtualNode) {
  parentNode.appendChild(virtualNode);
}

/**
 * Helper function to compare to nodes.
 *
 * @private
 * @argument {HTMLElement} node1
 * @argument {HTMLElement} node2
 * @returns {boolean}
 */
function hasNodeChanged(node1, node2) {
  if (node1.tagName !== node2.tagName) {
    return true;
  }

  const n1Attributes = node1.attributes;
  const n2Attributes = node2.attributes;

  if (n1Attributes.length !== n2Attributes.length) {
    return true;
  }

  const differentAttribute = Array.from(n1Attributes).find(
    function compareAttribute(attribute) {
      const name = attribute.name;
      const attribute1 = node1.getAttribute(name);
      const attribute2 = node2.getAttribute(name);
      return attribute1 !== attribute2;
    },
  );

  if (differentAttribute) {
    return true;
  }

  if (
    node1.children.length === 0 &&
    node2.children.length === 0 &&
    node1.textContent !== node2.textContent
  ) {
    return true;
  }

  return false;
}

/**
 * Helper function to remove a real node from the DOM.
 *
 * @private
 * @argument {HTMLElement} realNode
 */
function removeRealNodeFromDOM(realNode) {
  realNode.remove();
}

/**
 * Helper function to replace a real node with a virtual one.
 *
 * @private
 * @argument {HTMLElement} realNode
 * @argument {HTMLElement} virtualNode
 */
function replaceNode(realNode, virtualNode) {
  realNode.replaceWith(virtualNode);
}

/**
 * DOM diffing algorithm.
 *
 * @argument {HTMLElement} parentNode
 * @argument {HTMLElement} realNode
 * @argument {HTMLElement} virtualNode
 */
export function applyToDOM(parentNode, realNode, virtualNode) {
  if (realNode && !virtualNode) {
    return removeRealNodeFromDOM(realNode);
  }

  if (!realNode && virtualNode) {
    return addToRealDOM(parentNode, virtualNode);
  }

  if (hasNodeChanged(realNode, virtualNode)) {
    return replaceNode(realNode, virtualNode);
  }

  const realChildren = /** @type {Array<HTMLElement>} */ (
    Array.from(realNode.children)
  );
  const virtualChildren = /** @type {Array<HTMLElement>} */ (
    Array.from(virtualNode.children)
  );
  const max = Math.max(realChildren.length, virtualChildren.length);

  for (let i = 0; i < max; i++) {
    applyToDOM(realNode, realChildren[i], virtualChildren[i]);
  }
}
