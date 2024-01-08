/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "nl_home",
    label: "Home (NL)",
    path: "content/nederlands",
    match: {
      include: '**',
    },
    fields: fields,
  };