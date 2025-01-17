import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const template: RichTextTemplate = {
  name: "slider",
  label: "Slider",
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
        "0-based index of the form entry of the fields on the page (Slider)",
      required: true,
    },
  ],
};
export default template;
