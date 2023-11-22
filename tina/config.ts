import { TinaField, defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

let knowledge_base_fields : TinaField[] = [
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
      {
        name: 'pdfframe',
        label: 'PDF Frame',
        match: {
          start: '{{<',
          end: '>}}',
          name: 'pdf-frame'
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
        ],
      },
    ]
  },
];

export default defineConfig({
  branch,
  clientId: "059ef0ec-ed5e-4000-96bf-661a22ce4691",
  token: "460783b4311d691899223f800d62864797311b1c",
  client: { skip: true },

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "nl_knowledgebase",
        label: "Knowledge Base (NL)",
        path: "content/nederlands/knowledge_base",
        match: {
          exclude: '**/_index',
        },
        fields: knowledge_base_fields,
      },
      {
        name: "en_knowledgebase",
        label: "Knowledge Base (EN)",
        path: "content/english/knowledge_base",
        match: {
          exclude: '**/_index',
        },
        fields: knowledge_base_fields,
      },
    ],
  },
});
