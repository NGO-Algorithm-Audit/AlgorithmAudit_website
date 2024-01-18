/**
 * @type {import('tinacms').Collection}
 */
import title from "../shared/page/title";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";
import background_color from "../shared/page/background_color";
export default {
    name: "page",
    label: "Pages",
    path: "content/",
    match: {
        include: '**/**',
    },
    fields: [
        title,
        subtitle,
        image,
        background_color,
        {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            templates: [
                {
                    name: 'bias_scan_info',
                    label: 'Bias Scan info',
                    match: {
                        start: '{{<',
                        end: '>}}',
                        name: 'bias_scan_info'
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
                },
                {
                    name: 'bias_scan_alert_case_study',
                    label: 'Bias Scan case study',
                    match: {
                        start: '{{<',
                        end: '>}}',
                        name: 'bias_scan_alert_case_study'
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
                },
                {
                    name: 'bias_scan_upload',
                    label: 'Bias Scan upload',
                    match: {
                        start: '{{<',
                        end: '>}}',
                        name: 'bias_scan_upload'
                    },
                    fields: [
                        {
                            name: 'title',
                            label: 'Title',
                            type: 'string',
                            description: '',
                            required: true,
                        },
                        {
                            type: "image",
                            name: "css",
                            label: "Bias Detection Tool css",
                            required: true,
                        },
                        {
                            type: "image",
                            name: "js",
                            label: "Bias Detection Tool js",
                            required: true,
                        }
                    ]
                },
                {
                    name: 'bias_scan_input_data',
                    label: 'Bias Scan input data',
                    match: {
                        start: '{{<',
                        end: '>}}',
                        name: 'bias_scan_input_data'
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
                },
                {
                    name: 'bias_scan_example_reports',
                    label: 'Bias Scan example reports',
                    match: {
                        start: '{{<',
                        end: '>}}',
                        name: 'bias_scan_example_reports'
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
                },
                {
                    name: 'bias_scan_faq',
                    label: 'Bias Scan FAQ',
                    match: {
                        start: '{{<',
                        end: '>}}',
                        name: 'bias_scan_faq'
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
                }
            ]
        }
    ],
    format: "md"
};