import { Path } from 'slate';
import { NodeOf, TNode } from './TNode';
import { TNodeEntry } from './TNodeEntry';
/**
 * Get an entry for the common ancesetor node of two paths.
 */
export declare const getCommonNode: <N extends NodeOf<R>, R extends TNode = TNode>(root: R, path: Path, another: Path) => TNodeEntry<N>;
//# sourceMappingURL=getCommonNode.d.ts.map