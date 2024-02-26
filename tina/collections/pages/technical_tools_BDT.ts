/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";
import { TinaField } from "tinacms";

let specific_fields : TinaField[] = [
    {
        name: "type",
        type: "string",
        label: "Type",
        description: "Needed to load the specific css",
        required: true,
        options: [
            {
                value: "bias-detection-tool",
                label: "bias detection tool"
            }
        ]
    }
];
export default {
    name: "technical_tools_BDT",
    label: "Technical tools (BDT)",
    path: "content/",
    match: {
        include: '**/technical-tools/BDT',
    },
    fields: building_blocks.concat(specific_fields),
};