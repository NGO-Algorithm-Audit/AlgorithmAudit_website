/**
 * @type {import('tinacms').Collection}
 */

import overview_block from "../shared/page/overview_block";
import search from "../shared/page/search";

export default {
  name: "home",
  label: "Home",
  path: "content/",
  match: {
    include: "*/_index",
  },
  fields: [
    search,
    // Banner
    {
      type: "object",
      name: "Banner",
      label: "Banner",
      required: true,
      fields: [
        {
          name: "title_line1",
          type: "string",
          label: "title line 1",
          required: true,
        },
        {
          name: "title_line2_before",
          type: "string",
          label: "title line 2 before",
          required: true,
        },
        {
          name: "title_line2_underline",
          type: "string",
          label: "title line 2 underline",
          required: true,
        },
        {
          name: "title_line2_after",
          type: "string",
          label: "title line 2 after",
          required: true,
        },
        {
          name: "title_mobile_line1",
          type: "string",
          label: "title mobile line 1",
          required: true,
        },
        {
          name: "title_mobile_line2",
          type: "string",
          label: "title mobile line 2",
        },
        {
          name: "title_mobile_line3_underline",
          type: "string",
          label: "title mobile line 3 underline",
          required: true,
        },
        {
          name: "title_mobile_line3_after",
          type: "string",
          label: "title mobile line 3 after",
          required: true,
        },
        {
          label: "phonetica",
          type: "string",
          name: "phonetica",
          required: true,
        },
        {
          label: "type",
          type: "string",
          name: "type",
          required: true,
        },
        {
          label: "description1",
          type: "string",
          name: "description1",
          required: true,
        },
        {
          label: "description2",
          type: "string",
          name: "description2",
          required: true,
        },
        {
          label: "description3",
          type: "string",
          name: "description3",
          required: true,
        },
        {
          label: "Slogan",
          type: "object",
          name: "slogan",
          fields: [
            {
              label: "Title",
              type: "string",
              name: "title",
              required: true,
            },
            {
              label: "Labels",
              type: "object",
              name: "labels",
              required: true,
              list: true,
              description: "The slider only works for two elements",
              fields: [
                {
                  label: "Label",
                  type: "string",
                  name: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "About",
      label: "About",
      fields: [
        {
          type: "rich-text",
          name: "content",
          label: "Content",
          required: true,
        },
      ],
    },
    overview_block,
    // Activity feed
    {
      type: "object",
      name: "Activity_Feed",
      label: "Featured and recent items",
      fields: [
        {
          label: "Featured Title",
          type: "string",
          name: "featured_title",
          isTitle: true,
          required: true,
        },
        {
          label: "Featured Items",
          type: "object",
          name: "featured_activities",
          list: true,
          fields: [
            {
              label: "Title",
              type: "string",
              name: "title",
              isTitle: true,
              required: true,
            },
            {
              label: "Intro",
              type: "rich-text",
              name: "intro",
              required: true,
            },
            {
              label: "Link",
              type: "string",
              name: "link",
            },
            {
              label: "Image",
              type: "image",
              name: "image",
            },
            {
              label: "Date",
              type: "string",
              name: "date",
              description: "dd-MM-yyyy (i.e. 13-06-2024)",
            },
            {
              label: "Type",
              type: "string",
              name: "type",
              description: "tag",
            },
          ],
        },
        {
          label: "View more featured button text",
          type: "string",
          name: "featured_button_text",
        },
        {
          label: "View more featured link",
          type: "string",
          name: "featured_button_link",
        },
        {
          label: "Items Title",
          type: "string",
          name: "items_title",
          isTitle: true,
          required: true,
        },
        {
          label: "Items",
          type: "object",
          name: "activities",
          list: true,
          fields: [
            {
              label: "Title",
              type: "string",
              name: "title",
              isTitle: true,
              required: true,
            },
            {
              label: "Link",
              type: "string",
              name: "link",
            },
            {
              label: "Image",
              type: "image",
              name: "image",
            },
            {
              label: "Date",
              type: "string",
              name: "date",
              description: "dd-MM-yyyy (i.e. 13-06-2024)",
            },
            {
              label: "Type",
              type: "string",
              name: "type",
              description: "tag",
            },
          ],
        },
        {
          label: "View more items button text",
          type: "string",
          name: "items_button_text",
        },
        {
          label: "View more items link",
          type: "string",
          name: "items_button_link",
        },
      ],
    },
    // Areas of expertise
    {
      type: "object",
      name: "Areas_of_AI_expertise",
      label: "Areas of Expertise",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "boolean",
          name: "enable",
          label: "Enable",
          required: true,
        },
        {
          type: "number",
          name: "width_m",
          label: "Width medium screens (12 is the maximum)",
          description: "Divide the number of articles per row by 12",
          required: true,
        },
        {
          type: "number",
          name: "width_s",
          label: "Width small screens (12 is the maximum)",
          description: "Divide the number of articles per row by 12",
          required: true,
        },
        {
          type: "object",
          name: "feature_item",
          label: "Featured Items",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "icon",
              label: "Icon",
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
        {
          type: "string",
          name: "button_text",
          label: "Button text",
        },
        {
          label: "Link",
          type: "string",
          name: "button_link",
        },
      ],
      defaultItem: () => {
        return {
          width_m: 4,
          width_s: 2,
        };
      },
    },
    // Distinctive in
    {
      type: "object",
      name: "Distinctive_in",
      label: "Distinctive in",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "boolean",
          name: "enable",
          label: "Enable",
          required: true,
        },
        {
          type: "number",
          name: "width_m",
          label: "Width medium screens (12 is the maximum)",
          description: "Divide the number of articles per row by 12",
          required: true,
        },
        {
          type: "number",
          name: "width_s",
          label: "Width small screens (12 is the maximum)",
          description: "Divide the number of articles per row by 12",
          required: true,
        },
        {
          type: "object",
          name: "feature_item",
          label: "Featured Items",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "icon",
              label: "Icon",
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
        {
          type: "string",
          name: "button_text",
          label: "Button text",
        },
        {
          label: "Link",
          type: "string",
          name: "button_link",
        },
      ],
      defaultItem: () => {
        return {
          width_m: 4,
          width_s: 2,
        };
      },
    },
    // Supported by
    {
      type: "object",
      name: "Supported_by",
      label: "Supported by",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "object",
          name: "funders",
          label: "Funders",
          list: true,
          fields: [
            {
              label: "Image",
              type: "image",
              name: "image",
            },
            {
              label: "Link",
              type: "string",
              name: "link",
            },
            {
              label: "Alt-text",
              type: "string",
              name: "alt_text",
            },
          ],
        },
      ],
    },
    // Video
    {
      type: "object",
      name: "Title_video",
      label: "Title of video",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "video_mp4",
          label: "Video mp4",
        },
        {
          type: "image",
          name: "video_ogg",
          label: "Video ogg",
        },
      ],
    },
  ],
};
