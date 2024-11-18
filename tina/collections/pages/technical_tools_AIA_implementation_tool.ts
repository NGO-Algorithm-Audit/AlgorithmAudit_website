/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "technical_tools_AIA_implementation_tool",
    label: "Technical tools (AI Act Implementaion Tool)",
    path: "content/",
    match: {
        include: '**/technical-tools/implementation-tool',
    },
    fields: building_blocks,
};