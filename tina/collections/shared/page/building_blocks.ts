/**
 * @type {import('tinacms').TinaField[]}
 */

import title from "./title";
import subtitle from "./subtitle";
import image from "./image";
import background_color from "./background_color";
import { TinaField } from "tinacms";

let building_blocks: TinaField[] = [
    title,
    subtitle,
    image,
    background_color,
    {
        type: "rich-text",
        name: "body",
        label: "Content",
        isBody: true,
        templates: [
            {
                name: 'bias_scan_info',
                label: 'Bias Scan info',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    }
                ]
            },
            {
                name: 'bias_scan_alert_case_study',
                label: 'Bias Scan case study',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    }
                ]
            },
            {
                name: 'bias_scan_upload',
                label: 'Bias Scan upload',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    },
                    {
                        type: "image",
                        name: "css",
                        label: "Bias Detection Tool css",
                        required: true,
                    },
                    {
                        type: "image",
                        name: "js",
                        label: "Bias Detection Tool js",
                        required: true,
                    }
                ]
            },
            {
                name: 'bias_scan_input_data',
                label: 'Bias Scan input data',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    }
                ]
            },
            {
                name: 'bias_scan_example_reports',
                label: 'Bias Scan example reports',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    }
                ]
            },
            {
                name: 'bias_scan_faq',
                label: 'Bias Scan FAQ',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    }
                ]
            },
            {
                name: 'pdfframe',
                label: 'PDF Frame',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    },
                    {
                        name: 'name',
                        label: 'Name',
                        type: 'string',
                        description: '',
                        required: true,
                    },
                    {
                        name: 'articleUrl',
                        label: 'Article Url',
                        type: 'string',
                        description: '',
                        required: true,
                    },
                ]
            },
            {
                name: 'about_algorithm_audit_NL',
                label: 'About algorithm audit NL',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    },
                    {
                        name: 'content',
                        label: 'Content',
                        type: 'string',
                        description: '',
                        required: true,
                    }
                ]
            },
            {
                name: 'about_algorithm_audit',
                label: 'About algorithm audit',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        description: '',
                        required: true,
                    },
                    {
                        name: 'content',
                        label: 'Content',
                        type: 'string',
                        description: '',
                        required: true,
                    }
                ]
            },
            {
                name: 'team',
                label: 'Team',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'DONT USE',
                        type: 'string',
                        description: 'Use top level template',
                        required: false,
                    }
                ]
            }
        ]
    },
    {
        type: 'object',
        name: 'team',
        label: 'Team',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: true,
            },
            {
                name: 'content',
                label: 'Content',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "object",
                name: "team_members",
                label: "Team members",
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
                            label: "image",
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
];

export default building_blocks;