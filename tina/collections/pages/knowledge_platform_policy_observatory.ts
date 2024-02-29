/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "knowledge_platform_policy_observatory",
    label: "Knowledge platform (policy observatory)",
    path: "content/",
    match: {
        include: '**/knowledge-platform/policy-observatory',
    },
    fields: building_blocks,
};