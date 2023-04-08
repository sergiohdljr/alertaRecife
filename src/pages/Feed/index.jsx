import { MagnifyingGlass } from "@phosphor-icons/react";
import { Aside } from "../../components/Aside";
import { FeedPageStyles } from "./style";
import { ReportarOcorrencia } from "../../components/ReportarOcorrencia";
import { useQuery } from "react-query";
import { api } from "../../service/axios";
import { Post } from "../../components/Post";

export const FeedPage = () => {
  const fetchFeed = api
    .get("/ocorrencias")
    .then((ocorrencias) => ocorrencias.data);

  const { data: ocorrencias } = useQuery(
    "ocorrencias",
    async () => await fetchFeed
  );

  return (
    <FeedPageStyles>
      <main>
        <Aside />
        <section>
          <header>
            <form action="">
              <MagnifyingGlass size={16} />
              <input type="text" placeholder="Digite sua localização" />
            </form>
          </header>
          <ReportarOcorrencia />
          {ocorrencias &&
            ocorrencias?.map((ocorrencia) => (
              <Post
                key={ocorrencia.id}
                descricaoDaOcorrencia={ocorrencia.descricaoDaOcorrencia}
                tipoOcorrencia={ocorrencia.tipoDaOcorrencia}
                latitude={ocorrencia.latitude}
                longitude={ocorrencia.longitude}
                email={ocorrencia.autor.email}
                displayName={ocorrencia.autor.nome}
                photoURL={ocorrencia.autor.photoURL}
              />
            ))}
        </section>
      </main>
    </FeedPageStyles>
  );
};
