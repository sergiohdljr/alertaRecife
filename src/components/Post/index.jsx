import { PostStyle } from "./style";

export const Post = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  return (
    <PostStyle>
      <figure>
        <img src={Usuario.photoURL} alt="perfil Usuário" />
      </figure>
      <div className="content">
        <div className="user-info">
          <h3>{Usuario.displayName}</h3>
          <p>{Usuario.email}</p>
        </div>
          <p> 
            mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkkkkkkkkkkkkkk
          </p>
      </div>
    </PostStyle>
  );
};
