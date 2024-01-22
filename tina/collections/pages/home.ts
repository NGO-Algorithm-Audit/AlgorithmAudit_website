/**
 * @type {import('tinacms').Collection}
 */

export default {
    name: "home",
    label: "Home",
    path: "content/",
    match: {
        include: '*/_index',
    },
    fields: [
        {
            type: "object",
            name: "Banner",
            label: "Banner",
            required: true,
            fields: [
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
                        label: "Featured title",
                        type: "string",
                        name: "featured_title",
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
                        label: "Featured Activities",
                        type: "object",
                        name: "featured_activities",
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
                                    label: "Intro",
                                    type: "rich-text",
                                    name: "intro",
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
                                    label: "Date",
                                    type: "string",
                                    name: "date",
                                    description: "dd-MM-yyyy (i.e. 13-06-2024)"
                                },
                                {
                                    label: "Type",
                                    type: "string",
                                    name: "type",
                                    options:
                                        [
                                            {
                                                value: "algoprudence",
                                                label: "algoprudence"
                                            },
                                            {
                                                value: "presentation",
                                                label: "presentation"
                                            }
                                        ]
                                }
                            ]
                    },
                    {
                        label: "Activities",
                        type: "object",
                        name: "activities",
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
                                    label: "Date",
                                    type: "string",
                                    name: "date",
                                    description: "dd-MM-yyyy (i.e. 13-06-2024)"
                                },
                                {
                                    label: "Type",
                                    type: "string",
                                    name: "type",
                                    options:
                                        [
                                            {
                                                value: "algoprudence",
                                                label: "algoprudence"
                                            },
                                            {
                                                value: "presentation",
                                                label: "presentation"
                                            }
                                        ]
                                }
                            ]
                    }
                ]
        },
        {
            type: "object",
            name: "What_we_do",
            label: "Distintive in",
            fields:
                [
                    {
                        type: "boolean",
                        name: "enable",
                        label: "Enable",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Enable",
                        required: true,
                    },
                    {
                        type: "number",
                        name: "width_m",
                        label: "Width medium screens (12 is the maximum)",
                        description: "Divide the number of articles per row by 12",
                        required: true,
                    },
                    {
                        type: "number",
                        name: "width_s",
                        label: "Width small screens (12 is the maximum)",
                        description: "Divide the number of articles per row by 12",
                        required: true,
                    },
                    {
                        type: "object",
                        name: "feature_item",
                        label: "Featured Items",
                        list: true,
                        fields:
                            [
                                {
                                    type: "string",
                                    name: "name",
                                    label: "Name",
                                    required: true,
                                },
                                {
                                    type: "string",
                                    name: "icon",
                                    label: "Icon",
                                    required: true,
                                },
                                {
                                    type: "rich-text",
                                    name: "content",
                                    label: "Content",
                                    isBody: true,
                                }
                            ]
                    }
                ],
            defaultItem: () => {
                return {
                    width_m: 4,
                    width_s: 2,
                    width_xs: 1
                }
            }
        },
        {
            type: "object",
            name: "areas_of_ai_expertise",
            label: "Areas of AI Expertise",
            fields:
                [
                    {
                        type: "boolean",
                        name: "enable",
                        label: "Enable",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Enable",
                        required: true,
                    },
                    {
                        type: "number",
                        name: "width_m",
                        label: "Width medium screens (12 is the maximum)",
                        description: "Divide the number of articles per row by 12",
                        required: true,
                    },
                    {
                        type: "number",
                        name: "width_s",
                        label: "Width small screens (12 is the maximum)",
                        description: "Divide the number of articles per row by 12",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "submit_case_text",
                        label: "Submit a case text"
                    },
                    {
                        type: "object",
                        name: "feature_item",
                        label: "Featured Items",
                        list: true,
                        fields:
                            [
                                {
                                    type: "string",
                                    name: "name",
                                    label: "Name",
                                    required: true,
                                },
                                {
                                    type: "string",
                                    name: "icon",
                                    label: "Icon",
                                    required: true,
                                },
                                {
                                    type: "rich-text",
                                    name: "content",
                                    label: "Content",
                                    isBody: true,
                                }
                            ]
                    },
                    {
                        type: "object",
                        name: "recent_audits",
                        label: "Recent audits",
                        fields:
                            [
                                {
                                    type: "string",
                                    name: "title",
                                    label: "Enable",
                                    required: true,
                                },
                                {
                                    type: "object",
                                    name: "feature_item",
                                    label: "Featured Items",
                                    list: true,
                                    fields:
                                        [
                                            {
                                                type: "string",
                                                name: "name",
                                                label: "Name",
                                                required: true,
                                            },
                                            {
                                                type: "image",
                                                name: "image",
                                                label: "Image",
                                                required: true,
                                            },
                                            {
                                                type: "rich-text",
                                                name: "content",
                                                label: "Content",
                                                isBody: true,
                                            }
                                        ]
                                }
                            ]
                    }
                ],
            defaultItem: () => {
                return {
                    width_m: 4,
                    width_s: 2,
                    width_xs: 1
                }
            }
        },
        {
            type: "object",
            name: "how_we_build_algoprudence",
            label: "How we build algoprudence",
            fields:
                [
                    {
                        type: "string",
                        name: "title",
                        label: "Title"
                    },
                    {
                        type: "string",
                        name: "button_text",
                        label: "Our working method button text"
                    },
                    {
                        type: "object",
                        name: "steps",
                        label: "Steps",
                        list: true,
                        fields:
                            [
                                {
                                    type: "string",
                                    name: "title",
                                    label: "Title"
                                },
                                {
                                    type: "rich-text",
                                    name: "content",
                                    label: "Content"
                                }
                            ]
                    }
                ]
        },
        {
            type: "object",
            name: "advantages_of_algoprudence",
            label: "Advantages of algoprudence",
            fields:
                [
                    {
                        type: "string",
                        name: "title",
                        label: "Title"
                    },
                    {
                        type: "string",
                        name: "button_text",
                        label: "Our working method button text"
                    },
                    {
                        type: "object",
                        name: "feature_item",
                        label: "Featured Items",
                        list: true,
                        fields:
                            [
                                {
                                    type: "string",
                                    name: "name",
                                    label: "Name",
                                    required: true,
                                },
                                {
                                    type: "string",
                                    name: "icon",
                                    label: "Icon",
                                    required: true,
                                },
                                {
                                    type: "rich-text",
                                    name: "content",
                                    label: "Content",
                                    isBody: true,
                                }
                            ]
                    }
                ]
        }
    ],
};