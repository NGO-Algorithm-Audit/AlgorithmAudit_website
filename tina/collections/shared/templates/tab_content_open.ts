import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'tab_content_open',
    label: 'Tab content open',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            type: "string",
            name: "icon",
            label: "Icon",
            description: "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
            required: false,
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            description: "h3 title within the tab at the top",
            required: false,
        },
        {
            type: "string",
            name: "id",
            label: "ID",
            description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
            required: true,
        },
        {
            name: 'do_not_use',
            label: 'Do not fill, this tag should have a following "Tab content close" in the content',
            type: 'string'
        }
    ]
};
export default template;