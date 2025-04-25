import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let overview_block_template: RichTextTemplate = {
  name: "overview_block",
  label: "Overview block",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "do_not_use",
      label:
        'Do not fill, this tag should have a following "Overview block" in the content',
      type: "string",
    },
  ],
};
export default overview_block_template;
