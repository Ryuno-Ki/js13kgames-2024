/**
 * Tuple of tag name, list of className, attribute mapping, text content and children
 *
 * @template {[string, Array<string>, Record<string, string>, string, Array<G>]} G
 */
/** @typedef {G} G */
/**
 * Helper function to generate DOM elements from a data structure.
 *
 * The last argument is basically arguments of this function.
 *
 * @argument {G} gil
 * @returns {HTMLElement | SVGElement}
 */
export function el(gil: G): HTMLElement | SVGElement;
export type G = G;
