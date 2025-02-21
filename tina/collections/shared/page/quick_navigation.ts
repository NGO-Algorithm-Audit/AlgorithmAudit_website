/**
 * @type {import('tinacms').TinaField}
 */
import { TinaField } from "tinacms";

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
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url",
          required: true,
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
            {
              type: "string",
              name: "title",
              label: "Title",
              required: true,
            },
            {
              type: "string",
              name: "url",
              label: "Url",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
export default quick_navigation;
