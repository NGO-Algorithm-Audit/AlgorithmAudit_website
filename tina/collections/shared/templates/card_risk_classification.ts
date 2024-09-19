import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let template: RichTextTemplate = {
  name: "card_risk_classification",
  label: "Card risk classification",
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
