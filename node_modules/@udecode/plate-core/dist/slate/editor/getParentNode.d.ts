import { EditorParentOptions, Location } from 'slate';
import { TNodeEntry } from '../node/TNodeEntry';
import { TEditor, Value } from './TEditor';
/**
 * Get the parent node of a location.
 * Returns undefined if there is no parent.
 */
export declare const getParentNode: <N extends import("../node/TAncestor").AncestorOf<TEditor<V>>, V extends Value = Value>(editor: TEditor<V>, at: Location, options?: EditorParentOptions | undefined) => TNodeEntry<N> | undefined;
//# sourceMappingURL=getParentNode.d.ts.map