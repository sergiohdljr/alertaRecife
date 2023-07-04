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

export const FeedPage = () => {
  const fetchFeed = api
    .get("/ocorrencias")
    .then((ocorrencias) => ocorrencias.data);

  const { data: ocorrencias } = useQuery(
    ["ocorrencias"],
    async () => await fetchFeed
  );

  const { authenticated, handleLogin, userId } = useContext(Context);

  const modalState = UseSetModal((state) => state.modal);
  const [busca, setBusca] = useState("");

  return (
    <FeedPageStyles>
      {modalState ? <ModalOcorrencia /> : null}
      <main>
        <Aside />
        <section>
          <header>
            <form action="">
              {console.log(userId)}
              <MagnifyingGlass size={16} />
              <input
                type="text"
                placeholder="Digite sua localização"
                onChange={(e) => setBusca(e.target.value)}
              />
            </form>
          </header>
          <ReportarOcorrencia />
          {ocorrencias &&
            ocorrencias
              .slice(0)
              .reverse()
              .filter(({ enderecoOcorrencia }) => {
                const valorBusca = busca.toLowerCase();
                const filtro = enderecoOcorrencia?.toLowerCase();
                return filtro.includes(valorBusca);
              })
              ?.map((ocorrencia) => (
                <Post
                  key={ocorrencia.id}
                  descricaoDaOcorrencia={ocorrencia.descricaoDaOcorrencia}
                  tipoOcorrencia={ocorrencia.tipoDaOcorrencia}
                  enderecoOcorrencia={ocorrencia.enderecoOcorrencia}
                  email={ocorrencia.autor.email}
                  displayName={ocorrencia.autor.nome}
                  photoURL={ocorrencia.autor.fotoPerfil}
                />
              ))}
        </section>
      </main>
    </FeedPageStyles>
  );
};
