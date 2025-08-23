import React from "react";

const RestaurantCard = ({ restaurant }) => {
	return (
		<>
			<div className="card mt-3" style={{ width: "18rem" }}>
				<img src={restaurant.image} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{restaurant.name}</h5>
					<p className="card-text">{restaurant.location}</p>
					{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
				</div>
			</div>
		</>
	);
};

export default RestaurantCard;
