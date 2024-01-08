/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "nl_algoprudence",
    label: "Algoprudence (NL)",
    path: "content/nederlands/algoprudence",
    match: {
      include: '**',
    },
    fields: fields,
  };