/**
 * @returns whether the provided parameter is undefined.
 */
export declare const isUndefined: (obj: any) => obj is undefined;
export declare const isNull: (obj: any) => obj is null;
/**
 * @returns whether the provided parameter is undefined or null.
 */
export declare const isUndefinedOrNull: (obj: any) => obj is null | undefined;
/**
 * @returns whether the provided parameter is defined.
 */
export declare const isDefined: <T>(arg: T | null | undefined) => arg is T;
//# sourceMappingURL=type-utils.d.ts.map