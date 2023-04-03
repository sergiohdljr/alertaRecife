import { zodResolver } from "@hookform/resolvers/zod";
import { Images, PhoneOutgoing } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { useForm } from "react-hook-form";
import { Erro, ReportarOcorrenciaStyle } from "./styles";
import { schemaPost } from "./schemaDeValidacao";
import { api } from "../../service/axios";
// import { apiKey } from "../../apikey";

export const ReportarOcorrencia = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));

  const [img, setImg] = useState();

  // const convertToURL = (file) => {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImg(reader.result.toString());
  //   };
  //   reader.readAsDataURL(file);
  // };
  const [coords, setCoords] = useState({});

  useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schemaPost) });

  const onSubmit = async (dados) => {
    // convertToURL(dadosFormulario.ocorrenciaPhotoURL[0]);
    //  await axios
    //    .post(
    //      `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`
    //    )
    //    .then((loc) => setCoords(loc.data.location));
    // tipoDacorrencia: dadosFormulario.tipoOcorrencia,
        // descricaoDaOcorrencia: dadosFormulario.ocorrencia,
        // latitude:-7.9912631,
        // longitude:-34.9160838,
        // email: Usuario.email,
        // nome: Usuario.displayName,
        // fotoPerfil: Usuario.photoURL,

    await api.post("/ocorrencia", {
   descricaoDaOcorrencia: dados.ocorrencia,
   tipoDaOcorrencia: dados.tipoOcorrencia,
   latitude:-8.038048688095296,
   longitude:-34.906623453841064,
   email:Usuario.email,
   fotoPerfil:Usuario.photoURL,
   nome:Usuario.displayName
  }).then((resp) => console.log(resp.status));
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
            <div>
            <label htmlFor="ocorrenciaPhotoURL">
              <Images size={20} />
              <input
                type="file"
                accept="img/png, img/jpeg"
                {...register("ocorrenciaPhotoURL")}
                id="ocorrenciaPhotoURL"
              />
            </label>
               <select {...register("tipoOcorrencia")} id="tipoOcorrencia">
                 <option value="Assalto">Assalto</option>
                 <option value="Assedio">Assedio</option>
                 <option value="Violencia">Violencia</option>
                 <option value="Acidente">Acidente</option>
               </select>
            </div>
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
