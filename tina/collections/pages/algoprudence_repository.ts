/**
 * @type {import('tinacms').Collection}
 */

import facet_groups from "../shared/facets/facet_groups";
import facets from "../shared/facets/facets";
import title from "../shared/page/title";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";

export default {
    name: "algoprudence_repository",
    label: "Algoprudence (repository)",
    path: "content/",
    match: {
        include: '**/algoprudence/_index',
    },
    fields: [
        title,
        subtitle,
        image,
        facet_groups,
        {
            type: "object",
            name: "algoprudences",
            label: "Algoprudence",
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
                        type: "string",
                        name: "intro",
                        label: "teaser"
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "image",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "link",
                        label: "Link",
                        required: true
                    },
                    facets
                ]
        },
        {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            templates: [
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
            ],
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
    ],
};