/**
 * @type {import('tinacms').TinaField[]}
 */
export default [
    {
        type: "object",
        name: "Banner",
        label: "Banner",
        required: true,
        fields:[
            {
            label: "Image",
            type: "image",
            name: "image2",
            },
            {
                label: "Button",
                type: "object",
                name: "button",
                fields:
                [
                    {
                        label: "Enabled",
                        type: "boolean",
                        name: "enable",
                    },
                    {
                        label: "Label",
                        type: "string",
                        name: "label",
                    },
                    {
                        label: "Link",
                        type: "string",
                        name: "link",
                    }
                ]
            }
        ]
    },
    {
        type: "object",
        name: "Activity_Feed",
        label: "Activity Feed",
        fields:
        [
            {
                label: "Enabled",
                type: "boolean",
                name: "enable",
            },
            {
                label: "Title",
                type: "string",
                name: "title",
                required: true,
            },
            {
                label: "View all text",
                type: "string",
                name: "view_all_text",
            },
            {
                label: "View all link",
                type: "string",
                name: "view_all_link",
            },
            {
                label: "Featured Articles",
                type: "object",
                name: "Featured_Articles",
                list: true,
                fields: 
                [
                    {
                        label: "Title",
                        type: "string",
                        name: "title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        label: "Link",
                        type: "string",
                        name: "link",
                    },
                    {
                        label: "Image",
                        type: "image",
                        name: "image",
                    },
                    {
                        label: "Type",
                        type: "string",
                        name: "type",
                        options: 
                        [
                            {
                                value:"regular",
                                label:"regular"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];