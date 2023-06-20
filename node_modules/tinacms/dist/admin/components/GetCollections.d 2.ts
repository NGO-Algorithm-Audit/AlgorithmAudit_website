/**

*/
/// <reference types="react" />
import type { TinaCMS } from '@tinacms/toolkit';
export declare const useGetCollections: (cms: TinaCMS) => {
    collections: import("@tinacms/schema-tools").Collection<true>[];
};
declare const GetCollections: ({ cms, children }: {
    cms: TinaCMS;
    children: any;
}) => JSX.Element;
export default GetCollections;
