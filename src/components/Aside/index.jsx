import { AsideStyle } from "./style";
import logo from "../../assets/logo.png";
import {
  House,
  DeviceMobile,
  User,
  Siren,
  SignOut,
  MoonStars,
  SunDim,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { UseSetModal, UseTema } from "../../store";

export const Aside = ({avatar, nome}) => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  const handleSignOutApp = () => {
    localStorage.clear();
    location.reload();
  };

  const mudarTema = UseTema((state) => state.mudarTema);
  const tema = UseTema((state) => state.tema.tema);

  const setModalOpen = UseSetModal((state) => state.openModal);
  const modalState = UseSetModal((state) => state.modal);

  return (
    <AsideStyle>
      <img src={logo} alt="Logo Alerta Recife" width={"auto"} height={"auto"} />

      <div>
        <Link to={"/perfil"} rel="Ir para o perfil">
          <img
            src={avatar}
            className="img-perfil"
            alt="foto de perfil do usuário"
          />
        </Link>
        <h3 className="h3-perfil">{nome} </h3>
      </div>
      <Link to={"/home"}>
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

      <button
        className="signOutButton"
        type="button"
        role={"button"}
        onClick={handleSignOutApp}
      >
        <SignOut size={26} />
        <h3>Sair</h3>
      </button>

      <button
        className="signOutButton"
        type="button"
        role={"button"}
        onClick={() => mudarTema()}
      >
        {tema === "claro" ? <MoonStars size={26} /> : <SunDim size={26} />}
      </button>

      <div className="button-div">
        <button
          type="button"
          role={"button"}
          onClick={() => {
            setModal();
          }}
        >
          Alertar
        </button>
        <button
          type="button"
          role={"button"}
          title="Criar alerta"
          className="btn-mobile"
          onClick={() => {
            setModalOpen();
          }}
        >
          <Siren size={24} />
        </button>
      </div>
    </AsideStyle>
  );
};
