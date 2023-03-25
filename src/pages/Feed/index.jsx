import {
  ImageSquare,
  ImagesSquare,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { FeedPageStyles } from "./style";
import profile from "../../assets/Profile Picture.png";
import { Post } from "../../components/Post";

export const FeedPage = () => {
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
            <img src={profile} alt="" />
          </figure>
          <div className="text-area-icons">
            <textarea
              name=""
              cols="8"
              rows="7"
              placeholder="Reporte uma ocorrência..."
            />
            <div className="btns">
              <button>
                <ImagesSquare size={20} color={"#8B3DFF"} />
              </button>
              <button className="alertar">alertar</button>
            </div>
          </div>
        </div>
        <Post/>
      </main>
    </FeedPageStyles>
  );
};
