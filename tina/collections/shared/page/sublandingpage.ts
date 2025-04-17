/**
 * @type {import('tinacms').TinaField}
 */

import color from "./color";
import icon from "./icon";
import subtitle from "./subtitle";
import title from "./title";

import { TinaField } from "tinacms";
import titleline2 from "./titleline2";
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
    fields: [title, titleline2, icon, color],
    defaultItem: () => {
      return {
        color: "#FFF",
      };
    },
  },
];
export default sublandingpageFields;
