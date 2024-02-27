/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "events_press_room",
    label: "Events (press room)",
    path: "content/",
    match: {
        include: '**/events/press_room',
    },
    fields: building_blocks,
};