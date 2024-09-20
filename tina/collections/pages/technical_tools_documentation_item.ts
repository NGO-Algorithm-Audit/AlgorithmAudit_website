/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
  name: "technical_tools_documentation_item",
  label: "Technical tools (docs/item)",
  path: "content/",
  match: {
    include: "**/technical-tools/documentation/*",
  },
  fields: building_blocks,
};
