import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const iframe: RichTextTemplate = {
  name: "iframe",
  label: "iFrame",
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
      name: "src",
      label: "URL",
      type: "string",
      description: "URL of the web app",
      required: true,
    },
    {
      name: "height",
      label: "Height",
      type: "string",
      description: "Height of the iframe (i.e. 500px)",
      required: true,
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
export default iframe;
