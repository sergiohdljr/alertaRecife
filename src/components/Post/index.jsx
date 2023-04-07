import { useState } from "react";
import { PostStyle } from "./style";
import { useEffect } from "react";
import { apiKey } from "../../apikey";
import { Siren } from "@phosphor-icons/react";

export const Post = ({
  descricaoDaOcorrencia,
  latitude,
  longitude,
  photoURL,
  displayName,
  email,
  fotoOcorrencia,
  tipoOcorrencia,
}) => {
  const [localizacao, setLocalizacao] = useState();

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`)
      .then((res) => res.json())
      .then((loc) => setLocalizacao(loc.results));
  }, []);

  return (
    <PostStyle>
      <figure>
        <img src={photoURL} alt="perfil Usuário" />
      </figure>
      <div className="content">
        <div className="user-info">
          <div className="user">
            <h3>{displayName}</h3>
            <p>@{email.slice(0, email.indexOf("@"))}</p>
          </div>
          <div className="tipoOcorrencia">
            <Siren size={21} color="red" />
            <p>{tipoOcorrencia}</p>
          </div>
        </div>
        <article>
          <p>{descricaoDaOcorrencia}</p>
          <p className="localizacao">
            - aproximadamente em: {localizacao?.map((loc) => loc.formatted_address)[5]}
          </p>
        </article>
      </div>
    </PostStyle>
  );
};