import { CollectionConfig } from 'payload'

export const Footer: CollectionConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'column',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'footerLinks',
          type: 'array',
          label: 'Links',
          fields: [
            {
              name: 'linkLabel',
              type: 'text',
              label: 'Label',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Links',
            },
            {
              name: 'linkType',
              type: 'radio',
              options: [
                {
                  label: 'Internal Link',
                  value: 'internal',
                },

                {
                  label: 'External Link',
                  value: 'external',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
