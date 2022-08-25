import React from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useContext } from "react";
const Cart = () => {
  const { cartDetail } = useContext(AppContext);
  console.log(cartDetail);
  return <div>cart</div>;
};

export default Cart;
