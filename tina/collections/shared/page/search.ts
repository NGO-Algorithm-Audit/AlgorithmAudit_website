import { TinaField } from "tinacms";
const search: TinaField = {
  type: "object",
  name: "search",
  label: "Search",
  required: true,
  description:
    "Search configuration for Algolia. This will be used to populate the search index. If left empty, the values above will be used. It is recommended to fill this out for better search results.",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      required: true,
    },
  ],
};
export default search;
