import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let embed_pdf: RichTextTemplate = {
  name: "embed_pdf",
  label: "Embed PDF",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "url",
      label: "Url",
      type: "image",
      required: true,
    },
    {
      type: "string",
      name: "hidePaginator",
      label: "Hide paginator",
      description:
        "Boolean which expects true or false. Hides the paginator for single page documents.",
    },
    {
      type: "string",
      name: "renderPageNum",
      label: "Render selected page",
      description:
        "Integer which expects any number from 1 up to the last page number in the document. Will render that specific page on initial load.",
    },
    {
      name: "hideLoader",
      label: "Hide loader",
      type: "string",
      description:
        "Boolean which expects true or false. Hides the loading spinner while your document loads.",
    },
  ],
};
export default embed_pdf;
