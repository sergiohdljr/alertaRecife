import { MagnifyingGlass } from "@phosphor-icons/react";
import {
  Aside,
  ModalOcorrencia,
  ReportarOcorrencia,
  Post,
} from "../../components/";
import { FeedPageStyles } from "./style";
import { useQuery } from "react-query";
import { api } from "../../service/axios";
import { UseSetModal } from "../../store";
import { useContext, useState } from "react";
import { Context } from "../../context/authContext";
import { getUser } from "../Perfil";

export const FeedPage = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));

  const getFeedOcorrencias = async () => {
    const { data } = await api.get("/ocorrencias");
    return data;
  };

  const { data: usuario } = useQuery("[userQuery]", () => getUser(userId));
  const { data: Ocorrencias } = useQuery("[ocorrencias]", getFeedOcorrencias);

  const modalState = UseSetModal((state) => state.modal);

  return (
    <FeedPageStyles>
      {modalState ? <ModalOcorrencia /> : null}
      <main>
        <Aside avatar={usuario?.fotoPerfil} nome={usuario?.nome} />
        <section>
          <header>
            <form action="">
              <MagnifyingGlass size={16} />
              <input
                type="text"
                placeholder="Digite sua localização"
                onChange={(e) => setBusca(e.target.value)}
              />
            </form>
          </header>
          <ReportarOcorrencia
            nome={usuario?.nome}
            email={usuario?.email}
            foto={usuario?.fotoPerfil}
          />
          {Ocorrencias?.map((ocorrencia) => {
            return (
              <Post
                key={ocorrencia.id}
                displayName={ocorrencia.autor.nome}
                email={ocorrencia.autor.email}
                descricaoDaOcorrencia={ocorrencia.descricaoDaOcorrencia}
                enderecoOcorrencia={ocorrencia.enderecoOcorrencia}
                tipoOcorrencia={ocorrencia.tipoDaOcorrencia}
                photoURL={ocorrencia.autor.fotoPerfil}
              />
            );
          })}
        </section>
      </main>
    </FeedPageStyles>
  );
};
