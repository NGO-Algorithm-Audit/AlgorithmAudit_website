/**
 * @type {import('tinacms').Collection}
 */
import fields from "../shared/page/fields";

export default {
    name: "algoprudence_how_we_work",
    label: "Algoprudence (how we work)",
    path: "content/",
    match: {
        include: '**/algoprudence/how-we-work',
    },
    fields: fields,
};