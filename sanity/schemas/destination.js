import { defineField, defineType } from "sanity";

export default defineType({
  name: "destination",
  title: "Destinations",
  type: "document",
  groups: [
    {
      name: "qkeys",
      title: "QUICK KEY FIGURES",
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Destination Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Destination Description",
      type: "text",
    }),

    defineField({
      name: "capitalCity",
      title: "Capital City",
      type: "string",
      group: "qkeys",
    }),
    defineField({
      name: "population",
      title: "Population",
      type: "string",
      group: "qkeys",
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      group: "qkeys",
    }),
    defineField({
      name: "fees",
      title: "Tuition Fees",
      type: "string",
      group: "qkeys",
    }),
    defineField({
      name: "intakes",
      title: "Intakes",
      type: "string",
      group: "qkeys",
    }),

    defineField({
      name: "popularCities",
      title: "Popular Cities",
      type: "string",
      group: "qkeys",
    }),
    defineField({
      name: "studentPopulation",
      title: "International Student Population",
      type: "string",
      group: "qkeys",
    }),

    defineField({
      name: "thumbnail",
      title: "Destination Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "placeholder",
      title: "Destination Placeholder",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "thumbnail",
    },
  },
});
