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
            mmmmmmmmmmmmmmmmmmmmmmmmm
          </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15804.06306606104!2d-34.91990062371484!3d-7.9973081078483785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab177e12af268f%3A0xad8678e188b3a6f9!2sDois%20Unidos%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1679870738977!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </PostStyle>
  );
};
