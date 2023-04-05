import { MagnifyingGlass } from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { FeedPageStyles } from "./style";
import { Post } from "../../components/post";
import { ReportarOcorrencia } from "../../components/reportarOcorrencia";
import { useQuery } from "react-query";
import { api } from "../../service/axios";

export const FeedPage = () => {
  const fetchFeed = api.get("/ocorrencias").then(ocorrencias=>ocorrencias.data)
    
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
          {/* {ocorrencias && console.log(ocorrencias)} */}
          {ocorrencias &&
            ocorrencias?.map((ocorrencia) => (
              <Post
                key={ocorrencia.id}
                descricaoDaOcorrencia={ocorrencia.descricaoDaOcorrencia}
                fotoOcorrencia={ocorrencia.fotoOcorrencia}
                displayName={ocorrencia.autor.nome}
                email={ocorrencia.autor.email}
                photoURL={ocorrencia.autor.fotoPerfil}
                latitude={ocorrencia.latitude}
                longitude={ocorrencia.longitude}
                tipoOcorrencia={ocorrencia.tipoDaOcorrencia}
              />
            ))}
        </section>
      </main>
    </FeedPageStyles>
  );
};
