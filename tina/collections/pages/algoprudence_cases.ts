/**
 * @type {import('tinacms').Collection}
 */
import facets from "../shared/facets/facets";
import { TinaField } from "tinacms";
import building_blocks from "../shared/page/building_blocks";
import pdf_frame from "../shared/templates/pdf_frame";

let specific_fields : TinaField[] = [
    {
        type: "string",
        name: "icon",
        label: "Icon",
        description: "From https://fontawesome.com/search (e.g. fa-square-poll-vertical from https://fontawesome.com/icons/square-poll-vertical?f=classic&s=solid)"
    },
    {
        type: "string",
        name: "layout",
        label: "Layout",
        required: true,
        options: [
            {
                value: "case",
                label: "Case"
            }
        ]
    }
];

export default {
    name: "algoprudence_cases",
    label: "Algoprudence (cases)",
    path: "content/",
    match: {
        include: '**/algoprudence/cases/**',
    },
    fields: specific_fields.concat(building_blocks),
    defaultItem: () => {
        return {
            layout: "case"
        }
    }
};