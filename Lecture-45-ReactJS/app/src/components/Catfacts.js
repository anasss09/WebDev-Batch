import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Catfacts.module.css";


const Catfacts = () => {
	const [facts, setFacts] = useState([]);

	useEffect(() => {
        let url = "https://dev.to/api/articles";
		const localFacts = localStorage.getItem("facts");

		if (localFacts) {
			setFacts(JSON.parse(localFacts));
		} else {
			axios
				.get(url)
				.then(({ data }) => {
					console.log(data);
					setFacts(data);
                    localStorage.setItem('facts', JSON.stringify(data))
				})
				.catch((err) => console.log(err));
		}
	}, []);
	return (
		<div>
			<ul>
				{facts.map((f) => {
					return <li className={styles['catFacts']} key={f.id}>{f.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default Catfacts;
