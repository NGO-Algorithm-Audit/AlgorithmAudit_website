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
                }
            ]
    }
];