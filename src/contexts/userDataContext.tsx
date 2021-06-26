import {useState} from 'react'
import { createContext, useContext, useReducer } from "react";
import { userDataReducer, initialState } from "../reducers/userData.reducer";
import { UserContextType,UserProviderProp } from "../types/userData.types";

export const UserDataContext = createContext<UserContextType>({} as UserContextType);

export const UserDataProvider = ({ children }: UserProviderProp): JSX.Element => {
  const [state, dispatch] = useReducer(userDataReducer, initialState);
  const [activePage, setActivePage] = useState(1);
  const [mapStart, setMapStart] = useState(0);
  const [mapEnd, setMapEnd] = useState(10);

  return (
    <UserDataContext.Provider
      value={{ state, dispatch,activePage,setActivePage,mapStart,setMapStart,mapEnd,setMapEnd }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
