import { defineConfig } from "tinacms";
import about_boards from "./collections/pages/about_boards";
import about_contact from "./collections/pages/about_contact";
import about_faq from "./collections/pages/about_faq";
import about_teams from "./collections/pages/about_teams";
import about_vacancies from "./collections/pages/about_vacancies";
import algoprudence_cases from "./collections/pages/algoprudence_cases";
import algoprudence_how_we_work from "./collections/pages/algoprudence_how_we_work";
import algoprudence_repository from "./collections/pages/algoprudence_repository";
import algoprudence_submit_a_case from "./collections/pages/algoprudence_submit_a_case";
import events_activities from "./collections/pages/events_activities";
import events_press_room from "./collections/pages/events_press_room";
import events_registration from "./collections/pages/events_registration";
import home from "./collections/pages/home";
import knowledge_platform_items from "./collections/pages/knowledge_platform_items";
import knowledge_platform_overview from "./collections/pages/knowledge_platform_overview";
import knowledge_platform_policy_observatory from "./collections/pages/knowledge_platform_policy_observatory";
import knowledge_platform_project_work from "./collections/pages/knowledge_platform_project-work";
import knowledge_platform_standards from "./collections/pages/knowledge_platform_standards";
import privacy_policy from "./collections/pages/privacy_policy";
import sublandingpage from "./collections/pages/sublandingpage";
import technical_tools_AIA_implementation_tool from "./collections/pages/technical_tools_AIA_implementation_tool";
import technical_tools_BDT from "./collections/pages/technical_tools_BDT";
import technical_tools_SDG from "./collections/pages/technical_tools_SDG";
// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
      sublandingpage,
      algoprudence_submit_a_case,
      algoprudence_cases,
      algoprudence_repository,
      algoprudence_how_we_work,
      technical_tools_BDT,
      technical_tools_SDG,
      technical_tools_AIA_implementation_tool,
      knowledge_platform_standards,
      knowledge_platform_policy_observatory,
      knowledge_platform_overview,
      knowledge_platform_items,
      knowledge_platform_project_work,
      events_activities,
      events_press_room,
      events_registration,
      about_contact,
      about_faq,
      about_teams,
      about_boards,
      about_vacancies,
      privacy_policy,
    ],
  },
});
