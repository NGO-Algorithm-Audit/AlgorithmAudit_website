/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "Donation",
    label: "Donation",
    path: "content/",
    match: {
        include: '*/donation',
    },
    fields: building_blocks,
};