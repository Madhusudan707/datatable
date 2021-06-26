import React, { Dispatch } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type SetResponse = {
  response: User[];
  loading: boolean;
  message: string;
};

export type ResponseActionType = {
  type: "ON_LOADING";
  payload: { response: User[] };
};
export type UserContextType = {
  state: SetResponse;
  dispatch: Dispatch<ResponseActionType>;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  mapStart:number;
  setMapStart:React.Dispatch<React.SetStateAction<number>>
  mapEnd:number;
  setMapEnd:React.Dispatch<React.SetStateAction<number>>
};

export type UserProviderProp = {
  children: JSX.Element;
};
