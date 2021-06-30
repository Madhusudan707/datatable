import { useUserData } from "../contexts";
import { useDataTable } from "../hooks";

export const useSearch = () => {
  const { state, dispatch } = useUserData();
  const { setActivePage, activePage, pagination } = useDataTable();

  const search = async (search_string: string) => {
    if (search_string) {
      const lowerSearch = search_string.toLowerCase();

      const data = state.users.filter(function (user) {
        return Object.values(user).some((val) =>
          String(val).toLowerCase().includes(lowerSearch)
        );
      });

      dispatch({ type: "ON_SEARCH", payload: { response:data } });
      setActivePage(1);
      pagination(activePage);
    }else{
      dispatch({ type: "ON_LOADING", payload: { response:state.users } });
    }
  };

  return { search };
};
