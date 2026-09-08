import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'email',
    group: 'User Management',
  },

  auth: true,

  access: {
    // Anyone can register
    create: () => true,

    // Only authenticated users can read users
    read: ({ req: { user } }) => {
      return Boolean(user)
    },

    update: ({ req: { user } }) => {
      return Boolean(user)
    },

    delete: ({ req: { user } }) => {
      return Boolean(user)
    },
  },

  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'customer',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Customer',
          value: 'customer',
        },
      ],
    },
  ],
}