/**
 * @type {import('tinacms').Collection}
 */

import fields from "../shared/page/fields";

export default {
    name: "algoprudence_submit_a_case",
    label: "Algoprudence (submit a case)",
    path: "content/",
    match: {
        include: '**/algoprudence/submit-a-case',
    },
    fields: fields,
};