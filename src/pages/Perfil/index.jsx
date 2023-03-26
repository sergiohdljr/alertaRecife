import { ArrowLeft, CalendarBlank } from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { PerfilPageStyles } from "./style";
import { MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const PerfilPage = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"))

  return (
    <PerfilPageStyles>
      <Aside>
        {console.log(Usuario.User)}
      </Aside>
      <main>
        <nav>
          <Link to={"/feed"} rel="Voltar para o feed" type="button">
            <ArrowLeft size={24} />
          </Link>
          <h3>{Usuario.displayName}</h3>
        </nav>
        <div className="hero">
          <figure>
            <img src={Usuario.photoURL} alt="foto de perfil do usuário" />
          </figure>
          <button> Editar Perfil</button>
        </div>
        <div className="name-user-info">
          <h1>{Usuario.displayName}</h1>
          <p>@{Usuario.email.slice(0,Usuario.email.indexOf("@"))}</p>
        </div>
        <div className="location-createdAt">
          <div>
            <MapPin size={16} color={"#5B7083"} />
            <p>Local</p>
          </div>
          <div>
            <CalendarBlank size={16} color={"#5B7083"} />
            <p>{Usuario.createdAt}</p>
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
