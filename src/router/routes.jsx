import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  FeedPage, HomePage,Login,PerfilPage, Register } from '../pages'

export const RoutesApp = () => {
  const UsuarioAuth = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
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
