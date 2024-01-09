/**
 * @type {import('tinacms').TinaField[]}
 */
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
    {
        type: "object",
        name: "facet_groups",
        label: "Facet Groups",
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
                name: "value",
                label: "Value",
                required: true,
                description: "Lowercase without any special characters"
            },
            {
                type: "object",
                name: "facets",
                label: "Facets",
                list: true,
                fields:
                [
                    {
                        type: "string",
                        name: "value",
                        label: "Value",
                        required: true,
                        description: "Without the group name value as prefix (i.e. deeplearning)"
                    },
                    {
                        type: "string",
                        name: "label",
                        label: "Label",
                        required: true,
                    }
                ]
            }
        ]
    },
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
                {
                    type: "object",
                    name: "facets",
                    label: "Categories",
                    list: true,
                    fields: [
                        {
                            type: "string",
                            name: "value",
                            label: "Value",
                            required: true,
                            description: "With the group name value as prefix (i.e. method_deeplearning)"
                        },
                        {
                            type: "string",
                            name: "label",
                            label: "Label",
                            required: true,
                        }
                    ]
                }
            ]
    }
];