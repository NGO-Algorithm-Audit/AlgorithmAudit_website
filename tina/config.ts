import { TinaField, defineConfig } from "tinacms";
import knowledge_base_nl from "./collections/knowledge_base/nl";
import knowledge_base_en from "./collections/knowledge_base/en";
import home_en from "./collections/home/en";
import home_nl from "./collections/home/nl";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

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
      home_nl,
      home_en,
      knowledge_base_nl,
      knowledge_base_en
    ],
  },
});
