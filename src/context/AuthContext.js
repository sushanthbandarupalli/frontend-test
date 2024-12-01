import { createContext, useEffect, useReducer } from "react";
import Api from "../axiosConfig";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("token");
      toast.success("Logout success.");
      return { ...state, user: null };
    default:
      return state;
  }
};

const initialState = { user: null };

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  async function getCurrentUserDDetails(token) {
    try {
      const response = await Api.post("/auth/get-current-user", {
        token: token,
      });
      if (response.data.success) {
        dispatch({ type: "LOGIN", payload: response.data.userData });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUserDDetails(token);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
