import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedPage, HomePage, Login, PerfilPage, Register } from "../pages";
import { createBrowserHistory } from "history";
import { Context } from "../context/authContext";
import { useContext } from "react";

export const history = createBrowserHistory();
export const RoutesApp = () => {
  const PrivateRoute = ({ children }) => {
    const { authenticated } = useContext(Context);

    return authenticated ? children : <Login />;
  };

  const Root = () => {
    const { authenticated } = useContext(Context);
    return authenticated ? <FeedPage /> : <Login />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <FeedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <PerfilPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
