import { createContext, useEffect, useState } from "react";
import { api } from "../service/axios";
import { history } from "../router/routes";
import { redirect } from "react-router-dom";

const Context = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (email, senha) => {
    const {
      data: { token, id },
    } = await api.post("/auth", {
      email: email,
      senha: senha,
    });

    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userId", JSON.stringify(id));
    api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
    setAuthenticated(true);
    history.push("/feed");
    location.reload();
  };

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <Context.Provider value={{ authenticated, loading, handleLogin }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
