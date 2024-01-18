/**
 * @type {import('tinacms').TinaField}
 */
export default {
    name: 'pdfframe',
    label: 'PDF Frame',
    match: {
      start: '{{<',
      end: '>}}'
    },
    fields: [
      {
        name: 'title',
        label: 'Title',
        type: 'string',
        description: '',
        required: true,
      },
      {
        name: 'name',
        label: 'Name',
        type: 'string',
        description: '',
        required: true,
      },
      {
        name: 'articleUrl',
        label: 'Article Url',
        type: 'string',
        description: '',
        required: true,
      },
    ]
}