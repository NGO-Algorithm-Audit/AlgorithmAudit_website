import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let pdf_frame: RichTextTemplate = {
  name: "team",
  label: "Team",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "id",
      label: "ID",
      type: "string",
    },
    {
      name: "title",
      label: "DONT USE",
      type: "string",
      description: "Use top level template",
      required: false,
    },
  ],
};
export default pdf_frame;
