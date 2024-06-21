/**
 * @type {import('tinacms').TinaField}
 */
import { TinaField } from "tinacms";

let weight: TinaField = {
  type: "number",
  name: "weight",
  label: "Weight",
  required: true,
  description:
    "Assign weights using non-zero integers. Lighter items float to the top, while heavier items sink to the bottom. Unweighted or zero-weighted elements are placed at the end of the collection."
};
export default weight;
