import { Path } from 'slate';
import { AncestorOf } from './TAncestor';
import { TNode } from './TNode';
/**
 * Get the parent of a node at a specific path.
 */
export declare const getNodeParent: <N extends AncestorOf<R>, R extends TNode = TNode>(root: R, path: Path) => N;
//# sourceMappingURL=getNodeParent.d.ts.map