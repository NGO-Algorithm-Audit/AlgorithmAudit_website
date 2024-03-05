import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'accordion_item_close',
    label: 'Accordion item close',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'do_not_use',
            label: 'Do not fill, this tag should have a pre-existing "Accordion item open" in the content',
            type: 'string'
        }
    ]
};
export default template;