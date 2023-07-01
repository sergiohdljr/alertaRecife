import { createContext, useEffect, useState } from "react";
import { api } from "../service/axios";

const Context = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = async (email, senha) => {
    const {
      data: { token },
    } = await api.post("/auth", {
      email: email,
      senha: senha,
    });

    localStorage.setItem("token", JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
    setAuthenticated(true);
  };

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
