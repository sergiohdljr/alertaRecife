import { useState } from "react";
import { PostStyle } from "./style";
import { useEffect } from "react";

export const Post = ({
  descricaoDaOcorrencia,
  latitude,
  longitude,
  photoURL,
  displayName,
  email,
  fotoOcorrencia
}) => {
  
  const [localizacao, setLocalizacao] = useState()

  useEffect(()=>{
     fetch(
       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDlQ8gDpjz2LoNoR_KkJBgaJMiTY8XRO4c`
     )
       .then((res) => res.json())
       .then((loc) => setLocalizacao(loc.results));
  },[])

  return (
    <PostStyle>
      <figure>
        <img src={photoURL} alt="perfil Usuário" />
      </figure>
      <div className="content">
        <div className="user-info">
          <h3>{displayName}</h3>
          <p>@{email.slice(0, email.indexOf("@"))}</p>
        </div>
        <article>
          <p>{descricaoDaOcorrencia}</p>
          <p className="localizacao">
            - aproximadamente em: {localizacao?.map((loc) => loc.formatted_address)[4]}
          </p>
          <img src={fotoOcorrencia} alt="ocorrencia" />
        </article>
      </div>
    </PostStyle>
  );
};
