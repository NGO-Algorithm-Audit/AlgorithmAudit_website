import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let template: RichTextTemplate = {
  name: "donate",
  label: "Donation box",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "title",
      label: "DONT USE",
      type: "string",
      description: "Config is done on donation box",
      required: false,
    },
  ],
};
export default template;
