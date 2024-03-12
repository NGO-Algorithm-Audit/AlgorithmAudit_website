import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let pdf_frame : RichTextTemplate = {
    name: 'promo_bar',
    label: 'Promo bar',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            type: "string",
            name: "content",
            label: "content",
            required: true,
        },
        {
            type: "string",
            name: "id",
            label: "ID",
            description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
            required: false,
        }
    ]
};
export default pdf_frame;