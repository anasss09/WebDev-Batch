import "./App.css";
import { createContext } from "react";
import GrandFather from "./components/GrandFather";

// 1. Create a context here...
const moneyContext = createContext({
	img:'',
	price:''
});
// Provider and Consumer issi context ki help se create hote hai
// Provider: Data ko provide karta hai
// Consumer: Data ko consume karta hai, but consumer toh koi successor hoga
// Consumer create hoga inside the component that is going to use the Data, to
// us component ko createContext ki need padegi, thus we need to export `moneyContext`


let data = {
	img: "https://tse1.mm.bing.net/th/id/OIP.27_jRB5OzOy1t9FFfq_Q5QHaEK?pid=Api&P=0&h=180",
	price: "10 crores",
};

const propertyContext = createContext({
	property:'',
	area:''
});

const propertydata = {
	property: "MUMBAI",
	area: "10 square Feet",
};

function App() {
	return (
		<div className="App">
			<h1>This is APP </h1>
			 {/* Provider ke andar jis bhi component ko wrap krenge, uske children
    sabhi components ko access milega context ki value ka */}
			<moneyContext.Provider value={data}>
				<propertyContext.Provider value={propertydata}>
					<GrandFather />
				</propertyContext.Provider>
			</moneyContext.Provider>
		</div>
	);
}

export default App;
export { moneyContext, propertyContext };
