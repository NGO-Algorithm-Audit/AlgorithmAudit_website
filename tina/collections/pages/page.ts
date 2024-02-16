/**
 * @type {import('tinacms').Collection}
 */
import title from "../shared/page/title";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";
import background_color from "../shared/page/background_color";
import pdfFrame from "../shared/templates/pdfFrame";

export default {
    name: "page",
    label: "Pages",
    path: "content/",
    match: {
        include: '**/**',
    },
    fields: [
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
                pdfFrame,
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
                            description: 'DONT USE',
                            required: true,
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
    ],
    format: "md"
};