/**
 * @type {import('tinacms').Collection}
 */
import facets from "../shared/facets/facets";
import { TinaField } from "tinacms";
import building_blocks from "../shared/page/building_blocks";

let specific_fields : TinaField[] = [
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
            ]
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
                    label: "description",
                    templates: [
                        {
                            name: 'pdf_frame',
                            label: 'PDF Frame',
                            match: {
                                start: '{{<',
                                end: '>}}'
                            },
                            fields: [
                                {
                                    name: 'articleUrl',
                                    label: 'Article Url',
                                    type: 'image',
                                    required: true,
                                },
                                {
                                    name: 'width',
                                    label: 'Width',
                                    type: 'string',
                                    description: '50% is the default'
                                }
                            ]
                        }
                    ]
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
                facets
            ]
    },
    {
        type: "object",
        name: "discussions",
        label: "Discussion & debate",
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
                    label: "description",
                    templates: [
                        {
                            name: 'pdf_frame',
                            label: 'PDF Frame',
                            match: {
                                start: '{{<',
                                end: '>}}'
                            },
                            fields: [
                                {
                                    name: 'articleUrl',
                                    label: 'Article Url',
                                    type: 'image',
                                    required: true,
                                },
                                {
                                    name: 'width',
                                    label: 'Width',
                                    type: 'string',
                                    description: '50% is the default'
                                }
                            ]
                        }
                    ]
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
                facets
            ]
    }
];

export default {
    name: "algoprudence_cases",
    label: "Algoprudence (cases)",
    path: "content/",
    match: {
        include: '**/algoprudence/cases/**',
    },
    fields: building_blocks.concat(specific_fields),
    defaultItem: () => {
        return {
            layout: "case"
        }
    }
};