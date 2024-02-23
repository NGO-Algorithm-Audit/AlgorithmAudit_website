/**
 * @type {import('tinacms').Collection}
 */
import facets from "../shared/facets/facets";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";
export default {
    name: "algoprudence_cases",
    label: "Algoprudence (cases)",
    path: "content/",
    match: {
        include: '**/algoprudence/cases/**',
    },
    fields: [
        {
            type: "object",
            name: "questions",
            label: "Questions",
            list: true,
            fields:
                [
                    {
                        type: "string",
                        name: "question",
                        label: "Question",
                        required: true,
                    }
                ]
        },
        {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options: [
                {
                    value: "case",
                    label: "Case"
                }
            ]
        },
        {
            type: "string",
            name: "icon",
            label: "Icon",
            description: "From https://fontawesome.com/search (e.g. fa-square-poll-vertical from https://fontawesome.com/icons/square-poll-vertical?f=classic&s=solid)"
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
        },
        subtitle,
        image,
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
                        type: "rich-text",
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
        },
        {
            type: "rich-text",
            name: "sources",
            label: "Source",
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
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Image",
                    },
                    {
                        type: "string",
                        name: "image_link",
                        label: "Image link",
                    },
                    {
                        type: "number",
                        name: "width",
                        label: "Width of text (12 is the maximum)",
                        description: "It's probably best to use 12 if you're not using an image and 8 if you are."
                    }
                ],
            defaultItem: () => {
                return {
                    width: 12
                }
            }
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
        },
        {
            type: "object",
            name: "actions",
            label: "Follow-up actions",
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
    ],
    defaultItem: () => {
        return {
            layout: "case"
        }
    }
};