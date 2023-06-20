import { HistoryEditor } from 'slate-history';
import { TEditor, Value } from '../editor/TEditor';
export declare type THistoryEditor<V extends Value = Value> = TEditor<V> & Pick<HistoryEditor, 'history' | 'undo' | 'redo'>;
//# sourceMappingURL=THistoryEditor.d.ts.map