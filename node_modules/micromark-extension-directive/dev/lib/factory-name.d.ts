/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 */
export function factoryName(
  this: import('micromark-util-types').TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State,
  type: string
): (
  code: import('micromark-util-types').Code
) => void | import('micromark-util-types').State
export type TokenizeContext = import('micromark-util-types').TokenizeContext
export type Effects = import('micromark-util-types').Effects
export type State = import('micromark-util-types').State
