/// <reference types="react" />
interface DeleteModalProps {
    close(): void;
    deleteFunc(): void;
    filename: string;
}
interface NewFolderModalProps {
    onSubmit(filename: string): void;
    close(): void;
}
export declare const DeleteModal: ({ close, deleteFunc, filename, }: DeleteModalProps) => JSX.Element;
export declare const NewFolderModal: ({ onSubmit, close }: NewFolderModalProps) => JSX.Element;
export {};
