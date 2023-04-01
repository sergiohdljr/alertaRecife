import { PostStyle } from "./style";

export const Post = ({descricaoDaOcorrencia,photoURL,displayName,email}) => {
  // const Usuario = JSON.parse(localStorage.getItem("user"));

  return (
    <PostStyle>
      <figure>
        <img src={photoURL} alt="perfil Usuário" />
      </figure>
      <div className="content">
        <div className="user-info">
          <h3>{displayName}</h3>
          <p>@{email.slice(0,email.indexOf("@"))}</p>
        </div>
        <p>
         {descricaoDaOcorrencia}
        </p>
      </div>
    </PostStyle>
  );
};
