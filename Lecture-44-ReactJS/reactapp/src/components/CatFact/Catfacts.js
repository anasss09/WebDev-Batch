import React, { useEffect, useState } from "react";
import Fact from './Fact'

const Catfacts = () => {
	const [facts, setFacts] = useState([]);
	useEffect(() => {
		fetch("https://dev.to/api/articles")
			.then((res) => res.json())
			.then((data) => {
				setFacts(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<ul>
				{facts.map(f => 
					<Fact key={f.id} fact={f.title} />
				)}
			</ul>
		</>
	);
};

export default Catfacts;
