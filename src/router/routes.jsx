import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { FeedPage } from "../pages/Feed";
import { PerfilPage } from "../pages/Perfil"

export const RoutesApp = () => {
  const UsuarioAuth = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={UsuarioAuth ? <FeedPage /> : <Login />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  );
};
