import React from "react";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";
import Styles from './AllRestaurant.module.css'

const AllRestaurant = () => {
	const restaurantsData = useSelector(state => state.restaurantReducer);

	return (
		<div className={Styles['restaurants-list']}>
			{restaurantsData.map((restaurant, index) => (
				<Restaurant key={index} restaurant={restaurant} />
			))}
		</div>
	);
};

export default AllRestaurant;
