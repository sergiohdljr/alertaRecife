import { ImagesSquare, MagnifyingGlass } from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { FeedPageStyles } from "./style";
import { Post } from "../../components/post";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ReportarOcorrencia } from "../../components/reportarOcorrencia";

export const FeedPage = () => {
  return (
    <FeedPageStyles>
      <Aside />
      <main>
        <header>
          {/* <form action="">
            <MagnifyingGlass size={16} />
            <input type="text" placeholder="Digite sua localização" />
          </form> */}
        </header>
        <ReportarOcorrencia/>
        <Post />
      </main>
    </FeedPageStyles>
  );
};
