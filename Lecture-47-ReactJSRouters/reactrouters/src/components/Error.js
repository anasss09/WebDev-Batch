import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();

	const OnClickHandler = () => {
		navigate(-1);
	};
	return (
		<div>
			<h1>Invalid Link</h1>
			<button onClick={OnClickHandler}>Back</button>
		</div>
	);
};

export default Error;
