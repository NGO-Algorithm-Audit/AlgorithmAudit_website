/**
 * @type {import('tinacms').TinaField[]}
 */
import { TinaField } from "tinacms";
import about_aa from "../templates/about_aa";
import accordion_item_close from "../templates/accordion_item_close";
import accordion_item_open from "../templates/accordion_item_open";
import accordions_area_close from "../templates/accordions_area_close";
import accordions_area_open from "../templates/accordions_area_open";
import ai_policy_observatory from "../templates/ai_policy_observatory";
import button from "../templates/button";
import container_close from "../templates/container_close";
import container_open from "../templates/container_open";
import dynamic_form_engine from "../templates/dynamic_form_engine";
import embed_pdf from "../templates/embed_pdf";
import form1 from "../templates/form1";
import form2 from "../templates/form2";
import iframe from "../templates/iframe";
import template_image from "../templates/image";
import overview_block_template from "../templates/overview_block_template";
import pdf_frame from "../templates/pdf_frame";
import promo_bar from "../templates/promo_bar";
import reports_preview from "../templates/reports_preview";
import tab_content_close from "../templates/tab_content_close";
import tab_content_open from "../templates/tab_content_open";
import tab_header from "../templates/tab_header";
import team from "../templates/team";
import team1 from "../templates/team1";
import team2 from "../templates/team2";
import team3 from "../templates/team3";
import tooltip from "../templates/tooltip";
import webapp from "../templates/webapp";
import image from "./image";
import overview_block from "./overview_block";
import quick_navigation from "./quick_navigation";
import subtitle from "./subtitle";
import title from "./title";

