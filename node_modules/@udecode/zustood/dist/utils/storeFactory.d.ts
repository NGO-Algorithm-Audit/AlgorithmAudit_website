import { ActionBuilder, SelectorBuilder, StateActions, StoreApi } from '../types';
export declare const storeFactory: <TName extends string, T extends object, TActions = {}, TSelectors = {}>(api: StoreApi<TName, T, import("../types").SetRecord<T> & {
    state: import("../types").SetImmerState<T>;
    mergeState: import("../types").MergeState<T>;
} & TActions, TSelectors>) => {
    extendSelectors: (builder: SelectorBuilder<TName, T, TActions, TSelectors>) => {
        extendSelectors: (builder: SelectorBuilder<TName, T, TActions, TSelectors & Record<string, (...args: any[]) => any>>) => any;
        extendActions: (builder: ActionBuilder<TName, T, import("../types").SetRecord<T> & {
            state: import("../types").SetImmerState<T>;
            mergeState: import("../types").MergeState<T>;
        } & TActions, TSelectors & Record<string, (...args: any[]) => any>>) => {
            extendSelectors: (builder: SelectorBuilder<TName, T, any, TSelectors & Record<string, (...args: any[]) => any>>) => any;
            extendActions: (builder: ActionBuilder<TName, T, any, TSelectors & Record<string, (...args: any[]) => any>>) => any;
            get: import("../types").StoreApiGet<T, TSelectors & Record<string, (...args: any[]) => any>>;
            name: TName;
            set: any;
            store: import("../types").ImmerStoreApi<T>;
            use: import("../types").StoreApiUse<T, TSelectors & Record<string, (...args: any[]) => any>>;
            useTracked: import("../types").StoreApiUseTracked<T, TSelectors & Record<string, (...args: any[]) => any>>;
            useStore: import("../types").UseImmerStore<T>;
            useTrackedStore: () => T;
        };
        get: import("../types").StoreApiGet<T, TSelectors & Record<string, (...args: any[]) => any>>;
        name: TName;
        set: import("../types").SetRecord<T> & {
            state: import("../types").SetImmerState<T>;
            mergeState: import("../types").MergeState<T>;
        } & TActions;
        store: import("../types").ImmerStoreApi<T>;
        use: import("../types").StoreApiUse<T, TSelectors & Record<string, (...args: any[]) => any>>;
        useTracked: import("../types").StoreApiUseTracked<T, TSelectors & Record<string, (...args: any[]) => any>>;
        useStore: import("../types").UseImmerStore<T>;
        useTrackedStore: () => T;
    };
    extendActions: (builder: ActionBuilder<TName, T, import("../types").SetRecord<T> & {
        state: import("../types").SetImmerState<T>;
        mergeState: import("../types").MergeState<T>;
    } & TActions, TSelectors>) => {
        extendSelectors: (builder: SelectorBuilder<TName, T, any, TSelectors>) => {
            extendSelectors: (builder: SelectorBuilder<TName, T, any, TSelectors & Record<string, (...args: any[]) => any>>) => any;
            extendActions: (builder: ActionBuilder<TName, T, any, TSelectors & Record<string, (...args: any[]) => any>>) => any;
            get: import("../types").StoreApiGet<T, TSelectors & Record<string, (...args: any[]) => any>>;
            name: TName;
            set: any;
            store: import("../types").ImmerStoreApi<T>;
            use: import("../types").StoreApiUse<T, TSelectors & Record<string, (...args: any[]) => any>>;
            useTracked: import("../types").StoreApiUseTracked<T, TSelectors & Record<string, (...args: any[]) => any>>;
            useStore: import("../types").UseImmerStore<T>;
            useTrackedStore: () => T;
        };
        extendActions: (builder: ActionBuilder<TName, T, any, TSelectors>) => any;
        get: import("../types").StoreApiGet<T, TSelectors>;
        name: TName;
        set: any;
        store: import("../types").ImmerStoreApi<T>;
        use: import("../types").StoreApiUse<T, TSelectors>;
        useTracked: import("../types").StoreApiUseTracked<T, TSelectors>;
        useStore: import("../types").UseImmerStore<T>;
        useTrackedStore: () => T;
    };
    get: import("../types").StoreApiGet<T, TSelectors>;
    name: TName;
    set: import("../types").SetRecord<T> & {
        state: import("../types").SetImmerState<T>;
        mergeState: import("../types").MergeState<T>;
    } & TActions;
    store: import("../types").ImmerStoreApi<T>;
    use: import("../types").StoreApiUse<T, TSelectors>;
    useTracked: import("../types").StoreApiUseTracked<T, TSelectors>;
    useStore: import("../types").UseImmerStore<T>;
    useTrackedStore: () => T;
};
//# sourceMappingURL=storeFactory.d.ts.map