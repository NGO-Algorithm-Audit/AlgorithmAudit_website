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
            type: "string",
            name: "width_desktop_pdf",
            label: "Width desktop pdf",
            description: "max. 12 (100%), 6 (50%), 4 (25%) etc.",
            required: true,
        },
        {
            type: "string",
            name: "width_mobile_pdf",
            label: "Width mobile pdf",
            description: "max. 12 (100%), 6 (50%), 4 (25%) etc.",
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