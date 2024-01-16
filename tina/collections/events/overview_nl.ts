/**
 * @type {import('tinacms').Collection}
 */

import fields from "./overview_fields";

export default {
    name: "nl_events_overview",
    label: "Events overview (NL)",
    path: "content/nederlands/events",
    match: {
      include: '**/_index',
    },
    fields: fields,
  };