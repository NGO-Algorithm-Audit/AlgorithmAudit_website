import { Point } from 'slate';
import { EditorPointRefOptions } from 'slate/dist/interfaces/editor';
import { TEditor, Value } from './TEditor';
/**
 * Create a mutable ref for a `Point` object, which will stay in sync as new
 * operations are applied to the editor.
 */
export declare const createPointRef: <V extends Value>(editor: TEditor<V>, point: Point, options?: EditorPointRefOptions | undefined) => import("slate").PointRef;
//# sourceMappingURL=createPointRef.d.ts.map