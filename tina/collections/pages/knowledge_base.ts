/**
 * @type {import('tinacms').Collection}
 */

export default {
  name: "knowledgebase",
  label: "Knowledge Base",
  path: "content/",
  match: {
    include: '**/knowledge_base/**'
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "author",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "image",
      required: true,
    },
    {
      type: "string",
      name: "type",
      label: "type",
      required: true,
      options: [
        {
          value: "regular",
          label: "regular"
        }
      ]
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
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
      ]
    },
  ],
};