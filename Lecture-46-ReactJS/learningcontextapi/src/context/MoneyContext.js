import React, { createContext } from "react";

const moneyContext = createContext({
	img: "",
	price: "",
});

let data = {
	img: "https://tse1.mm.bing.net/th/id/OIP.27_jRB5OzOy1t9FFfq_Q5QHaEK?pid=Api&P=0&h=180",
	price: "10 crores",
};

const MoneyContext = ({ children }) => {
	return (
		<moneyContext.Provider value={data}>{children}</moneyContext.Provider>
	);
};

export default MoneyContext;
export { moneyContext };
