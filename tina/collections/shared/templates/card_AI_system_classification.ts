import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let template: RichTextTemplate = {
  name: "card_AI_system_classification",
  label: "Card AI system classification",
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
