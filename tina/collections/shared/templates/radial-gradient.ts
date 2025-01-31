import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
const radial_gradient: RichTextTemplate = {
  name: "radial_gradient",
  label: "Radial gradient (Header)",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      type: "string",
      name: "id",
      label: "Id",
      required: true,
    },
    {
      type: "string",
      name: "color_start",
      label: "Start color",
      required: true,
      description: "ie: #DD7F67",
    },
    {
      type: "string",
      name: "color_end",
      label: "End color",
      required: true,
      description: "ie: #FFFFFF",
    },
  ],
};
export default radial_gradient;
