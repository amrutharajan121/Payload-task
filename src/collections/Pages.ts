import type { CollectionConfig } from 'payload'

import { Hero } from '../blocks/Hero'
import { CTA } from '../blocks/CTA'
import { Text } from '../blocks/Text'

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
    group: 'Content Management',
  },

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
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Hero,
        CTA,
        Text,
      ],
    },
  ],
}