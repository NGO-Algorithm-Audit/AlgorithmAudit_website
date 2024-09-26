import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const overview_block1: RichTextTemplate = {
  name: "overview_block1",
  label: "Overview Block #1",
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
export default overview_block1;
