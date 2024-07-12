/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";
import { TinaField } from "tinacms";

let specific_fields : TinaField[] = [
    {
        name: "type",
        type: "string",
        label: "Type",
        description: "Needed to load the specific css",
        required: true,
        options: [
            {
                value: "registration",
                label: "registration"
            }
        ]
    }
];
export default {
    name: "registration",
    label: "Events (registration)",
    path: "content/",
    match: {
        include: '**/events/registration',
    },
    fields: building_blocks.concat(specific_fields),
};