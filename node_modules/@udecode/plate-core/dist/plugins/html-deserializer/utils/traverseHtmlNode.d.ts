declare type Callback = (node: Node) => boolean;
/**
 * Depth-first pre-order tree traverse the given HTML node and calls the given callback for each node.
 * see: https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR)
 *
 * @param callback returns a boolean indicating whether traversal should be continued
 */
export declare const traverseHtmlNode: (node: Node, callback: Callback) => void;
export {};
//# sourceMappingURL=traverseHtmlNode.d.ts.map