import React, { useLayoutEffect, useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
	ChevronDownIcon,
	UserIcon,
	AdjustmentsVerticalIcon,
	MagnifyingGlassIcon
} from 'react-native-heroicons/outline';

import { Categories, FeaturedRow } from '../components';

import sanityClient from '../sanity';

const HomeScreen = () => {
	const [ featuredCategories, setFeaturedCategories ] = useState([]);

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
	}, []);

	useEffect(() => {
		sanityClient
			.fetch(
				`
		*[_type == "featured"]{
			...,
			restaurants[]->{
				...,
				dishes[]->
			}
		}`
			)
			.then((data) => {
				setFeaturedCategories(data);
			});
	}, []);

	return (
		<SafeAreaView className="bg-white pt-5">
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					className="h-7 w-7 bg-gray-300 p-4 rounded-full"
					source={{ uri: 'https:links.papareact.com/wru' }}
				/>

				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>

					<Text className="font-bold text-xl text-black">
						Current Location
						<ChevronDownIcon color="#00CCBB" size={20} />
					</Text>
				</View>

				<UserIcon color="#00CCBB" size={35} />
			</View>

			{/* Search bar */}
			<View className="flex-row items-center pb-2 space-x-2 mx-4">
				<View className="flex-row space-x-2  bg-gray-200 p-3 h-10 flex-1">
					<MagnifyingGlassIcon color="gray" size={20} />
					<TextInput placeholder="Restaurants and Cuisines" keyboardType="default" value="" />
				</View>

				<AdjustmentsVerticalIcon color="#00CCBB" />
			</View>

			{/* Body */}
			<ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 150 }}>
				{/* Categories */}
				<Categories />

				{/* Featured Rows */}
				{featuredCategories?.map((category) => (
					<FeaturedRow
						key={category._id}
						id={category._id}
						title={category.name}
						description={category.short_description}
						// featuredCategory="featured"
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
