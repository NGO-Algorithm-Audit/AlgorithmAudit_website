import { Location } from 'slate';
import { EditorLeafOptions } from 'slate/dist/interfaces/editor';
import { ETextEntry } from '../node/TNodeEntry';
import { TEditor, Value } from './TEditor';
/**
 * Get the leaf text node at a location.
 */
export declare const getLeafNode: <V extends Value>(editor: TEditor<V>, at: Location, options?: EditorLeafOptions | undefined) => ETextEntry<V>;
//# sourceMappingURL=getLeafNode.d.ts.map