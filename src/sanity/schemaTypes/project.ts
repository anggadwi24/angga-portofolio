import { Rule } from '@sanity/types';


export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: (Rule : Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'link',
        title: 'Project Link',
        type: 'url'
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime'
      }
    ]
  }
  