import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let pdf_frame : RichTextTemplate = {
    name: 'team3',
    label: 'Team #3',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'title',
            label: 'DONT USE',
            type: 'string',
            description: 'Use top level template',
            required: false,
        }
    ]
};
export default pdf_frame;