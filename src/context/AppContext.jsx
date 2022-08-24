import React from "react";
import { createContext, useReducer } from "react";
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

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
