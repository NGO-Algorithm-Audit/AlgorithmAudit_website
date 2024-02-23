/**
 * @type {import('tinacms').Collection}
 */
import { TinaField } from "tinacms";
import facet_groups from "../shared/facets/facet_groups";
import facets from "../shared/facets/facets";
import building_blocks from "../shared/page/building_blocks";

let specific_fields : TinaField[] = [
    facet_groups,
    {
        type: "object",
        name: "algoprudences",
        label: "Algoprudence",
        list: true,
        fields:
            [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "intro",
                    label: "teaser"
                },
                {
                    type: "image",
                    name: "image",
                    label: "image",
                    required: true,
                },
                {
                    type: "string",
                    name: "link",
                    label: "Link",
                    required: true
                },
                facets
            ]
    }
];

export default {
    name: "algoprudence_repository",
    label: "Algoprudence (repository)",
    path: "content/",
    match: {
        include: '**/algoprudence/_index',
    },
    fields: building_blocks.concat(specific_fields),
};