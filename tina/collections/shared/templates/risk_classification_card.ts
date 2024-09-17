import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let template: RichTextTemplate = {
  name: "risk_classification_card",
  label: "Risk classification card",
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
export default template;
