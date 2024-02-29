/**
 * @type {import('tinacms').TinaField}
 */
import { TinaField } from "tinacms";

let title: TinaField = {
    type: "string",
    name: "title",
    label: "Title",
    required: true,
};
export default title;