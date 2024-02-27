/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "about_boards",
    label: "About (boards)",
    path: "content/",
    match: {
        include: '**/about/boards',
    },
    fields: building_blocks,
};