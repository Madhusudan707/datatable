import { ResponseActionType, SetResponse } from "../types/userData.types"
export const initialState: SetResponse = {
  response: [],
  loading: true,
  message: "",
  users: []
};

export const userDataReducer = (state: SetResponse, action: ResponseActionType): SetResponse => {

  switch (action.type) {
    case "ON_LOADING":
      return {
        loading: false,
        response: action.payload.response,
        message: "Data fetch successfully",
        users: action.payload.response,
      };
    case "ON_SEARCH":
      return { ...state, response: action.payload.response }

    default:
      return state;
  }
};
