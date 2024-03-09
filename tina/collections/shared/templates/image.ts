import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let pdf_frame : RichTextTemplate = {
    name: 'image',
    label: 'Image',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            name: 'id',
            label: 'ID',
            type: 'string',
        },
        {
            name: 'width_desktop',
            label: 'Width desktop',
            type: 'string',
            description: '1 to 12, 12 is max width'
        },
        {
            name: 'width_mobile',
            label: 'Width mobile',
            type: 'string',
            description: '1 to 12, 12 is max width'
        },
        {
            name: 'image1',
            label: 'Image1',
            type: 'image',
            required: true,
        },
        {
            name: 'alt1',
            label: 'Alt text1',
            type: 'string',
        },
        {
            name: 'caption1',
            label: 'Caption1',
            type: 'string',
        },
        {
            name: 'link1',
            label: 'Link1',
            type: 'string',
        },
        {
            name: 'image2',
            label: 'Image2',
            type: 'image',
            required: false,
        },
        {
            name: 'alt2',
            label: 'Alt text2',
            type: 'string',
        },
        {
            name: 'caption2',
            label: 'Caption2',
            type: 'string',
        },
        {
            name: 'link2',
            label: 'Link2',
            type: 'string',
        },
        {
            name: 'image3',
            label: 'Image3',
            type: 'image',
            required: false,
        },
        {
            name: 'alt3',
            label: 'Alt text3',
            type: 'string',
        },
        {
            name: 'caption3',
            label: 'Caption3',
            type: 'string',
        },
        {
            name: 'link3',
            label: 'Link3',
            type: 'string',
        }
    ]
};
export default pdf_frame;