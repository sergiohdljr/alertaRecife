import { ImagesSquare, MagnifyingGlass } from "@phosphor-icons/react";
import { Aside } from "../../components/aside";
import { FeedPageStyles } from "./style";
import { Post } from "../../components/Post";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schemaPost = z.object({
  ocorrencia: z.string().min(1, { message: "Descreva a ocorrência" }),
  ocorrenciaPhotoURL: z.any().optional()
});

export const FeedPage = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schemaPost) });

  const [img, setImagem] = useState("")

  const convertToURL = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagem(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    convertToURL(data.ocorrenciaPhotoURL[0])
    console.log(img && `URL DA PORRA DA IMAGEMMM ${img}`)
  };

  return (
    <FeedPageStyles>
      <Aside />
      <main>
        {errors.ocorrenciaPhotoURL ? console.log(errors?.ocorrenciaPhotoURL?.message): null}
        <header>
          {/* <form action="">
            <MagnifyingGlass size={16} />
            <input type="text" placeholder="Digite sua localização" />
          </form> */}
        </header>

        <form className="reportar-ocorrencia" onSubmit={handleSubmit(onSubmit)}>
          <figure>
            <img src={Usuario.photoURL} alt="" />
          </figure>
          <div className="text-area-icons">
            <textarea
              cols={"8"}
              rows={"50"}
              type="text"
              placeholder="Reporte uma ocorrêcia..."
              id="ocorrencia"
              {...register("ocorrencia")}
            />
            <div className="btns">
              <label htmlFor="ocorrenciaPhotoURL">
                <input
                  type="file"
                  accept="img/png, img/jpeg"
                  {...register("ocorrenciaPhotoURL")}
                  id="ocorrenciaPhotoURL"
                />
              </label>
              <button type="submit" className="alertar">
                alertar
              </button>
            </div>
          </div>
        </form>
        {errors ? <p>{errors?.ocorrencia?.message}</p> : null}
        <Post />
      </main>
    </FeedPageStyles>
  );
};
