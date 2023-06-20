import { Range } from 'slate';
import { ElementOf } from '../element/TElement';
import { TextOf } from '../text/TText';
import { TNode } from './TNode';
/**
 * Get the sliced fragment represented by a range inside a root node.
 */
export declare const getNodeFragment: <N extends ElementOf<R> | TextOf<R>, R extends TNode = TNode>(root: R, range: Range) => N[];
//# sourceMappingURL=getNodeFragment.d.ts.map