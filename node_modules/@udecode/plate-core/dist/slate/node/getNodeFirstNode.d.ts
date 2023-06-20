import { Path } from 'slate';
import { NodeOf, TNode } from './TNode';
import { TNodeEntry } from './TNodeEntry';
/**
 * Get the first node entry in a root node from a path.
 */
export declare const getNodeFirstNode: <N extends NodeOf<R>, R extends TNode = TNode>(root: R, path: Path) => TNodeEntry<N>;
//# sourceMappingURL=getNodeFirstNode.d.ts.map