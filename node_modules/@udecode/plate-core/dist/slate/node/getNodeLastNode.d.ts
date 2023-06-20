import { Path } from 'slate';
import { NodeOf, TNode } from './TNode';
import { TNodeEntry } from './TNodeEntry';
/**
 * Get the last node entry in a root node from a path.
 */
export declare const getNodeLastNode: <N extends NodeOf<R>, R extends TNode = TNode>(root: R, path: Path) => TNodeEntry<N>;
//# sourceMappingURL=getNodeLastNode.d.ts.map