/**
 * @type {import('tinacms').Collection}
 */

import fields from "./fields";

export default {
    name: "nl_knowledgebase",
    label: "Knowledge Base (NL)",
    path: "content/nederlands/knowledge_base",
    match: {
      exclude: '**/_index',
    },
    fields: fields,
  };