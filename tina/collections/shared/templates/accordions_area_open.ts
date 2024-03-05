import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'accordions_area_open',
    label: 'Accordions area open',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            type: "string",
            name: "id",
            label: "ID",
            description: "Unique id to bundle accordion items and activate the javascript for them.",
            required: true,
        },
        {
            name: 'do_not_use',
            label: 'Do not fill, this tag should have a following "Accordions area close" in the content',
            type: 'string'
        }
    ]
};
export default template;