/**

*/
import { OnNewDocument } from './create-page-plugin';
export declare type FilterCollections = (options: {
    label: string;
    value: string;
}[]) => {
    label: string;
    value: string;
}[];
export declare type DocumentCreatorArgs = {
    onNewDocument?: OnNewDocument;
    filterCollections?: FilterCollections;
};
export declare const useDocumentCreatorPlugin: (args?: DocumentCreatorArgs) => void;
