import { AsideStyle } from "./style";
import logo from "../../assets/logo.png";
import {
  House,
  DeviceMobile,
  User,
  DotsThreeCircle,
  Siren,
  Users,
  SignOut,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Aside = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  const handleSignOutApp = () => {
    localStorage.clear()
    location.reload()
  }

  return (
    <AsideStyle>
      <img src={logo} alt="Logo Alerta Recife" width={"auto"} height={"auto"} />

      <div>
        <Link to={"/perfil"} rel="Ir para o perfil">
          <img
            src={Usuario.photoURL || <Users size={16} /> }
            className="img-perfil"
            alt="foto de perfil do usuário"
          />
        </Link>
        <h3 className="h3-perfil">{Usuario.displayName} </h3>
      </div>

      <Link to={"#"}>
        <House size={24} />
        <h3> Inicio</h3>
      </Link>

      <Link to={"/feed"} rel="Ir para o feed">
        <DeviceMobile size={24} />
        <h3> Feed </h3>
      </Link>

      <Link to={"/perfil"} rel="Ir para o perfil do usuário">
        <User size={24} />
        <h3> Pefil</h3>
      </Link>

      <button className="signOutButton" type="button" role={"button"} onClick={handleSignOutApp} >
        <SignOut size={24} />
        <h3>Sair</h3>
      </button>

      <div className="button-div">
        <button type="button" role={"button"} >Alertar</button>
        <button type="button" role={"button"} title="Criar alerta" className="btn-mobile">
          <Siren size={24} />
        </button>
      </div>
    </AsideStyle>
  );
};
