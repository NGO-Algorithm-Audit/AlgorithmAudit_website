/**
 * @type {import('tinacms').Collection}
 */
import { TinaField } from "tinacms";
import facet_groups from "../shared/facets/facet_groups";
import building_blocks from "../shared/page/building_blocks";

let specific_fields: TinaField[] = [
  facet_groups,
  {
    type: "number",
    name: "pagesize",
    label: "Page size",
    required: true,
    description: "Number of items per page, leave 0 to show all items",
  },
  {
    type: "string",
    name: "title_content",
    label: "Title content",
    required: true,
  },
  {
    type: "string",
    name: "layout",
    label: "Layout",
    required: true,
    options: [
      {
        value: "overview",
        label: "overview",
      },
    ],
  },
];

export default {
  name: "knowledge_platform_overview",
  label: "Knowledge platform (knowledge base overview)",
  path: "content/",
  match: {
    include: "**/knowledge-platform//knowledge-base",
  },
  fields: specific_fields.concat(building_blocks),
};
