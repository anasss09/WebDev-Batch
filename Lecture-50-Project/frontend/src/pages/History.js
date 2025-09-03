import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { data } from "react-router-dom";

const History = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		async function getHistory() {
			try {
				const { data } = await axios.get(
					"restaurant/order/get-order-history",
					{}
				);
				setOrders(data.order);
			} catch (error) {
				console.log(error.response.data.message);
			}
		}

		getHistory();
	}, []);

	return (
		<>
			<div>
				<h2>Order History</h2>
				{orders.length === 0 && <p>No orders yet!</p>}

				{orders.map((order) => (
					<div
						key={order._id}
						style={{
							border: "1px solid #ccc",
							margin: "10px",
							padding: "10px",
						}}
					>
						<div>
							<strong>Date:</strong>{" "}
							{new Date(order.date).toLocaleString("en-IN")}
						</div>
						<div>
							<strong>Total Price:</strong> ₹{order.totalPrice}
						</div>
						<div>
							<strong>Items:</strong>
							<ul>
								{order.items.map((item) => (
									<li key={item._id}>
										{item.name} x {item.quantity}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default History;
