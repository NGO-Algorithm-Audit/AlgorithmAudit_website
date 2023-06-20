import { StateActions, StoreApi } from './types';
import { CreateStoreOptions } from './types/CreateStoreOptions';
export declare const createStore: <TName extends string>(name: TName) => <T extends object>(initialState: T, options?: CreateStoreOptions<T>) => StoreApi<TName, T, StateActions<T>, {}>;
//# sourceMappingURL=createStore.d.ts.map