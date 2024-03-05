import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'button',
    label: 'Button',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'button_text',
            label: 'Button text',
            type: 'string',
            description: 'Text shown in the button',
            required: true,
        },
        {
            name: 'button_link',
            label: 'Button link',
            type: 'string',
            description: 'Links the button redirects to',
            required: true,
        }
    ]
};
export default template;