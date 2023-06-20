/**

*/
/// <reference types="node" />
import http from 'http';
export declare const gqlServer: (database: any, verbose: boolean) => Promise<http.Server>;
