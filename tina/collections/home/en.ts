/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "en_home",
    label: "Home (EN)",
    path: "content/english",
    match: {
      include: '**',
    },
    fields: fields,
  };