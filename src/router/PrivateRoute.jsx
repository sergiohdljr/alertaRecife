import { useContext } from "react";
import { Context } from "../context/authContext";
import { FeedPage, Login } from "../pages";

export const PrivateRoute = ({ children }) => {
  const { authenticated, loading } = useContext(Context);

  return authenticated ? children : <Login />;
};
