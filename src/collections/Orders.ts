import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',

  admin: {
    useAsTitle: 'customerName',
  },

  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'quantity',
      type: 'number',
      required: true,
      min: 1,
    },
  ],

  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create') {
          console.log(
            `Order confirmation: New order created for ${doc.customerName}`,
          )
        }
      },
    ],
  },
}