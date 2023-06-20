import { EditorAfterOptions, Location } from 'slate';
import { TEditor, Value } from './TEditor';
/**
 * Get the point after a location.
 */
export declare const getPointAfter: <V extends Value>(editor: TEditor<V>, at: Location, options?: EditorAfterOptions | undefined) => import("slate").BasePoint | undefined;
//# sourceMappingURL=getPointAfter.d.ts.map