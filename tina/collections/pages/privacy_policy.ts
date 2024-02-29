/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "privacy_policy",
    label: "Privacy policy",
    path: "content/",
    match: {
        include: '*/privacy_policy',
    },
    fields: building_blocks,
};