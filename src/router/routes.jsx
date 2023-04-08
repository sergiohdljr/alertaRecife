import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { FeedPage } from "../pages/Feed";
import { PerfilPage } from "../pages/Perfil";
import { HomePage } from "../pages/Home";

export const RoutesApp = () => {
  const UsuarioAuth = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={UsuarioAuth ? <HomePage /> : <Login />} />
        <Route path="/home" element={UsuarioAuth ? <HomePage /> : <Login />} />
        <Route path="/feed" element={UsuarioAuth ? <FeedPage /> : <Login />} />
        <Route
          path="/perfil"
          element={UsuarioAuth ? <PerfilPage /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};
