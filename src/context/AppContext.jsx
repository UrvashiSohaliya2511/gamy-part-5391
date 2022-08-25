import React from "react";
import { createContext, useReducer, useState } from "react";
import { Appreducer } from "../reduces/Appreducer";
export const AppContext = createContext();

const initialState = {
  data: [],
  isAuth: false,
  isloading: false,
  isError: false,
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);
  const [cartDetail, setcartDetail] = useState([]);

  return (
    <>
      <AppContext.Provider
        value={{ state, dispatch, cartDetail, setcartDetail }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
