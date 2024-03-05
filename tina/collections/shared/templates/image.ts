import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let pdf_frame : RichTextTemplate = {
    name: 'image',
    label: 'Image',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'image',
            label: 'Image',
            type: 'image',
            required: true,
        },
        {
            name: 'alt',
            label: 'Alt text',
            type: 'string',
        },
        {
            name: 'caption',
            label: 'Caption',
            type: 'string',
        },
        {
            name: 'width',
            label: 'Width',
            type: 'string',
            description: '1 to 12, 12 is max width'
        }
    ]
};
export default pdf_frame;