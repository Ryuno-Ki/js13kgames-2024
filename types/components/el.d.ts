/**
 * Tuple of tag name, list of className, attribute mapping, text content and children
 *
 * @template {[string, Array<string>, Record<string, string>, string, Array<G>]} G
 */
/** @typedef {G} G */
/**
 * Builder to generate HTML from an well-defined object structure.
 *
 * @param {G} gil
 * @returns {HTMLElement}
 */
export function el(gil: G): HTMLElement;
export type G = G;
