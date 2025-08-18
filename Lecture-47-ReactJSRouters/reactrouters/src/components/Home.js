import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const ClickHandle = () => {
		navigate("/courses");
	};

	return (
		<>
			<div>Home</div>
			<button onClick={ClickHandle}>Courses</button>
		</>
	);
};

export default Home;
