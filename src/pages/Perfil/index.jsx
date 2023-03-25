import { ArrowLeft, CalendarBlank } from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { PerfilPageStyles } from "./style";
import perfil from "../../assets/Profile Picture.png";
import { MapPin } from "@phosphor-icons/react";

export const PerfilPage = () => {
  return (
    <PerfilPageStyles>
      <Aside></Aside>
      <main>
        <nav>
          <button>
            <ArrowLeft size={24} />
          </button>
          <h3>Name</h3>
        </nav>
        <div className="hero">
          <figure>
            <img src={perfil} alt="" />
          </figure>
          <button> Editar Perfil</button>
        </div>
        <div className="name-user-info">
          <h1>Name</h1>
          <p>@userName</p>
        </div>
        <div className="location-createdAt">
          <div>
            <MapPin size={16} color={"#5B7083"} />
            <p>Local</p>
          </div>
          <div>
            <CalendarBlank size={16} color={"#5B7083"} />
            <p>created at 2023</p>
          </div>
        </div>
        <section>
          <h3>Ocorrencias</h3>
        </section>
        <div className="posts"></div>
      </main>
    </PerfilPageStyles>
  );
};
