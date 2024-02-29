/**
 * @type {import('tinacms').Collection}
 */
import facet_groups from "../shared/facets/facet_groups";
import facets from "../shared/facets/facets";
import title from "../shared/page/title";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";

export default {
    name: "events_activities",
    label: "Events (activities)",
    path: "content/",
    match: {
        include: '**/events/activities',
    },
    fields: [
        title,
        subtitle,
        image,
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
                        label: "Description"
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Image",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "date",
                        label: "Date",
                        required: true,
                        description: "dd-MM-yyyy (e.g. 13-06-2024)"
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