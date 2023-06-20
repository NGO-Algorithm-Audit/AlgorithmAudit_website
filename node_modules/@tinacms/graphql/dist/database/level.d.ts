/**

*/
/// <reference types="node" />
import { AbstractLevel, AbstractSublevel, AbstractSublevelOptions } from 'abstract-level';
export declare type Level = AbstractLevel<Buffer | Uint8Array | string, string, Record<string, any>>;
export declare type PutOp = {
    type: 'put';
    key: string;
    value: Record<string, any>;
    sublevel?: AbstractSublevel<Level, Buffer | Uint8Array | string, string, Record<string, any>>;
};
export declare type DelOp = {
    type: 'del';
    key: string;
    sublevel?: AbstractSublevel<Level, Buffer | Uint8Array | string, string, Record<string, Record<string, any>>>;
};
export declare type BatchOp = PutOp | DelOp;
export declare const ARRAY_ITEM_VALUE_SEPARATOR = ",";
export declare const INDEX_KEY_FIELD_SEPARATOR = "\u001D";
export declare const CONTENT_ROOT_PREFIX = "~";
export declare const SUBLEVEL_OPTIONS: AbstractSublevelOptions<string, Record<string, any>>;
export declare class LevelWrapper {
    private level;
    constructor(level: Level);
}
export declare class LevelProxy {
    constructor(level: Level);
}
