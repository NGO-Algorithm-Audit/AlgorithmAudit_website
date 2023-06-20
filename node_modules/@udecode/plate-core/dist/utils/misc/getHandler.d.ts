/**
 * Call a handler if defined
 */
export declare const getHandler: <T extends (...args: any) => any>(cb?: T | undefined, ...args: Parameters<T>) => () => void;
//# sourceMappingURL=getHandler.d.ts.map