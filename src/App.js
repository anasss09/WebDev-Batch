import React from "react";
import LuckySeven from "./components/LuckySeven";

const tasks = ['Cricket', 'Batball', 'Chess', 'Batminton']

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			<div>Learning React</div>
			{/* <LuckySeven /> */}
			{tasks.map((task) => {
				return <div>{task}</div>
			})}

		</div>
	);
}

export default App;
