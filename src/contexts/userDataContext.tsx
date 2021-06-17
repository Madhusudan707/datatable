import React from 'react'
import { createContext, useContext, useReducer } from "react";
import { userDataReducer, initialState } from "../reducers/userData.reducer";
import { UserContextType,UserProviderProp } from "../types/userData.types";

export const UserDataContext = createContext<UserContextType>({} as UserContextType);

export const UserDataProvider = ({ children }: UserProviderProp): JSX.Element => {
  const [state, dispatch] = useReducer(userDataReducer, initialState);

  return (
    <UserDataContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
