import { defineType, defineField, defineArrayMember } from "sanity";
import { SettingsIcon } from "lucide-react";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  description: "Global settings and configuration for your creator page",
  icon: SettingsIcon,
  preview: {
    select: {
      title: "siteTitle",
    },
    prepare({ title }) {
      return {
        title,
        media: SettingsIcon,
      };
    },

  },
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      description: "The name of your creator page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description:
        "A brief description of your creator page and what you offer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerLogo",
      title: "Header Logo",
      type: "image",
      description: "The logo in the header of your creator page",

      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for accessibility and SEO",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainHeroImage",
      title: "Main Hero Image",
      type: "image",
      description: "The main banner image displayed at the top of your page",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for accessibility and SEO",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "General logo for the site (can be used in footer or elsewhere)",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for accessibility and SEO",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socials",
      title: "Social Media Links",
      type: "array",
      description:
        "Add your social media profiles for visitors to connect with you",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              description:
                "The social media platform (e.g., Twitter, Instagram, Youtube)",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "YouTube", value: "youtube" },
                  { title: "Other", value: "other" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              description: "The full URL to your profile on this platform",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "callToActionText",
      title: "Call To Action Text",
      type: "string",
    }),
  ],
});

// 56:14
