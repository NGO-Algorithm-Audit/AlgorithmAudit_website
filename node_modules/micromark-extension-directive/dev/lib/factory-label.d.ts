/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @param {boolean} [disallowEol=false]
 */
export function factoryLabel(
  effects: Effects,
  ok: State,
  nok: State,
  type: string,
  markerType: string,
  stringType: string,
  disallowEol?: boolean | undefined
): (
  code: import('micromark-util-types').Code
) => void | import('micromark-util-types').State
export type Effects = import('micromark-util-types').Effects
export type State = import('micromark-util-types').State
export type Token = import('micromark-util-types').Token
