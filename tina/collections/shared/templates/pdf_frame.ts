import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let pdf_frame : RichTextTemplate = {
    name: 'pdf_frame',
    label: 'PDF Frame',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'articleUrl',
            label: 'Article Url',
            type: 'image',
            required: true,
        },
        {
            name: 'width',
            label: 'Width',
            type: 'string',
            description: '6 is default, 12 is max. Mobile is always 12'
        }
    ]
};
export default pdf_frame;