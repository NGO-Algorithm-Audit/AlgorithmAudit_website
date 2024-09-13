/**
 * @type {import('tinacms').TinaField}
 */
import { TinaField } from "tinacms";
const facets: TinaField = {
  type: "object",
  name: "facets",
  label: "Categories",
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: `${item?.label}${item?.hide ? " - hidden" : ""}` };
    },
  },
  fields: [
    {
      type: "string",
      name: "value",
      label: "Value",
      required: true,
      description:
        "With the group name value as prefix (i.e. method_deeplearning)",
    },
    {
      type: "string",
      name: "label",
      label: "Label",
      required: true,
    },
    {
      type: "boolean",
      name: "hide",
      label: "Hide",
    },
  ],
};
export default facets;
