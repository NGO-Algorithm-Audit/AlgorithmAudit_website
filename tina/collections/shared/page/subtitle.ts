/**
 * @type {import('tinacms').TinaField}
 */
import { TinaField } from "tinacms";
let subtitle : TinaField = {
    type: "rich-text",
    name: "subtitle",
    label: "Subtitle",
    required: true,
};
export default subtitle;