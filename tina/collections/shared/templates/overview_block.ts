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
      name: "title",
      label: "DONT USE",
      type: "string",
      description: "Use top level template",
      required: false,
    },
  ],
};
export default overview_block;
