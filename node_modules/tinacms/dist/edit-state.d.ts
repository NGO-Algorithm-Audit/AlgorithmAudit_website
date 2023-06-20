/**

*/
import { isEditing, setEditing } from '@tinacms/sharedctx';
import React from 'react';
/**
 * @deprecated since version 1.0.
 * Use "import { useEditState } from 'tinacms/dist/react'" instead.
 * See https://tina.io/blog/upgrading-to-iframe/ for full migration details
 */
declare const useEditState: () => {
    edit: any;
    setEdit: any;
};
export { isEditing, setEditing, useEditState };
/**
 * @deprecated since version 1.0.
 * Tina no longer requires wrapping your site in the TinaProvider
 * See https://tina.io/blog/upgrading-to-iframe/ for full migration details
 */
export declare const TinaEditProvider: ({ showEditButton, ...props }: {
    showEditButton?: boolean;
    children: React.ReactNode;
    editMode: React.ReactNode;
}) => JSX.Element;
/**
 * @deprecated since version 1.0.
 * Use "import { useTina } from 'tinacms/dist/react'" instead.
 * See https://tina.io/blog/upgrading-to-iframe/ for full migration details
 */
export declare function useTina<T extends object>({ query, variables, data, }: {
    query: string;
    variables: object;
    data: T;
}): {
    data: T;
    isLoading: boolean;
};