const building_blocks: TinaField[] = [
  title,
  subtitle,
  image,
  quick_navigation,
  {
    type: "rich-text",
    name: "body",
    label: "Content",
    isBody: true,
    templates: [
      about_aa,
      accordions_area_open,
      accordions_area_close,
      accordion_item_open,
      accordion_item_close,
      ai_policy_observatory,
      button,
      container_open,
      container_close,
      dynamic_form_engine,
      embed_pdf,
      form1,
      form2,
      template_image,
      iframe,
      overview_block_template,
      pdf_frame,
      promo_bar,
      reports_preview,
      tab_content_open,
      tab_content_close,
      tab_header,
      team,
      team1,
      team2,
      team3,
      tooltip,
      webapp,
    ],
  },
  {
    type: "object",
    name: "about_AA",
    label: "About Algorithm Audit",
    fields: [
      {
        type: "string",
        name: "title",
        label: "Title",
        required: true,
      },
      {
        type: "string",
        name: "content",
        label: "Content",
        required: true,
      },
      {
        type: "string",
        name: "icon",
        label: "Icon",
        description:
          "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        required: false,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "object",
        name: "items",
        label: "Items",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.subtitle };
          },
        },
        fields: [
          {
            type: "string",
            name: "subtitle",
            label: "Name",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "dynamic_form_engine",
    label: "Dynamic form engine",
    list: true,
    ui: {
      itemProps: (item) => {
        return { label: item?.title };
      },
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "id",
        label: "ID",
        type: "string",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: true,
      },
      {
        name: "icon",
        label: "Icon",
        type: "string",
        description:
          "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        required: false,
      },
      {
        name: "content",
        label: "Content",
        type: "rich-text",
        description: "",
        required: false,
      },
      {
        type: "object",
        name: "section",
        label: "Section",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.title };
          },
        },
        fields: [
          // {
          //   type: "string",
          //   name: "title",
          //   label: "Title",
          //   required: true,
          // },
          {
            type: "object",
            name: "questions",
            label: "Questions",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "identifier",
                label: "Identifier",
                required: true,
                description:
                  "unique identifier needed to make the options unselect other options are selected",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "rich-text",
                name: "content",
                label: "Content",
                required: true,
                templates: [tooltip],
              },
              {
                type: "string",
                name: "tooltip",
                label: "Tooltip",
                required: false,
              },
              {
                type: "boolean",
                name: "use_card_style",
                label: "Use card style (only for radio buttons)",
              },
              {
                type: "object",
                name: "options",
                label: "Options (only for radio buttons and checkboxes)",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "id",
                    label: "ID (only for checkboxes)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "value",
                    label: "Value",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                    templates: [tooltip],
                  },
                ],
              },

              {
                name: "file_upload_text",
                label: "File upload text (only for file upload)",
                type: "string",
                description: "Text displayed in file upload field",
                required: false,
              },
              {
                type: "boolean",
                name: "required",
                label: "required",
              },
              {
                type: "string",
                name: "file_type",
                label: "File type (e.g, .docx, .pdf)",
              },
              {
                type: "string",
                name: "type",
                label: "Type",
                required: true,
                options: [
                  {
                    value: "text",
                    label: "Text box",
                  },
                  {
                    value: "radio",
                    label: "Radio box",
                  },
                  {
                    value: "checkbox",
                    label: "Check box",
                  },
                  {
                    value: "textarea",
                    label: "Text area",
                  },
                  {
                    value: "file",
                    label: "File",
                  },
                  {
                    value: "email",
                    label: "Email",
                  },
                ],
              },
              {
                type: "string",
                name: "placeholder",
                label: "Placeholder",
              },
              {
                type: "object",
                name: "visible_when_or",
                label: "Visible when (OR)",
                list: true,
                fields: [
                  {
                    type: "object",
                    name: "visible_when_and",
                    label: "Visible when (AND)",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return {
                          label: `${item?.identifier}${
                            item?.compareSign ?? "=="
                          }${item?.value}`,
                        };
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "identifier",
                        label: "Identifier",
                        description:
                          "Use the identifier of the Question for radio buttons, and use the ID of the option for checkboxes",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "value",
                        label: "Value",
                        required: true,
                        description:
                          "The value of the option, or * when all values are allowed",
                      },
                      {
                        type: "string",
                        name: "compareSign",
                        label: "Should be",
                        options: [
                          {
                            value: "==",
                            label: "Equal to",
                          },
                          {
                            value: "!=",
                            label: "Unequal to",
                          },
                        ],
                        description:
                          "Allows equal or unequal comparison, empty or default is equal",
                      },
                    ],
                  },
                ],
              },
              {
                type: "boolean",
                name: "isOutput",
                label: "Is output",
                description:
                  "Can be used to hide the save button, the button will show when an output field is shown.",
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "complete_form_options",
        label: "Complete form options",
        required: true,
        fields: [
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
            options: [
              {
                value: "print",
                label: "Print",
              },
              {
                value: "submit",
                label: "Submit",
              },
              {
                value: "redirect",
                label: "Redirect",
              },
            ],
          },
          {
            name: "button_text",
            label: "Button text",
            type: "string",
            description: "",
            required: true,
          },
          {
            name: "button_text_csv",
            label: "Button text for CSV download",
            type: "string",
          },
          {
            name: "backend_link",
            label: "Back end link (Required if you want to submit the data)",
            type: "string",
            description: "",
            required: false,
          },
          {
            name: "file_name",
            label: "File name (Required if you want to print the data)",
            type: "string",
            required: false,
          },
          {
            name: "onlyShowWithOutput",
            label: "Only show when an output field is shown",
            type: "boolean",
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "form1",
    label: "Form #1",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "content",
        label: "Content",
        type: "string",
        description: "grey text under title",
        required: false,
      },
      {
        name: "button_text",
        label: "Button text",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "backend_link",
        label: "Back end link",
        type: "string",
        description: "",
        required: true,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "object",
        name: "questions",
        label: "Questions",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.id };
          },
        },
        fields: [
          {
            type: "rich-text",
            name: "label",
            label: "Label",
            required: true,
          },
          {
            type: "string",
            name: "id",
            label: "Id",
            required: true,
            description:
              "Unique identifier (as can be seen when recieving the submitted form)",
          },
          {
            type: "object",
            name: "values",
            label: "Values (only for checkboxes)",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "value",
                label: "Value",
                required: true,
              },
              {
                type: "string",
                name: "id",
                label: "ID",
                required: true,
              },
            ],
          },
          {
            name: "file_upload_text",
            label: "File upload text (only for file upload)",
            type: "string",
            description: "Text displayed in file upload field",
            required: false,
          },
          {
            type: "boolean",
            name: "required",
            label: "required",
          },
          {
            type: "string",
            name: "file_type",
            label: "File type (e.g, .docx, .pdf)",
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
            options: [
              {
                value: "text",
                label: "Text box",
              },
              {
                value: "checkbox",
                label: "Check box",
              },
              {
                value: "textarea",
                label: "Text area",
              },
              {
                value: "file",
                label: "File",
              },
              {
                value: "email",
                label: "Email",
              },
            ],
          },
          {
            type: "string",
            name: "placeholder",
            label: "Placeholder",
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "form2",
    label: "Form #2",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "content",
        label: "Content",
        type: "string",
        description: "grey text under title",
        required: false,
      },
      {
        name: "button_text",
        label: "Button text",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "backend_link",
        label: "Back end link",
        type: "string",
        description: "",
        required: true,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "object",
        name: "questions",
        label: "Questions",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.label };
          },
        },
        fields: [
          {
            type: "string",
            name: "label",
            label: "Label",
            required: true,
          },
          {
            type: "string",
            name: "id",
            label: "Id",
            required: true,
            description:
              "Unique identifier (as can be seen when recieving the submitted form)",
          },
          {
            type: "string",
            name: "value",
            label: "Value (only for checkboxes)",
            required: false,
          },
          {
            name: "file_upload_text",
            label: "File upload text (only for file upload)",
            type: "string",
            description: "Text displayed in file upload field",
            required: false,
          },
          {
            type: "boolean",
            name: "required",
            label: "required",
          },
          {
            type: "string",
            name: "file_type",
            label: "File type (e.g, .docx, .pdf)",
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
            options: [
              {
                value: "text",
                label: "Text box",
              },
              {
                value: "checkbox",
                label: "Check box",
              },
              {
                value: "textarea",
                label: "Text area",
              },
              {
                value: "file",
                label: "File",
              },
              {
                value: "email",
                label: "Email",
              },
            ],
          },
          {
            type: "string",
            name: "placeholder",
            label: "Placeholder",
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "reports_preview",
    label: "Reports preview",
    fields: [
      {
        type: "string",
        name: "title",
        label: "Title",
        required: true,
      },
      {
        type: "string",
        name: "icon",
        label: "Icon",
        description:
          "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        required: false,
      },
      {
        type: "string",
        name: "button_text",
        label: "Button text",
        required: false,
      },
      {
        type: "string",
        name: "button_link",
        label: "Button link",
        required: false,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "object",
        name: "feature_item",
        label: "Featured Items",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.name };
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            label: "Link",
            type: "string",
            name: "link",
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "team",
    label: "Team",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "content",
        label: "Content",
        type: "string",
        description: "",
        required: false,
      },
      {
        type: "string",
        name: "icon",
        label: "Icon",
        description:
          "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        required: false,
      },
      {
        type: "string",
        name: "button_text",
        label: "Button text",
        required: true,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "string",
        name: "button_link",
        label: "Button link",
        required: true,
      },
      {
        type: "object",
        name: "team_members",
        label: "Team members",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.name };
          },
        },
        fields: [
          {
            type: "image",
            name: "image",
            label: "image",
            required: true,
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
            isBody: false,
          },
        ],
      },
    ],
  },
  overview_block,
  {
    type: "object",
    name: "team1",
    label: "Team #1",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "content",
        label: "Content",
        type: "string",
        description: "",
        required: false,
      },
      {
        type: "string",
        name: "icon",
        label: "Icon",
        description:
          "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        required: false,
      },
      {
        type: "string",
        name: "button_text",
        label: "Button text",
        required: true,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "string",
        name: "button_link",
        label: "Button link",
        required: true,
      },
      {
        type: "object",
        name: "team_members",
        label: "Team members",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.name };
          },
        },
        fields: [
          {
            type: "image",
            name: "image",
            label: "image",
            required: true,
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
            isBody: false,
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "team2",
    label: "Team #2",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "content",
        label: "Content",
        type: "string",
        description: "",
        required: false,
      },
      {
        type: "string",
        name: "icon",
        label: "Icon",
        description:
          "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        required: false,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "object",
        name: "team_members",
        label: "Team members",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.name };
          },
        },
        fields: [
          {
            type: "image",
            name: "image",
            label: "image",
            required: true,
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
            isBody: false,
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "team3",
    label: "Team #3",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
        description: "",
        required: true,
      },
      {
        name: "content",
        label: "Content",
        type: "string",
        description: "",
        required: false,
      },
      {
        type: "string",
        name: "icon",
        label: "Icon",
        description:
          "From https://fontawesome.com/v5/search?m=free (e.g. fa fa-list for https://fontawesome.com/icons/list?f=classic&s=solid)",
        required: false,
      },
      {
        type: "string",
        name: "id",
        label: "ID",
        description: "ID to refer to this block as algorithmaudit.eu/.../#ID",
        required: false,
      },
      {
        type: "object",
        name: "team_members",
        label: "Team members",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.name };
          },
        },
        fields: [
          {
            type: "image",
            name: "image",
            label: "image",
            required: true,
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
            isBody: false,
          },
        ],
      },
    ],
  },
];

export default building_blocks;
