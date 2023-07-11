import { ArrowLeft } from "@phosphor-icons/react";
import { Aside, Post, ModalOcorrencia } from "../../components/";
import { PerfilPageStyles } from "./style";
import { MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { api } from "../../service/axios";
import { useQuery } from "react-query";
import { UseSetModal } from "../../store";

export const getUser = async (id) => {
  const { data } = await api.get(`/user/${id}`);
  return data;
};

export const PerfilPage = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));

  const { data: usuario } = useQuery(
    "[userQuery]",
    async () => await getUser(userId)
  );

  const modalState = UseSetModal((state) => state.modal);

  return (
    <PerfilPageStyles>
      {modalState ? <ModalOcorrencia /> : null}
      <main>
        <Aside avatar={usuario?.fotoPerfil} nome={usuario?.nome} />
        <div className="content">
          <div className="container">
            <nav>
              <Link to={"/feed"} rel="Voltar para o feed" type="button">
                <ArrowLeft size={24} />
              </Link>
              <div className="user-ocorrencias-number">
                <h3>{usuario?.nome}</h3>
                <p>{usuario?.Ocorrencias.length} ocorrencias postadas</p>
              </div>
            </nav>
            <div className="hero">
              <figure>
                <img
                  src={usuario?.fotoPerfil}
                  alt="foto de perfil do usuário"
                  loading="lazy"
                />
              </figure>
              <button>Editar Perfil</button>
            </div>
            <div className="name-user-info">
              <h1>{usuario?.nome}</h1>
              <p>@{usuario?.email.slice(0, usuario?.email.indexOf("@"))}</p>
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
            {usuario?.Ocorrencias &&
              usuario.Ocorrencias.map((ocorrencia) => {
                return (
                  <Post
                    key={ocorrencia.id}
                    displayName={usuario?.nome}
                    email={usuario?.email}
                    descricaoDaOcorrencia={ocorrencia.descricaoDaOcorrencia}
                    enderecoOcorrencia={ocorrencia.enderecoOcorrencia}
                    tipoOcorrencia={ocorrencia.tipoDaOcorrencia}
                    photoURL={usuario?.fotoPerfil}
                  />
                );
              })}
          </section>
        </div>
      </main>
    </PerfilPageStyles>
  );
};
