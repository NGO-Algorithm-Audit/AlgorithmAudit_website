// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "059ef0ec-ed5e-4000-96bf-661a22ce4691",
  token: "460783b4311d691899223f800d62864797311b1c",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "English",
        name: "english",
        path: "content/english",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
