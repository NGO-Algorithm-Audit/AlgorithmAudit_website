/**



*/
/**
 * @group _MiscellaneousElement
 */
export declare type RootElement = {
    type: 'root';
    children: BlockElement[];
};
/**
 * @group BlockElement
 */
export declare type BlockquoteElement = {
    type: 'blockquote';
    children: InlineElement[];
};
/**
 * @group BlockElement
 */
export declare type CodeBlockElement = {
    type: 'code_block';
    lang?: string;
    value: string;
    children: [EmptyTextElement];
};
/**
 * @group BlockElement
 */
export declare type HeadingElement = {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: InlineElement[];
};
/**
 * @group BlockElement
 */
export declare type HrElement = {
    type: 'hr';
    children: [EmptyTextElement];
};
/**
 * @group BlockElement
 */
export declare type HTMLElement = {
    type: 'html';
    value: string;
    children: [EmptyTextElement];
};
/**
 * @group InlineElement
 */
export declare type HTMLInlineElement = {
    type: 'html_inline';
    value: string;
    children: [EmptyTextElement];
};
/**
 * @group BlockElement
 */
export declare type InvalidMarkdownElement = {
    type: 'invalid_markdown';
    value: string;
    message: string;
    position?: Position;
    children: [EmptyTextElement];
};
/**
 * @group ListElements
 */
export declare type List = OrderedListElement | UnorderedListElement;
/**
 * @group ListElements
 */
export declare type ListItemContentElement = {
    type: 'lic';
    children: LicElement[];
};
/**
 * @group ListElements
 */
export declare type ListItemChildrenElement = ListItemContentElement | UnorderedListElement | OrderedListElement;
/**
 * @group BlockElement
 */
export declare type ListItemElement = {
    type: 'li';
    children: ListItemChildrenElement[];
};
/**
 * @group BlockElement
 */
export declare type UnorderedListElement = {
    type: 'ul';
    children: ListItemElement[];
};
/**
 * @group BlockElement
 */
export declare type MdxBlockElement = {
    type: 'mdxJsxFlowElement';
    name: string | null;
    props: Record<string, unknown>;
    children: [EmptyTextElement];
};
/**
 * @group BlockElement
 */
export declare type OrderedListElement = {
    type: 'ol';
    children: ListItemElement[];
};
/**
 * @group BlockElement
 */
export declare type ParagraphElement = {
    type: 'p';
    children: InlineElement[];
};
/**
 * @group BlockElement
 */
export declare type BlockElement = BlockquoteElement | CodeBlockElement | HeadingElement | HrElement | HTMLElement | ImageElement | InvalidMarkdownElement | ListItemElement | MdxBlockElement | ParagraphElement | OrderedListElement | UnorderedListElement;
/**
 * @group InlineElement
 */
export declare type MdxInlineElement = {
    type: 'mdxJsxTextElement';
    name: string | null;
    props: Record<string, unknown>;
    children: [EmptyTextElement];
};
/**
 * @remarks
 * Used specifically to denote no children, used by
 * the frontend rich-text editor for void nodes
 *
 * @group MiscellaneousElement
 */
export declare type EmptyTextElement = {
    type: 'text';
    text: '';
};
/**
 * @group InlineElement
 */
export declare type TextElement = {
    type: 'text';
    text: string;
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
};
/**
 * @remarks
 * It may be beneficial to treat this as a block element
 *
 * @group InlineElement
 */
export declare type ImageElement = {
    type: 'img';
    url: string;
    alt?: string;
    caption?: string | null;
    children: [EmptyTextElement];
};
/**
 * @group InlineElement
 */
export declare type LinkElement = {
    type: 'a';
    url: string;
    title?: string | null;
    children: InlineElement[];
};
/**
 * @group InlineElement
 */
export declare type BreakElement = {
    type: 'break';
    children: [EmptyTextElement];
};
/**
 * @group ListElements
 */
export declare type LicElement = InlineElement;
/**
 * @group InlineElement
 */
export declare type InlineElement = TextElement | MdxInlineElement | BreakElement | LinkElement | ImageElement | HTMLInlineElement;
/**
 * @remarks
 * Positional information for error reporting
 *
 * @group _MiscellaneousElement
 */
export declare type Position = {
    start: PositionItem;
    end: PositionItem;
};
/**
 * @remarks
 * Positional information for error reporting
 *
 * @group _MiscellaneousElement
 */
export declare type PositionItem = {
    line?: number | null;
    column?: number | null;
    offset?: number | null;
    _index?: number | null;
    _bufferIndex?: number | null;
};
