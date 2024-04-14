import React from "react";
import { createContext, useState, useContext, useReducer } from "react";

const UserContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function ContextProvider({ children }) {
  const [role, setRole] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const valueToShare = {
    role,
    setRole,
    accessToken,
    setAccessToken,
    test: "test",
    direction: "ltr",
    darkMode: false,
    layout: "dashboard",
    sidenavColor: "info",
    transparentSidenav: false,
    whiteSidenav: false,
  };
  const [controller, dispatch] = useReducer(reducer, valueToShare);

  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  );
}
function useController() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

export { ContextProvider ,useController};
export default UserContext;
