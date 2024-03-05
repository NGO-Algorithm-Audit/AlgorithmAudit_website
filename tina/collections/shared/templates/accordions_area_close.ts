import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'accordions_area_close',
    label: 'Accordions area close',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'do_not_use',
            label: 'Do not fill, this tag should have a pre-existing "Accordions area open" in the content',
            type: 'string'
        }
    ]
};
export default template;