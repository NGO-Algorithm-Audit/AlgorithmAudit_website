/**
 * @type {import('tinacms').TinaField[]}
 */

import title from "./title";
import subtitle from "./subtitle";
import image from "./image";
import { TinaField } from "tinacms";

let building_blocks: TinaField[] = [
    title,
    subtitle,
    image,
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
                name: 'form',
                label: 'Form',
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
            },
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
            },
            {
                name: 'reports_preview',
                label: 'Reports preview',
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
            },
            {
                name: 'text_field1',
                label: 'Text field #1',
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
            },
            {
                name: 'text_field2',
                label: 'Text field #2',
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
            },
            {
                name: 'text_field3',
                label: 'Text field #3',
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
            },
            {
                name: 'text_field4',
                label: 'Text field #4',
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
            },
            {
                name: 'text_field5',
                label: 'Text field #5',
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
            },
            {
                name: 'web_app',
                label: 'Web app',
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
        name: 'text_field1',
        label: 'Text field #1',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: false,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: false,
            },
            {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: false,
            }
        ]
    },
    {
        type: 'object',
        name: 'text_field2',
        label: 'Text field #2',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: false,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: false,
            },
            {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: false,
            }
        ]
    },
    {
        type: 'object',
        name: 'text_field3',
        label: 'Text field #3',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: false,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: false,
            },
            {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: false,
            }
        ]
    },
    {
        type: 'object',
        name: 'text_field4',
        label: 'Text field #4',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: false,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: false,
            },
            {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: false,
            }
        ]
    },
    {
        type: 'object',
        name: 'text_field5',
        label: 'Text field #5',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: false,
            },
            {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: false,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: true,
            },
            {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: false,
            }
        ]
    },
    {
        type: 'object',
        name: 'form',
        label: 'Form',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: true,
            },
            {
                name: 'button_text',
                label: 'Button text',
                type: 'string',
                description: '',
                required: true,
            },
            {
                name: 'backend_link',
                label: 'Back end link',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: false,
            },
            {
                type: "object",
                name: "questions",
                label: "Questions",
                list: true,
                fields:
                    [
                        {
                            type: "string",
                            name: "label",
                            label: "Label",
                            required: true,
                        },
                        {
                            type: "string",
                            name: "id",
                            label: "Id",
                            required: true,
                            description: "Unique identifier (as can be seen when recieving the submitted form)"
                        },
                        {
                            type: "string",
                            name: "type",
                            label: "Type",
                            required: true,
                            options: 
                            [
                                {
                                    value: "text",
                                    label: "Text box"
                                },
                                {
                                    value: "textarea",
                                    label: "Text area"
                                },
                                {
                                    value: "email",
                                    label: "Email"
                                }
                            ]
                        },
                        {
                            type: "string",
                            name: "placeholder",
                            label: "Placeholder"
                        }
                    ]
            }
        ]
    },
    {
        type: "object",
        name: "reports_preview",
        label: "Reports preview",
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
                    name: "icon",
                    label: "Icon",
                    description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                    required: false,
                },
                {
                    type: "string",
                    name: "button_text",
                    label: "Button text",
                    required: false,
                },
                {
                    type: "string",
                    name: "button_link",
                    label: "Button link",
                    required: false,
                },
                {
                    type: "string",
                    name: "id",
                    label: "ID",
                    description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                    required: false,
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
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: false,
            },
            {
                type: "string",
                name: "button_text",
                label: "Button text",
                required: true,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: false,
            },
            {
                type: "string",
                name: "button_link",
                label: "Button link",
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
                            type: "image",
                            name: "image",
                            label: "image",
                            required: true,
                        },
                        {
                            type: "string",
                            name: "name",
                            label: "Name",
                            required: true,
                        },
                        {
                            type: "rich-text",
                            name: "bio",
                            label: "Bio",
                            isBody: false,
                        }
                    ]
            }
        ]
    },
    {
        type: 'object',
        name: 'web_app',
        label: 'Web app',
        fields: [
            {
                name: 'title',
                label: 'Title',
                type: 'string',
                description: '',
                required: true,
            },
            {
                type: "string",
                name: "icon",
                label: "Icon",
                description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                required: false,
            },
            {
                type: "string",
                name: "id",
                label: "ID",
                description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
                required: false,
            },
            {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: false,
            }
        ]
    }
];

export default building_blocks;