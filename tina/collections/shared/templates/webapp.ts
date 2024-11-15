import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const webapp: RichTextTemplate = {
  name: "webapp",
  label: "Web App",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "id",
      label: "ID",
      type: "string",
      description: "Use top level template",
      required: true,
    },
    {
      name: "appId",
      label: "App ID",
      type: "string",
      description: "App ID of the web app",
      required: true,
    },
    {
      name: "src",
      label: "Script url",
      type: "string",
      description: "Script url of the web app",
      required: true,
    },
    {
      name: "stylesheet",
      label: "Stylesheet url",
      type: "string",
      description: "Stylesheet url of the web app",
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      description: "",
    },
    {
      type: "string",
      name: "icon",
      label: "Icon",
      description:
        "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
    },
  ],
};
export default webapp;
