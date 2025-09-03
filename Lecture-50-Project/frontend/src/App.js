import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import Cart from "./pages/Cart";
import History from "./pages/History";
import Logout from "./components/Logout";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";

const App = () => {
	return (
		<div className="App">
			<Routes >
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />}/>
				<Route path="/signup" element={<Signup />}/>
				<Route path="/app" element={<Home />} />
				<Route path="/app/:restaurant_id" element={<RestaurantPage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/history" element={<History />} />
				<Route path="/logout" element={<Logout />}/>
				<Route path="/profile" element={<Profile />} />
			</Routes>
			
		</div>
	);
};

export default App;
