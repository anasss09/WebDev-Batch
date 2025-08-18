import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navItems">
			<NavLink className="navLinks" to="/home">Home</NavLink>
			<NavLink className="navLinks" to="/about">About</NavLink>
			<NavLink className="navLinks" to="/contect">Contect</NavLink>
		</div>
	);
};

export default Navbar;
