import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { apiKey } from "../../apikey";
import { Aside } from "../../components/Aside";
import { useQuery } from "react-query";
import { api } from "../../service/axios";
import { InputGoogle } from "./style";
import { ModalOcorrencia } from "../../components/Modal";
import { UseSetModal } from "../../store";

export const Map = () => {
  const position = { lat: -8.05428, lng: -34.8813 };
  const modalState = UseSetModal((state) => state.modal);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
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
      zoom={12}
      mapContainerStyle={{
        width: "100%",
        height: "100vh",
        display: "flex",
        gap: "3.5rem",
      }}
    >
      {modalState ? <ModalOcorrencia /> : null}
      <Aside />
      <InputGoogle type="text" />

      {ocorrenciasMapa &&
        ocorrenciasMapa.map((ocorrencia) => (
          <Marker
            key={ocorrencia.id}
            position={{
              lat: parseFloat(ocorrencia.latitude),
              lng: parseFloat(ocorrencia.longitude),
            }}
          />
        ))}
    </GoogleMap>
  ) : null;
};

export const HomePage = () => {
  return <Map />;
};
