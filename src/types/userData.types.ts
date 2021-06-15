import {Dispatch} from "react"

export type User={
    id:string;
    name:string;
    email:string;
    role:string
}

export type SetResponse ={
    response:User[];
    loading:boolean;
    message:string;
}

export type ResponseActionType = 
|{
    type:"ON_LOADING";
    payload:{response:User[]}
}
|{
    type:"ON_SEARCH"
    payload:{response:User[]}
}
|{
    type:"RESET"
    payload:{response:User[]}
}

export type UserContextType = {
    state: SetResponse;
    dispatch: Dispatch<ResponseActionType>;
  };
  
export type UserProviderProp = {
children: JSX.Element;
};