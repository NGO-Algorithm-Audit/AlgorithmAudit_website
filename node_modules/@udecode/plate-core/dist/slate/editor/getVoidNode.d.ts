import { EditorVoidOptions } from 'slate';
import { TNodeEntry } from '../node/TNodeEntry';
import { TEditor, Value } from './TEditor';
/**
 * Match a void node in the current branch of the editor.
 */
export declare const getVoidNode: <N extends import("../element/TElement").ElementOf<TEditor<V>>, V extends Value = Value>(editor: TEditor<V>, options?: EditorVoidOptions | undefined) => TNodeEntry<N> | undefined;
//# sourceMappingURL=getVoidNode.d.ts.map