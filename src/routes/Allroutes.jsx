import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Mens from "../pages/Mens";
import Women from "../pages/Women";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Women" element={<Women />} />
    </Routes>
  );
};

export default Allroutes;
