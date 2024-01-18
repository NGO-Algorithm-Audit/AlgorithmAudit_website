/**
 * @type {import('tinacms').TinaField[]}
 */
import facet_groups from "../shared/facets/facet_groups";
import facets from "../shared/facets/facets";
export default [
    {
        type: "string",
        name: "title",
        label: "Title",
        required: true,
    },
    {
        type: "rich-text",
        name: "subtitle",
        label: "Subtitle",
        required: true,
    },
    {
        type: "image",
        name: "image",
        label: "image",
        required: true,
    },
    facet_groups,
    {
        type: "object",
        name: "events",
        label: "Events",
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
                    type: "rich-text",
                    name: "description",
                    label: "description"
                },
                {
                    type: "image",
                    name: "image",
                    label: "image",
                    required: true,
                },
                {
                    type: "string",
                    name: "date",
                    label: "Date",
                    required: true,
                    description: "dd-MM-yyyy (i.e. 13-06-2024)"
                },
                {
                    type: "image",
                    name: "pdf",
                    label: "PDF",
                },
                facets
            ]
    }
];