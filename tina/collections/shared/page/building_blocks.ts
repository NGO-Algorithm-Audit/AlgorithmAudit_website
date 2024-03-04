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
                name: 'about_AA',
                label: 'About Algorithm Audit',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'DONT USE',
                        type: 'string',
                        description: 'Use top level template (only available in about AA)',
                        required: false,
                    }
                ]
            },
            {
                name: 'algoprudence_case',
                label: 'Algoprudence case',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'title',
                        label: 'DONT USE',
                        type: 'string',
                        description: 'Use top level template (only available in algoprudence cases)',
                        required: false,
                    }
                ]
            },
            {
                name: 'ai_policy_observatory',
                label: 'AI Policy Observatory',
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
                name: 'button',
                label: 'Button',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'button_text',
                        label: 'Button text',
                        type: 'string',
                        description: 'Text shown in the button',
                        required: true,
                    },
                    {
                        name: 'button_link',
                        label: 'Button link',
                        type: 'string',
                        description: 'Links the button redirects to',
                        required: true,
                    }
                ]
            },
            {
                name: 'container_open',
                label: 'Container open',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        type: "string",
                        name: "icon",
                        label: "Icon",
                        description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        description: "h3 title at top of text box",
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
                        name: 'do_not_use',
                        label: 'Do not fill, this tag should have a following "Container close" in the content',
                        type: 'string'
                    }
                ]
            },
            {
                name: 'container_close',
                label: 'Container close',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'do_not_use',
                        label: 'Do not fill, this tag should have a pre-existing "Container open" in the content',
                        type: 'string'
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
                name: 'image',
                label: 'Image',
                match: {
                    start: '{{<',
                    end: '>}}'
                },
                fields: [
                    {
                        name: 'image',
                        label: 'Image',
                        type: 'image',
                        required: true,
                    },
                    {
                        name: 'alt',
                        label: 'Alt text',
                        type: 'string',
                    },
                    {
                        name: 'caption',
                        label: 'Caption',
                        type: 'string',
                    },
                    {
                        name: 'width',
                        label: 'Width',
                        type: 'string',
                        description: '1 to 12, 12 is max width'
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
                name: 'team1',
                label: 'Team #1',
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
                name: 'team2',
                label: 'Team #2',
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
        type: "object",
        name: "about_AA",
        label: "About Algorithm Audit",
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
                    type: "object",
                    name: "items",
                    label: "Items",
                    list: true,
                    fields:
                        [
                            {
                                type: "string",
                                name: "subtitle",
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
                name: 'content',
                label: 'Content',
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
        name: 'team1',
        label: 'Team #1',
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
        name: 'team2',
        label: 'Team #2',
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
                required: false,
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
                templates: [
                ]
            }
        ]
    }
];

export default building_blocks;