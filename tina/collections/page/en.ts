/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "en_page",
    label: "Page (EN)",
    path: "content/english",
    match: {
      include: '**/*',
    },
    fields: fields,
    format: "md"
  };