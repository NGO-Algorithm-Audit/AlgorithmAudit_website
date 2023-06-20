import { ActionBuilder, StateActions, StoreApi } from '../types';
export declare const extendActions: <AB extends ActionBuilder<TName, T, import("../types").SetRecord<T> & {
    state: import("../types").SetImmerState<T>;
    mergeState: import("../types").MergeState<T>;
} & TActions, TSelectors>, TName extends string, T extends object = {}, TActions = {}, TSelectors = {}>(builder: AB, api: StoreApi<TName, T, import("../types").SetRecord<T> & {
    state: import("../types").SetImmerState<T>;
    mergeState: import("../types").MergeState<T>;
} & TActions, TSelectors>) => StoreApi<TName, T, import("../types").SetRecord<T> & {
    state: import("../types").SetImmerState<T>;
    mergeState: import("../types").MergeState<T>;
} & TActions & ReturnType<AB>, TSelectors>;
//# sourceMappingURL=extendActions.d.ts.map