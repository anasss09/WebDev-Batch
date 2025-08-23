import axios from "axios";
import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
const BASE_URL = "http://localhost:4444";

function fetchRetaurants() {
	return new Promise(async (resolve, reject) => {
		try {
			let { data } = await axios.get(BASE_URL + "/admin/restaurants");
			resolve(data);
		} catch (err) {
			reject(err);
		}
	});
}

const RestaurantList = () => {
	const [restaurant, setrestaurant] = useState([]);

	useEffect(() => {
		fetchRetaurants()
			.then((data) => {
				setrestaurant(data.restaurants);
				// console.log(data.restaurants);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<h1>RestaurantList</h1>
			{/* {restaurant.map((item) => {
				return (
					<div key={item._id}>
						<div>{item.name}</div>
						<img src={item.image} alt={item.name} />
						<div>{item.location}</div>
					</div>
				);
			})} */}

			<div className="d-flex flex-wrap gap-5">
				{restaurant.map((item) => {
					return <RestaurantCard key={item._id} restaurant={item} />;
				})}
			</div>
		</>
	);
};

export default RestaurantList;
