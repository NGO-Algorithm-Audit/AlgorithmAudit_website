import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'container_close',
    label: 'Container close',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'do_not_use',
            label: 'Do not fill, this tag should have a pre-existing "Container open" in the content',
            type: 'string'
        }
    ]
};
export default template;