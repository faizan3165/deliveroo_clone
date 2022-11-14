import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';

import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
	const [ categories, setCategories ] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`
		*[_type == "category"]
		`
			)
			.then((data) => {
				setCategories(data);
			});
	}, []);

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10
			}}
		>
			{/* Category Card */}
			{categories.map((category) => (
				<CategoryCard key={category._id} imgUrl={urlFor(category.image)} title={category.name} />
			))}
		</ScrollView>
	);
};

export default Categories;
