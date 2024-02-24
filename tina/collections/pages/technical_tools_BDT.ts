/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "technical_tools_BDT",
    label: "Technical tools (BDT)",
    path: "content/",
    match: {
        include: '**/technical-tools/BDT',
    },
    fields: building_blocks,
};