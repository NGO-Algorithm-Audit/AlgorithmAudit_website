/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "knowledge_platform_project_work",
    label: "Knowledge platform (project work)",
    path: "content/",
    match: {
        include: '**/knowledge-platform/project_work',
    },
    fields: building_blocks,
};