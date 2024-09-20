import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const tooltip: RichTextTemplate = {
  name: "tooltip",
  label: "Tooltip",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "content",
      label: "Tooltip",
      type: "string",
      description: "The content of the tooltip",
      required: true,
    },
  ],
};
export default tooltip;
