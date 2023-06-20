import { EElementOrText } from '../element/TElement';
import { TEditor, Value } from './TEditor';
/**
 * Insert a node at the current selection.
 *
 * If the selection is currently expanded, it will be deleted first.
 */
export declare const insertNode: <V extends Value>(editor: TEditor<V>, node: EElementOrText<V> | EElementOrText<V>[]) => void;
//# sourceMappingURL=insertNode.d.ts.map