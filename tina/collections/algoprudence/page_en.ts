/**
 * @type {import('tinacms').Collection}
 */

import fields from "./page_fields";

export default {
    name: "en_algoprudence",
    label: "Algoprudence (EN)",
    path: "content/english/algoprudence",
    match: {
      exclude: '**/_index',
    },
    fields: fields,
  };