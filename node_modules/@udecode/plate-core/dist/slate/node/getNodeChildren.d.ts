import { NodeChildrenOptions, Path } from 'slate';
import { ChildOf } from './TDescendant';
import { TNode } from './TNode';
import { TNodeEntry } from './TNodeEntry';
/**
 * Iterate over the children of a node at a specific path.
 */
export declare const getNodeChildren: <N extends ChildOf<R, number>, R extends TNode = TNode>(root: R, path: Path, options?: NodeChildrenOptions | undefined) => Generator<TNodeEntry<N>, void, undefined>;
//# sourceMappingURL=getNodeChildren.d.ts.map