import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'mainhero',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Main Hero',
          value: 'mainhero',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },

    {
      name: 'heading',
      label: 'Main Heading',
      type: 'text',
      required: true,
      admin: {
        description: 'Displayed as the <h1> in the hero',
        condition: (_: unknown, siblingData: { type?: string }) =>
          siblingData?.type === 'mainhero' || siblingData?.type === 'highImpact',
      },
    },
    {
      name: 'subheading',
      label: 'Subheading',
      type: 'text',
      admin: {
        description: 'Displayed as the <h1> in the hero',
        condition: (_: unknown, siblingData: { type?: string }) =>
          siblingData?.type === 'mainhero' || siblingData?.type === 'highImpact',
      },
    },
    {
      name: 'para',
      label: 'Paragraph',
      type: 'text',
      admin: {
        description: 'Displayed as the <h1> in the hero',
        condition: (_: unknown, siblingData: { type?: string }) =>
          siblingData?.type === 'mainhero' || siblingData?.type === 'highImpact',
      },
    },

    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
      admin: {
        description: 'Displayed as the <h1> in the hero',
        condition: (_: unknown, siblingData: { type?: string }) =>
          siblingData?.type === 'highImpact',
      },
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'mainhero'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
