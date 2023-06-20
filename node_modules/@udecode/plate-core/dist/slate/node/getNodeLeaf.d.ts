import { Path } from 'slate';
import { TextOf } from '../text/TText';
import { TNode } from './TNode';
/**
 * Get the node at a specific path, ensuring it's a leaf text node.
 */
export declare const getNodeLeaf: <N extends TextOf<R>, R extends TNode = TNode>(root: R, path: Path) => N;
//# sourceMappingURL=getNodeLeaf.d.ts.map