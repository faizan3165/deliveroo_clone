export default {
	name: 'featured',
	title: 'Featured Menu Categories',
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Featured Category Name',
			validation: (Rule) => Rule.required()
		},

		{
			name: 'short_description',
			type: 'string',
			title: 'Short Description of Dish',
			validation: (Rule) => Rule.required()
		},

		{
			name: 'restaurants',
			type: 'array',
			title: 'Restaurants',
			of: [ { type: 'reference', to: [ { type: 'restaurant' } ] } ]
		}
	]
};
