import { ComponentProps } from 'react';
import { atom, Provider, useAtom, useAtomValue } from 'jotai';
import { Scope } from 'jotai/core/atom';
export declare type JotaiProviderProps = ComponentProps<typeof Provider>;
export type { Scope };
export declare const JotaiProvider: ({ children, initialValues, scope, unstable_createStore, unstable_enableVersionedWrite, }: import("react").PropsWithChildren<{
    initialValues?: Iterable<readonly [import("jotai").Atom<unknown>, unknown]> | undefined;
    scope?: Scope | undefined;
    unstable_createStore?: ((initialValues?: Iterable<readonly [{
        toString: () => string;
        debugLabel?: string | undefined;
        read: (get: {
            <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
            <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
            <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
        }) => unknown;
    }, unknown]> | undefined) => {
        get: <Value_3>(atom: import("jotai").Atom<Value_3>) => (Value_3 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? any : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : Value_3) | undefined;
        asyncGet: <Value_1>(atom: import("jotai").Atom<Value_1>) => Promise<Value_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? V_1 extends Promise<infer V_1> ? any : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : V_1 : Value_1>;
        set: <Value_2, Update, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_2, Update, Result>, update: Update) => Result;
        sub: (atom: {
            toString: () => string;
            debugLabel?: string | undefined;
            read: (get: {
                <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
            }) => unknown;
        }, callback: () => void) => () => void;
        SECRET_INTERNAL_store: {
            r: <Value_4>(readingAtom: import("jotai").Atom<Value_4>, version?: import("jotai/core/store").VersionObject | undefined) => import("jotai/core/store").AtomState<Value_4>;
            w: <Value_1_1, Update_1, Result_1 extends void | Promise<void>>(writingAtom: import("jotai").WritableAtom<Value_1_1, Update_1, Result_1>, update: Update_1, version?: import("jotai/core/store").VersionObject | undefined) => Result_1;
            c: (_atom: {
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            } | null, version?: import("jotai/core/store").VersionObject | undefined) => void;
            s: (atom: {
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            }, callback: (version?: import("jotai/core/store").VersionObject | undefined) => void) => () => void;
            h: (values: Iterable<readonly [{
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            }, unknown]>, version?: import("jotai/core/store").VersionObject | undefined) => void;
            n: (l: () => void) => () => void;
            l: () => IterableIterator<{
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            }>;
            a: (a: {
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            }) => import("jotai/core/store").AtomState<unknown> | undefined;
            m: (a: {
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            }) => {
                l: Set<(version?: import("jotai/core/store").VersionObject | undefined) => void>;
                t: Set<{
                    toString: () => string;
                    debugLabel?: string | undefined;
                    read: (get: {
                        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                    }) => unknown;
                }>;
                u?: (() => void) | undefined;
            } | undefined;
        } | {
            r: <Value_5>(readingAtom: import("jotai").Atom<Value_5>, version?: import("jotai/core/store").VersionObject | undefined) => import("jotai/core/store").AtomState<Value_5>;
            w: <Value_1_2, Update_2, Result_2 extends void | Promise<void>>(writingAtom: import("jotai").WritableAtom<Value_1_2, Update_2, Result_2>, update: Update_2, version?: import("jotai/core/store").VersionObject | undefined) => Result_2;
            c: (_atom: {
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            } | null, version?: import("jotai/core/store").VersionObject | undefined) => void;
            s: (atom: {
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            }, callback: (version?: import("jotai/core/store").VersionObject | undefined) => void) => () => void;
            h: (values: Iterable<readonly [{
                toString: () => string;
                debugLabel?: string | undefined;
                read: (get: {
                    <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
                    <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
                    <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
                }) => unknown;
            }, unknown]>, version?: import("jotai/core/store").VersionObject | undefined) => void;
            n?: undefined;
            l?: undefined;
            a?: undefined;
            m?: undefined;
        };
    }) | undefined;
    unstable_enableVersionedWrite?: boolean | undefined;
}>) => import("react").FunctionComponentElement<import("react").ProviderProps<import("jotai/core/contexts").ScopeContainer>>;
export { atom, useAtom, useAtomValue };
//# sourceMappingURL=jotai.d.ts.map