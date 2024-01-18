/**
 * @type {import('tinacms').TinaField[]}
 */
import title from "../shared/page/title";
import subtitle from "../shared/page/subtitle";
import image from "../shared/page/image";
import background_color from "../shared/page/background_color";
export default [
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
];