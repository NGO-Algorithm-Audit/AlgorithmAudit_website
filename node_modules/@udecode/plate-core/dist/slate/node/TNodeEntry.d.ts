import { Path } from 'slate';
import { TEditor, Value } from '../editor/TEditor';
import { EElement, ElementOf } from '../element/TElement';
import { EText, TextOf } from '../text/TText';
import { AncestorOf } from './TAncestor';
import { ChildOf, DescendantOf, EDescendant } from './TDescendant';
import { ENode, TNode } from './TNode';
/**
 * `TNodeEntry` objects are returned when iterating over the nodes in a Slate
 * document tree. They consist of the node and its `Path` relative to the root
 * node in the document.
 */
export declare type TNodeEntry<N extends TNode = TNode> = [N, Path];
/**
 * Node entry from an editor.
 */
export declare type ENodeEntry<V extends Value> = TNodeEntry<ENode<V>>;
/**
 * Element entry from a node.
 */
export declare type TElementEntry<N extends TNode = TNode> = TNodeEntry<ElementOf<N>>;
/**
 * Element entry from an editor.
 */
/**
 * Element entry of a value.
 */
export declare type EElementEntry<V extends Value> = TNodeEntry<EElement<V>>;
/**
 * Text node entry from a node.
 */
export declare type TTextEntry<N extends TNode = TNode> = TNodeEntry<TextOf<N>>;
/**
 * Text node entry from an editor.
 */
/**
 * Text node entry of a value.
 */
export declare type ETextEntry<V extends Value> = TNodeEntry<EText<V>>;
/**
 * Ancestor entry from a node.
 */
export declare type TAncestorEntry<N extends TNode = TNode> = TNodeEntry<AncestorOf<N>>;
/**
 * Ancestor entry from an editor.
 */
export declare type EAncestorEntry<V extends Value> = TAncestorEntry<TEditor<V>>;
/**
 * Descendant entry from a node.
 */
export declare type TDescendantEntry<N extends TNode = TNode> = TNodeEntry<DescendantOf<N>>;
/**
 * Descendant entry from an editor.
 */
/**
 * Descendant entry of a value.
 */
export declare type EDescendantEntry<V extends Value> = TNodeEntry<EDescendant<V>>;
/**
 * Child node entry from a node.
 */
export declare type TNodeChildEntry<N extends TNode = TNode> = TNodeEntry<ChildOf<N>>;
//# sourceMappingURL=TNodeEntry.d.ts.map