import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'accordion_item_open',
    label: 'Accordion item open',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            description: "h3 title which opens the item",
            required: true,
        },
        {
            type: "string",
            name: "id",
            label: "ID",
            description: "ID to refer to this block as ?item={ID}",
            required: false,
        },
        {
            type: "string",
            name: "background_color",
            label: "Background color",
            description: "Background color of foldable pane, incl. #, default #eef2f6",
            required: true,
        },
        {
            type: "string",
            name: "date",
            label: "Date",
            description: "dd-MM-yyyy (i.e. 13-06-2024)"
        },
        {
            type: "string",
            name: "tag1",
            label: "Tag 1",
        },
        {
            type: "string",
            name: "tag2",
            label: "Tag 2",
        },
        {
            type: "string",
            name: "tag3",
            label: "Tag 3",
        },
        {
            name: 'do_not_use',
            label: 'Do not fill, this tag should have a following "Accordion item close" in the content',
            type: 'string'
        }
    ]
};
export default template;