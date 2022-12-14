import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Mens from "../pages/Mens";
import Women from "../pages/Women";
import WomenListPage from "../pages/WomenList.jsx";
import MenListPage from "../pages/MensList.jsx";
import Cart from "../pages/cart.jsx";
import Signin from "../pages/Signin";
import PrivateRoute from "./PrivateRoute.jsx";
import Payment from "../pages/payment";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/women" element={<Women />} />
      <Route path="/women/Clothing" element={<WomenListPage />} />
      <Route path="/men/Clothing" element={<MenListPage />} />
      <Route path="*" element={<h1>404 Page not found</h1>} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart/payment" element={<Payment />} />
    </Routes>
  );
};

export default Allroutes;
