import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
    group: 'Content Management',
  },

  // Enable Drafts and Versioning
  versions: {
    drafts: true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    // Keep your existing fields and blocks here
  ],
}