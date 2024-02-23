/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "algoprudence_how_we_work",
    label: "Algoprudence (how we work)",
    path: "content/",
    match: {
        include: '**/algoprudence/how-we-work',
    },
    fields: building_blocks,
};