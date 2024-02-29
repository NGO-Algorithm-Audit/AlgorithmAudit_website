/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "knowledge_platform_standards",
    label: "Knowledge platform (standards)",
    path: "content/",
    match: {
        include: '**/knowledge-platform/standards',
    },
    fields: building_blocks,
};