import React, { FunctionComponent } from 'react';
/**
 * Wrap a component into multiple providers.
 * If there are any props that you want a provider to receive,
 * you can simply pass an array.
 */
export declare const withProviders: (...providers: any[]) => <T>(WrappedComponent: React.FunctionComponent<T>) => (props: T) => any;
//# sourceMappingURL=withProviders.d.ts.map