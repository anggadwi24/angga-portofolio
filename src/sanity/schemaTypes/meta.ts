import { Rule } from '@sanity/types';


export default {
    name: 'meta',
    title: 'Meta',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule:Rule) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule :Rule) => Rule.required()
        },
        {
            name: 'keyword',
            title: 'Keyword',
            type: 'text',
            validation: (Rule:Rule) => Rule.required()
        },
        {
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        }
    ]
}
