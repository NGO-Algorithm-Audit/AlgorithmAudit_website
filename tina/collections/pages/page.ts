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
        include: '**/*',
    },
    fields: [
        title,
        subtitle,
        image,
        background_color,
        {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
        }
    ],
    format: "md"
};