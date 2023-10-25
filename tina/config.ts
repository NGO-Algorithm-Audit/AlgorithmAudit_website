import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

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
        name: "post",
        label: "Knowledge Base (NL)",
        path: "content/nederlands/knowledge_base",
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
          },
        ],
      },
    ],
  },
});
