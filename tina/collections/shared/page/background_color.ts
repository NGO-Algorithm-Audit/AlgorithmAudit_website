/**
 * @type {import('tinacms').TinaField}
 */

import { TinaField } from "tinacms";
let background_color : TinaField = {
  type: "string",
  name: "background_color",
  label: "Background color",
  options: [
      {
        value:"#ffffff",
        label:"White"
      },
      {
        value:"#f9f9f9",
        label:"Grey"
      }
    ]
};
export default background_color;