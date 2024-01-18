/**
 * @type {import('tinacms').Collection}
 */

import fields from "./page_fields";

export default {
    name: "nl_algoprudence",
    label: "Algoprudence (NL)",
    path: "content/nederlands/algoprudence/cases",
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