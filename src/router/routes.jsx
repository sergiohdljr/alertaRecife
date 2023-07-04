import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedPage, HomePage, Login, PerfilPage, Register } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export const RoutesApp = () => {
  const UsuarioAuth = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={UsuarioAuth ? <HomePage /> : <Login />} />
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
          element={UsuarioAuth ? <PerfilPage /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};
