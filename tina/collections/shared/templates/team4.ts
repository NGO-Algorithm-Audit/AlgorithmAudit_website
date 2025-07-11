import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let pdf_frame : RichTextTemplate = {
    name: 'team4',
    label: 'Team #4',
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