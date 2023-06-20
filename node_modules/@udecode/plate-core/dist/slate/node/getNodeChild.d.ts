import { ChildOf } from './TDescendant';
import { TNode } from './TNode';
/**
 * Get the child of a node at a specific index.
 */
export declare const getNodeChild: <N extends ChildOf<R, I>, R extends TNode = TNode, I extends number = number>(root: R, index: I) => N;
//# sourceMappingURL=getNodeChild.d.ts.map