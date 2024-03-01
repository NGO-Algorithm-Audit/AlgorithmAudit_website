/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "about_contact",
    label: "About (contact)",
    path: "content/",
    match: {
        include: '**/about/contact',
    },
    fields: building_blocks,
};