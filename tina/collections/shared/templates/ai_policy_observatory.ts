import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'ai_policy_observatory',
    label: 'AI Policy Observatory',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
            description: '',
            required: true,
        }
    ]
};
export default template;