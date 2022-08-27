import React from "react";
import { createContext, useReducer, useState } from "react";
import { Appreducer } from "../reduces/Appreducer";
export const AppContext = createContext();

const initialState = {
  isloading: false,
  isError: false,
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);
  const [cartDetail, setcartDetail] = useState([]);
  const [savedItems, setsavedItems] = useState([]);
  const [isAuth, setisAuth] = useState(false);
  return (
    <>
      <AppContext.Provider
        value={{
          state,
          dispatch,
          cartDetail,
          setcartDetail,
          setsavedItems,
          savedItems,
          isAuth,
          setisAuth,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
