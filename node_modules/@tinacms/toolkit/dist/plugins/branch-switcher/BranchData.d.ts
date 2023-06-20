/// <reference types="react" />
export interface BranchContextData {
    currentBranch: string;
    setCurrentBranch: (string: any) => void;
}
export declare const BranchDataProvider: ({ currentBranch, setCurrentBranch, children, }: {
    currentBranch: any;
    setCurrentBranch: any;
    children: any;
}) => JSX.Element;
export declare const useBranchData: () => BranchContextData;
