import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let team: RichTextTemplate = {
  name: "team",
  label: "Team",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "index",
      label: "Index of the form entry",
      type: "string",
      description:
        "0-based index of the form entry of the fields on the page (Team)",
      required: true,
    },
  ],
};
export default team;
