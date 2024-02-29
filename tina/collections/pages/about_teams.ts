/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "about_teams",
    label: "About (teams)",
    path: "content/",
    match: {
        include: '**/about/teams',
    },
    fields: building_blocks,
};