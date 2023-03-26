import { InputField, LoginPage } from "./style";
import Logo from "../../assets/logo.png";
import { GoogleChromeLogo } from "@phosphor-icons/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    user ? localStorage.setItem("user", JSON.stringify(user)) : null;
  }, [user]);

  const handleGoogleSignIn = () => {
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider)
      .then((result) => {
        setUser(result.user);
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  const userLocal = localStorage.getItem("user");

  return (
    <LoginPage>
      <img src={Logo} alt="" />
      <form>
        <Link onClick={handleGoogleSignIn}>
          <GoogleChromeLogo size={24} />
          Entrar com o Google
        </Link>
      </form>
    </LoginPage>
  );
};
