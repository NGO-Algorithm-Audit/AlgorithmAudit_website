/**
 * @type {import('tinacms').TinaField}
 */

import { TinaField } from "tinacms";
let icon: TinaField = {
  type: "string",
  name: "icon",
  label: "Icon",
  required: true,
  description:
    "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
};
export default icon;
