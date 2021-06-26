import { useEffect, useState} from "react";
import { useUserData } from "../contexts";

export const useDataTable = () => {
  const { state, dispatch,activePage, setActivePage,mapStart,setMapStart,mapEnd,setMapEnd } = useUserData();
  const [isRemove, setIsRemove] = useState(false);

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState<[]|any>([]);
  const [rowBg, setRowBg] = useState("");
  const [isRowString, setIsRowString] = useState(false);
  const userDataLength = state.response.length;

  const pageCount = Math.ceil(userDataLength / 10);

  useEffect(() => {
    if (isChecked.length > 1) {
      setIsRemove(true);
    } else {
      setIsRemove(false);
    }
  }, [state.response, isChecked]);

  const pagination = (pagination_string:any |string | number) => {
   
    if (pagination_string === "next" && mapEnd < userDataLength) {
      setMapStart(mapStart + 10);
      setMapEnd(mapEnd + 10);

      if (activePage < pageCount) {
        setActivePage(activePage + 1);
      }
    } else if (pagination_string === "prev" && mapStart > 0) {
      setMapStart(mapStart - 10);
      setMapEnd(mapEnd - 10);

      if (activePage > 1) {
        setActivePage(activePage - 1);
      }
    } else if (pagination_string === "first") {
      setMapStart(0);
      setMapEnd(10);
      setActivePage(1);
    } else if (pagination_string === "last") {
      setMapStart(pageCount * 10 - 10);
      setMapEnd(pageCount * 10);
      setActivePage(pageCount);
    } 
    else if (pagination_string >= 1 && pagination_string <= pageCount) {
      console.log("searching",pagination_string)
      setMapStart((pagination_string - 1) * 10);
      setMapEnd(pagination_string * 10);
      setActivePage(pagination_string);
      console.log(mapStart,mapEnd)
    }
  };

  const handleSelectAll = () => {
    setRowBg("bg-gray-100 border-2");
    setIsRemove(!isRemove);
    setIsAllChecked(!isAllChecked);
    setIsChecked(
      state.response.slice(mapStart, mapEnd).map((user) => user.id)
    );
    if (isAllChecked) {
      setIsChecked([]);
    }
    setIsRowString(false);
  };

  const handleClick = (e:any, id:any, action = "checkbox", name:any, email:any, role:any)=> {
    setIsRowString(true);
    setRowBg("bg-gray-100 border-2");
    switch (action) {
      case "checkbox":
        {
          setIsRowString(false); //for checkbox
          const { id, checked } = e.target;
          setIsChecked([...isChecked, id]);
          console.log(id, checked);
          if (!checked) {
            setIsChecked(isChecked.filter((item:any) => item !== id));
          }
        }
        break;

      case "edit":
        if (isChecked.includes(id)) {
          setIsChecked(isChecked.filter((item:any) => item !== id));
        } else {
          setIsChecked([...isChecked, id]);
        }
        break;

      case "save":
        {
          const userIndex = state.response.findIndex(
            (user) => user.id === id
          );

          state.response[userIndex].name = name;
          state.response[userIndex].email = email;
          state.response[userIndex].role = role;

          if (isChecked.includes(id)) {
            setIsChecked(isChecked.filter((item:any) => item !== id));
          }
        }
        break;

      case "cancel":
        if (isChecked.includes(id)) {
          setIsChecked(isChecked.filter((item:any) => item !== id));
        }

        break;

      case "delete":
        {
          setIsRowString(false);
          const newUserData = state.response.filter(
            (user) => user.id !== id
          );
          dispatch({
            type: "ON_LOADING",
            payload: { response: newUserData },
          });
          setIsChecked([]);
        }
        break;

      default:
        console.log("I am Default Case");
    }
  };

  const deleteAll = () => {
    const newUserData = state.response.filter((user) => {
      return !isChecked.includes(user.id);
    });
    dispatch({
      type: "ON_LOADING",
      payload: { response: newUserData },
    });
    setIsChecked([]);
  };
  return {
    pageCount,
    pagination,
    mapStart,
    mapEnd,
    setMapStart,
    setMapEnd,
    activePage,
    setActivePage,
    isRemove,
    deleteAll,
    handleSelectAll,
    handleClick,
    isAllChecked,
    isChecked,
    rowBg,
    isRowString,
  };
};
