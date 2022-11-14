export default {
	name: 'restaurant',
	title: 'Restaurant',
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Restaurant Name',
			validation: (Rule) => Rule.required()
		},

		{
			name: 'short_description',
			type: 'string',
			title: 'Short Description',
			validation: (Rule) => Rule.required()
		},

		{
			name: 'image',
			type: 'image',
			title: 'Image',
			validation: (Rule) => Rule.required()
		},

		{
			name: 'lat',
			type: 'number',
			title: 'Latitude of the restaurant'
		},

		{
			name: 'long',
			type: 'number',
			title: 'Longitude of the restaurant'
		},

		{
			name: 'address',
			type: 'string',
			title: 'Restaurant address',
			validation: (Rule) => Rule.required()
		},

		{
			name: 'rating',
			type: 'number',
			title: 'Rate the restaurant from (1-5 Stars)',
			validation: (Rule) => Rule.required().min(1).max(5).error('Please rate between 1-5 Stars')
		},

		{
			name: 'type',
			title: 'Category',
			validation: (Rule) => Rule.required(),
			type: 'reference',
			to: [ { type: 'category' } ]
		},

		{
			name: 'dishes',
			type: 'array',
			title: 'Dishes',
			of: [ { type: 'reference', to: [ { type: 'dish' } ] } ]
		}
	]
};
