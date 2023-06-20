import { SelectorBuilder, StateActions, StoreApi } from '../types';
export declare const extendSelectors: <CB extends SelectorBuilder<TName, T, TActions, TSelectors>, TName extends string, T extends object = {}, TActions = {}, TSelectors = {}>(builder: CB, api: StoreApi<TName, T, import("../types").SetRecord<T> & {
    state: import("../types").SetImmerState<T>;
    mergeState: import("../types").MergeState<T>;
} & TActions, TSelectors>) => StoreApi<TName, T, import("../types").SetRecord<T> & {
    state: import("../types").SetImmerState<T>;
    mergeState: import("../types").MergeState<T>;
} & TActions, TSelectors & ReturnType<CB>>;
//# sourceMappingURL=extendSelectors.d.ts.map