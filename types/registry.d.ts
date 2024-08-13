/**
 * Register a new component.
 *
 * @argument {string} name
 * @argument {function} component
 * @todo Replace function with component once typedef'ed
 */
export function add(name: string, component: Function): void;
/**
 * Render the new DOM with virtual nodes.
 *
 * @argument {HTMLElement} root
 * @argument {object} state
 * @todo Replace object with state once typedef'ed
 */
export function render(root: HTMLElement, state: object): any;
