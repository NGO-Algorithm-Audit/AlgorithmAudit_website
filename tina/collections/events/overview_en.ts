/**
 * @type {import('tinacms').Collection}
 */

import fields from "./overview_fields";

export default {
    name: "en_events_overview",
    label: "Events overview (EN)",
    path: "content/english/events",
    match: {
      include: '**/_index',
    },
    fields: fields,
  };