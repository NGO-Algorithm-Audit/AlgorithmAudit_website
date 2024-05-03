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
        type: "string",
        name: "title_content",
        label: "Title content",
        required: true,
    },
    {
        type: "object",
        name: "items",
        label: "knowledge base items",
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
    },
    {
        type: "string",
        name: "layout",
        label: "Layout",
        required: true,
        options: [
            {
                value: "overview",
                label: "overview"
            }
        ]
    }
];

export default {
    name: "knowledge_platform_overview",
    label: "Knowledge platform (knowledge base overview)",
    path: "content/",
    match: {
        include: '**/knowledge-base/_index',
    },
    fields: specific_fields.concat(building_blocks)
};