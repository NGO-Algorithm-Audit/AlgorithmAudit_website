import { GetState } from 'zustand';
import { SetImmerState, StateCreatorWithDevtools } from '../types';
export declare const immerMiddleware: <T extends object>(config: StateCreatorWithDevtools<T, SetImmerState<T>, GetState<T>, import("zustand").StoreApi<T>>) => StateCreatorWithDevtools<T, import("zustand/middleware").NamedSet<T>, GetState<T>, import("zustand").StoreApi<T>>;
//# sourceMappingURL=immer.middleware.d.ts.map