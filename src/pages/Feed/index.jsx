import { MagnifyingGlass } from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { FeedPageStyles } from "./style";
import { Post } from "../../components/post";
import { ReportarOcorrencia } from "../../components/reportarOcorrencia";
import { useState } from "react";
import { useEffect } from "react";

export const FeedPage = () => {

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
        </section>
      </main>
    </FeedPageStyles>
  );
};
