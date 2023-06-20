import { AutoformatRule, MatchRange } from '../types';
export declare const getMatchRange: ({ match, trigger, }: {
    match: string | MatchRange;
    trigger: AutoformatRule['trigger'];
}) => {
    start: string;
    end: string;
    triggers: string[];
};
//# sourceMappingURL=getMatchRange.d.ts.map