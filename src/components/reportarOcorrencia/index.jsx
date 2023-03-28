import { zodResolver } from "@hookform/resolvers/zod";
import { Images, PhoneOutgoing } from "@phosphor-icons/react";
import { useState } from "react";
import { useGeolocated } from "react-geolocated";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Erro, ReportarOcorrenciaStyle } from "./styles";

const schemaPost = z.object({
  ocorrencia: z.string().min(1, { message: "Descreva a ocorrência" }),
  ocorrenciaPhotoURL: z.any().optional(),
});

export const ReportarOcorrencia = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  const {register,handleSubmit,formState: { errors },reset} = useForm({ resolver: zodResolver(schemaPost) });
  const { coords } = useGeolocated();

  const onSubmit = (dadosFormulario) => {

    const date = new Date();

    const formDados = {
      usuario: Usuario,
      ocorrencia: dadosFormulario.ocorrencia,
      photoURL: dadosFormulario.ocorrenciaPhotoURL[0],
      createdAt: date,
      geoLoc: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    };
    console.log(formDados);
    reset();
  };

  return (
    <div>
      <ReportarOcorrenciaStyle onSubmit={handleSubmit(onSubmit)}>
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
                <Images size={20}/>
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

// const convertToURL = (file) => {
//   const reader = new FileReader();

//   reader.onloadend = () => {
//     setImagem(reader.result.toString());
//   };

//   reader.readAsDataURL(file);
// };
