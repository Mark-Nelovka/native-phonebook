import { createContext, useContext, useReducer } from "react";

const initialState = { token: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
