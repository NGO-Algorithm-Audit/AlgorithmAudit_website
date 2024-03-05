/**
 * @type {import('tinacms').TinaField[]}
 */

import title from "./title";
import subtitle from "./subtitle";
import image from "./image";
import { TinaField } from "tinacms";
import pdf_frame from "../templates/pdf_frame";
import about_aa from "../templates/about_aa";
import algoprudence_case from "../templates/algoprudence_case";
import ai_policy_observatory from "../templates/ai_policy_observatory";
import button from "../templates/button";
import container_open from "../templates/container_open";
import container_close from "../templates/container_close";
import reports_preview from "../templates/reports_preview";
import form from "../templates/form";
import template_image from "../templates/image";
import team from "../templates/team";
import team1 from "../templates/team1";
import team2 from "../templates/team2";
import web_app from "../templates/web_app";

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
            about_aa,
            algoprudence_case,
            ai_policy_observatory,
            button,
            container_open,
            container_close,
            reports_preview,
            form,
            template_image,
            pdf_frame,
            team,
            team1,
            team2,
            web_app
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