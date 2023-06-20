/**
 * @param {HtmlOptions} [options]
 * @returns {HtmlExtension}
 */
export function directiveHtml(options?: HtmlOptions | undefined): HtmlExtension
export type HtmlExtension = import('micromark-util-types').HtmlExtension
export type _Handle = import('micromark-util-types').Handle
export type CompileContext = import('micromark-util-types').CompileContext
export type Attribute = [string, string]
export type DirectiveType =
  | 'containerDirective'
  | 'leafDirective'
  | 'textDirective'
export type Directive = {
  type: DirectiveType
  name: string
  label?: string | undefined
  attributes?: Record<string, string> | undefined
  content?: string | undefined
  _fenceCount?: number | undefined
}
export type Handle = (
  this: CompileContext,
  directive: Directive
) => boolean | void
export type HtmlOptions = Record<string, Handle>
