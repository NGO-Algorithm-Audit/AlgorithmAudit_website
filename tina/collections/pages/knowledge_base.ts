/**
 * @type {import('tinacms').Collection}
 */
import pdfFrame from "../shared/templates/pdfFrame"

export default {
    name: "knowledgebase",
    label: "Knowledge Base",
    path: "content/",
    match: {
      exclude: '**/_index',
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
          options:[
            {
              value:"regular",
              label:"regular"
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
            pdfFrame,
          ]
        },
      ],
  };