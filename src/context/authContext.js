import { createContext } from "react";

const InitialState = {
  authenficated: false,
  userData: null,
};

function authReducer(state = InitialState, action) {
  switch (action.type) {
    case "login": {
      return {
        authenficated: true,
        userData: action.payload,
      };
    }
    case "logout": {
      return {
        authenficated: false,
        userData: null,
      };
    }
    default:
      return state;
  }
}
const AuthContext = createContext();
export { AuthContext, authReducer,InitialState };
