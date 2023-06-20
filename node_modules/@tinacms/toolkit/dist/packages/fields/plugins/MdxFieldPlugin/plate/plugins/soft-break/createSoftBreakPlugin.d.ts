import { SoftBreakPlugin } from './types';
export declare const KEY_SOFT_BREAK = "break";
/**
 * This code is mostly copied from the plate soft-break plugin
 * [here](https://github.com/udecode/plate/blob/3c0de39a66308a9b718cf9f35623502702ae2af4/packages/editor/break/src/soft-break/index.ts)
 */
export declare const createSoftBreakPlugin: <OP = SoftBreakPlugin, OV extends import("@udecode/plate-headless").Value = import("@udecode/plate-headless").Value, OE extends import("@udecode/plate-headless").PlateEditor<OV> = import("@udecode/plate-headless").PlateEditor<OV>>(override?: Partial<import("@udecode/plate-headless").PlatePlugin<import("@udecode/plate-headless").NoInfer<OP>, OV, OE>>, overrideByKey?: import("@udecode/plate-headless").OverrideByKey<OV, OE>) => import("@udecode/plate-headless").PlatePlugin<import("@udecode/plate-headless").NoInfer<OP>, OV, OE>;
