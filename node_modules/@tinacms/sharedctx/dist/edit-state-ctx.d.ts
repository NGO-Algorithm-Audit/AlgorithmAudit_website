/**

*/
import React, { ReactNode } from 'react';
export declare const isEditing: () => boolean;
export declare const setEditing: (isEditing: boolean) => void;
export declare const EditContext: any;
export declare const TinaDataContext: any;
export declare const EditProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useEditState: () => {
    edit: any;
    setEdit: any;
};
