import { zodResolver } from "@hookform/resolvers/zod";
import { Images, PhoneOutgoing } from "@phosphor-icons/react";
import { useState } from "react";
import { useGeolocated } from "react-geolocated";
import { useForm } from "react-hook-form";
import { Erro, ReportarOcorrenciaStyle } from "./styles";
import { schemaPost } from "./schemaDeValidacao";
import { api } from "../../service/axios";

export const ReportarOcorrencia = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  const [img, setImg] = useState();

  const convertToURL = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schemaPost) });

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
  });

  const onSubmit = async (dadosFormulario) => {
    convertToURL(dadosFormulario.ocorrenciaPhotoURL[0]);

    const postOcorrencia = await api
      .post("/ocorrencia", {
        descricaoDaOcorrencia: dadosFormulario.ocorrencia,
        latitude: coords.latitude,
        longitude: coords.longitude,
        email: Usuario.email,
        nome: Usuario.displayName,
        fotoPerfil: Usuario.photoURL,
      })
      .then((resp) => console.log(resp.status));
  };

  return (
    <div>
      <ReportarOcorrenciaStyle onSubmit={handleSubmit(onSubmit)}>
        <h2>{img}</h2>
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
              <Images size={20} />
              <input
                type="file"
                accept="img/png, img/jpeg"
                {...register("ocorrenciaPhotoURL")}
                id="ocorrenciaPhotoURL"
              />
            </label>
            <button className="alertar" type="submit">
              alertar
            </button>
          </div>
        </div>
      </ReportarOcorrenciaStyle>
      {errors.ocorrencia ? <Erro>{errors.ocorrencia.message}!</Erro> : null}
    </div>
  );
};
