/**
 * @type {import('tinacms').TinaField}
 */

import { TinaField } from "tinacms";
import color from "./color";
let overview_block: TinaField = {
  type: "object",
  name: "overview_block",
  label: "Overview block",
  fields: [
    {
      type: "object",
      name: "activities",
      label: "Activities",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
        },
        {
          type: "string",
          name: "url",
          label: "Url",
          required: true,
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
          required: true,
          description:
            "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        },
        color,
      ],
    },
  ],
};
export default overview_block;
