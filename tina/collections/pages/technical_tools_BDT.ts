/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "technical_tools_BDT",
    label: "Bias Detection Tool",
    path: "content/",
    match: {
        include: '**/technical_tools/BDT',
    },
    fields: building_blocks,
};