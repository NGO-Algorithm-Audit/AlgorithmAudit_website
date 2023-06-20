/**

*/
/// <reference types="react" />
import type { TinaCMS } from '@tinacms/toolkit';
import type { DocumentForm } from '../types';
export declare const useGetDocument: (cms: TinaCMS, collectionName: string, relativePath: string) => {
    document: DocumentForm;
    loading: boolean;
    error: Error;
};
declare const GetDocument: ({ cms, collectionName, relativePath, children, }: {
    cms: TinaCMS;
    collectionName: string;
    relativePath: string;
    children: any;
}) => JSX.Element;
export default GetDocument;
