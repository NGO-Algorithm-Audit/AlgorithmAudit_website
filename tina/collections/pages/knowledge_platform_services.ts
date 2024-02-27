/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "knowledge_platform_services",
    label: "Knowledge platform (services)",
    path: "content/",
    match: {
        include: '**/knowledge-platform/services',
    },
    fields: building_blocks,
};