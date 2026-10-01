/**
 * @type {import('tinacms').TinaField}
 */

import { TinaField } from "tinacms";
let font_color: TinaField = {
  type: "string",
  name: "font_color",
  label: "Font color",
  required: false,
  description: "Hex color code (e.g. #FF0000). Defaults to #FFF if left empty.",
};
export default font_color;
