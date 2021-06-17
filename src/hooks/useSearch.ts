import { useUserData } from "../contexts";
import axios from "axios";
export const useSearch = () => {
  const { state, dispatch } = useUserData();

  const search = async (search_string:string) => {
    if (search_string) {
      console.log(search_string);
      const lowerSearch = search_string.toLowerCase();
      const data =state.response.filter(function (user) {
        return Object.values(user).some((val) =>
          String(val).toLowerCase().includes(lowerSearch)
        );
      });
      dispatch({ type: "ON_LOADING", payload: { response: data } });
    } else {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        dispatch({
          type: "ON_LOADING",
          payload: { response: response.data },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { search };
};
