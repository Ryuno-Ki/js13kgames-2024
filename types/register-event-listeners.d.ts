/**
 * @typedef {*} EventListener
 * @todo Frigging TypeScript is not able to detect document.body event listeners
 * with an union of window event listeners.
 */
/**
 * Registers event listeners.
 */
export function registerEventListeners(): void;
export type EventListener = any;
