import { defineConfig } from "tinacms";
import home from "./collections/pages/home";
import knowledge_base from "./collections/pages/knowledge_base";
import algoprudence_overview from "./collections/pages/algoprudence_overview";
import algoprudence_case from "./collections/pages/algoprudence_case";
import events_overview from "./collections/pages/events_overview";
import page from "./collections/pages/page";
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
      home,
      knowledge_base,
      algoprudence_overview,
      algoprudence_case,
      events_overview,
      page
    ],
  },
});
