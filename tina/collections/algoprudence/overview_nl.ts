/**
 * @type {import('tinacms').Collection}
 */

import fields from "./overview_fields";

export default {
    name: "nl_algoprudence_overview",
    label: "Algoprudence overview (NL)",
    path: "content/nederlands/algoprudence",
    match: {
      include: '**/_index',
    },
    fields: fields,
  };