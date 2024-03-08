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
            name: 'articleUrl1',
            label: 'pdf1',
            type: 'string',
            description: 'google-docs url',
            required: true,
        },
        {
            name: 'articleUrl2',
            label: 'pdf2',
            type: 'string',
            description: 'google-docs url',
            required: false,
        }
    ]
};
export default pdf_frame;