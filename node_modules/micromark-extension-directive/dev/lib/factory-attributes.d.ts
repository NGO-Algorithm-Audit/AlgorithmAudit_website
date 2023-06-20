/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} attributesType
 * @param {string} attributesMarkerType
 * @param {string} attributeType
 * @param {string} attributeIdType
 * @param {string} attributeClassType
 * @param {string} attributeNameType
 * @param {string} attributeInitializerType
 * @param {string} attributeValueLiteralType
 * @param {string} attributeValueType
 * @param {string} attributeValueMarker
 * @param {string} attributeValueData
 * @param {boolean} [disallowEol=false]
 */
export function factoryAttributes(
  effects: Effects,
  ok: State,
  nok: State,
  attributesType: string,
  attributesMarkerType: string,
  attributeType: string,
  attributeIdType: string,
  attributeClassType: string,
  attributeNameType: string,
  attributeInitializerType: string,
  attributeValueLiteralType: string,
  attributeValueType: string,
  attributeValueMarker: string,
  attributeValueData: string,
  disallowEol?: boolean | undefined
): (
  code: import('micromark-util-types').Code
) => void | import('micromark-util-types').State
export type Effects = import('micromark-util-types').Effects
export type State = import('micromark-util-types').State
export type Code = import('micromark-util-types').Code
