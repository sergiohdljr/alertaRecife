import { zodResolver } from "@hookform/resolvers/zod";
import { Images } from "@phosphor-icons/react";
import { useGeolocated } from "react-geolocated";
import { useForm } from "react-hook-form";
import { Erro,InputEndereco,ReportarOcorrenciaStyle,SuggestionsAutoComplete,} from "./styles";
import { schemaPost } from "./schemaDeValidacao";
import { api } from "../../service/axios";
import { UseSetModal } from "../../store";
import { useMutation, useQueryClient } from "react-query";
import { useJsApiLoader } from "@react-google-maps/api";
import { apiKey } from "../../apikey";
import usePlacesAutocomplete from "use-places-autocomplete";

export const ReportarOcorrencia = () => {
  const Usuario = JSON.parse(localStorage.getItem("user"));
  const { coords } = useGeolocated();
  const closeModal = UseSetModal((state) => state.closeModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schemaPost) });

  const postOcorrencia = async (dados) =>
    await api
      .post("/ocorrencia", {
        descricaoDaOcorrencia: dados.ocorrencia,
        tipoDaOcorrencia: dados.tipoOcorrencia,
        enderecoOcorrencia: value,
        email: Usuario.email,
        nome: Usuario.displayName,
        fotoPerfil: Usuario.photoURL,
      })
      .then((resp) => {
        if (resp.status === 200) {
          closeModal();
          console.log(resp.status);
          reset();
        }
      });

  const client = useQueryClient();

  const postOcorrenciaMutate = useMutation({
    mutationFn: (dados) => postOcorrencia(dados),
    onSuccess: () => {
      location.reload();
    },
  });

  const onSubmit = async (dados) => {
    postOcorrenciaMutate.mutate(dados);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const onSelected = async (endereco) => {
    setValue(endereco, false);
    clearSuggestions();
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
          {isLoaded ? (
            <div>
              <InputEndereco
                placeholder={ready ? "Digite o endereço" : "carrengando..."}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                value={value}
              />
              <SuggestionsAutoComplete>
                {status === "OK" &&
                  data.map(({ place_id, description }) => {
                    return (
                      <p
                        style={{
                          fontSize: "0.8rem",
                          height: "2rem",
                          display: "flex",
                          alignItems: "center",
                          zIndex: "9999",
                          padding: "0.2rem",
                        }}
                        onClick={(e) => onSelected(description)}
                        key={place_id}
                      >
                        {description}
                      </p>
                    );
                  })}
              </SuggestionsAutoComplete>
            </div>
          ) : null}
          <div className="btns">
            <div>
              <label htmlFor="ocorrenciaPhotoURL">
                <Images size={20} />
                <input
                  type="file"
                  accept="img/png, img/jpeg"
                  {...register("ocorrenciaPhotoURL")}
                  id="ocorrenciaPhotoURL"
                  disabled
                />
              </label>
              <select {...register("tipoOcorrencia")} id="tipoOcorrencia">
                <option value="Assalto">Assalto</option>
                <option value="Assedio">Assedio</option>
                <option value="Violencia">Violencia</option>
                <option value="Acidente">Transito</option>
              </select>
            </div>
            <button className="alertar" type="submit">
              {postOcorrenciaMutate.isLoading ? "alertando..." : "alertar"}
            </button>
          </div>
        </div>
      </ReportarOcorrenciaStyle>
      {errors.ocorrencia ? <Erro>{errors.ocorrencia.message}!</Erro> : null}
    </div>
  );
};
