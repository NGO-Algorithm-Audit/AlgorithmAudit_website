/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "knowledge_platform_collaboration",
    label: "Knowledge platform (collaboration)",
    path: "content/",
    match: {
        include: '**/knowledge-platform/collaboration',
    },
    fields: building_blocks,
};