import { Location, Point } from 'slate';
import { TEditor, Value } from './TEditor';
/**
 * Check if a point is the start point of a location.
 * If point is null, return false.
 */
export declare const isStartPoint: <V extends Value>(editor: TEditor<V>, point: Point | null | undefined, at: Location) => boolean;
//# sourceMappingURL=isStartPoint.d.ts.map