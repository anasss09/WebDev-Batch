import React from "react";
import RestaurantList from "../Restaurant/RestaurantList";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import AddReataurant from "./AddReataurant";

const Admin = () => {
  return <div>
      <Navbar />

      <Routes>
          <Route path='/admin/restaurants' element={ <RestaurantList />} />
          <Route path='/admin/add-restaurant' element={ <AddReataurant />} />
      </Routes>
  </div>;
};

export default Admin;
