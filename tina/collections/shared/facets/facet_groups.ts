/**
 * @type {import('tinacms').TinaField}
 */
import { TinaField } from "tinacms";
const facet_groups: TinaField = {
  type: "object",
  name: "facet_groups",
  label: "Facet Groups",
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
  fields: [
    {
      type: "string",
      name: "value",
      label: "Value",
      required: true,
      description: "Lowercase without any special characters",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "object",
      name: "facets",
      label: "Facets",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.label };
        },
      },
      fields: [
        {
          type: "string",
          name: "value",
          label: "Value",
          required: true,
          description:
            "Without the group name value as prefix (i.e. deeplearning)",
        },
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
      ],
    },
  ],
};
export default facet_groups;
