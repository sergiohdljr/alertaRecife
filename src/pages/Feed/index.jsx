import { ImagesSquare, MagnifyingGlass } from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { FeedPageStyles } from "./style";
import { Post } from "../../components/Post";

export const FeedPage = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  return (
    <FeedPageStyles>
      <Aside />
      <main>
        <header>
          <form action="">
            <MagnifyingGlass size={16} />
            <input type="text" placeholder="Digite sua localização" />
          </form>
        </header>
        <div className="reportar-ocorrencia">
          <figure>
            <img src={Usuario.photoURL} alt="" />
          </figure>
          <div className="text-area-icons">
            <textarea
              name=""
              cols="8"
              rows="50"
              placeholder="Reporte uma ocorrência..."
            />
            <div className="btns">
              <button>
                <ImagesSquare size={20} color={"#8B3DFF"} />
              </button>
              <button className="alertar" disabled >alertar</button>
            </div>
          </div>
        </div>
        <Post />
      </main>
    </FeedPageStyles>
  );
};
