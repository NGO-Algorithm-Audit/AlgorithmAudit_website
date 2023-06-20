/// <reference types="jest" />
import { Location } from 'slate';
import { TEditor, Value } from './TEditor';
export declare const deleteMerge: <V extends Value>(editor: TEditor<V>, options?: {
    at?: Location;
    distance?: number;
    unit?: 'character' | 'word' | 'line' | 'block';
    reverse?: boolean;
    hanging?: boolean;
    voids?: boolean;
    test?: any;
}) => void;
//# sourceMappingURL=deleteMerge.d.ts.map