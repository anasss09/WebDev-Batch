import React from "react";
import GrandFather from "./components/GrandFather";
import MoneyContext from "./context/MoneyContext";
import PropertyContext from "./context/PropertyContext";

const Main = () => {
	return (
		<div>
			<MoneyContext>
				<PropertyContext>
					<GrandFather />
				</PropertyContext>
			</MoneyContext>
		</div>
	);
};

export default Main;
