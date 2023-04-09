import { ArrowLeft } from "@phosphor-icons/react";
import { Aside } from "../../components/Aside";
import { PerfilPageStyles } from "./style";
import { MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { api } from "../../service/axios";
import { useQuery } from "react-query";
import { Post } from "../../components/Post";
import { UseSetModal } from "../../store";
import { ModalOcorrencia } from "../../components/Modal";

export const PerfilPage = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  const fetchFeed = api
    .get(`/ocorrencias/${Usuario.email}`)
    .then((ocorrencias) => ocorrencias.data);

  const { data: ocorrenciasUsuario } = useQuery(
    ["ocorrenciasUsuario"],
    async () => await fetchFeed
  );

  const dadosUsuario = ocorrenciasUsuario;
  const OcorrenciasDoUsuario =
    ocorrenciasUsuario?.Ocorrencias.slice(0).reverse();
  const modalState = UseSetModal((state) => state.modal);

  return (
    <PerfilPageStyles>
      {modalState ? <ModalOcorrencia /> : null}
      <main>
        <Aside />
        <div className="content">
          <div className="container">
            <nav>
              <Link to={"/feed"} rel="Voltar para o feed" type="button">
                <ArrowLeft size={24} />
              </Link>
              <div className="user-ocorrencias-number">
                <h3>{Usuario.displayName}</h3>
                <p>
                  ({dadosUsuario?._count?.Ocorrencias} ocorrencias postadas)
                </p>
              </div>
            </nav>
            <div className="hero">
              <figure>
                <img src={Usuario.photoURL} alt="foto de perfil do usuário" />
              </figure>
              <button> Editar Perfil</button>
            </div>
            <div className="name-user-info">
              <h1>{Usuario.displayName}</h1>
              <p>@{Usuario.email.slice(0, Usuario.email.indexOf("@"))}</p>
            </div>
            <div className="location-createdAt">
              <div>
                <MapPin size={16} color={"#5B7083"} />
                <p>Local</p>
              </div>
            </div>
            <h2 className="Ocorrencias">Ocorrencias</h2>
          </div>
          <section className="ocorrencias">
            {OcorrenciasDoUsuario &&
              OcorrenciasDoUsuario.map((ocorrencia) => (
                <Post
                  key={ocorrencia.id}
                  descricaoDaOcorrencia={ocorrencia.descricaoDaOcorrencia}
                  fotoOcorrencia={ocorrencia.fotoOcorrencia}
                  displayName={dadosUsuario.nome}
                  email={dadosUsuario.email}
                  photoURL={dadosUsuario.fotoPerfil}
                  latitude={ocorrencia.latitude}
                  longitude={ocorrencia.longitude}
                  tipoOcorrencia={ocorrencia.tipoDaOcorrencia}
                />
              ))}
          </section>
        </div>
      </main>
    </PerfilPageStyles>
  );
};
