/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "about_faq",
    label: "About (faq)",
    path: "content/",
    match: {
        include: '**/about/FAQ',
    },
    fields: building_blocks,
};