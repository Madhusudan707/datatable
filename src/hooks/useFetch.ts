import { useState, useEffect } from "react";
import { useUserData } from "../contexts";
import axios from "axios";

export const useFetch = () => {
  const [userData, setUserData] = useState([]);
  const { dispatch, state } = useUserData();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
          console.log(response.data)
        if (response.status === 200) {
          dispatch({
            type: "ON_LOADING",
            payload: { response:response.data },
          });
          setUserData(response.data);

          setIsLoading(false);
        }
      } catch (err) {
        console.log(`${err}: Unable to load user data`);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return { state, userData, isLoading };
};
