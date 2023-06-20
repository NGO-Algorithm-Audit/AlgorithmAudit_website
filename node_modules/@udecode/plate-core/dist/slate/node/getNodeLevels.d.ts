import { NodeLevelsOptions, Path } from 'slate';
import { NodeOf, TNode } from './TNode';
import { TNodeEntry } from './TNodeEntry';
/**
 * Return a generator of the in a branch of the tree, from a specific path.
 *
 * By default the order is top-down, from lowest to highest node in the tree,
 * but you can pass the `reverse: true` option to go bottom-up.
 */
export declare const getNodeLevels: <N extends NodeOf<R>, R extends TNode = TNode>(root: R, path: Path, options?: NodeLevelsOptions | undefined) => Generator<TNodeEntry<N>, void, undefined>;
//# sourceMappingURL=getNodeLevels.d.ts.map