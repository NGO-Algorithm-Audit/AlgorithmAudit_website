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
        // Banner
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
                    label: "tag",
                    type: "string",
                    name: "tag",
                    required: true,
                },
                {
                    label: "title",
                    type: "string",
                    name: "title",
                    required: true,
                },
                {
                    label: "phonetica",
                    type: "string",
                    name: "phonetica",
                    required: true,
                },
                {
                    label: "type",
                    type: "string",
                    name: "type",
                    required: true,
                },
                {
                    label: "description1",
                    type: "string",
                    name: "description1",
                    required: true,
                },
                {
                    label: "description2",
                    type: "string",
                    name: "description2",
                    required: true,
                },
                {
                    label: "description3",
                    type: "string",
                    name: "description3",
                    required: true,
                }
            ]
        },
        // Activity feed
        {
            type: "object",
            name: "Activity_Feed",
            label: "Activity Feed",
            fields:
                [                    {
                        type: "boolean",
                        name: "enable",
                        label: "Enable",
                        required: true,
                    },
                    {
                        label: "Button text",
                        type: "string",
                        name: "button_text",
                    },
                    {
                        label: "View all link",
                        type: "string",
                        name: "button_link",
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
            name: "Supported_by",
            label: "Supported by",
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true
                },
                {
                    type: "object",
                    name: "funders",
                    label: "Funders",
                    list: true,
                    fields: [
                        {
                            label: "Image",
                            type: "image",
                            name: "image",
                        },
                        {
                            label: "Link",
                            type: "string",
                            name: "link",
                        },
                        {
                            label: "Alt-text",
                            type: "string",
                            name: "alt_text",
                        }
                    ]
                }
            ]
        },
        // Distinctive in
        {
            type: "object",
            name: "Distincive_in",
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
        // Areas of expertise
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
        // recent audits
        {
            type: "object",
            name: "Recent_audits",
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
                                    label: "Link",
                                    type: "string",
                                    name: "link",
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
        },
        // how we build algoprudence
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
                        type: "image",
                        name: "image",
                        label: "Image above button"
                    },
                    {
                        type: "string",
                        name: "button_text",
                        label: "Button text"
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
        },
        {
            type: "object",
            name: "title_gif",
            label: "Title of gif",
            fields:
                [
                    {
                        type: "string",
                        name: "title",
                        label: "Title"
                    }
                ]
        },
        {
            type: "object",
            name: "newsletter",
            label: "Newsletter",
            fields:
                [
                    {
                        type: "string",
                        name: "title",
                        label: "Title"
                    },
                    {
                        type: "string",
                        name: "content",
                        label: "Content"
                    },
                    {
                        type: "string",
                        name: "button_text",
                        label: "Button text"
                    }
                ]
        }
    ],
};