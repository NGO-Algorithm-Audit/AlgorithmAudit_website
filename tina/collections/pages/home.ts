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
                    name: "image",
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
                },
                {
                    label: "Slogan",
                    type: "object",
                    name: "slogan",
                    fields: [
                        {
                            label: "Title",
                            type: "string",
                            name: "title",
                            required: true
                        },
                        {
                            label: "Labels",
                            type: "object",
                            name: "labels",
                            required: true,
                            list: true,
                            description: "The slider only works for two elements",
                            fields: [
                                {
                                    label: "Label",
                                    type: "string",
                                    name: "text",
                                    required: true
                                }
                            ]
                        }
                    ]
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
                                    description: "tag"
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
                                    description: "tag"
                                }
                            ]
                    }
                ]
        },
        // Supported by
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
        // Slogan
        {
            type: "object",
            name: "Building_ai_audit_capacity",
            label: "Building AI audit capacity",
            fields: [
                {
                    type: "object",
                    name: "lines",
                    label: "Lines",
                    list: true,
                    fields: [
                        {
                            type: "string",
                            name: "text_before",
                            label: "Text before",
                            required: true
                        },
                        {
                            type: "string",
                            label: "Highlighted text",
                            name: "text_highlighted",
                        },
                        {
                            type: "string",
                            label: "Text after",
                            name: "text_after",
                        },
                        {
                            type: "string",
                            label: "Highlighted text #2",
                            name: "text_highlighted2",
                        }
                    ]
                }
            ]
        },
        // Distinctive in
        {
            type: "object",
            name: "Distinctive_in",
            label: "Distinctive in",
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
            name: "Areas_of_AI_expertise",
            label: "Areas of AI Expertise",
            fields:
                    [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        required: true,
                    },
                    {
                        type: "boolean",
                        name: "enable",
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
                        name: "button_text",
                        label: "Button text"
                    },
                    {
                        label: "Link",
                        type: "string",
                        name: "button_link",
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
                    width_s: 2
                }
            }
        },
        // Recent audits
        {
            type: "object",
            name: "Recent_audits",
            label: "Recent audits",
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
        // How we build algoprudence
        {
            type: "object",
            name: "Building_algoprudence",
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
                        label: "Button text"
                    },
                    {
                        label: "Link",
                        type: "string",
                        name: "button_link",
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
        // Advantages of algoprudence
        {
            type: "object",
            name: "Advantages_of_algoprudence",
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
                        label: "Link",
                        type: "string",
                        name: "button_link",
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
        // GIF algoprudence
        {
            type: "object",
            name: "Title_gif",
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
        // Video
        {
            type: "object",
            name: "Title_video",
            label: "Title of video",
            fields:
                [
                    {
                        type: "string",
                        name: "title",
                        label: "Title"
                    },
                    {
                        type: "image",
                        name: "video_mp4",
                        label: "Video mp4"
                    },
                    {
                        type: "image",
                        name: "video_ogg",
                        label: "Video ogg"
                    }
                ]
        }
    ],
};