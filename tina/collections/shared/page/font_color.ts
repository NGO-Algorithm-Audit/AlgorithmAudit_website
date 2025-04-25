/**
 * @type {import('tinacms').TinaField}
 */

import { TinaField } from "tinacms";
let font_color: TinaField = {
  type: "string",
  name: "font_color",
  label: "Font color",
  required: true,
  options: [
    {
      value: "color-blue",
      label: "blue",
    },
    {
      value: "color-lightblue",
      label: "lightblue",
    },
    {
      value: "color-white",
      label: "white",
    },
    {
      value: "color-gray",
      label: "gray",
    },
    {
      value: "color-black",
      label: "black",
    },
  ],
};
export default font_color;
