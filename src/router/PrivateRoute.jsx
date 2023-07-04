import { useContext } from "react";
import { Context } from "../context/authContext";
import { Login } from "../pages";

export const PrivateRoute = ({ children }) => {
  const { authenticated } = useContext(Context);

  return !authenticated ? <Login /> : children;
};
