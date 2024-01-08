/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "en_algoprudence",
    label: "Algoprudence (EN)",
    path: "content/english/algoprudence",
    match: {
      include: '**',
    },
    fields: fields,
  };