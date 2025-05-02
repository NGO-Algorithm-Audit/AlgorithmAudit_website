/**
 * @type {import('tinacms').TinaField}
 */

import color from "./color";
import icon from "./icon";
import subtitle from "./subtitle";
import title from "./title";

import { TinaField } from "tinacms";
import font_color from "./font_color";
import titleline2 from "./titleline2";
import url from "./url";
const sublandingpageFields: TinaField[] = [
  {
    type: "string",
    name: "layout",
    label: "Layout",
    required: true,
    options: [
      {
        value: "sublandingpage",
        label: "Sublandingpage",
      },
    ],
  },
  title,
  titleline2,
  subtitle,
  icon,
  color,
  font_color,
  {
    type: "object",
    name: "subpage_links",
    label: "Subpage Links",
    list: true,
    ui: {
      itemProps: (item) => {
        return { label: item?.title };
      },
    },
    fields: [title, titleline2, icon, color, url],
    defaultItem: () => {
      return {
        color: "#FFF",
      };
    },
  },
];
export default sublandingpageFields;
