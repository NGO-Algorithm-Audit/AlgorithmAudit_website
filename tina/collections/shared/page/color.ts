/**
 * @type {import('tinacms').TinaField}
 */

import { TinaField } from "tinacms";
let color: TinaField = {
  type: "string",
  name: "color",
  label: "Color",
  required: true,
  description: "Hex color code (e.g. #FF0000)",
};
export default color;
