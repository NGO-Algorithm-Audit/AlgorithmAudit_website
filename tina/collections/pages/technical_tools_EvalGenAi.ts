/**
 * @type {import('tinacms').Collection}
 */
import { TinaField } from "tinacms";
import building_blocks from "../shared/page/building_blocks";

let specific_fields: TinaField[] = [
  {
    name: "type",
    type: "string",
    label: "Type",
    description: "Needed to load the specific css",
    required: true,
    options: [
      {
        value: "bias-detection-tool",
        label: "bias detection tool",
      },
    ],
  },
];
export default {
  name: "technical_tools_EvalGenAi",
  label: "Technical tools (EvalGenAi)",
  path: "content/",
  match: {
    include: "**/technical-tools/eval-gen-ai",
  },
  fields: building_blocks.concat(specific_fields),
};
