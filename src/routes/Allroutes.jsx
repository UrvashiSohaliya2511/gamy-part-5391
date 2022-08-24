import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Mens from "../pages/Mens";
import Women from "../pages/Women";
import ProductListPage from "../pages/ProductListPage";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/women" element={<Women />} />
      <Route path="/:category" element={<ProductListPage />} />
    </Routes>
  );
};

export default Allroutes;
