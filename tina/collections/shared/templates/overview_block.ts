import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const overview_block: RichTextTemplate = {
  name: "overview_block",
  label: "Overview Block",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "index",
      label: "Index of the overview block",
      type: "string",
      description:
        "0-based index of the overview block of the fields on the page (Overview block)",
      required: true,
    },
  ],
};
export default overview_block;
