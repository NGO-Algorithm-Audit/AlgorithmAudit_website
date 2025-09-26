/**
 * @type {import('tinacms').TinaField}
 */
import { TinaField } from "tinacms";
import title from "./title";
import url from "./url";

const quick_navigation: TinaField = {
  type: "object",
  name: "quick_navigation",
  label: "Quick navigation",
  required: false,
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: false,
    },
    {
      type: "string",
      name: "custom_page_width",
      label: "Custom page width for large screens (1-12)",
      required: false,
    },
    {
      type: "object",
      name: "links",
      label: "Links",
      required: false,
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        title,
        url,
        {
          type: "number",
          name: "indent",
          label: "Indent",
          description: "Indent level for the link, 0 is the default",
          required: false,
        },
      ],
    },
  ],
};
export default quick_navigation;
