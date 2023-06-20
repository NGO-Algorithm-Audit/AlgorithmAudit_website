import { EditorBeforeOptions, Location } from 'slate';
import { TEditor, Value } from './TEditor';
/**
 * Get the point before a location.
 */
export declare const getPointBefore: <V extends Value>(editor: TEditor<V>, at: Location, options?: EditorBeforeOptions | undefined) => import("slate").BasePoint | undefined;
//# sourceMappingURL=getPointBefore.d.ts.map