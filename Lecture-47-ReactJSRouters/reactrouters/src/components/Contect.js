import React from "react";
import { useParams } from "react-router-dom";

const Contect = () => {
	const params = useParams();
  const name = params.name
	return (
		<div>
			<h1>Contact:{name}</h1>
		</div>
	);
};

export default Contect;
