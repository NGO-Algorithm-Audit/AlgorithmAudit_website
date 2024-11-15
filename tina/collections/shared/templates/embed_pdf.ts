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
    {
      name: "url2",
      label: "Url 2",
      type: "image",
    },
    {
      type: "string",
      name: "hidePaginator2",
      label: "Hide paginator 2",
      description:
        "Boolean which expects true or false. Hides the paginator for single page documents.",
    },
    {
      type: "string",
      name: "renderPageNum2",
      label: "Render selected page 2",
      description:
        "Integer which expects any number from 1 up to the last page number in the document. Will render that specific page on initial load.",
    },
    {
      name: "hideLoader2",
      label: "Hide loader 2",
      type: "string",
      description:
        "Boolean which expects true or false. Hides the loading spinner while your document loads.",
    },
    {
      type: "string",
      name: "width_desktop_pdf",
      label: "Width desktop pdf",
      description: "max. 12 (100%), 6 (50%), 4 (25%) etc.",
    },
    {
      type: "string",
      name: "width_mobile_pdf",
      label: "Width mobile pdf",
      description: "max. 12 (100%), 6 (50%), 4 (25%) etc.",
    },
  ],
};
export default embed_pdf;
