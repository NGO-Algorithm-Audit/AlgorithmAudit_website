import { TEditor, Value } from './TEditor';
/**
 * Call a function, deferring normalization until after it completes
 * @return true if normalized.
 */
export declare const withoutNormalizing: <V extends Value>(editor: TEditor<V>, fn: () => boolean | void) => boolean;
//# sourceMappingURL=withoutNormalizing.d.ts.map