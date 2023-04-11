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

  const pinLoc = async (endereco) => {
    const address = endereco;
    const results = await getGeocode({ address });

    const localizacao = await getLatLng(results[0]);

    return  localizacao
  };


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
            label: {
              text: "você",
            },
          }}
        />
      )}
      {ocorrenciasMapa &&
        ocorrenciasMapa.map(async (ocorrencia) => {
          const pos = await pinLoc(ocorrencia.enderecoOcorrencia)
        return(
          <Marker
            key={ocorrencia.id}
            position={{
              lat: pos.lat,
              lng: pos.lng
            }}
          />
        )})}
    </GoogleMap>
  ) : null;
};

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
          backgroundColor: "white",
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
      <div style={{ backgroundColor: "white", padding: "0.3rem" }}>
        {status === "OK" &&
          data.map(({ place_id, description }) => {
            return (
              <p
                style={{
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={(e) => onSelected(description)}
                key={place_id}
              >
                {description}
              </p>
            );
          })}
      </div>
    </div>
  );
};
