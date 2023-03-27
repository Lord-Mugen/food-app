import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

const initialState = {
  isSidebarOpen: false,
};

const SideBarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <SideBarContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarContext = () => {
  return useContext(SideBarContext);
};
