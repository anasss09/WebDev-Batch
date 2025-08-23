import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			
			{/* <NavLink to='/admin/add-restaurant' >Add Reataurants</NavLink> */}

			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
					{/* <a class="navbar-brand">Navbar</a> */}
                    <NavLink to="/admin/restaurants" className="navbar-brand">Reataurants List</NavLink>
                    <NavLink to="/admin/add-restaurant" className="navbar-brand">Add Reataurants</NavLink>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
