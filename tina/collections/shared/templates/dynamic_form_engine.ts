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
      name: "index",
      label: "Index of the form entry",
      type: "string",
      description:
        "0-based index of the form entry of the fields on the page (Dynamic form engine)",
      required: true,
    },
  ],
};
export default template;
