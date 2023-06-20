/**

*/
import { TinaSchema, Config } from '@tinacms/schema-tools';
import { LookupMapType } from './database';
export declare const buildDotTinaFiles: ({ config, flags, buildSDK, }: {
    config: Config;
    flags?: string[];
    buildSDK?: boolean;
}) => Promise<{
    graphQLSchema: {
        kind: "Document";
        definitions: import("graphql").TypeDefinitionNode[];
    };
    tinaSchema: TinaSchema;
    lookup: Record<string, LookupMapType>;
    fragDoc: string;
    queryDoc: string;
}>;
