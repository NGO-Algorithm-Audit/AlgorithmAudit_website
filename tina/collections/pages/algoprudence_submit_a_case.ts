/**
 * @type {import('tinacms').Collection}
 */

import building_blocks from "../shared/page/building_blocks";

export default {
    name: "algoprudence_submit_a_case",
    label: "Algoprudence (submit a case)",
    path: "content/",
    match: {
        include: '**/algoprudence/submit-a-case',
    },
    fields: building_blocks,
};