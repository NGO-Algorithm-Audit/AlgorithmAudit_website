import { Range } from 'slate';
import { EditorRangeRefOptions } from 'slate/dist/interfaces/editor';
import { TEditor, Value } from './TEditor';
/**
 * Create a mutable ref for a `Range` object, which will stay in sync as new
 * operations are applied to the editor.
 */
export declare const createRangeRef: <V extends Value>(editor: TEditor<V>, range: Range, options?: EditorRangeRefOptions | undefined) => import("slate").RangeRef;
//# sourceMappingURL=createRangeRef.d.ts.map