import { ResponseActionType, SetResponse } from "../types/userData.types"
export const initialState: SetResponse = {
  response: [],
  loading: true,
  message: ""
};

export const userDataReducer = (state: SetResponse, action: ResponseActionType): SetResponse => {
  switch (action.type) {
    case "ON_LOADING":
      return {
        loading: false,
        response: action.payload.response,
        message: "Data fetch successfully"
      };
    default:
      return state;
  }
};
