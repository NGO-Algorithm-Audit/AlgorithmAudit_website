/**
 * @type {import('tinacms').Collection}
 */
import building_blocks from "../shared/page/building_blocks";

export default {
    name: "about_vacancies",
    label: "About (vacancies)",
    path: "content/",
    match: {
        include: '**/about/vacancies',
    },
    fields: building_blocks,
};