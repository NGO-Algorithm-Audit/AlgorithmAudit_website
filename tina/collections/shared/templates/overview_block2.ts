import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const overview_block2: RichTextTemplate = {
  name: "overview_block2",
  label: "Overview Block #2",
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
export default overview_block2;
