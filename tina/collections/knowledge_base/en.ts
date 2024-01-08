/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "en_knowledgebase",
    label: "Knowledge Base (EN)",
    path: "content/english/knowledge_base",
    match: {
      exclude: '**/_index',
    },
    fields: fields,
  };