/**
 * @type {import('tinacms').Collection}
 */
import facet_groups from "../shared/facets/facet_groups";
import facets from "../shared/facets/facets";
import title from "../shared/page/title";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";
import background_color from "../shared/page/background_color";

export default {
    name: "events_overview",
    label: "Events overview",
    path: "content/",
    match: {
        include: '**/events/_index',
    },
    fields: [
        title,
        subtitle,
        image,
        background_color,
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
    ]
};