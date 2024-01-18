/**
 * @type {import('tinacms').TinaField[]}
 */
import facet_groups from "../shared/facets/facet_groups";
import facets from "../shared/facets/facets";
import title from "../shared/page/title";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";
import background_color from "../shared/page/background_color";

export default [
    title,
    subtitle,
    image,
    background_color,
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