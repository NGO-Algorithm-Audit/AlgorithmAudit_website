/**
 * @type {import('tinacms').Collection}
 */

import { ExcludeTinaFields } from "../shared/helpers/TinaFieldsHelper";
import building_blocks from "../shared/page/building_blocks";
import image from "../shared/page/image";
import sublandingpageFields from "../shared/page/sublandingpage";
import subtitle from "../shared/page/subtitle";
import title from "../shared/page/title";

const filteredBuildingBlocks = ExcludeTinaFields(building_blocks, [
  title,
  subtitle,
  image,
]);
export default {
  name: "sublandingpage",
  label: "Sublandingpage",
  path: "content/",
  match: {
    include:
      "**/{knowledge-platform,technical-tools,events,about,algoprudence}/_index",
  },
  fields: sublandingpageFields.concat(filteredBuildingBlocks),
};
