import { defineConfig } from "tinacms";
import home from "./collections/pages/home";
import algoprudence_cases from "./collections/pages/algoprudence_cases";
import algoprudence_repository from "./collections/pages/algoprudence_repository";
import algoprudence_submit_a_case from "./collections/pages/algoprudence_submit_a_case";
import algoprudence_how_we_work from "./collections/pages/algoprudence_how_we_work";
import technical_tools_BDT from "./collections/pages/technical_tools_BDT";
import knowledge_base from "./collections/pages/knowledge_base";
import events_overview from "./collections/pages/events_overview";
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
      algoprudence_submit_a_case,
      algoprudence_cases,
      algoprudence_repository,
      algoprudence_how_we_work,
      technical_tools_BDT,
      knowledge_base,
      events_overview
    ],
  },
});