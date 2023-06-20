import { AnyObject } from './AnyObject';
export declare type WithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
/** Makes each property optional and turns each leaf property into any, allowing for type overrides by narrowing any. */
export declare type DeepPartialAny<T> = {
    [P in keyof T]?: T[P] extends AnyObject ? DeepPartialAny<T[P]> : any;
};
/**
 * Simplify a complex type expression into a single object.
 */
export declare type Simplify<T> = T extends any[] | Date ? T : {
    [K in keyof T]: T[K];
} & {};
/**
 * Turn a union type into an intersection.
 */
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
/**
 * Modify type properties.
 * https://stackoverflow.com/a/55032655/6689201
 */
export declare type Modify<T, R> = Omit<T, keyof R> & R;
/**
 * Modify deep type properties.
 * https://stackoverflow.com/a/65561287/6689201
 */
export declare type ModifyDeep<A extends AnyObject, B extends DeepPartialAny<A>> = {
    [K in keyof A]: B[K] extends never ? A[K] : B[K] extends AnyObject ? ModifyDeep<A[K], B[K]> : B[K];
} & (A extends AnyObject ? Omit<B, keyof A> : A);
export declare type PartialPick<T, K extends keyof T> = {
    [P in K]?: T[P];
};
export declare type WithPartial<T, K extends keyof T> = Omit<T, K> & Partial<T>;
//# sourceMappingURL=types.d.ts.map