/**
 * @type {import('tinacms').Collection}
 */

import fields from "./page_fields";

export default {
    name: "en_algoprudence",
    label: "Algoprudence (EN)",
    path: "content/english/algoprudence/cases",
    match: {
      exclude: '**/_index',
    },
    fields: fields,
    defaultItem: () => {
      return {
        layout: "case"
      }
    }
  };