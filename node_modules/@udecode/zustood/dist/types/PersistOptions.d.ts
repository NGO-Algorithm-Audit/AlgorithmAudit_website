import { PersistOptions as _PersistOptions } from 'zustand/middleware';
export declare type StateStorage = {
    getItem: (name: string) => string | null | Promise<string | null>;
    setItem: (name: string, value: string) => void | Promise<void>;
};
export declare type StorageValue<S> = {
    state: S;
    version: number;
};
declare type PersistOptionsWithoutName<S> = Omit<_PersistOptions<S>, 'name'>;
export declare type PersistOptions<S> = PersistOptionsWithoutName<S> & {
    enabled?: boolean;
    name?: string;
};
export {};
//# sourceMappingURL=PersistOptions.d.ts.map