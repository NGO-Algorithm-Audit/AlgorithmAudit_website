import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'tab_content_close',
    label: 'Tab content close',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'do_not_use',
            label: 'Do not fill, this tag should have a pre-existing "Tab content close" in the content',
            type: 'string'
        }
    ]
};
export default template;