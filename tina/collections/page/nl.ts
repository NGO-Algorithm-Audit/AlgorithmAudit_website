/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "nl_page",
    label: "Page (NL)",
    path: "content/nederlands",
    match: {
      include: '**/*',
    },
    fields: fields,
    format: "md"
  };