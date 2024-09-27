import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const template: RichTextTemplate = {
  name: "dynamic_form_engine",
  label: "Dynamic form engine",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "title",
      label: "DONT USE",
      type: "string",
      description: "Use top level template",
      required: false,
    },
    {
      name: "form_entry",
      label: "Index of the form entry",
      type: "string",
      description: "0-based index of the form entry",
      required: true,
    },
  ],
};
export default template;
