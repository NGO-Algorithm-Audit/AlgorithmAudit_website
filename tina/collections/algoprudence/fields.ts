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
                },
                {
                    type: "object",
                    name: "key_takeaways",
                    label: "Key takeaways normative advice commission.",
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
                                name: "content",
                                label: "Content",
                                required: true,
                            }
                        ]
                },
                {
                    type: "rich-text",
                    name: "summary",
                    label: "Summary",
                    required: true,
                },
                {
                    type: "rich-text",
                    name: "presentation",
                    label: "Presentation"
                },
                {
                    type: "object",
                    name: "algoprudence",
                    label: "Algoprudence / Report",
                    fields:
                        [
                            {
                                type: "string",
                                name: "title",
                                label: "Title",
                                default: "Algoprudence",
                                required: true,
                            },
                            {
                                type: "rich-text",
                                name: "intro",
                                label: "Intro",
                                required: true,
                            },
                            {
                                type: "object",
                                name: "reports",
                                label: "Reports",
                                list: true,
                                fields: 
                                [
                                    {
                                        type: "string",
                                        name: "url",
                                        label: "Url",
                                        required: true,
                                    }
                                ]
                            }
                        ]
                },
                {
                    type: "object",
                    name: "normative_advice_members",
                    label: "Normative Advice Commission Members",
                    required: true,
                    list: true,
                    fields:
                    [
                        {
                            type: "rich-text",
                            name: "name",
                            label: "Name, function (and department), university, link",
                            required: true,
                        }
                    ]
                },
                {
                    type: "object",
                    name: "additional_content",
                    label: "Additinonal Content",
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
                            name: "content",
                            label: "Content",
                            required: true,
                        }
                    ]
                },
                {
                    type: "rich-text",
                    name: "sources",
                    label: "Sources",
                    required: true,
                },
                {
                    type: "object",
                    name: "funded_by",
                    label: "Funded By",
                    list: true,
                    fields:
                        [
                            {
                                type: "string",
                                name: "url",
                                label: "Url",
                                required: true,
                            },
                            {
                                type: "image",
                                name: "image",
                                label: "image",
                                required: true,
                            }
                        ]
                }
            ]
    }
];