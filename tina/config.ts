import { defineConfig } from "tinacms";
import knowledge_base_nl from "./collections/knowledge_base/nl";
import knowledge_base_en from "./collections/knowledge_base/en";
import algoprudence_overview_en from "./collections/algoprudence/overview_en";
import algoprudence_overview_nl from "./collections/algoprudence/overview_nl";
import algoprudence_en from "./collections/algoprudence/page_en";
import algoprudence_nl from "./collections/algoprudence/page_nl";
import events_overview_nl from "./collections/events/overview_nl";
import events_overview_en from "./collections/events/overview_en";
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
      knowledge_base_nl,
      knowledge_base_en,
      algoprudence_overview_nl,
      algoprudence_overview_en,
      algoprudence_nl,
      algoprudence_en,
      events_overview_nl,
      events_overview_en
    ],
  },
});
