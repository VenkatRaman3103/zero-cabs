import { CollectionConfig } from 'payload'

export const ExternalUser: CollectionConfig = {
  slug: 'external-user',
  fields: [
    {
      name: 'userName',
      type: 'text',
      label: 'User Name',
    },
    {
      name: 'password',
      type: 'text',
      label: 'Enter the Password',
    },
  ],
}
