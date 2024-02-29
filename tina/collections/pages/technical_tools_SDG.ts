/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "technical_tools_SDG",
    label: "Technical tools (SDG)",
    path: "content/",
    match: {
        include: '**/technical-tools/SDG',
    },
    fields: building_blocks,
};