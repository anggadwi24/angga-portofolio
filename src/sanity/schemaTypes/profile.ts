import { Rule } from '@sanity/types';


export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: (Rule:Rule) => Rule.required()
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule :Rule) => Rule.required()
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
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        }
    ]
}
