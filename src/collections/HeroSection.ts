import { CollectionConfig } from 'payload'

type prop = {
  name: 'venkat' | 'raman'
  type: '123' | '345'
}
const variable: prop = { name: 'raman', type: '123' }

export const HeroSection: CollectionConfig = {
  slug: 'hero-section',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title of the page',
    },
    {
      name: 'description1',
      type: 'textarea',
      label: 'Description 1',
    },
    {
      name: 'description2',
      type: 'textarea',
      label: 'Description 2',
    },
    {
      name: 'featuredImage',
      type: 'array',
      fields: [
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Enter Image Url',
        },
        {
          name: 'imageDescription',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'iconUrl',
          type: 'text',
          label: 'Enter Icon Url',
        },
        {
          name: 'linkGroup',
          type: 'group',
          fields: [
            {
              name: 'linkType',
              type: 'radio',
              options: [
                {
                  label: 'Internal Link',
                  value: 'internalLink',
                },
                {
                  label: 'External Link',
                  value: 'externalLink',
                },
              ],
              admin: { layout: 'horizontal' },
              defaultValue: 'internalLink',
            },
            {
              name: 'linkUrl',
              type: 'text',
              label: 'Link',
            },
          ],
        },
      ],
    },
    // image
    // icon
    // description
    // link - external or internal
  ],
}
