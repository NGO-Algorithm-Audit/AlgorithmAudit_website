/**
 * @type {import('tinacms').Collection}
 */
import { TinaField } from "tinacms";
import facets from "../shared/facets/facets";
import building_blocks from "../shared/page/building_blocks";
import weight from "../shared/page/weight";
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
    name: "type",
    label: "Type",
    required: true,
    options: [
      {
        value: "knowledgebase_item",
        label: "knowledgebase_item",
      },
    ],
  },
  {
    type: "string",
    name: "author",
    label: "author",
    required: true,
  },
  {
    type: "string",
    name: "intro",
    label: "teaser",
  },
  facets,
  weight,
];

export default {
  name: "knowledge_platform_knowledge_base",
  label: "Knowledge platform (knowledge base)",
  path: "content/",
  match: {
    include: "**/knowledge-platform/knowledge-base/**",
  },
  fields: specific_fields.concat(building_blocks),
  defaultItem: () => {
    return {
      layout: "article",
      type: "knowledgebase_item",
    };
  },
};
