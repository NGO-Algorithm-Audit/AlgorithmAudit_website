import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index"
let template : RichTextTemplate = {
    name: 'tab_header',
    label: 'Tab header',
    match: {
        start: '{{<',
        end: '>}}'
    },
    fields: [
        {
            type: "string",
            name: "width",
            label: "Width",
            description: "Width per tab button, 12 is full width. Mobile is always full width (12)",
            required: true,
        },
        {
            type: "string",
            name: "default_tab",
            label: "Tab to open by default",
            description: "Should match one of the ids below.",
            required: true
        },
        {
            type: "string",
            name: "tab1_id",
            label: "Tab 1 id",
            description: "id, which should correspond with the tabs",
        },
        {
            type: "string",
            name: "tab1_title",
            label: "Tab 1 title",
        },
        {
            type: "string",
            name: "tab2_id",
            label: "Tab 2 id",
            description: "id, which should correspond with the tabs",
        },
        {
            type: "string",
            name: "tab2_title",
            label: "Tab 2 title",
        },
        {
            type: "string",
            name: "tab3_id",
            label: "Tab 3 id",
            description: "id, which should correspond with the tabs",
        },
        {
            type: "string",
            name: "tab3_title",
            label: "Tab 3 title",
        },
        {
            type: "string",
            name: "tab4_id",
            label: "Tab 4 id",
            description: "id, which should correspond with the tabs",
        },
        {
            type: "string",
            name: "tab4_title",
            label: "Tab 4 title",
        },
        {
            type: "string",
            name: "tab5_id",
            label: "Tab 5 id",
            description: "id, which should correspond with the tabs",
        },
        {
            type: "string",
            name: "tab5_title",
            label: "Tab 5 title",
        },
        {
            type: "string",
            name: "tab6_id",
            label: "Tab 6 id",
            description: "id, which should correspond with the tabs",
        },
        {
            type: "string",
            name: "tab6_title",
            label: "Tab 6 title",
        }
    ]
};
export default template;