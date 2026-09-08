import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',

  admin: {
    useAsTitle: 'name',
    group: 'Commerce',
  },

  access: {
    read: () => true,

    create: ({ req: { user } }) => {
      return user?.role === 'admin'
    },

    update: ({ req: { user } }) => {
      return user?.role === 'admin'
    },

    delete: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
  name: 'featured',
  type: 'checkbox',
  label: 'Featured Product',
  defaultValue: false,
  admin: {
    description: 'Enable this to mark the product as featured',
    components: {
      Field: '@/components/FeaturedToggle',
    },
  },

    },
  ],
}