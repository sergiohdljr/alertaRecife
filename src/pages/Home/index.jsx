import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import { apiKey } from "../../apikey";
import { Aside } from "../../components/Aside";
import { useQuery } from "react-query";
import { api } from "../../service/axios";
import { ModalOcorrencia } from "../../components/Modal";
import { UseSetModal } from "../../store";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { getLatLng } from "react-places-autocomplete";
import { useState } from "react";
import { PinterestLogo } from "@phosphor-icons/react";

export const Map = () => {
  const position = { lat: -8.05428, lng: -34.8813 };
  const modalState = UseSetModal((state) => state.modal);

  const [selected, setSelected] = useState();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  const fetchFeed = api
    .get("/ocorrencias")
    .then((ocorrencias) => ocorrencias.data);

  const { data: ocorrenciasMapa } = useQuery(
    ["ocorrenciasMapa"],
    async () => await fetchFeed
  );

  return isLoaded ? (
    <GoogleMap
      center={position}
      zoom={15}
      mapContainerStyle={{
        width: "100%",
        height: "100vh",
        display: "flex",
        gap: "3.5rem",
      }}
    >
      {modalState ? <ModalOcorrencia /> : null}
      <Aside />
      <PlacesAutoComplete setSelect={setSelected} />
      {selected && (
        <Marker
          position={selected}
          options={{
            title: "você",
            label:{
              text: "você"
            }
          }}
        />
      )}
      {ocorrenciasMapa &&
        ocorrenciasMapa.map((ocorrencia) => (
          <Marker
            key={ocorrencia.id}
            title={ocorrencia.descricaoDaOcorrencia}
            options={{
              label:{
                text: ocorrencia.descricaoDaOcorrencia
              }
            }}
            position={{
              lat: parseFloat(ocorrencia.latitude),
              lng: parseFloat(ocorrencia.longitude),
            }}
          />
        ))}
    </GoogleMap>
  ) : null;
};

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  fill="#fafafa"
  viewBox="0 0 256 256"
>
  <path d="Z"></path>
</svg>;

export const HomePage = () => {
  return <Map />;
};

const PlacesAutoComplete = ({ setSelect }) => {
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

    const address = endereco;
    const results = await getGeocode({ address });

    const { lat, lng } = await getLatLng(results[0]);

    setSelect({ lat, lng });
  };

  return (
    <div style={{ zIndex: 90 }}>
      <input
        type="text"
        placeholder="Digite sua localização"
        style={{
          backgroundColor:"white",
          color: "black",
          zIndex: 100,
          height: "40px",
          width: "200px",
          marginTop: "3.5rem",
          padding: "1rem",
        }}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
      />
      <div style={{ backgroundColor: "white" }}>
        {status === "OK" &&
          data.map(({ place_id, description }) => {
            return (
              <p onClick={(e) => onSelected(description)} key={place_id}>
                {description}
              </p>
            );
          })}
      </div>
    </div>
  );
};
