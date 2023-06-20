import { Ref } from 'react';
declare type PossibleRef<T> = Ref<T> | undefined;
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
export declare const composeRefs: <T>(...refs: PossibleRef<T>[]) => (node: T) => void;
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
export declare const useComposedRef: <T>(...refs: PossibleRef<T>[]) => (node: T) => void;
export {};
//# sourceMappingURL=useComposedRef.d.ts.map