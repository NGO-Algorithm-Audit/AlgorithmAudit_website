import { RichTextTemplate } from "@tinacms/schema-tools/dist/types/index";
let pdf_frame: RichTextTemplate = {
  name: "promo_bar",
  label: "Promo bar",
  match: {
    start: "{{<",
    end: ">}}",
  },
  fields: [
    {
      name: "index",
      label: "Index of the promobar entry",
      type: "string",
      description:
        "0-based index of the promobar entry of the fields on the page (Promo bar)",
      required: true,
    },
  ],
};
export default pdf_frame;
