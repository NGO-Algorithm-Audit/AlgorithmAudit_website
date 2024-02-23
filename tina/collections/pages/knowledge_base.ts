/**
 * @type {import('tinacms').Collection}
 */
import { TinaField } from "tinacms";
import building_blocks from "../shared/page/building_blocks";

let specific_fields : TinaField[] = [
  {
    type: "string",
    name: "author",
    label: "author",
    required: true,
  },
  {
    type: "string",
    name: "type",
    label: "type",
    required: true,
    options: [
      {
        value: "regular",
        label: "regular"
      }
    ]
  },
  {
    type: "string",
    name: "summary",
    label: "summary",
    required: true,
  }
];

export default {
  name: "knowledgebase",
  label: "Knowledge Base",
  path: "content/",
  match: {
    include: '**/knowledge_base/**'
  },
  fields: building_blocks.concat(specific_fields),
};