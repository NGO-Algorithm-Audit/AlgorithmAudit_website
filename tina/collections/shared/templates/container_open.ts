import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let template: RichTextTemplate = {
  name: "container_open",
  label: "Container open",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      type: "string",
      name: "isAccordion",
      label: "Is Accordion",
      description:
        "Is this a collapsible accordion?, if so, the icon below is ignored",
      required: false,
      options: [
        {
          label: "No",
          value: "",
        },
        {
          label: "Yes",
          value: "true",
        },
      ],
    },
    {
      type: "string",
      name: "icon",
      label: "Icon",
      description:
        "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      description: "h3 title at top of text box",
      required: true,
    },
    {
      type: "string",
      name: "id",
      label: "ID",
      description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
      required: false,
    },
    {
      name: "do_not_use",
      label:
        'Do not fill, this tag should have a following "Container close" in the content',
      type: "string",
    },
  ],
};
export default template;
