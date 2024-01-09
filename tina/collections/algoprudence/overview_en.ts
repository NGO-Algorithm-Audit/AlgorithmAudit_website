/**
 * @type {import('tinacms').Collection}
 */

import fields from "./overview_fields";

export default {
    name: "en_algoprudence_overview",
    label: "Algoprudence overview (EN)",
    path: "content/english/algoprudence",
    match: {
      include: '**/_index',
    },
    fields: fields,
  };