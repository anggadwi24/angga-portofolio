import { Rule } from '@sanity/types';


export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
        },
        {
            name: 'currentJob',
            title: 'Current Job',
            type: 'boolean',
        },
        {
            name: 'jobDesk',
            title: 'jobDesk',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        }
    ]
}
