import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',

  labels: {
    singular: 'CTA',
    plural: 'CTAs',
  },

  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
    },
  ],
}