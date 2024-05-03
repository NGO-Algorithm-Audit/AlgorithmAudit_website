/**
 * @type {import('tinacms').Collection}
 */
import { TinaField } from "tinacms";
import building_blocks from "../shared/page/building_blocks";

let specific_fields: TinaField[] = [
  {
    type: "string",
    name: "icon",
    label: "Icon",
    description:
      "From https://fontawesome.com/search (e.g. fa-square-poll-vertical from https://fontawesome.com/icons/square-poll-vertical?f=classic&s=solid)",
  },
  {
    type: "string",
    name: "layout",
    label: "Layout",
    required: true,
    options: [
      {
        value: "article",
        label: "Article",
      },
    ],
  },
  {
    type: "string",
    name: "author",
    label: "author",
    required: true,
  },
];

export default {
  name: "knowledge_platform_knowledge_base",
  label: "Knowledge platform (knowledge base)",
  path: "content/",
  match: {
    include: "**/knowledge-platform/knowledge-base/**",
    exclude: "**/knowledge-base/_index",
  },
  fields: specific_fields.concat(building_blocks),
  defaultItem: () => {
    return {
      layout: "article",
    };
  },
};
